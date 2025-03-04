
import { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';

interface LoadingScreenProps {
  minLoadTimeMs?: number; // Minimum loading time in milliseconds
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ minLoadTimeMs = 2000 }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const startTime = Date.now();
    let animationFrame: number;
    
    // Update progress in an animation frame loop
    const updateProgress = () => {
      const timeElapsed = Date.now() - startTime;
      const calculatedProgress = Math.min(100, (timeElapsed / minLoadTimeMs) * 100);
      
      setProgress(calculatedProgress);
      
      if (calculatedProgress < 100) {
        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        // Once we reach 100%, wait a moment before hiding
        setTimeout(() => {
          setIsVisible(false);
          
          // After transition completes, tell the browser the loading is finished
          setTimeout(() => {
            document.body.style.overflow = '';
          }, 500);
        }, 500);
      }
    };
    
    // Lock scrolling during loading
    document.body.style.overflow = 'hidden';
    
    // Start the progress animation
    animationFrame = requestAnimationFrame(updateProgress);
    
    return () => {
      cancelAnimationFrame(animationFrame);
      document.body.style.overflow = '';
    };
  }, [minLoadTimeMs]);
  
  if (!isVisible) return null;
  
  return (
    <div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background dark:bg-gradient-to-b from-[#1A1A2E] to-[#100720]"
      style={{ 
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-out',
      }}
    >
      <div className="text-center">
        <div className="relative inline-block mb-6">
          <Loader className="h-16 w-16 text-primary dark:text-purple-400 animate-spin" />
          <div 
            className="absolute inset-0 rounded-full border-2 border-primary dark:border-purple-500"
            style={{ 
              clip: `rect(0px, ${progress * 0.64}px, 64px, 0px)`,
              transition: 'clip 0.3s ease-out'
            }}
          />
        </div>
        
        <div className="flex items-center justify-center mb-3">
          <TypewriterEffect 
            texts={["Loading Portfolio..."]} 
            typingSpeed={50}
            delayBetweenTexts={10000}
            className="text-xl font-medium"
          />
        </div>
        
        <p className="text-lg font-semibold text-primary dark:text-purple-400">
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
