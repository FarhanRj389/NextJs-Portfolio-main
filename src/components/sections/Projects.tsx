import React, { useState } from "react";
import ProjectCard from "../ui/ProjectCard";
import { projects, ProjectCategory } from "../../data/projects";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");

  const categories: { id: ProjectCategory | "all"; label: string }[] = [
    { id: "all", label: "All Projects" },
    // Add more categories if needed
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // ✅ Show only first 3 projects
  const limitedProjects = filteredProjects.slice(0, 3);

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
          {limitedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

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
