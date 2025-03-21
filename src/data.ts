import { Project, Experience, Skill, Education, Certification } from "./types";

export const projects: Project[] = [
  {
    title: "Analytics Platform",
    description:
      "Developed a machine learning-based analytics platform for predictive maintenance",
    problem:
      "Manual equipment maintenance scheduling leading to downtime and increased costs",
    role: "Senior Software Engineer",
    outcome: "Reduced equipment downtime by 45% and maintenance costs by 30%",
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "E-commerce Microservices Platform",
    description: "Architected and implemented a scalable e-commerce platform",
    problem:
      "Monolithic architecture causing scaling and maintenance challenges",
    role: "Software Architect",
    outcome:
      "Improved system scalability by 300% and reduced deployment time by 70%",
    technologies: ["Kubernetes", "Node.js", "React", "Redis", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Geo-Viz: Geospatial Data Visualization Platform",
    description:
      "Designed and developed an advanced geospatial visualization platform to analyze and interpret location-based data with interactive maps and analytics.",
    problem:
      "Lack of intuitive and scalable solutions for geospatial data visualization, making analysis complex and inefficient.",
    role: "Software Engineer",
    outcome:
      "Enabled real-time geospatial analysis, improved decision-making for businesses, and enhanced data accessibility through interactive visualizations.",
    technologies: ["React", "Node.js", "PostgreSQL", "Mapbox", "D3.js", "AWS"],
    image: "/images/geo-viz.png?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Jazzba: Digital Supply Network & B2B eCommerce Platform",
    description:
      "Developed a real-time digital supply network that connects sales channels, inventory locations, and warehouses into a unified system, enabling seamless order management and inventory synchronization.",
    problem:
      "Fragmented supply chain operations lead to inefficiencies, manual order processing, and inaccurate inventory tracking.",
    role: "Software Engineer",
    outcome:
      "Automated order processing and inventory updates, reducing operational inefficiencies by 50% and enhancing supply chain visibility for businesses.",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "GraphQL",
      "Redis",
      "AWS",
    ],
    image: "/images/jazzba.png?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "LocalReviews: Multi-Platform Review Aggregation & Management",
    description:
      "Engineered a centralized platform that integrates with Google, Facebook, Yelp, and other social media to streamline review collection, response management, and reputation tracking for businesses.",
    problem:
      "Businesses struggle with managing customer reviews across multiple platforms, leading to inconsistent branding, lost customer trust, and lower engagement.",
    role: "Software Engineer",
    outcome:
      "Automated review aggregation, enabled real-time monitoring, and improved customer engagement by 5X through a unified review management system.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Google Reviews API",
      "Facebook API",
      "Yelp API",
      "AWS",
    ],
    image: "/images/local-reviews.png?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Private Blockchain Solutions for Dubai Government",
    description:
      "Designed and implemented private blockchain solutions using Hyperledger Fabric and GoLang Smart Contracts.",
    problem:
      "Lack of secure and transparent transactions across multiple government departments.",
    role: "Full Stack JavaScript / Private Blockchain Developer",
    outcome:
      "Processed over 5,000 daily transactions, reducing processing times by 40%.",
    technologies: [
      "Hyperledger Fabric",
      "GoLang",
      "Node.js",
      "Express.js",
      "React",
    ],
    image: "/images/fabric.png?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Work Order Management System",
    description:
      "Designed and developed a scalable Work Order Management System to streamline task assignments, tracking, and completion for maintenance teams.",
    problem:
      "Manual work order tracking led to inefficiencies, delayed maintenance, and lack of real-time visibility into task progress.",
    role: "Full Stack JavaScript Developer",
    outcome:
      "Increased operational efficiency by 40% by automating task assignments and real-time tracking. Improved work order completion rates with seamless team collaboration.",
    technologies: ["React.js", "Node.js", "GraphQL", "PostgreSQL", "Docker"],
    image: "/images/cmms.webp?auto=format&fit=crop&w=800&q=80",
  },
];

export const experiences: Experience[] = [
  {
    company: "INTECH Automation Intelligence & Sensys LLC",
    position: "Senior Full Stack JavaScript Developer",
    period: "2021 - Present",
    responsibilities: [
      "Designed and implemented a Generic Data Visualization table, reducing data retrieval time by 30%",
      "Built dynamic forms to automate form generation for 10+ different entity types",
      "Engineered scalable backend services for the CMMS product, reducing API response time by 20%",
    ],
    achievements: [
      "Optimized data visualization performance, improving efficiency for thousands of users",
      "Developed a scalable backend system handling thousands of daily transactions",
    ],
    technologies: ["React.js", "Node.js", "GraphQL", "PostgreSQL", "Docker"],
  },
  {
    company: "Avanza Innovations",
    position: "Full Stack JavaScript / Private Blockchain Developer",
    period: "2019 - 2021",
    responsibilities: [
      "Developed private blockchain solutions for Dubai government entities using Hyperledger Fabric",
      "Implemented GoLang Smart Contracts for secure and transparent transactions",
      "Optimized system performance by 25% and enhanced user experience for thousands of users",
    ],
    achievements: [
      "Processed over 5,000 daily transactions, reducing processing times by 40%",
      "Architected and deployed full-stack applications aligned with Dubai's smart city initiatives",
    ],
    technologies: [
      "Node.js",
      "React.js",
      "Hyperledger Fabric",
      "GoLang",
      "Express.js",
    ],
  },
  {
    company: "PureLogics",
    position: "Full Stack JavaScript Developer",
    period: "2018 - 2019",
    responsibilities: [
      "Designed and deployed full-stack applications using Node.js, Express, and React",
      "Developed and optimized the Local Reviews platform for seamless functionality",
    ],
    achievements: [
      "Improved platform stability and enhanced user experience",
      "Optimized application performance for high user satisfaction",
    ],
    technologies: ["React.js", "Node.js", "MongoDB"],
  },
  {
    company: "WHIZTEC",
    position: "Backend JavaScript Developer",
    period: "2017 - 2018",
    responsibilities: [
      "Developed and integrated RESTful APIs for an e-commerce platform",
      "Implemented real-time synchronization with multiple ERP systems, including SAP",
    ],
    achievements: [
      "Streamlined data flow across departments, improving operational efficiency",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "SAP"],
  },
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Go", level: 85 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Nest.js" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "GraphQL" },
    ],
  },
  {
    category: "Databases",
    items: [{ name: "PostgreSQL" }, { name: "MongoDB" }, { name: "Redis" }],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS EC2" },
      { name: "AWS S3" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "CI/CD" },
      { name: "Git" },
      { name: "GitHub" },
    ],
  },
  {
    category: "Testing & Monitoring",
    items: [
      { name: "Jest" },
      { name: "Prometheus" },
      { name: "Grafana" },
      { name: "Elasticsearch" },
    ],
  },
  {
    category: "Other Technologies",
    items: [
      { name: "RESTful APIs" },
      { name: "Smart Contracts" },
      { name: "Hyperledger Fabric" },
      { name: "Microservices Architecture" },
      { name: "OAuth" },
      { name: "Scrum" },
      { name: "Test-Driven Development" },
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "COMSATS Institute of Information and Technology",
    year: "2017",
  },
];

export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2022",
    url: "https://aws.amazon.com/certification/",
  },
  {
    name: "Professional Cloud Developer",
    issuer: "Google Cloud",
    year: "2021",
    url: "https://cloud.google.com/certification/",
  },
];
