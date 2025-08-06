import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 px-4">
      <div className="container mx-auto max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
          <div className="text-2xl font-bold pb-3 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500">
            <Link to="/" className="flex items-center gap-2">
              <img src="/Design Agency Logo Featuring 'FA'.png" alt="Farhan Ahmed" className="w-10 h-10 rounded-full" />
              <span>Farhan Ahmed</span>
            </Link>
          </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Building beautiful digital experiences that help businesses grow online. Let's create something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/FarhanRj389" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/farhanrjcw389/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.facebook.com/FarhanRj389" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/farhanrj389/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => {
                    const section = document.getElementById('home');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const section = document.getElementById('services');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const section = document.getElementById('work');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const section = document.getElementById('about');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const section = document.getElementById('contact');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">Email:</span>{' '}
                <a 
                  href="mailto:contact@farhanahmed.top" 
                  className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  contact@farhanahmed.top
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">Phone:</span>{' '}
                <a 
                  href="tel:+923271640609" 
                  className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  +92 327 1640609
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Farhan Ahmed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;