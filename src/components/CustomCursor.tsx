
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };
    
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  
  // Skip rendering for mobile devices
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null;
  }
  
  return (
    <>
      {/* Main cursor dot */}
      <div 
        className={`fixed pointer-events-none z-[999] rounded-full mix-blend-difference ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '8px',
          height: '8px',
          backgroundColor: 'white',
          transform: `translate(-50%, -50%) ${isPointer ? 'scale(1.5)' : 'scale(1)'} ${isClicking ? 'scale(0.75)' : ''}`,
          transition: 'transform 0.15s ease-out, opacity 0.3s ease-out',
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.7)'
        }}
      />
      
      {/* Cursor outer ring */}
      <div 
        className={`fixed pointer-events-none z-[998] rounded-full mix-blend-difference transition-all duration-300 ease-out ${
          isVisible ? 'opacity-70' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '40px' : '30px',
          height: isPointer ? '40px' : '30px',
          border: '1.5px solid white',
          transform: `translate(-50%, -50%) ${isClicking ? 'scale(0.9)' : 'scale(1)'}`,
          transition: 'width 0.3s, height 0.3s, opacity 0.3s, transform 0.15s',
          boxShadow: isPointer ? '0 0 15px rgba(255, 255, 255, 0.4)' : '0 0 10px rgba(255, 255, 255, 0.2)'
        }}
      />
      
      {/* Animated pulse effect */}
      <div 
        className={`fixed pointer-events-none z-[997] rounded-full bg-white/5 transition-all duration-700 ease-out ${
          isVisible && isPointer ? 'opacity-30 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '60px',
          height: '60px',
          transform: 'translate(-50%, -50%)',
          animation: isPointer ? 'cursorPulse 1.5s infinite ease-in-out' : 'none',
          backdropFilter: 'blur(4px)'
        }}
      />
    </>
  );
};

export default CustomCursor;
