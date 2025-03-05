
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [projects] = useState([
    {
      title: 'Mental Health Support App',
      description: 'A mobile application that provides emergency notifications and mental health resources to users in need.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Flutter', 'Firebase', 'Notifications API'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Call Reminder & Notes App',
      description: 'A productivity application that helps users manage their calls and take notes efficiently.',
      image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React Native', 'Redux', 'Local Storage'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'An interactive dashboard for managing products, orders, and customers in an e-commerce platform.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Tailwind CSS', 'Chart.js'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ]);

  // Use intersection observer to trigger animations
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-portfolio-bg dark:bg-transparent relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className={`transition-all duration-700 transform ${sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">My Projects</h2>
          <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
          <p className="max-w-2xl text-lg text-foreground/70 dark:text-white/70 mb-12">
            Here are some of my recent projects that showcase my skills and passion for building
            functional and beautiful applications.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-xl bg-white/80 dark:bg-dark-bg-secondary/50 shadow-md hover:shadow-lg dark:shadow-dark-purple-accent/20 transition-all duration-500 transform ${sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project image */}
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Project details */}
              <div className="p-6 backdrop-blur-sm bg-white/70 dark:bg-black/50">
                <h3 className="text-xl font-semibold mb-2 dark:text-white group-hover:text-primary dark:group-hover:text-primary-foreground transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 dark:text-white/70 mb-4">
                  {project.description}
                </p>
                
                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Project links */}
                <div className="flex gap-4">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-foreground dark:text-white hover:text-primary dark:hover:text-primary-foreground transition-colors hover-underline"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-foreground dark:text-white hover:text-primary dark:hover:text-primary-foreground transition-colors hover-underline"
                  >
                    <Github size={16} className="mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 -z-10 w-full h-full bg-[linear-gradient(to_bottom_right,rgba(120,119,198,0.05),rgba(255,255,255,0))] dark:bg-[linear-gradient(to_bottom_right,rgba(160,32,240,0.08),rgba(20,10,30,0))]"></div>
    </section>
  );
};

export default Projects;
