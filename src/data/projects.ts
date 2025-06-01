  export type ProjectCategory = 'web' | 'design' | 'mobile' | 'marketing';

  export interface Project {
    title: string;
    description: string;
    image: string;
    category: ProjectCategory;
    technologies: string[];
    link?: string;
  }

  export const projects: Project[] = [
    {
      title: "EracusBPO – Business Solutions Website",
      description: "A modern, responsive website for EracusBPO, showcasing services in Web Development, Digital Marketing, and Financial Consulting. Built with React, Next.js, Tailwind CSS, and more to highlight the company’s tech expertise and attract clients in New Zealand and Australia.",
      image: "/src/img/eracusbpo.png",
      category: "web",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      link: "https://eracusbpo.netlify.app"
    },
    {
      title: "Link City Industries – Hiphop Essentials Platform",
      description: "A dynamic website for Link City Industries Ltd, New Zealand's first hip-hop essentials store. The platform showcases the company's ventures, including a recording studio, clothing line, and whiskey brand. Designed to reflect urban culture and creativity, the site serves as a hub for music enthusiasts and fashion-forward audiences.",
      image: "/src/img/linkcityindusteries.png",
      category: "web",
      technologies: ["Html", "Css", "Js", "Bootstrap 4"],
      link: "https://linkcityindustries.com/review/"
    },
    {
      title: "Cool Master® – HVAC & Refrigeration Services Website",
      description: "A professional website for Cool Master®, offering expert HVAC, refrigeration, and air conditioning services across Auckland. The site highlights services such as installation, maintenance, and repair, emphasizing quality, efficiency, and customer satisfaction.",
      image: "/src/img/coolmaster.co.nz.png",
      category: "web",
      technologies: ["Wordpress", "Elementor", "Contact From"],
      link: "https://coolmaster.co.nz/"
    },
      {
      title: "North Blue Water – Purified Water Solutions",
      description: "A clean and informative website for North Blue Water, a Karachi-based company specializing in high-quality purified water solutions for homes, businesses, and industrial clients. The site highlights the company's commitment to delivering safe, clean, and reliable water, emphasizing their dedication to quality and customer satisfaction.",
      image: "/src/img/nortthbluewater.png",
      category: "web",
      technologies: ["Wordpress", "Elementor", "Contact From"],
      link: "https://northbluewater.pk/"
    },
      {
      title: "Yi Sourcing – E-commerce Product Sourcing Platform",
      description: "A professional website for Yi Sourcing, a China-based sourcing agent dedicated to assisting Amazon sellers in sourcing products for free. The platform offers additional services such as product inspections and shipping, aiming to streamline the supply chain process for e-commerce businesses.",
      image: "/src/img/yisourcing.png",
      category: "web",
      technologies: ["Wordpress", "Elementor", "Contact From"],
      link: "https://coolmaster.co.nz/"
    },
      {
      title: "Proper Lawn Care – Professional Landscaping Services",
      description: "A clean and informative website for Proper Lawn Care, a New Zealand-based company offering comprehensive lawn and garden maintenance services. The site highlights seasonal garden cleanups, pruning, weed control, mulching, and soft landscaping, emphasizing the company's commitment to vibrant, healthy landscapes.",
      image: "/src/img/properlawncare.png",
      category: "web",
      technologies: ["Wordpress", "Elementor", "Contact From"],
      link: "https://properlawncare.co.nz/"
    },  {
      title: "Detailing – Premium Car Detailing Services",
      description: "A sleek and user-friendly website for RevUp Detailing, an Auckland-based mobile car detailing service. The site showcases comprehensive interior and exterior detailing packages, emphasizing quality services like deep vacuuming, sanitization, and seat dirt extraction. Designed to facilitate easy booking and highlight the company's commitment to restoring vehicles to their showroom shine.",
      image: "/src/img/revupdetaling.png",
      category: "web",
      technologies: ["Wordpress", "Gutenberg", "Contact From"],
      link: "https://revupdetailing.com/"
    },
     {
      title: "EazyLive – Smart Home & Lifestyle E-Commerce Platform",
      description: "A modern, user-friendly e-commerce website for EazyLive, offering a curated selection of home and lifestyle products. The platform features modular wardrobes, space-saving organizers, and versatile storage solutions, all designed to enhance everyday living. Built with a focus on clean design and seamless navigation to provide an optimal shopping experience.",
      image: "/src/img/eazylive.png",
      category: "web",
      technologies: ["Wix"],
      link: "https://eazylive.store/"
    },
     {
      title: "Milaaf – Affordable Luxury Jewelry E-Commerce Platform",
      description: "A modern, responsive e-commerce website for Milaaf, a New Zealand-based jewelry brand offering affordable luxury pieces. The platform showcases a curated selection of 18K gold-plated, anti-tarnish, and hypoallergenic jewelry, emphasizing ethical sourcing and customer satisfaction.",
      image: "/src/img/millaf.png",
      category: "web",
      technologies: ["Shopify"],
      link: "https://www.milaaf.com/"
    },
  ];