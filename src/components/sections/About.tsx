import React from 'react';

const About: React.FC = () => {
  const skills = [
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React","Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"] },
    { category: "Design", items: ["Figma", "Canva", "Photoshop"] },
    { category: "Others", items: ["Git", "Makteking", "SEO", "Responsive Design"] }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* About Content */}
          <div>
            <p className="inline-block text-sm font-medium text-teal-500 dark:text-teal-400 mb-4 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Dedicated Web Developer with a Creative Edge
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Hello! I'm Farhan Ahmed, a passionate and detail-oriented web developer with a strong background in creating high-quality digital solutions. I specialize in building responsive, user-friendly websites and applications that help businesses establish a strong online presence.
              </p>
              <p>
                With expertise in both front-end and back-end development, I create seamless digital experiences that not only look great but also perform exceptionally well. I believe in clean code, intuitive design, and creating solutions that solve real problems.
              </p>
              <p>
                Whether you're a startup looking to establish your first online presence or an established business wanting to revamp your digital strategy, I'm here to help you achieve your goals with customized solutions that align with your brand identity and business objectives.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Let's Connect
              </button>
            </div>
          </div>

          {/* Skills */}
          <div>
            <p className="inline-block text-sm font-medium text-teal-500 dark:text-teal-400 mb-4 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30">
              My Skills
            </p>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Technologies & Tools
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;