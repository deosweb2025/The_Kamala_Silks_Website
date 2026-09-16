import { useState, useRef, useEffect, useCallback } from 'react';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Maximize2, 
  Minimize2,
  Search
} from 'lucide-react';

const FlexibleImageViewer = ({ src, alt = "Saree Inspection", className = "" }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHint, setShowHint] = useState(true);

  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const initialPosRef = useRef({ x: 0, y: 0 });

  // Touch gesture state tracking for mobile pinch & pan
  const touchStateRef = useRef({
    startDistance: 0,
    startScale: 1,
    startX: 0,
    startY: 0,
    initialPosX: 0,
    initialPosY: 0,
    isPinching: false,
    isPanning: false,
    lastTapTime: 0,
  });

  // Auto-hide hint badge after 4.5s
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  // Reset zoom & position whenever the image source changes
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
  }, [src]);

  // Keyboard zoom controls (+, -, 0, Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        setScale((prev) => Math.min(Number((prev + 0.5).toFixed(1)), 4));
      } else if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        setScale((prev) => {
          const next = Math.max(Number((prev - 0.5).toFixed(1)), 1);
          if (next === 1) setPosition({ x: 0, y: 0 });
          return next;
        });
      } else if (e.key === '0' || e.key === 'r') {
        setScale(1);
        setPosition({ x: 0, y: 0 });
      } else if (e.key === 'Escape' && isFullscreen) {
        e.stopPropagation();
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  // Prevent browser viewport pinch-zoom / pull-to-refresh on mobile when interacting
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleNativeTouchMove = (e) => {
      if (e.touches.length > 1 || scale > 1) {
        if (e.cancelable) {
          e.preventDefault();
        }
      }
    };

    container.addEventListener('touchmove', handleNativeTouchMove, { passive: false });
    return () => {
      container.removeEventListener('touchmove', handleNativeTouchMove);
    };
  }, [scale]);

  // Strict clamp pan position within boundaries based on rendered image layout dimensions
  const clampPosition = useCallback((x, y, currentScale) => {
    if (!containerRef.current || currentScale <= 1) {
      return { x: 0, y: 0 };
    }
    const containerRect = containerRef.current.getBoundingClientRect();
    const imgEl = imgRef.current;

    // Use unscaled DOM layout dimensions of the image
    const imgW = imgEl?.offsetWidth || (containerRect.width * 0.8);
    const imgH = imgEl?.offsetHeight || (containerRect.height * 0.85);

    const scaledW = imgW * currentScale;
    const scaledH = imgH * currentScale;

    // Only allow horizontal panning if scaled image is wider than container
    let maxPanX = 0;
    if (scaledW > containerRect.width) {
      maxPanX = (scaledW - containerRect.width) / 2;
    }

    // Only allow vertical panning if scaled image is taller than container
    let maxPanY = 0;
    if (scaledH > containerRect.height) {
      maxPanY = (scaledH - containerRect.height) / 2;
    }

    return {
      x: Math.max(-maxPanX, Math.min(maxPanX, x)),
      y: Math.max(-maxPanY, Math.min(maxPanY, y)),
    };
  }, []);

  // Re-clamp on window resize or orientation change
  useEffect(() => {
    const handleResize = () => {
      if (scale > 1) {
        setPosition((pos) => clampPosition(pos.x, pos.y, scale));
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [scale, clampPosition]);

  // Zoom handlers
  const handleZoomIn = () => {
    setShowHint(false);
    setScale((prev) => Math.min(Number((prev + 0.5).toFixed(1)), 4));
  };

  const handleZoomOut = () => {
    setShowHint(false);
    setScale((prev) => {
      const next = Math.max(Number((prev - 0.5).toFixed(1)), 1);
      if (next === 1) {
        setPosition({ x: 0, y: 0 });
      } else {
        setPosition((pos) => clampPosition(pos.x, pos.y, next));
      }
      return next;
    });
  };

  const handleReset = () => {
    setShowHint(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Double click / Double tap to quickly zoom in to 2.5x or reset
  const handleDoubleClick = (e) => {
    setShowHint(false);
    if (scale > 1) {
      handleReset();
    } else {
      if (!containerRef.current) {
        setScale(2.5);
        return;
      }
      const rect = containerRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left - rect.width / 2;
      const clickY = e.clientY - rect.top - rect.height / 2;
      const targetScale = 2.5;

      const targetX = -clickX * 0.75;
      const targetY = -clickY * 0.75;

      setScale(targetScale);
      setPosition(clampPosition(targetX, targetY, targetScale));
    }
  };

  // Desktop Mouse wheel zoom
  const handleWheel = (e) => {
    e.preventDefault();
    setShowHint(false);
    const delta = e.deltaY * -0.002;
    setScale((prev) => {
      const next = Math.min(Math.max(Number((prev + delta).toFixed(2)), 1), 4);
      if (next === 1) {
        setPosition({ x: 0, y: 0 });
      } else {
        setPosition((pos) => clampPosition(pos.x, pos.y, next));
      }
      return next;
    });
  };

  // Desktop Mouse drag for panning across zoomed saree
  const handleMouseDown = (e) => {
    if (e.button !== 0 || scale <= 1) return;
    setShowHint(false);
    setIsDragging(true);

    dragStartRef.current = { x: e.clientX, y: e.clientY };
    initialPosRef.current = { x: position.x, y: position.y };
  };

  const handleMouseMove = (e) => {
    if (!isDragging || scale <= 1) return;

    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;

    const newX = initialPosRef.current.x + deltaX;
    const newY = initialPosRef.current.y + deltaY;

    setPosition(clampPosition(newX, newY, scale));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Mobile Touch Gestures: Pinch-to-zoom & Smooth 1-finger Pan
  const handleTouchStart = (e) => {
    setShowHint(false);

    if (e.touches.length === 2) {
      // Two-finger pinch gesture
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchStateRef.current.isPinching = true;
      touchStateRef.current.isPanning = false;
      touchStateRef.current.startDistance = dist;
      touchStateRef.current.startScale = scale;
      setIsDragging(true);
    } else if (e.touches.length === 1) {
      // Check for double-tap on mobile
      const now = Date.now();
      if (now - touchStateRef.current.lastTapTime < 300) {
        if (scale > 1) {
          handleReset();
        } else {
          const rect = containerRef.current?.getBoundingClientRect();
          if (rect) {
            const tapX = e.touches[0].clientX - rect.left - rect.width / 2;
            const tapY = e.touches[0].clientY - rect.top - rect.height / 2;
            const targetScale = 2.5;
            setScale(targetScale);
            setPosition(clampPosition(-tapX * 0.75, -tapY * 0.75, targetScale));
          } else {
            setScale(2.5);
          }
        }
        touchStateRef.current.lastTapTime = 0;
        return;
      }
      touchStateRef.current.lastTapTime = now;

      // If already zoomed in, enable smooth 1-finger panning
      if (scale > 1) {
        touchStateRef.current.isPanning = true;
        touchStateRef.current.isPinching = false;
        touchStateRef.current.startX = e.touches[0].clientX;
        touchStateRef.current.startY = e.touches[0].clientY;
        touchStateRef.current.initialPosX = position.x;
        touchStateRef.current.initialPosY = position.y;
        setIsDragging(true);
      }
    }
  };

  const handleTouchMove = (e) => {
    if (touchStateRef.current.isPinching && e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      if (touchStateRef.current.startDistance > 0) {
        const factor = dist / touchStateRef.current.startDistance;
        const newScale = Math.min(
          Math.max(Number((touchStateRef.current.startScale * factor).toFixed(2)), 1),
          4
        );
        setScale(newScale);
        if (newScale === 1) {
          setPosition({ x: 0, y: 0 });
        } else {
          setPosition((pos) => clampPosition(pos.x, pos.y, newScale));
        }
      }
    } else if (touchStateRef.current.isPanning && e.touches.length === 1 && scale > 1) {
      const deltaX = e.touches[0].clientX - touchStateRef.current.startX;
      const deltaY = e.touches[0].clientY - touchStateRef.current.startY;
      const newX = touchStateRef.current.initialPosX + deltaX;
      const newY = touchStateRef.current.initialPosY + deltaY;
      setPosition(clampPosition(newX, newY, scale));
    }
  };

  const handleTouchEnd = (e) => {
    if (e.touches.length === 0) {
      setIsDragging(false);
      touchStateRef.current.isPinching = false;
      touchStateRef.current.isPanning = false;
      touchStateRef.current.startDistance = 0;
    } else if (e.touches.length === 1 && scale > 1) {
      // Seamlessly transition from 2-finger pinch to 1-finger pan with remaining finger
      touchStateRef.current.isPinching = false;
      touchStateRef.current.isPanning = true;
      touchStateRef.current.startX = e.touches[0].clientX;
      touchStateRef.current.startY = e.touches[0].clientY;
      touchStateRef.current.initialPosX = position.x;
      touchStateRef.current.initialPosY = position.y;
    }
  };

  const viewerContent = (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      onDoubleClick={handleDoubleClick}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      className={`relative w-full h-full overflow-hidden select-none bg-neutral-950 flex items-center justify-center ${
        isDragging
          ? 'cursor-grabbing'
          : scale > 1
          ? 'cursor-grab'
          : 'cursor-zoom-in'
      }`}
      style={{ touchAction: scale > 1 ? 'none' : 'pan-y' }}
    >
      {/* Background ambient subtle weave texture */}
      <div
        className="absolute inset-0 opacity-10 bg-repeat pointer-events-none"
        style={{ backgroundImage: 'url("/images/texture.webp")' }}
      />

      {/* Saree Image Container with precision center-scaling */}
      <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4 select-none pointer-events-none">
        <div
          className="relative flex items-center justify-center select-none will-change-transform"
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0px) scale(${scale})`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
        >
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            draggable={false}
            className="max-h-[310px] sm:max-h-[380px] md:max-h-[500px] max-w-[90%] sm:max-w-[92%] w-auto object-contain select-none pointer-events-none drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Floating Zoom & Pan Guidance */}
      {showHint && (
        <div 
          onClick={() => setShowHint(false)}
          className="absolute top-3 left-4 right-14 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 z-30 flex items-center justify-center gap-1.5 bg-accent/95 hover:bg-accent text-white text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-xl cursor-pointer transition-all border border-white/20 text-center select-none"
        >
          <Search className="w-3.5 h-3.5 shrink-0 text-amber-300" />
          <span className="truncate">Double-tap or pinch to zoom • Drag to inspect</span>
        </div>
      )}

      {/* Bottom Floating Zoom Toolbar */}
      <div 
        className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 sm:gap-2 bg-neutral-900/90 hover:bg-neutral-900/95 backdrop-blur-md px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 shadow-2xl transition-all select-none"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {/* Zoom Out */}
        <button
          onClick={handleZoomOut}
          disabled={scale <= 1}
          title="Zoom Out (-)"
          className={`p-1.5 sm:p-2 rounded-full transition-all touch-manipulation ${
            scale <= 1 
              ? 'text-white/30 cursor-not-allowed' 
              : 'text-white hover:bg-white/20 active:scale-90 cursor-pointer'
          }`}
          aria-label="Zoom out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        {/* Zoom Level Indicator (click to toggle 100% / 200%) */}
        <button
          onClick={scale > 1 ? handleReset : handleZoomIn}
          className="px-2 sm:px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold transition-colors min-w-[50px] sm:min-w-[56px] text-center touch-manipulation cursor-pointer"
          title={scale > 1 ? "Click to reset to 100%" : "Click to zoom in"}
        >
          {Math.round(scale * 100)}%
        </button>

        {/* Zoom In */}
        <button
          onClick={handleZoomIn}
          disabled={scale >= 4}
          title="Zoom In (+)"
          className={`p-1.5 sm:p-2 rounded-full transition-all touch-manipulation ${
            scale >= 4 
              ? 'text-white/30 cursor-not-allowed' 
              : 'text-white hover:bg-white/20 active:scale-90 cursor-pointer'
          }`}
          aria-label="Zoom in"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        <div className="w-[1px] h-4 bg-white/20 mx-0.5" />

        {/* Reset */}
        <button
          onClick={handleReset}
          disabled={scale === 1 && position.x === 0 && position.y === 0}
          title="Reset zoom"
          className={`p-1.5 sm:p-2 rounded-full transition-all touch-manipulation ${
            scale === 1 && position.x === 0 && position.y === 0
              ? 'text-white/30 cursor-not-allowed'
              : 'text-white hover:bg-white/20 active:scale-90 cursor-pointer'
          }`}
          aria-label="Reset zoom"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Saree Inspection"}
          className="p-1.5 sm:p-2 text-white hover:bg-white/20 rounded-full transition-all active:scale-90 touch-manipulation cursor-pointer"
          aria-label="Toggle fullscreen"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4 text-amber-400" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-[100] bg-neutral-950 flex flex-col items-center justify-center">
        {viewerContent}
        <button
          onClick={() => setIsFullscreen(false)}
          className="absolute top-4 right-4 z-50 px-4 py-2 bg-neutral-900/80 hover:bg-neutral-800 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30 shadow-2xl transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer touch-manipulation"
        >
          <Minimize2 className="w-4 h-4 text-amber-400" /> Close Fullscreen
        </button>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full min-h-[320px] sm:min-h-[380px] md:min-h-[500px] ${className}`}>
      {viewerContent}
    </div>
  );
};

export default FlexibleImageViewer;
