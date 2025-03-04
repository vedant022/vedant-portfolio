
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useInView } from 'react-intersection-observer';
import CustomCursor from '../components/CustomCursor';
import LoadingScreen from '../components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Set document title on mount
  useEffect(() => {
    document.title = "Vedant Agrawal | Web & Flutter Developer";
    
    // Hide loading screen after it completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Slightly longer than the minimum loading time in LoadingScreen
    
    return () => clearTimeout(timer);
  }, []);

  // Add scroll reveal functionality
  const { ref } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="relative">
      {/* Loading screen */}
      {isLoading && <LoadingScreen />}
      
      {/* Custom cursor */}
      <CustomCursor />
      
      <Navbar />
      
      <main ref={ref} className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
