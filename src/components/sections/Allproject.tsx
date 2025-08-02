
// import React from 'react';
import React, { useState } from "react";
import ProjectCard from "../ui/ProjectCard";
import { projects, ProjectCategory } from "../../data/projects";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../layout/Navbar";
import { useDarkMode } from "../../hooks/useDarkMode";

const AllProjects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();

  const categories: { id: ProjectCategory | "all"; label: string }[] = [
    { id: "all", label: "All Projects" },
    { id: "web-development", label: "Web Development" },
    { id: "wordpress", label: "WordPress" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "business", label: "Business" },
    { id: "health", label: "Health" },
    { id: "services", label: "Services" }
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleNavClick = (section: string) => {
    if (section === 'home') {
      navigate('/');
    } else {
      navigate('/', { state: { scrollTo: section } });
    }
  };

  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} onNavClick={handleNavClick} />
      
      {/* Navigation Header */}
      <div className="pt-20 pb-4 px-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto max-w-6xl">
          {/* Removed Back to Home button */}
        </div>
      </div>

      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="inline-block text-sm font-medium text-teal-500 dark:text-teal-400 mb-4 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30">
              My Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              All Projects
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              Explore my complete portfolio across different domains including web
              development, WordPress, Shopify, and digital marketing.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category.id
                    ? "bg-teal-500 text-white"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AllProjects;
