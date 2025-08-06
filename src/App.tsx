import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Languages from './components/sections/Languages';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { useDarkMode } from './hooks/useDarkMode';
import AllProjects from './components/sections/Allproject';
import './styles/animations.css';

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to section when coming from other pages
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <Languages />
                  <Projects />
                  <About />
                  <Contact />
                </>
              }
            />
            <Route
  path="/all-projects"
  element={<AllProjects isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
/>
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
