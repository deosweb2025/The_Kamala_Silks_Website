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
  const dragStartRef = useRef({ x: 0, y: 0 });
  const initialPosRef = useRef({ x: 0, y: 0 });
  const touchDistanceRef = useRef(null);

  // Auto-hide hint badge after 4.5s
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 4500);
    return () => clearTimeout(timer);
  }, []);

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

  // Clamp pan position within boundaries based on container size and scale
  const clampPosition = useCallback((x, y, currentScale) => {
    if (!containerRef.current || currentScale <= 1) return { x: 0, y: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    const maxPanX = (rect.width * (currentScale - 1)) / 2 + 40;
    const maxPanY = (rect.height * (currentScale - 1)) / 2 + 40;
    return {
      x: Math.max(-maxPanX, Math.min(maxPanX, x)),
      y: Math.max(-maxPanY, Math.min(maxPanY, y)),
    };
  }, []);

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

  // Double click / Double tap to quickly zoom in or reset
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

      // Pan smoothly toward the clicked detail area
      const targetX = -clickX * 0.75;
      const targetY = -clickY * 0.75;

      setScale(targetScale);
      setPosition(clampPosition(targetX, targetY, targetScale));
    }
  };

  // Mouse wheel zoom
  const handleWheel = (e) => {
    e.preventDefault();
    setShowHint(false);
    const delta = e.deltaY * -0.0025;
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

  // Pointer drag for panning across zoomed saree
  const handlePointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    setShowHint(false);
    setIsDragging(true);

    dragStartRef.current = { x: e.clientX, y: e.clientY };
    initialPosRef.current = { x: position.x, y: position.y };

    if (e.currentTarget.setPointerCapture) {
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;

    const newX = initialPosRef.current.x + deltaX;
    const newY = initialPosRef.current.y + deltaY;

    setPosition(clampPosition(newX, newY, scale));
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    if (e.currentTarget.releasePointerCapture && e.pointerId) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
  };

  // Mobile pinch-to-zoom support
  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchDistanceRef.current = dist;
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && touchDistanceRef.current !== null) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = dist / touchDistanceRef.current;
      setScale((prev) => {
        const next = Math.min(Math.max(Number((prev * factor).toFixed(2)), 1), 4);
        if (next === 1) setPosition({ x: 0, y: 0 });
        return next;
      });
      touchDistanceRef.current = dist;
    }
  };

  const handleTouchEnd = () => {
    touchDistanceRef.current = null;
  };

  const viewerContent = (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      onDoubleClick={handleDoubleClick}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative w-full h-full overflow-hidden select-none bg-neutral-950 flex items-center justify-center ${
        isDragging
          ? 'cursor-grabbing'
          : scale > 1
          ? 'cursor-grab'
          : 'cursor-zoom-in'
      }`}
      style={{ touchAction: 'none' }}
    >
      {/* Background ambient texture */}
      <div
        className="absolute inset-0 opacity-15 bg-repeat pointer-events-none"
        style={{ backgroundImage: 'url("/images/texture.webp")' }}
      />

      {/* Saree Image Container */}
      <div
        className="relative flex items-center justify-center max-w-[92%] max-h-[92%] select-none will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0px) scale(${scale})`,
          transition: isDragging ? 'none' : 'transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="max-h-[300px] sm:max-h-[420px] md:max-h-[520px] w-auto object-contain rounded-xl select-none pointer-events-none shadow-2xl border border-white/10"
        />
      </div>

      {/* Floating Zoom & Pan Guidance */}
      {showHint && (
        <div 
          onClick={() => setShowHint(false)}
          className="absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-accent/95 hover:bg-accent text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-xl cursor-pointer transition-all whitespace-nowrap border border-white/20"
        >
          <Search className="w-3.5 h-3.5 shrink-0" />
          <span>Double-click or pinch to zoom • Drag to pan</span>
        </div>
      )}

      {/* Bottom Floating Zoom Toolbar */}
      <div 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 sm:gap-2 bg-black/85 hover:bg-black/95 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 shadow-2xl transition-all select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Zoom Out */}
        <button
          onClick={handleZoomOut}
          disabled={scale <= 1}
          title="Zoom Out (-)"
          className={`p-1.5 rounded-full transition-all ${
            scale <= 1 
              ? 'text-white/30 cursor-not-allowed' 
              : 'text-white hover:bg-white/20 active:scale-95'
          }`}
          aria-label="Zoom out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        {/* Zoom Level Indicator (click to toggle 100% / 200%) */}
        <button
          onClick={scale > 1 ? handleReset : handleZoomIn}
          className="px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold transition-colors min-w-[56px] text-center"
          title={scale > 1 ? "Click to reset to 100%" : "Click to zoom in"}
        >
          {Math.round(scale * 100)}%
        </button>

        {/* Zoom In */}
        <button
          onClick={handleZoomIn}
          disabled={scale >= 4}
          title="Zoom In (+)"
          className={`p-1.5 rounded-full transition-all ${
            scale >= 4 
              ? 'text-white/30 cursor-not-allowed' 
              : 'text-white hover:bg-white/20 active:scale-95'
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
          title="Reset to 100%"
          className={`p-1.5 rounded-full transition-all ${
            scale === 1 && position.x === 0 && position.y === 0
              ? 'text-white/30 cursor-not-allowed'
              : 'text-white hover:bg-white/20 active:scale-95'
          }`}
          aria-label="Reset zoom"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Inspection"}
          className="p-1.5 text-white hover:bg-white/20 rounded-full transition-all active:scale-95"
          aria-label="Toggle fullscreen"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center">
        {viewerContent}
        <button
          onClick={() => setIsFullscreen(false)}
          className="absolute top-4 right-4 z-50 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/40 shadow-lg transition-all flex items-center gap-1.5"
        >
          <Minimize2 className="w-3.5 h-3.5" /> Close Fullscreen
        </button>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full min-h-[290px] sm:min-h-[350px] md:min-h-[500px] ${className}`}>
      {viewerContent}
    </div>
  );
};

export default FlexibleImageViewer;
