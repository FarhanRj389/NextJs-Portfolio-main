
// import React from 'react';
import React, { useState } from "react";
import ProjectCard from "../ui/ProjectCard";
import { projects, ProjectCategory } from "../../data/projects";
import { Link } from "react-router-dom";


const AllProjects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">(
    "all"
  );

  const categories: { id: ProjectCategory | "all"; label: string }[] = [
    { id: "all", label: "All Projects" },
    // { id: 'web', label: 'Web Development' },
    // { id: 'design', label: 'Graphic Design' },
    // { id: 'mobile', label: 'Mobile Apps' },
    // { id: 'marketing', label: 'Marketing' }
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);


  return (
    <section id="work" className="py-20 px-4 pt-40 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="inline-block text-sm font-medium text-teal-500 dark:text-teal-400 mb-6 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30">
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
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
    
  );
};

export default AllProjects;
