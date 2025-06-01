import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
            <Route path="/all-projects" element={<AllProjects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
