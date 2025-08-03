import React from 'react';
import { ChevronDown, Github, ExternalLink, Linkedin, Download } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Hero: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const scrollToServices = () => {
    const services = document.getElementById('services');
    if (services) {
      services.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = '/FarhanAhmed.pdf'; // Updated to use the actual CV file
    link.download = 'FarhanAhmed.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="home" 
      ref={elementRef}
      className="min-h-screen relative flex flex-col justify-center items-center pt-28 pb-10 px-4 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Worldwide Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 -left-24 w-96 h-96 bg-teal-400/10 dark:bg-teal-500/10 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 -right-24 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full filter blur-3xl animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-400/10 dark:bg-purple-500/10 rounded-full filter blur-3xl animate-float-fast"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-pink-400/10 dark:bg-pink-400/10 rounded-full filter blur-3xl animate-float-slow"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-teal-500/30 rounded-full animate-particle-1"></div>
        <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-blue-500/40 rounded-full animate-particle-2"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-purple-500/35 rounded-full animate-particle-3"></div>
        <div className="absolute top-1/3 right-1/2 w-1 h-1 bg-pink-500/30 rounded-full animate-particle-4"></div>
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-indigo-500/35 rounded-full animate-particle-5"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent h-px animate-scan-line"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-400 to-transparent w-px animate-scan-line-vertical"></div>
        </div>
      </div>
      
      <div className="container mx-auto relative max-w-4xl text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="inline-block text-sm md:text-base font-medium text-teal-500 dark:text-teal-400 mb-4 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30 animate-slideLeft">
            Full-Stack Web Developer & Digital Solutions Expert
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 animate-gradient">
            Hi, I'm Farhan Ahmed
          </h1>
          
          <p className="text-xl md:text-xl font-light mb-8 text-gray-600 dark:text-gray-400 max-w-4xl mx-auto animate-slideRight">
            Transforming ideas into pixel-perfect digital experiences with 4+ years of expertise in React.js, Next.js, WordPress and Shopify development, delivering responsive websites that drive business growth through custom theme development, eCommerce optimization, and seamless user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center stagger-animation animate mb-8">
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="button-hover px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              aria-label="Get in touch"
            >
              Get in Touch
            </button>
            <button 
              onClick={() => {
                const workSection = document.getElementById('work');
                if (workSection) workSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="button-hover px-8 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all transform hover:-translate-y-1"
              aria-label="View portfolio"
            >
              View My Work
            </button>
            <button 
              onClick={downloadCV}
              className="button-hover px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2"
              aria-label="Download CV"
            >
              <Download size={20} />
              Download CV
            </button>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-6 mt-8 animate-fadeInUp mb-16">
            <a 
              href="https://github.com/FarhanRj389" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 hover:scale-110 border border-gray-200 dark:border-gray-700"
              aria-label="GitHub Profile"
            >
              <Github size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors mb-1" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">GitHub</span>
            </a>
            <a 
              href="https://app.netlify.com/teams/farhanrjcw389/projects" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 hover:scale-110 border border-gray-200 dark:border-gray-700"
              aria-label="Netlify Profile"
            >
              <ExternalLink size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors mb-1" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">Netlify</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/farhanrjcw389/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 hover:scale-110 border border-gray-200 dark:border-gray-700"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors mb-1" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToServices}
        className="absolute bottom-10 animate-bounce p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} className="text-gray-700 dark:text-gray-300" />
      </button>
    </section>
  );
};

export default Hero;