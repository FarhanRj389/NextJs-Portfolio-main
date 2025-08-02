import React, { useState } from "react";
import ProjectCard from "../ui/ProjectCard";
import { projects, ProjectCategory } from "../../data/projects";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");

  const categories: { id: ProjectCategory | "all"; label: string }[] = [
    { id: "all", label: "All Projects" },
    { id: "web-development", label: "Web Development" },
    { id: "wordpress", label: "WordPress" },
    { id: "business", label: "Business" },
    { id: "health", label: "Health" },
    { id: "services", label: "Services" },
    { id: "ecommerce", label: "Ecommerce" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Group projects by category for sliders
  const webDevelopmentProjects = projects.filter(p => p.category === "web-development");
  const wordpressProjects = projects.filter(p => p.category === "wordpress");
  const ecommerceProjects = projects.filter(p => p.category === "ecommerce");

  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [webSlide, setWebSlide] = useState(0);
  const [wpSlide, setWpSlide] = useState(0);
  const [ecommerceSlide, setEcommerceSlide] = useState(0);

  const nextSlide = (projects: any[], current: number, setCurrent: (value: number) => void) => {
    setCurrent(current === projects.length - 1 ? 0 : current + 1);
  };

  const prevSlide = (projects: any[], current: number, setCurrent: (value: number) => void) => {
    setCurrent(current === 0 ? projects.length - 1 : current - 1);
  };

  return (
    <section id="work" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="inline-block text-sm font-medium text-teal-500 dark:text-teal-400 mb-4 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30">
            My Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Recent Projects
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Explore my recent work across different domains including web
            development, design, and digital marketing.
          </p>
        </div>

        {/* Web Development Slider */}
        {webDevelopmentProjects.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Web Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                React, Next.js, and modern frontend development projects
              </p>
            </div>
            
            <div className="relative">
              <div className="flex overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${webSlide * 50}%)` }}>
                  {webDevelopmentProjects.map((project, index) => (
                    <div key={index} className="w-1/2 flex-shrink-0 px-4">
                      <div className="max-w-md mx-auto">
                        <ProjectCard project={project} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {webDevelopmentProjects.length > 2 && (
                <>
                  <button
                    onClick={() => prevSlide(webDevelopmentProjects, webSlide, setWebSlide)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    <ChevronLeft size={24} className="text-gray-700 dark:text-gray-300" />
                  </button>
            <button
                    onClick={() => nextSlide(webDevelopmentProjects, webSlide, setWebSlide)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    <ChevronRight size={24} className="text-gray-700 dark:text-gray-300" />
            </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* WordPress Slider */}
        {wordpressProjects.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                WordPress/Shopify Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Custom WordPress websites with Elementor and Gutenberg
              </p>
            </div>
            
            <div className="relative">
              <div className="flex overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${wpSlide * 50}%)` }}>
                  {wordpressProjects.map((project, index) => (
                    <div key={index} className="w-1/2 flex-shrink-0 px-4">
                      <div className="max-w-md mx-auto">
                        <ProjectCard project={project} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {wordpressProjects.length > 2 && (
                <>
                  <button
                    onClick={() => prevSlide(wordpressProjects, wpSlide, setWpSlide)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    <ChevronLeft size={24} className="text-gray-700 dark:text-gray-300" />
                  </button>
                  <button
                    onClick={() => nextSlide(wordpressProjects, wpSlide, setWpSlide)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    <ChevronRight size={24} className="text-gray-700 dark:text-gray-300" />
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Ecommerce Slider */}
        {ecommerceProjects.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                E-commerce Projects
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Online stores and e-commerce solutions
              </p>
        </div>

            <div className="relative">
              <div className="flex overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${ecommerceSlide * 50}%)` }}>
                  {ecommerceProjects.map((project, index) => (
                    <div key={index} className="w-1/2 flex-shrink-0 px-4">
                      <div className="max-w-md mx-auto">
                        <ProjectCard project={project} />
                      </div>
                    </div>
                  ))}
                </div>
        </div>
              
              {ecommerceProjects.length > 2 && (
                <>
                  <button
                    onClick={() => prevSlide(ecommerceProjects, ecommerceSlide, setEcommerceSlide)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    <ChevronLeft size={24} className="text-gray-700 dark:text-gray-300" />
                  </button>
                  <button
                    onClick={() => nextSlide(ecommerceProjects, ecommerceSlide, setEcommerceSlide)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    <ChevronRight size={24} className="text-gray-700 dark:text-gray-300" />
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        <Link to="/all-projects">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button
              className="button-hover px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              aria-label="View All Projects"
            >
              View All Projects
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
