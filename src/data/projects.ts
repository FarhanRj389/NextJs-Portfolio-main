export type ProjectCategory = 'web-development' | 'wordpress' | 'business' | 'health' | 'services' | 'ecommerce';

export interface Project {
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  technologies: string[];
  keyresult: string[];
  link?: string;
}

export const projects: Project[] = [
   {
    title: "FoneFixer NZ – Fast & Affordable Device Repairs",
    description: "FoneFixer provides fast, certified repairs for phones, tablets, and laptops across multiple NZ locations.",
    image: "/img/fonefixer.png",
    category: "web-development",
    keyresult:["Developed a fast-loading, responsive repair service website with React & Next.js","Integrated a multi-location repair request system with dynamic form handling", "Optimized page performance and SEO, improving site speed and search visibility"],
    technologies: ["React", "Next.js", "Tailwind CSS", "Typescripts"],
    link: "https://fonefixer.co.nz/"
  }, 
  {
    title: "Five Star Rental – Vacation Property Booking Platform",
    description: "Developed a sleek and booking-ready website for vacation rentals, showcasing available properties and handling user inquiries effectively.",
    image: "/img/fivestarrental.png",
    category: "web-development",
    keyresult:["Built a clean, responsive property listing interface with dynamic filtering and booking display","Set up guest form submission and inquiry workflow for direct booking requests","Enhanced site performance and SEO, resulting in fast load times and better indexing"],
    technologies: ["React", "Next.js", "Tailwind CSS", "Typescripts"],
    link: "https://fivestarrental.netlify.app/"
  },
  {
    title: "Active Flow Co – Industrial Valve & Fittings Supplier Websitem",
    description: "A professional online presence for a supplier of stainless steel and brass valves, pipes, and fittings serving global industrial, commercial, and residential clients.",
    image: "/img/active flow.png",
    category: "web-development",
    keyresult:["Published a polished company website presenting comprehensive product catalog and company credentials","Delivered a seamless quote-request interface and contact form workflow","Showcased product specifications, industry applications, and customer trust indicators (e.g. ISO certification, country reach)"],
    technologies: ["React", "Next.js", "Tailwind CSS", "Typescripts" ,"Supabase", "Advance Dashboard Panel"],
    link: "https://fivestarrental.netlify.app/"
  },
  {
    title: "EracusBPO – Business Solutions Website",
    description: "A modern, responsive website for EracusBPO, showcasing services in Web Development, Digital Marketing, and Financial Consulting. Built with React, Next.js, Tailwind CSS, and more to highlight the company's tech expertise and attract clients in New Zealand and Australia.",
    image: "/img/eracusbpo.png",
    category: "web-development",
    keyresult:["websites Online","Resposive"],
    technologies: ["React", "Next.js", "Tailwind CSS"],
    link: "https://eracusbpo.netlify.app"
  },
  {
    title: "Link City Industries – Hiphop Essentials Platform",
    description: "A dynamic website for Link City Industries Ltd, New Zealand's first hip-hop essentials store. The platform showcases the company's ventures, including a recording studio, clothing line, and whiskey brand. Designed to reflect urban culture and creativity, the site serves as a hub for music enthusiasts and fashion-forward audiences.",
    image: "/img/linkcityindusteries.png",
    category: "web-development",
    keyresult:["websites Online","Resposive"],
    technologies: ["Html", "Css", "Js", "Bootstrap 4"],
    link: "https://linkcityindustries.com"
  },
  {
    title: "Cool Master® – HVAC & Refrigeration Services Website",
    description: "A professional website for Cool Master®, offering expert HVAC, refrigeration, and air conditioning services across Auckland. The site highlights services such as installation, maintenance, and repair, emphasizing quality, efficiency, and customer satisfaction.",
    image: "/img/coolmaster.co.nz.png",
    category: "wordpress",
    keyresult:["websites Online","Resposive"],
    technologies: ["Wordpress", "Elementor", "Contact From"],
    link: "https://coolmaster.co.nz/"
  },
  {
    title: "North Blue Water – Purified Water Solutions",
    description: "A clean and informative website for North Blue Water, a Karachi-based company specializing in high-quality purified water solutions for homes, businesses, and industrial clients. The site highlights the company's commitment to delivering safe, clean, and reliable water, emphasizing their dedication to quality and customer satisfaction.",
    image: "/img/nortthbluewater.png",
    category: "wordpress",
    keyresult:["websites Online","Resposive"],
    technologies: ["Wordpress", "Elementor", "Contact From"],
    link: "https://northbluewater.pk/"
  },
  {
    title: "Yi Sourcing – E-commerce Product Sourcing Platform",
    description: "A professional website for Yi Sourcing, a China-based sourcing agent dedicated to assisting Amazon sellers in sourcing products for free. The platform offers additional services such as product inspections and shipping, aiming to streamline the supply chain process for e-commerce businesses.",
    image: "/img/yisourcing.png",
    category: "wordpress",
    keyresult:["websites Online","Resposive"],
    technologies: ["Wordpress", "Elementor", "Contact From"],
    link: "https://coolmaster.co.nz/"
  },
  {
    title: "Proper Lawn Care – Professional Landscaping Services",
    description: "A clean and informative website for Proper Lawn Care, a New Zealand-based company offering comprehensive lawn and garden maintenance services. The site highlights seasonal garden cleanups, pruning, weed control, mulching, and soft landscaping, emphasizing the company's commitment to vibrant, healthy landscapes.",
    image: "/img/properlawncare.png",
    category: "wordpress",
    keyresult:["websites Online","Resposive"],
    technologies: ["Wordpress", "Elementor", "Contact From"],
    link: "https://properlawncare.co.nz/"
  },
  {
    title: "Detailing – Premium Car Detailing Services",
    description: "A sleek and user-friendly website for RevUp Detailing, an Auckland-based mobile car detailing service. The site showcases comprehensive interior and exterior detailing packages, emphasizing quality services like deep vacuuming, sanitization, and seat dirt extraction. Designed to facilitate easy booking and highlight the company's commitment to restoring vehicles to their showroom shine.",
    image: "/img/revupdetaling.png",
    category: "wordpress",
    keyresult:["websites Online","Resposive"],
    technologies: ["Wordpress", "Gutenberg", "Contact From"],
    link: "https://revupdetailing.com/"
  },
  {
    title: "EazyLive – Smart Home & Lifestyle E-Commerce Platform",
    description: "A modern, user-friendly e-commerce website for EazyLive, offering a curated selection of home and lifestyle products. The platform features modular wardrobes, space-saving organizers, and versatile storage solutions, all designed to enhance everyday living. Built with a focus on clean design and seamless navigation to provide an optimal shopping experience.",
    image: "/img/eazylive.png",
    category: "ecommerce",
    technologies: ["Wix"],
    keyresult:["websites Online","Resposive"],
    link: "https://eazylive.store/"
  },
  {
    title: "Milaaf – Affordable Luxury Jewelry E-Commerce Platform",
    description: "A modern, responsive e-commerce website for Milaaf, a New Zealand-based jewelry brand offering affordable luxury pieces. The platform showcases a curated selection of 18K gold-plated, anti-tarnish, and hypoallergenic jewelry, emphasizing ethical sourcing and customer satisfaction.",
    image: "/img/millaf.png",
    category: "ecommerce",
    keyresult:["websites Online","Resposive"],
    technologies: ["Shopify"],
    link: "https://www.milaaf.com/"
  },
];