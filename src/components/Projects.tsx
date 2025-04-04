
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [projects] = useState([
    {
      title: 'Modern E-Commerce Website',
      description: 'A sleek, fully responsive e-commerce platform with advanced filtering, secure payment processing, and user-friendly product management.',
      image: 'https://images.unsplash.com/photo-1571775295587-979e89ab304d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Next.js', 'Stripe', 'Tailwind CSS'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Marble Shop Website',
      description: 'An elegant showcase website for a high-end marble retailer featuring product catalogs, virtual showroom, and custom quote builder.',
      image: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'GSAP', 'Framer Motion', 'Firebase'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Mental Health Support App landing page',
      description: 'The landing page for a mobile application that provides emergency notifications and mental health resources to users in need.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Flutter', 'Firebase', 'Notifications API'],
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
    },
    {
      title: 'Notes Website',
      description: 'A responsive note taking website with advanced features',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Next.js', 'Tailwind CSS', 'React', 'SuperAuth'],
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
      className="py-24 px-6 md:px-12 bg-white dark:bg-transparent dark:bg-opacity-5 relative"
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
              className={`group relative overflow-hidden rounded-xl bg-white dark:bg-dark-bg-secondary/50 shadow-md hover:shadow-xl dark:shadow-dark-purple-accent/10 hover:dark:shadow-dark-purple-accent/20 transition-all duration-500 transform ${sectionInView ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}
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
                <h3 className="text-xl font-semibold mb-2 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
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
                    className="flex items-center text-sm font-medium text-foreground dark:text-white hover:text-primary dark:hover:text-primary transition-colors hover-underline"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-foreground dark:text-white hover:text-primary dark:hover:text-primary transition-colors hover-underline"
                  >
                    <Github size={16} className="mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
              
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/10 dark:to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating elements animation */}
      <div className="floating-elements opacity-30">
        <div className="floating-element floating-element-3" style={{ left: '85%', top: '15%' }}></div>
        <div className="floating-element floating-element-5" style={{ left: '10%', top: '70%' }}></div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 -z-10 w-full h-full bg-[linear-gradient(to_bottom_right,rgba(120,119,198,0.05),rgba(255,255,255,0))] dark:bg-[linear-gradient(to_bottom_right,rgba(160,32,240,0.08),rgba(20,10,30,0))]"></div>
    </section>
  );
};

export default Projects;
