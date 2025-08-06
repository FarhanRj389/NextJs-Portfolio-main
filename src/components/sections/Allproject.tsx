
// import React from 'react';
import React, { useState } from "react";
import { projects, ProjectCategory } from "../../data/projects";
import { Link, useNavigate } from "react-router-dom";
import { Star, ExternalLink,  } from "lucide-react";
import Navbar from "../layout/Navbar";


// Props interface should be outside the component
interface AllProjectsProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const AllProjects: React.FC<AllProjectsProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");
  const navigate = useNavigate();

  const categories: { id: ProjectCategory | "all"; label: string; count: number }[] = [
    { id: "all", label: "All", count: projects.length },
    { id: "web-development", label: "Web Development", count: projects.filter(p => p.category === "web-development").length },
    { id: "wordpress", label: "WordPress", count: projects.filter(p => p.category === "wordpress").length },
    { id: "ecommerce", label: "E-commerce", count: projects.filter(p => p.category === "ecommerce").length },
    { id: "business", label: "Business", count: projects.filter(p => p.category === "business").length },
    { id: "health", label: "Health", count: projects.filter(p => p.category === "health").length },
    { id: "services", label: "Services", count: projects.filter(p => p.category === "services").length }
  ].filter(category => category.count > 0 || category.id === "all") as { id: ProjectCategory | "all"; label: string; count: number }[];

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

  // Get category color
  const getCategoryColor = (category: ProjectCategory) => {
    const colors = {
      'web-development': 'bg-blue-500',
      'wordpress': 'bg-purple-500',
      'ecommerce': 'bg-green-500',
      'business': 'bg-indigo-500',
      'health': 'bg-red-500',
      'services': 'bg-orange-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} onNavClick={handleNavClick} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-white to-gray-100  dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-sm font-medium dark:text-orange-400 text-cyan-600 mb-6 px-4 py-2 rounded-full  dark:bg-white  border border-cyan-600 dark:border-orange-400">
              <Star size={16} />
              Featured Case Studies
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-500 via-cyan-400 to-cyan-700 dark:from-cyan-200 dark:via-cyan-400 dark:to-cyan-700  bg-clip-text text-transparent animate-gradient-x">
                Spotlight Projects
              </span>{" "}
              <span className="text-slate-500 dark:text-white">That Changed</span>{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
                Everything
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Explore our diverse collection of award-winning projects that have transformed businesses 
              and delivered extraordinary results across industries and technologies.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">4+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">Happy Clients Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">4</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
          </div>

          {/* Filter Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-8">Explore by Category</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-yellow-400 text-gray-900 shadow-lg"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-8 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-full ">
          {filteredProjects.length > 0 ? (
            <div className="space-y-12">
              {filteredProjects.map((project, index) => (
               <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-600 w-full">
  <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} h-auto lg:h-[500px]`}>
                    {/* Project Image */}
                    <div className="w-full lg:w-1/2 relative border-yellow-500 border-4">
                      <div className="relative group overflow-hidden h-80 lg:h-full">
                        <div className=" items-center flex absolute top-2 px-4 justify-between w-full">
                          <span className={`px-4 py-2 rounded-full text-xs font-semibold text-white shadow-lg ${getCategoryColor(project.category)}`}>
                            {project.category.replace('-', ' ').toUpperCase()}
                          </span>
                          <span className="px-3 py-2 rounded-full text-xs font-semibold text-yellow-400 bg-black border border-yellow-500 shadow-lg">
                            Featured
                          </span>
                        </div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-fill object-center  transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Attractive Border Overlay */}
                        {/* <div className="absolute inset-0 border-2 overflow-hidden border-yellow-400/40 rounded-2xl pointer-events-none"></div> */}
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-3 left-3 right-3">
                            <div className="flex gap-2">
                              {project.link && (
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 px-3 py-1.5 bg-yellow-400 text-gray-900 rounded-lg text-sm font-medium hover:bg-yellow-300 transition-colors shadow-lg"
                                >
                                  <ExternalLink size={14} />
                                  Live Demo
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                      <div className="space-y-6">
                        {/* Category Badges - Moved to Content Section */}
                        

                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                          {project.title}
                        </h3>

                        <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Technologies Used */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 rounded-md text-xs font-medium bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Key Results */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Results</h4>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2 text-green-600 dark:text-green-400 text-xs">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              <span>Increased online presence and engagement</span>
                            </li>
                            <li className="flex items-center gap-2 text-green-600 dark:text-green-400 text-xs">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              <span>Optimized for mobile and desktop performance</span>
                            </li>
                            <li className="flex items-center gap-2 text-green-600 dark:text-green-400 text-xs">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              <span>Fast loading and clean user experience</span>
                            </li>
                          </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-3">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg text-sm font-medium hover:bg-yellow-300 transition-colors shadow-md"
                            >
                              <ExternalLink size={14} />
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                No projects found in this category. Try selecting a different filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Tech Stack
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Cutting-Edge Technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {(() => {
              // Auto-calculate tech stack from projects
              const techCounts: { [key: string]: number } = {};
              projects.forEach(project => {
                project.technologies.forEach(tech => {
                  techCounts[tech] = (techCounts[tech] || 0) + 1;
                });
              });

              const techStack = [
                { name: "React/Next.js", count: `${techCounts["React"] || 0 + techCounts["Next.js"] || 0} projects`, color: "from-blue-500 to-cyan-500" },
                { name: "WordPress", count: `${techCounts["Wordpress"] || 0} projects`, color: "from-blue-600 to-indigo-600" },
                { name: "Shopify", count: `${techCounts["Shopify"] || 0} projects`, color: "from-green-600 to-teal-600" },
                { name: "HTML/CSS/JS", count: `${techCounts["Html"] || 0 + techCounts["Css"] || 0 + techCounts["Js"] || 0} projects`, color: "from-orange-500 to-red-500" },
                { name: "Wix", count: `${techCounts["Wix"] || 0} projects`, color: "from-purple-500 to-pink-500" },
                { name: "Elementor", count: `${techCounts["Elementor"] || 0} projects`, color: "from-green-500 to-emerald-500" }
              ].filter(tech => parseInt(tech.count.split(' ')[0]) > 0);

              return techStack.map((tech, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                    {tech.name.split('/')[0].charAt(0)}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{tech.count}</p>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Next Masterpiece?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's bring your vision to life with cutting-edge technology and award-winning design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Start Your Project
            </button>
            <Link
              to="/"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
