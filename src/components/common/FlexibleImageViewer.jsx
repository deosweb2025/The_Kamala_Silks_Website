import { useState, useRef, useEffect } from 'react';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Maximize2, 
  Minimize2, 
  Rotate3d, 
  Play, 
  Pause,
  Compass
} from 'lucide-react';

const FlexibleImageViewer = ({ src, alt = "Saree Inspection", className = "" }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotateY, setRotateY] = useState(0); // -180 to 180 deg
  const [rotateX, setRotateX] = useState(0); // -45 to 45 deg
  const [rotateZ, setRotateZ] = useState(0); // 0, 90, 180, 270 deg
  const [mode, setMode] = useState('rotate'); // 'rotate' (180 3D angle) or 'pan' (2D position)
  const [isDragging, setIsDragging] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);

  // Drag tracking refs
  const dragStartRef = useRef({ x: 0, y: 0 });
  const initialRotateRef = useRef({ y: 0, x: 0 });
  const initialPosRef = useRef({ x: 0, y: 0 });
  const autoPlayDirectionRef = useRef(1);
  const autoPlayAnimRef = useRef(null);

  // Auto-hide hint badge after 4.5s
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  // Escape key handler for fullscreen inspection
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isFullscreen) {
        e.stopPropagation();
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  // Auto 180 degree continuous angle sweep
  useEffect(() => {
    if (!isAutoPlaying) {
      if (autoPlayAnimRef.current) cancelAnimationFrame(autoPlayAnimRef.current);
      return;
    }

    let currentY = rotateY;
    let direction = autoPlayDirectionRef.current;

    const step = () => {
      currentY += direction * 0.45;
      if (currentY >= 180) {
        currentY = 180;
        direction = -1;
        autoPlayDirectionRef.current = -1;
      } else if (currentY <= -180) {
        currentY = -180;
        direction = 1;
        autoPlayDirectionRef.current = 1;
      }
      setRotateY(currentY);
      autoPlayAnimRef.current = requestAnimationFrame(step);
    };

    autoPlayAnimRef.current = requestAnimationFrame(step);

    return () => {
      if (autoPlayAnimRef.current) cancelAnimationFrame(autoPlayAnimRef.current);
    };
  }, [isAutoPlaying, rotateY]);

  // Zoom handlers
  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.4, 3.5));
  const handleZoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - 0.4, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  // Reset to default
  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setRotateY(0);
    setRotateX(0);
    setRotateZ(0);
    setIsAutoPlaying(false);
  };

  // Turn to exact 180 degree angle
  const handleSetAngle180 = () => {
    setIsAutoPlaying(false);
    setRotateY((prev) => (Math.abs(prev - 180) < 5 ? 0 : 180));
  };

  // Turn 90 degrees
  const handleRotateZ90 = () => {
    setRotateZ((prev) => (prev + 90) % 360);
  };

  // Set specific angle preset
  const handleSetPreset = (targetY) => {
    setIsAutoPlaying(false);
    setRotateY(targetY);
    setRotateX(0);
  };

  // Pointer drag for 180 degree 3D movement or pan
  const handlePointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    setIsAutoPlaying(false);
    setIsDragging(true);

    dragStartRef.current = { x: e.clientX, y: e.clientY };
    initialRotateRef.current = { y: rotateY, x: rotateX };
    initialPosRef.current = { x: position.x, y: position.y };

    if (e.currentTarget.setPointerCapture) {
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;

    if (mode === 'rotate') {
      // 180 degree 3D rotation sensitivity
      // Horizontal drag smoothly rotates Y axis from -180 deg to +180 deg
      const newRotateY = initialRotateRef.current.y + deltaX * 0.75;
      const clampedY = Math.max(-180, Math.min(180, newRotateY));

      // Vertical drag subtly tilts X axis
      const newRotateX = initialRotateRef.current.x - deltaY * 0.35;
      const clampedX = Math.max(-40, Math.min(40, newRotateX));

      setRotateY(clampedY);
      setRotateX(clampedX);
    } else {
      // 2D Pan mode
      const newX = initialPosRef.current.x + deltaX;
      const newY = initialPosRef.current.y + deltaY;
      const limit = 300 * scale;
      setPosition({
        x: Math.max(-limit, Math.min(limit, newX)),
        y: Math.max(-limit, Math.min(limit, newY)),
      });
    }
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

  // Mouse wheel zoom
  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.002;
    setScale((prev) => Math.min(Math.max(prev + delta, 1), 3.5));
  };

  // Calculate dynamic 3D lighting sheen based on current angle
  const sheenOpacity = Math.min(Math.abs(rotateY) / 180, 0.45);
  const sheenAngle = 90 + rotateY * 0.7;

  const viewerContent = (
    <div
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`relative w-full h-full overflow-hidden select-none bg-neutral-950 flex items-center justify-center ${
        isDragging ? 'cursor-grabbing' : mode === 'rotate' ? 'cursor-ew-resize' : 'cursor-grab'
      }`}
      style={{
        touchAction: 'none',
        perspective: 1200,
      }}
    >
      {/* Background ambient texture */}
      <div
        className="absolute inset-0 opacity-15 bg-repeat pointer-events-none"
        style={{ backgroundImage: 'url("/images/texture.webp")' }}
      />

      {/* 3D Rotating Saree Container */}
      <div
        className="relative flex items-center justify-center max-w-[90%] max-h-[90%] select-none will-change-transform"
        style={{
          transform: `
            translate3d(${position.x}px, ${position.y}px, 0px)
            scale(${scale})
            rotateY(${rotateY}deg)
            rotateX(${rotateX}deg)
            rotateZ(${rotateZ}deg)
          `,
          transformStyle: 'preserve-3d',
          transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
          boxShadow: `${-rotateY * 0.2}px 25px 50px rgba(0,0,0,0.5)`,
        }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="max-h-[300px] sm:max-h-[420px] md:max-h-[500px] w-auto object-contain rounded-xl select-none pointer-events-none shadow-2xl border border-white/10"
        />

        {/* Dynamic 3D Silk Light & Sheen Effect across 180 degrees */}
        <div
          className="absolute inset-0 rounded-xl pointer-events-none transition-opacity"
          style={{
            background: `linear-gradient(${sheenAngle}deg, rgba(255,255,255,${sheenOpacity}) 0%, transparent 45%, rgba(0,0,0,${sheenOpacity * 0.7}) 100%)`,
          }}
        />
      </div>

      {/* Top Floating Controls HUD (right-14 on mobile to prevent collision with modal close button) */}
      <div 
        className="absolute top-3 right-14 sm:right-3.5 z-30 flex items-center gap-1 sm:gap-1.5 bg-black/75 hover:bg-black/85 backdrop-blur-md px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full border border-white/20 shadow-xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mode Toggle: 3D 180° Angle vs 2D Pan */}
        <button
          onClick={() => setMode(mode === 'rotate' ? 'pan' : 'rotate')}
          title={mode === 'rotate' ? "Switch to Pan/Move Mode" : "Switch to 180° 3D Angle Mode"}
          className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold transition-all ${
            mode === 'rotate' 
              ? 'bg-amber-500 text-black shadow-md' 
              : 'bg-white/20 text-white hover:bg-white/30'
          }`}
        >
          <Rotate3d className="w-3.5 h-3.5" />
          <span>{mode === 'rotate' ? "180° Angle" : "Pan Mode"}</span>
        </button>

        <div className="w-[1px] h-3.5 bg-white/20 mx-0.5" />

        <button
          onClick={handleZoomIn}
          title="Zoom In"
          className="p-1 sm:p-1.5 text-white/90 hover:text-white hover:bg-white/20 rounded-full transition-colors"
        >
          <ZoomIn className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={handleZoomOut}
          title="Zoom Out"
          className="p-1 sm:p-1.5 text-white/90 hover:text-white hover:bg-white/20 rounded-full transition-colors"
        >
          <ZoomOut className="w-3.5 h-3.5" />
        </button>

        <div className="w-[1px] h-3.5 bg-white/20 mx-0.5" />

        <button
          onClick={handleRotateZ90}
          title="Rotate 90° orientation"
          className="p-1 sm:p-1.5 text-white/90 hover:text-white hover:bg-white/20 rounded-full transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Inspection"}
          className="p-1 sm:p-1.5 text-white/90 hover:text-white hover:bg-white/20 rounded-full transition-colors"
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Top Left: Active 180° Angle Status Indicator */}
      <div className="absolute top-3 left-3 z-30 flex items-center gap-1.5 sm:gap-2 bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/20 text-[11px] sm:text-xs font-mono text-amber-300">
        <Compass className="w-3.5 h-3.5 text-amber-400" />
        <span>Angle: {Math.round(rotateY)}°</span>
      </div>

      {/* Bottom Floating Toolbar: 180° Angle Quick Presets & Auto Tour */}
      <div 
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 sm:gap-1.5 bg-black/85 backdrop-blur-md px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full border border-white/20 shadow-2xl overflow-x-auto max-w-[95%] scrollbar-none"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleSetAngle180}
          className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold transition-all shrink-0 ${
            Math.abs(rotateY) === 180
              ? 'bg-amber-500 text-black shadow-md scale-105'
              : 'bg-white/15 text-white hover:bg-white/30'
          }`}
          title="Instantly turn product 180 degrees"
        >
          180° View
        </button>

        <div className="w-[1px] h-3 bg-white/20 shrink-0" />

        {/* Angle Presets */}
        {[
          { label: '0° Front', angle: 0 },
          { label: '45°', angle: 45 },
          { label: '90° Side', angle: 90 },
          { label: '135°', angle: 135 },
          { label: '180°', angle: 180 },
        ].map((item) => (
          <button
            key={item.label}
            onClick={() => handleSetPreset(item.angle)}
            className={`px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium transition-all shrink-0 ${
              Math.round(rotateY) === item.angle 
                ? 'bg-amber-400 text-black font-bold' 
                : 'text-white/80 hover:text-white hover:bg-white/15'
            }`}
          >
            {item.label}
          </button>
        ))}

        <div className="w-[1px] h-3 bg-white/20 shrink-0" />

        {/* Auto 180 degree Play/Pause */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          title={isAutoPlaying ? "Pause 180° Tour" : "Auto 180° Angle Tour"}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold transition-all shrink-0 ${
            isAutoPlaying 
              ? 'bg-green-500 text-white animate-pulse' 
              : 'bg-white/20 text-white hover:bg-white/30'
          }`}
        >
          {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
          <span>{isAutoPlaying ? "Playing" : "Auto 180°"}</span>
        </button>

        <div className="w-[1px] h-3 bg-white/20 shrink-0" />

        {/* Reset */}
        <button
          onClick={handleReset}
          title="Reset to 0° Front"
          className="p-1 text-white/70 hover:text-white hover:bg-white/20 rounded-full transition-colors shrink-0"
        >
          <RotateCcw className="w-3 h-3" />
        </button>
      </div>

      {/* Floating Instructions Cue */}
      {showHint && (
        <div 
          onClick={() => setShowHint(false)}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 bg-amber-500/95 text-black text-[11px] sm:text-xs font-semibold px-3.5 sm:px-4 py-1.5 rounded-full shadow-xl cursor-pointer hover:scale-105 transition-all animate-bounce whitespace-nowrap max-w-[90%] text-center"
        >
          <Rotate3d className="w-3.5 h-3.5 shrink-0" />
          <span>Drag left or right to move 180° and see every angle!</span>
        </div>
      )}
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
