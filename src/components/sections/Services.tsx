import React from 'react';
import { Code, Palette, Globe, LineChart } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Palette size={32} />,
      title: "Graphic Design",
      description: "Creative logo design, branding, and visual content that aligns with your brand identity.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Globe size={32} />,
      title: "Mobile & Web Apps",
      description: "Cross-platform applications that work seamlessly across web and mobile devices.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <LineChart size={32} />,
      title: "SEO & Marketing",
      description: "Digital marketing strategies to boost your online visibility and reach your target audience.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="inline-block text-sm font-medium text-teal-500 dark:text-teal-400 mb-4 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30">
            What I Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My Services
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            I offer comprehensive solutions to help individuals and businesses establish a strong online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              colorClass={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;