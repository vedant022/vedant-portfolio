
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useInView } from 'react-intersection-observer';

const Index = () => {
  // Set document title on mount
  useEffect(() => {
    document.title = "Vedant Agrawal | Web & Flutter Developer";
  }, []);

  // Add scroll reveal functionality
  const { ref } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="relative">
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
