
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [timelineData] = useState([
    {
      year: '2020',
      title: 'Started Learning Web Development',
      description: 'Began my journey with HTML, CSS, and JavaScript.'
    },
    {
      year: '2021',
      title: 'Explored Advanced Frameworks',
      description: 'Learned React, Next.js, and TailwindCSS to build modern web applications.'
    },
    {
      year: '2022',
      title: 'Mobile Development with Flutter',
      description: 'Expanded my skills to mobile app development using Flutter and Dart.'
    },
    {
      year: '2023',
      title: 'Building Real-World Projects',
      description: 'Created applications solving actual problems, including mental health support and productivity apps.'
    }
  ]);
  
  // Use intersection observer to trigger animations
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-portfolio-light-gray dark:bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className={`transition-all duration-700 transform ${sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">About Me</h2>
          <div className="h-1 w-20 bg-accent rounded-full mb-12"></div>
        </div>
        
        {/* About content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About text */}
          <div className={`transition-all duration-700 delay-100 transform ${sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl font-semibold mb-6 dark:text-white">My Journey</h3>
            <p className="text-lg text-foreground/80 dark:text-white/80 mb-6">
              I'm Vedant Agrawal, a passionate developer with a unique journey from commerce to technology. My fascination with problem-solving and creating digital solutions led me to pursue web and mobile development.
            </p>
            <p className="text-lg text-foreground/80 dark:text-white/80 mb-6">
              What sets me apart is my ability to bridge the gap between design and functionality, creating seamless user experiences that not only look beautiful but also solve real-world problems.
            </p>
            <p className="text-lg text-foreground/80 dark:text-white/80">
              I specialize in building responsive websites using modern frameworks like React and Next.js, as well as developing cross-platform mobile applications with Flutter. My goal is to continue growing as a developer and create impactful digital products.
            </p>
          </div>
          
          {/* Timeline */}
          <div className={`transition-all duration-700 delay-200 transform ${sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl font-semibold mb-6 dark:text-white">My Timeline</h3>
            <div className="relative pl-8 border-l border-primary/20 dark:border-primary/40">
              {timelineData.map((item, index) => (
                <div 
                  key={index} 
                  className={`mb-12 last:mb-0 transition-all duration-500 delay-${index * 100} transform ${sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                >
                  <div className="absolute left-[-8px] w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-dark-bg-primary"></div>
                  <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-white text-sm font-medium mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-medium mb-2 dark:text-white">{item.title}</h4>
                  <p className="text-foreground/70 dark:text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(193,193,255,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(160,32,240,0.08),rgba(20,10,30,0))]"></div>
    </section>
  );
};

export default About;
