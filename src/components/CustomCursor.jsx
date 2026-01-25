import { useEffect, useRef, useState, memo } from 'react';

const CustomCursor = memo(() => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const dotPosRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Check for touch device
    if ('ontouchstart' in window) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    const onMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e) => {
      if (e.target.closest('[data-hover]') || e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        setIsHovering(true);
      }
    };

    const onMouseOut = (e) => {
      if (e.target.closest('[data-hover]') || e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        setIsHovering(false);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // Smooth animation loop
    const animate = () => {
      // Outer circle - slower follow
      const lerpOuter = 0.12;
      posRef.current.x += (targetRef.current.x - posRef.current.x) * lerpOuter;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * lerpOuter;

      // Inner dot - faster follow
      const lerpDot = 0.25;
      dotPosRef.current.x += (targetRef.current.x - dotPosRef.current.x) * lerpDot;
      dotPosRef.current.y += (targetRef.current.y - dotPosRef.current.y) * lerpDot;

      cursor.style.transform = `translate(${posRef.current.x - 20}px, ${posRef.current.y - 20}px)`;
      cursorDot.style.transform = `translate(${dotPosRef.current.x - 4}px, ${dotPosRef.current.y - 4}px)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });
    document.addEventListener('mousedown', onMouseDown, { passive: true });
    document.addEventListener('mouseup', onMouseUp, { passive: true });
    animate();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Outer glowing circle */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ willChange: 'transform' }}
      >
        <div
          className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
            isHovering 
              ? 'scale-150 border-accent bg-accent/20' 
              : isClicking 
                ? 'scale-75 border-purple bg-purple/30'
                : 'scale-100 border-accent/60'
          }`}
          style={{
            boxShadow: isHovering 
              ? '0 0 20px rgba(217, 70, 239, 0.5), 0 0 40px rgba(217, 70, 239, 0.3)' 
              : '0 0 10px rgba(217, 70, 239, 0.3)',
          }}
        />
      </div>

      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ willChange: 'transform' }}
      >
        <div
          className={`w-2 h-2 rounded-full transition-all duration-200 ${
            isHovering ? 'scale-0' : isClicking ? 'scale-150 bg-purple' : 'scale-100 bg-accent'
          }`}
          style={{
            boxShadow: '0 0 10px rgba(217, 70, 239, 0.8)',
          }}
        />
      </div>
    </>
  );
});

CustomCursor.displayName = 'CustomCursor';

export default CustomCursor;
