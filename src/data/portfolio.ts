export const portfolioProjects = [
  {
    id: 1,
    title: 'AI Journey',
    category: 'ai',
    thumbnail: '/images/works/ai_journey.jpeg',
    description: 'A community hub for AI tools discovery and insights',
    fullDescription: 'A comprehensive platform for discovering and exploring AI tools and applications, featuring curated insights and resources for AI enthusiasts and professionals.',
    content: [
      {
        heading: 'Project Overview',
        text: 'AI Journey emerged from the need to organize and categorize the rapidly expanding universe of AI tools. As artificial intelligence continues to transform various industries, finding the right tools has become increasingly challenging. Our platform serves as a central hub where users can discover, compare, and learn about the latest AI innovations.'
      },
      {
        heading: 'Key Features',
        text: 'The platform includes an intuitive search and filter system, detailed tool profiles with user reviews, curated collections for specific use cases, and a community section where members can share experiences and tips. We\'ve implemented a verification system to ensure all listed tools meet quality standards.'
      },
      {
        heading: 'Technical Implementation',
        text: 'Built on Next.js for optimal performance and SEO capabilities, the site features server-side rendering and incremental static regeneration to balance freshness and speed. The frontend utilizes Tailwind CSS for responsive design, while data is managed through a combination of serverless functions and a robust database architecture.'
      },
      {
        heading: 'Outcome',
        text: 'Since launch, AI Journey has attracted over 15,000 monthly active users and features more than 500 curated AI tools across 20+ categories. The platform has become a trusted resource in the AI community, with several notable mentions in industry publications and a growing contributor network.'
      }
    ],
    client: 'Personal Project',
    date: '2024',
    technologies: ['React.js', 'Next.js', 'Tailwind CSS'],
    website: 'https://aijourney.so/',
    link: 'https://aijourney.so/'
  },
  {
    id: 2,
    title: 'Road 2 AI',
    category: 'ai',
    thumbnail: '/images/works/road2ai.jpg',
    description: 'Static documentation site sharing AI articles and resources',
    fullDescription: 'A documentation website providing in-depth articles, tutorials, and resources for AI learners and practitioners, built with a focus on accessibility and ease of navigation.',
    content: [
      {
        heading: 'Project Vision',
        text: 'Road 2 AI was conceived as a knowledge repository for artificial intelligence learning resources. The vision was to create a structured, accessible path for beginners while providing advanced resources for experienced practitioners. Unlike general-purpose educational platforms, Road 2 AI focuses exclusively on curated, high-quality AI content.'
      },
      {
        heading: 'Content Structure',
        text: 'The site is organized into progressive learning paths, from fundamental concepts to advanced techniques. Each section includes articles, code examples, case studies, and recommended external resources. Special attention was given to creating clear visualizations and interactive elements to explain complex AI concepts.'
      },
      {
        heading: 'Technical Approach',
        text: 'We chose Docusaurus for its excellent documentation-focused features, including versioning, search functionality, and MDX support. This allowed us to combine rich markdown content with interactive React components. The site is statically generated, resulting in exceptional performance and reliability.'
      },
      {
        heading: 'Community Impact',
        text: 'Road 2 AI has become a go-to resource for AI education, with contributions from over 30 experts in the field. The platform receives significant traffic from academic institutions and has been incorporated into several university curriculums as supplementary material for AI and machine learning courses.'
      }
    ],
    client: 'Personal Project',
    date: '2025',
    technologies: ['Docusaurus', 'JavaScript'],
    website: 'https://road2.ai/',
    link: 'https://road2.ai/'
  },
  {
    id: 3,
    title: 'HMM Microservices Platform',
    category: 'enterprise',
    thumbnail: '/images/works/hmm_microservices.jpg',
    description: 'Scalable microservices architecture for internal project',
    fullDescription: 'A robust microservices platform designed for enterprise applications, featuring a modular architecture that enhances scalability, maintainability, and deployment efficiency.',
    content: [
      {
        heading: 'Business Challenge',
        text: 'HMM\'s legacy monolithic system was struggling with the increasing complexity of operations and hindering the company\'s ability to rapidly implement new features. The organization needed a flexible solution that could evolve with their growing business needs while maintaining reliability for critical operations.'
      },
      {
        heading: 'Architectural Solution',
        text: 'We designed a comprehensive microservices architecture that decomposed the monolith into domain-specific services. Each service maintains its own database and communicates through well-defined APIs. The architecture includes service discovery, load balancing, circuit breakers for fault tolerance, and centralized logging and monitoring.'
      },
      {
        heading: 'Frontend Integration',
        text: 'The user interface was rebuilt using Vue 3 with a component-based architecture that mirrors the backend microservices. We implemented a micro-frontend approach for larger application sections, allowing teams to work independently on different parts of the interface while maintaining a consistent user experience through shared design systems.'
      },
      {
        heading: 'Results & Benefits',
        text: 'The migration resulted in a 70% reduction in deployment time, enabling weekly releases instead of quarterly updates. System reliability improved with 99.99% uptime, and the development team can now scale individual services based on demand. The modular nature of the platform has allowed HMM to rapidly integrate third-party services and adapt to changing business requirements.'
      }
    ],
    client: 'HMM',
    date: '2022',
    technologies: ['Vue 3', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL'],
    website: 'https://www.hmm21.com/',
    link: 'https://www.hmm21.com/'
  },
  {
    id: 4,
    title: 'ERP System',
    category: 'enterprise',
    thumbnail: '/images/works/erp_system.png',
    description: 'Enterprise resource planning system with multiple features',
    fullDescription: 'A comprehensive ERP solution designed to streamline business processes, integrate data across departments, and provide actionable insights through advanced reporting capabilities.',
    content: [
      {
        heading: 'Project Scope',
        text: 'This enterprise resource planning system was developed to replace disparate legacy systems across the client\'s organization. The project encompassed modules for finance, inventory management, human resources, customer relationship management, and business intelligence, with the goal of creating a single source of truth for all business data.'
      },
      {
        heading: 'Implementation Strategy',
        text: 'We adopted a phased approach, starting with core financial modules and gradually extending to other departments. This minimized disruption while allowing for continuous refinement based on user feedback. Each module was extensively customized to align with the client\'s specific workflows and regulatory requirements.'
      },
      {
        heading: 'Technical Architecture',
        text: 'The system was built with Vue 2 and Element UI for a consistent and intuitive user experience. The backend utilizes Node.js with a service-oriented architecture, connecting to a MariaDB database optimized for transaction processing and reporting. We implemented robust data validation, workflow engines, and document management capabilities throughout the system.'
      },
      {
        heading: 'Business Impact',
        text: 'The new ERP system reduced manual data entry by 85% and provided real-time visibility across operations. Process automation led to a 30% increase in accounting efficiency and a 25% reduction in inventory costs through improved forecasting. The integrated reporting dashboards have enabled more informed decision-making at all management levels.'
      }
    ],
    client: 'Corporate Client',
    date: '2021',
    technologies: ['Vue 2', 'Element UI', 'Node.js', 'MariaDB'],
    link: '#'
  },
  {
    id: 5,
    title: 'E-commerce B2B/B2C',
    category: 'web',
    thumbnail: '/images/works/ecommerce.jpg',
    description: 'Industry domain e-commerce platform',
    fullDescription: 'A versatile e-commerce platform supporting both B2B and B2C operations, with features including product management, inventory tracking, order processing, and customer relationship management.',
    content: [
      {
        heading: 'Dual Market Approach',
        text: 'This e-commerce platform was uniquely designed to serve both business clients and retail consumers through a single integrated system. For B2B customers, we implemented contract pricing, approval workflows, and bulk ordering capabilities. The B2C experience focuses on personalization, product discovery, and streamlined checkout processes.'
      },
      {
        heading: 'Custom Features',
        text: 'The platform includes sophisticated product configuration tools for complex items, real-time inventory management across multiple warehouses, automated reordering systems, and comprehensive analytics. We developed a custom recommendation engine that adapts to both business purchasing patterns and consumer preferences.'
      },
      {
        heading: 'Technology Stack',
        text: 'Built on Vue.js with a responsive design, the frontend delivers a consistent experience across devices. The backend relies on Node.js microservices communicating with a MongoDB database, chosen for its flexibility with varying product attributes and catalog structures. The system integrates with multiple payment gateways, shipping providers, and the client\'s existing ERP.'
      },
      {
        heading: 'Performance Metrics',
        text: 'Since launching, the platform has processed over $5 million in transactions with an average order value 20% higher than the previous system. The streamlined B2B portal has attracted 40% more business clients, while the enhanced B2C experience has improved conversion rates by 35% and reduced cart abandonment by 28%. Mobile ordering now accounts for 50% of all consumer sales.'
      }
    ],
    client: 'Retail Client',
    date: '2021',
    technologies: ['Vue 2', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    id: 6,
    title: 'Mobile Ordering App',
    category: 'mobile',
    thumbnail: '/images/works/mobile_app.png',
    description: 'Products ordering app with promotions and cart features',
    fullDescription: 'A mobile application for streamlined product ordering, featuring an intuitive user interface, personalized promotions, and a seamless checkout experience.',
    content: [
      {
        heading: 'User-Centered Design',
        text: 'This mobile ordering application was developed with a focus on simplicity and efficiency. Through extensive user research and testing, we created an interface that allows customers to browse products, place orders, and track deliveries with minimal friction. The app adapts to user behavior, highlighting frequently purchased items and relevant categories.'
      },
      {
        heading: 'Smart Promotions System',
        text: 'A key feature of the application is its intelligent promotions engine. The system analyzes purchase history, browsing behavior, and seasonal factors to offer personalized discounts and bundle recommendations. Push notifications are strategically timed based on user engagement patterns to maximize conversion without causing notification fatigue.'
      },
      {
        heading: 'Technical Implementation',
        text: 'Developed with Flutter to ensure consistent performance across iOS and Android platforms, the app maintains a single codebase while delivering native-quality experiences. Backend services are built with Node.js, featuring real-time inventory updates, secure payment processing, and seamless integration with the client\'s order fulfillment systems.'
      },
      {
        heading: 'Results',
        text: 'The app has been downloaded over 50,000 times and maintains a 4.7-star rating across app stores. Mobile orders now represent 65% of total sales, up from 15% before the app launch. Average order frequency has increased by 40%, and the personalized promotions have achieved a 28% higher redemption rate compared to traditional marketing campaigns.'
      }
    ],
    client: 'Retail Client',
    date: '2024',
    technologies: ['Flutter', 'Dart', 'Node.js'],
    link: '#'
  },
  {
    id: 7,
    title: 'Gas South Supply Chain',
    category: 'web',
    thumbnail: '/images/works/gas_south.png',
    description: 'System for LPG, CNG, and LNG distribution management',
    fullDescription: 'A specialized system for managing the distribution of LPG, CNG, and LNG, with features for tracking inventory, managing logistics, and optimizing supply chain operations.',
    content: [
      {
        heading: 'Industry Challenge',
        text: 'Gas South faced significant challenges in optimizing their complex supply chain for different gas types (LPG, CNG, and LNG) across multiple regions. Their legacy systems lacked real-time visibility, creating inefficiencies in distribution and increasing operational costs. Regulatory compliance reporting was largely manual and error-prone.'
      },
      {
        heading: 'Solution Architecture',
        text: 'We developed a comprehensive supply chain management system that provides end-to-end visibility from production facilities to distribution centers and end customers. The platform features real-time inventory tracking with IoT integration for storage tanks, automated route optimization for delivery vehicles, and predictive analytics for demand forecasting.'
      },
      {
        heading: 'Technical Framework',
        text: 'The system was built using React and Next.js for a responsive front-end experience across desktop and mobile devices. The backend utilizes Node.js with a MongoDB database, chosen for its flexibility with geospatial data and complex document relationships. We implemented secure APIs for integration with third-party logistics systems and regulatory reporting portals.'
      },
      {
        heading: 'Business Outcomes',
        text: 'The new system has reduced distribution costs by 18% through optimized routing and loading. Real-time inventory visibility has decreased stockouts by 65% while allowing a 20% reduction in safety stock levels. The automated compliance reporting has saved approximately 40 hours per month in manual processes and virtually eliminated reporting errors, significantly reducing regulatory risks.'
      }
    ],
    client: 'Gas South',
    date: '2020',
    technologies: ['React.js', 'Next.js', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    id: 8,
    title: 'Industry News Network',
    category: 'web',
    thumbnail: '/images/works/industry_news.png',
    description: 'Social network for industry community news sharing',
    fullDescription: 'A social platform designed for industry professionals to share and discuss news, trends, and insights, featuring content curation, user engagement tools, and community management.',
    content: [
      {
        heading: 'Platform Concept',
        text: 'The Industry News Network was created to address the fragmentation of specialized industry information across numerous sources. The platform serves as a centralized hub where professionals can discover relevant content, share insights, and engage with peers. Unlike general social networks, it focuses exclusively on verified, high-quality industry information with professional context.'
      },
      {
        heading: 'Community Features',
        text: 'The platform includes sophisticated content curation algorithms that personalize news feeds based on professional interests and industry segments. Users can create and join specialized groups, participate in moderated discussions, and establish themselves as thought leaders through contribution systems. Verification processes ensure participants are legitimate industry professionals.'
      },
      {
        heading: 'Development Approach',
        text: 'Built with React and Next.js, the site delivers excellent performance with progressive enhancement for varying connection speeds. The backend uses Node.js microservices architecture for scalability, with specialized services for content ingestion, recommendation algorithms, notification systems, and analytics. Content moderation utilizes a combination of AI and human review.'
      },
      {
        heading: 'Growth & Engagement',
        text: 'Since launch, the platform has grown to over 35,000 verified industry professionals from 1,200+ companies. User engagement metrics show an average of 12 minutes daily active time, with 60% of users contributing content or comments monthly. The platform has become an essential information source for several industry segments, with content frequently cited in traditional media outlets.'
      }
    ],
    client: 'Media Client',
    date: '2021',
    technologies: ['React.js', 'Next.js', 'Node.js'],
    link: '#'
  }
];

export const portfolioCategories = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'Web Apps' },
  { id: 'ai', name: 'AI Projects' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'enterprise', name: 'Enterprise' },
]; 