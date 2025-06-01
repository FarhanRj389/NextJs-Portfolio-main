import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Hero: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const scrollToServices = () => {
    const services = document.getElementById('services');
    if (services) {
      services.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={elementRef}
      className="min-h-screen relative flex flex-col justify-center items-center pt-20 pb-10 px-4 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-24 w-96 h-96 bg-teal-400/10 dark:bg-teal-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 -right-24 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative max-w-4xl text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="inline-block text-sm md:text-base font-medium text-teal-500 dark:text-teal-400 mb-4 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30 animate-slideLeft">
            Web Developer & Designer
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 animate-gradient">
            Hi, I'm Farhan Ahmed
          </h1>
          
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-slideRight">
            I build beautiful, responsive websites and digital experiences that help businesses grow online.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center stagger-animation animate">
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