
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
      {/* Main cursor */}
      <div 
        className={`fixed pointer-events-none z-[999] rounded-full mix-blend-difference transition-transform duration-150 ease-out ${
          isPointer ? 'scale-150' : 'scale-100'
        } ${isClicking ? 'scale-75' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '12px',
          height: '12px',
          backgroundColor: 'white',
          transform: `translate(-50%, -50%) ${isPointer ? 'scale(1.5)' : 'scale(1)'} ${isClicking ? 'scale(0.75)' : ''}`,
          transition: 'transform 0.15s ease-out, opacity 0.3s ease-out',
        }}
      />
      
      {/* Cursor trail */}
      <div 
        className={`fixed pointer-events-none z-[998] rounded-full bg-white mix-blend-difference transition-all duration-500 ease-out ${
          isVisible ? 'opacity-50' : 'opacity-0'
        } ${isPointer ? 'w-16 h-16' : 'w-10 h-10'} ${isClicking ? 'scale-75 opacity-70' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s, height 0.3s, opacity 0.3s, transform 0.15s',
          backdropFilter: 'blur(2px)',
        }}
      />
      
      {/* Additional pulse effect */}
      <div 
        className={`fixed pointer-events-none z-[997] rounded-full bg-white/10 mix-blend-difference transition-all duration-700 ease-out animate-cursor-ping ${
          isVisible && isPointer ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '50px',
          height: '50px',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CustomCursor;
