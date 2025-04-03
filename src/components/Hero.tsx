
import { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Typed from 'typed.js';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const typedElementRef = useRef<HTMLSpanElement>(null);
  const typedInstanceRef = useRef<Typed | null>(null);
  
  useEffect(() => {
    // Set visibility after a small delay for animation purposes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Initialize typed.js when component mounts
  useEffect(() => {
    if (typedElementRef.current) {
      typedInstanceRef.current = new Typed(typedElementRef.current, {
        strings: ["Android/Kotlin Developer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        showCursor: false,
        onStringTyped: (arrayPos) => {
          // Add appropriate class based on which string is currently typed
          if (typedElementRef.current) {
            if (arrayPos === 0) {
              typedElementRef.current.className = 'text-gradient-purple';
            } else {
              typedElementRef.current.className = 'text-gradient-blue';
            }
          }
        }
      });
    }
    
    // Cleanup typed instance when component unmounts
    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
      }
    };
  }, []);
  
  return (
    <section 
      id="home" 
      className="hero-section relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden"
    >
      {/* Hero content container */}
      <div className="max-w-7xl w-full mx-auto flex flex-col justify-center py-20 mt-16">
        {/* Text content with animations */}
        <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h3 className="text-xl md:text-2xl font-medium text-foreground/70 dark:text-white/70 mb-4 animate-fade-in">
            Hello, I am
          </h3>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in dark:text-white">
            Vedant Agrawal
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-2 md:mt-4 animate-fade-in dark:text-white flex flex-wrap items-center">
            <span>a passionate</span>
            <span className="mx-6 inline-flex items-center">
              <span ref={typedElementRef} className="ml-2"></span>
              <span className="ml-1 h-10 w-[4px] bg-current inline-block animate-blink"></span>
            </span>
          </h2>
          
          {/* Description */}
          <p className="max-w-2xl mt-6 text-lg md:text-xl text-foreground/70 dark:text-white/70 animate-fade-in animate-delay-200">
            I transform ideas into elegant digital experiences, specializing in creating beautiful, 
            functional websites and mobile applications that solve real-world problems.
          </p>
          
          {/* Call to action buttons */}
          <div className="mt-8 md:mt-10 flex flex-wrap gap-4 animate-fade-in animate-delay-300">
            <a 
              href="#projects" 
              className="group relative overflow-hidden rounded-full bg-primary px-6 py-3 text-primary-foreground font-medium transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/20"
            >
              <span className="absolute inset-0 bg-accent/90 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
              <span className="relative flex items-center justify-center z-10">
                View My Work
              </span>
            </a>
            <a 
              href="#contact" 
              className="group relative overflow-hidden rounded-full bg-white dark:bg-white/10 dark:text-white px-6 py-3 transition-all duration-300 ease-out border border-black/10 dark:border-white/10 hover:shadow-lg"
            >
              <span className="absolute inset-0 bg-primary/10 dark:bg-white/5 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
              <span className="relative flex items-center justify-center text-foreground dark:text-white font-medium z-10">
                Contact Me
              </span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ChevronDown className="h-8 w-8 text-foreground/40 dark:text-white/40" />
        </a>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
      
      {/* Floating elements animation */}
      <div className="floating-elements">
        <div className="floating-element floating-element-1"></div>
        <div className="floating-element floating-element-2"></div>
        <div className="floating-element floating-element-3"></div>
        <div className="floating-element floating-element-4"></div>
        <div className="floating-element floating-element-5"></div>
      </div>
    </section>
  );
};

export default Hero;
