
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend
    console.log('Form data:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  // Use intersection observer to trigger animations
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-background dark:bg-transparent relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className={`transition-all duration-700 transform ${sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Get In Touch</h2>
          <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>
          <p className="max-w-2xl text-lg text-foreground/70 dark:text-white/70 mb-12">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you
            have a question or just want to say hi!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact information */}
          <div className={`transition-all duration-700 delay-100 transform ${sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl font-semibold mb-8 dark:text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20 mr-4">
                  <Mail className="h-6 w-6 text-primary dark:text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 dark:text-white">Email</h4>
                  <a 
                    href="mailto:contact@vedantagrawal.com" 
                    className="text-primary hover:underline dark:text-primary-foreground"
                  >
                    contact@vedantagrawal.com
                  </a>
                </div>
              </div>
              
              <h4 className="text-lg font-medium mt-8 mb-4 dark:text-white">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-foreground/5 dark:bg-white/10 hover:bg-foreground/10 dark:hover:bg-white/20 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6 dark:text-white" />
                </a>
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-foreground/5 dark:bg-white/10 hover:bg-foreground/10 dark:hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6 dark:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className={`transition-all duration-700 delay-200 transform ${sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl font-semibold mb-8 dark:text-white">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-white/90">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-white/90">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-white/90">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <button
                type="submit"
                className="group relative overflow-hidden rounded-lg bg-primary dark:bg-primary px-6 py-3 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-accent dark:bg-dark-purple-accent translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
                <span className="relative flex items-center justify-center text-white font-medium z-10">
                  Send Message
                  <Send size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(193,193,255,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_top_right,rgba(160,32,240,0.15),rgba(30,20,40,0))]"></div>
    </section>
  );
};

export default Contact;
