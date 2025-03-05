
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [webSkills] = useState([
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'TailwindCSS', level: 92 },
    { name: 'Firebase', level: 78 }
  ]);

  const [mobileSkills] = useState([
    { name: 'Flutter', level: 90 },
    { name: 'Dart', level: 88 },
    { name: 'Firebase', level: 78 },
    { name: 'REST APIs', level: 82 },
    { name: 'UI/UX Design', level: 75 }
  ]);

  // Use intersection observer to trigger animations
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-white dark:bg-transparent dark:bg-opacity-5 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className={`transition-all duration-700 transform ${sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">My Skills</h2>
          <div className="h-1 w-20 bg-primary rounded-full mb-12"></div>
        </div>

        {/* Skills content */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Web Development Skills */}
          <div className={`transition-all duration-700 delay-100 transform ${sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-8 inline-flex items-center dark:text-white">
                <span className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-white text-sm font-medium py-1 px-3 rounded-full mr-3">01</span>
                Web Development
              </h3>
            </div>

            <div className="space-y-6">
              {webSkills.map((skill, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-500 delay-${100 + index * 100} transform ${sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium dark:text-white">{skill.name}</span>
                    <span className="text-foreground/60 dark:text-white/60">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: sectionInView ? `${skill.level}%` : '0%', 
                        transitionDelay: `${200 + index * 100}ms` 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Development Skills */}
          <div className={`transition-all duration-700 delay-200 transform ${sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-8 inline-flex items-center dark:text-white">
                <span className="bg-accent/10 text-accent dark:bg-accent/20 dark:text-white text-sm font-medium py-1 px-3 rounded-full mr-3">02</span>
                Mobile Development
              </h3>
            </div>

            <div className="space-y-6">
              {mobileSkills.map((skill, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-500 delay-${200 + index * 100} transform ${sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium dark:text-white">{skill.name}</span>
                    <span className="text-foreground/60 dark:text-white/60">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: sectionInView ? `${skill.level}%` : '0%',
                        transitionDelay: `${300 + index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements animation */}
      <div className="floating-elements opacity-30">
        <div className="floating-element floating-element-2"></div>
        <div className="floating-element floating-element-4" style={{ left: '75%', top: '25%' }}></div>
      </div>
      
      {/* Background element */}
      <div className="absolute right-0 bottom-0 -z-10 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_at_center,rgba(160,32,240,0.08),rgba(20,10,30,0))]"></div>
    </section>
  );
};

export default Skills;
