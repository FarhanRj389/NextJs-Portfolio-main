import React from 'react';
import { Code, Palette, Globe, LineChart } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description: "We craft responsive, fast-loading websites using HTML, CSS, JS, React, and Next.js. From landing pages to Shopify and WordPress customization, we deliver sleek, modern, and scalable solutions.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Palette size={32} />,
      title: "Graphic Design",
      description: "Get impactful visual design for logos, branding, and social media. We create clean, modern graphics tailored to your brand, helping you stand out across platforms and marketing materials.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Globe size={32} />,
      title: "Mobile & Web Apps",
      description: "We develop user-friendly mobile and web apps using React Native and modern stacks. All apps are optimized for performance, responsive design, and seamless cross-platform experience.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <LineChart size={32} />,
      title: "SEO & Marketing",
      description: "Improve your online presence with on-page SEO, keyword strategy, and digital marketing. We also offer email marketing and content-based promotion to boost reach and engagement.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
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