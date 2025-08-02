export type ProjectCategory = 'web-development' | 'wordpress' | 'business' | 'health' | 'services' | 'ecommerce';

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
    description: "A modern, responsive website for EracusBPO, showcasing services in Web Development, Digital Marketing, and Financial Consulting. Built with React, Next.js, Tailwind CSS, and more to highlight the company's tech expertise and attract clients in New Zealand and Australia.",
    image: "/img/eracusbpo.png",
    category: "web-development",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    link: "https://eracusbpo.netlify.app"
  },
  {
    title: "Link City Industries – Hiphop Essentials Platform",
    description: "A dynamic website for Link City Industries Ltd, New Zealand's first hip-hop essentials store. The platform showcases the company's ventures, including a recording studio, clothing line, and whiskey brand. Designed to reflect urban culture and creativity, the site serves as a hub for music enthusiasts and fashion-forward audiences.",
    image: "/img/linkcityindusteries.png",
    category: "web-development",
    technologies: ["Html", "Css", "Js", "Bootstrap 4"],
    link: "https://linkcityindustries.com/review/"
  },
  {
    title: "Cool Master® – HVAC & Refrigeration Services Website",
    description: "A professional website for Cool Master®, offering expert HVAC, refrigeration, and air conditioning services across Auckland. The site highlights services such as installation, maintenance, and repair, emphasizing quality, efficiency, and customer satisfaction.",
    image: "/img/coolmaster.co.nz.png",
    category: "wordpress",
    technologies: ["Wordpress", "Elementor", "Contact From"],
    link: "https://coolmaster.co.nz/"
  },
  {
    title: "North Blue Water – Purified Water Solutions",
    description: "A clean and informative website for North Blue Water, a Karachi-based company specializing in high-quality purified water solutions for homes, businesses, and industrial clients. The site highlights the company's commitment to delivering safe, clean, and reliable water, emphasizing their dedication to quality and customer satisfaction.",
    image: "/img/nortthbluewater.png",
    category: "wordpress",
    technologies: ["Wordpress", "Elementor", "Contact From"],
    link: "https://northbluewater.pk/"
  },
  {
    title: "Yi Sourcing – E-commerce Product Sourcing Platform",
    description: "A professional website for Yi Sourcing, a China-based sourcing agent dedicated to assisting Amazon sellers in sourcing products for free. The platform offers additional services such as product inspections and shipping, aiming to streamline the supply chain process for e-commerce businesses.",
    image: "/img/yisourcing.png",
    category: "wordpress",
    technologies: ["Wordpress", "Elementor", "Contact From"],
    link: "https://coolmaster.co.nz/"
  },
  {
    title: "Proper Lawn Care – Professional Landscaping Services",
    description: "A clean and informative website for Proper Lawn Care, a New Zealand-based company offering comprehensive lawn and garden maintenance services. The site highlights seasonal garden cleanups, pruning, weed control, mulching, and soft landscaping, emphasizing the company's commitment to vibrant, healthy landscapes.",
    image: "/img/properlawncare.png",
    category: "wordpress",
    technologies: ["Wordpress", "Elementor", "Contact From"],
    link: "https://properlawncare.co.nz/"
  },
  {
    title: "Detailing – Premium Car Detailing Services",
    description: "A sleek and user-friendly website for RevUp Detailing, an Auckland-based mobile car detailing service. The site showcases comprehensive interior and exterior detailing packages, emphasizing quality services like deep vacuuming, sanitization, and seat dirt extraction. Designed to facilitate easy booking and highlight the company's commitment to restoring vehicles to their showroom shine.",
    image: "/img/revupdetaling.png",
    category: "wordpress",
    technologies: ["Wordpress", "Gutenberg", "Contact From"],
    link: "https://revupdetailing.com/"
  },
  {
    title: "EazyLive – Smart Home & Lifestyle E-Commerce Platform",
    description: "A modern, user-friendly e-commerce website for EazyLive, offering a curated selection of home and lifestyle products. The platform features modular wardrobes, space-saving organizers, and versatile storage solutions, all designed to enhance everyday living. Built with a focus on clean design and seamless navigation to provide an optimal shopping experience.",
    image: "/img/eazylive.png",
    category: "ecommerce",
    technologies: ["Wix"],
    link: "https://eazylive.store/"
  },
  {
    title: "Milaaf – Affordable Luxury Jewelry E-Commerce Platform",
    description: "A modern, responsive e-commerce website for Milaaf, a New Zealand-based jewelry brand offering affordable luxury pieces. The platform showcases a curated selection of 18K gold-plated, anti-tarnish, and hypoallergenic jewelry, emphasizing ethical sourcing and customer satisfaction.",
    image: "/img/millaf.png",
    category: "ecommerce",
    technologies: ["Shopify"],
    link: "https://www.milaaf.com/"
  },
];