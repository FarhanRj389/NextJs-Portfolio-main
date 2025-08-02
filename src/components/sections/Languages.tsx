import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Languages: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const languages = [
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: 'from-yellow-400 to-yellow-500'
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'C#',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      color: 'from-violet-500 to-white'
    },
    {
      name: 'Kotlin',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
      color: 'from-pink-500 to-white'
    },
    {
      name: 'Flutter',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      color: 'from-blue-200 to-white'
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'from-cyan-400 to-cyan-500'
    },
    {
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      color: 'from-red-600 to-white'
    },
    {
      name: 'Vue',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      color: 'from-blue-200 to-yellow-500'
    },
     {
      name: 'Vite',
      icon: 'https://raw.githubusercontent.com/vitejs/vite/main/docs/public/logo.svg',
      color: ' from-blue-200 to-yellow-500'
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Android Studio',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'WordPress',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
      color: 'from-blue-400 to-white'
    },
    {
      name: 'Google Ads',
      icon: 'https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg',
      color: 'from-yellow-200 to-white'
    },
    {
      name: 'Facebook Ads(Meta)',
      icon: 'https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg',
      color: 'from-cyan-200 to-white'
    },
     {
      name: 'Canva',
      icon: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg',
      color: 'from-gray-600 to-white'
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="inline-block text-sm font-medium text-teal-500 dark:text-teal-400 mb-4 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30">
            Technologies
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
            Programming Languages & Tools
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Expertise in modern programming languages and frameworks for building robust applications.
          </p>
        </div>

        <div 
          ref={elementRef}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {languages.map((lang, index) => (
            <div
              key={lang.name}
              className="language-card  bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col  items-center space-y-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br  ${lang.color} p-3 transform transition-transform hover:scale-110`}>
                  <img
                    src={lang.icon}
                    alt={lang.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-gray-900 dark:text-white font-medium text-center">
                  {lang.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;