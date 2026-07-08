import keysightLogo from '../assets/images/keysight_technologies_logo.jpeg';
import citiLogo from '../assets/images/citi_logo.jpeg';
import fuquaLogo from '../assets/images/fuqua_school_of_business_logo.jpeg';
import ssnLogo from '../assets/images/ssnlogo.jpeg';

export const portfolioData = {
  personal: {
    name: 'Sriya Vemuri',
    tagline: 'Graduate from the Fuqua School of Business.',
    logo: 'SV',
    email1: 'sriya.vemurii@gmail.com',
    email2: 'sriya.vemurii@gmail.com',
    location: 'Durham, NC',
    profileImage: '/assets/images/Gradpic.jpeg',
    domain: 'sriyavemuri.com',
    resume: '/SaiSriyaVemuri.pdf', 
  },

  stats: [
    { label: 'Years Experience', value: '2+' },
    { label: 'Location', value: 'Durham, NC' },
  ],

  about: {
    bio: `I am a recent graduate of Duke University\’s Fuqua School of Business with a Master of Quantitative Management in Business Analytics. I worked with Keysight Technologies for my capstone project, and built a Next Best Offer recommendation system using machine learning and extensive Tableau analysis.

Prior to Fuqua, I worked in Citi\’s APAC Software Development organization, building ETL pipelines, RESTful APIs, and microservices-based applications for financial reporting and transaction data workflows. 

My experience is a mix of software engineering, data systems, and analytics.I have had the opportunity to contribute across all three areas, building reliable systems, improving data quality, and helping transform complex data into insights that support business decisions.
These experiences have shaped how I approach problems  focusing on accuracy, scalability, and business impact.

I love to write poetry and will never say no to a good cup of coffee :)`
, whatIDo: [
      {
        title: 'Data Analytics Engineering',
        description: 'Designing and implementing data pipelines, ETL processes, and analytics systems',
        icon: '📊',
      },
      {
        title: 'Business/Data Analytics',
        description: 'Using data to inform business decisions and drive strategic initiatives',
        icon: '📈'
      },
      {
        title: 'AI/ML Integration',
        description: 'Implementing machine learning models and AI features into business applications',
        icon: '🤖',
      },
      {
        title: 'Full-Stack Development',
        description: 'Building end-to-end applications with React, Node.js, and modern frameworks',
        icon: '💻',
      },
    ],
  },

  workExperience: [
    {
      company: 'Keysight Technologies',
      role: 'Business Analytics Consultant',
      period: '2026 - 2026',
      location: 'Durham, NC',
      logo: keysightLogo,
      achievements: [
       'Worked with Keysight Technologies on a Next Best Offer recommendation project to support cross-sell and upsell opportunities for the sales team.',
       'Built a customer-level recommendation model using product, customer, and transaction data to identify the top 10 products each client was most likely to purchase next.',
       'Engineered and validated 55 customer, product, and interaction-level features, with LambdaRank delivering the strongest ranking performance.',
       'Created Tableau dashboards and conducted subcategory, regional, threshold, and sensitivity analyses to identify revenue opportunities and translate model outputs into business insights.',
      
        ],
      technologies: ['Python', 'SQL', 'Machine Learning', 'Recommendation Systems', 'LambdaRank', 'Tableau', 'Customer Analytics'],
    },
    {
      company: 'Citi',
      role: 'Technical Analyst',
      period: '2023 - 2025',
      location: 'Chennai, India',
      logo: citiLogo,
      achievements: [
       /* 'Built and maintained production-grade Java/SpringBoot services supporting data ingestion, transformation, regulatory reporting workflows, ensuring 95% system uptime for business-critical processes',
        'Redesigned and optimized SQL table schemas within ETL pipelines to improve data consistency, accessibility, and downstream reporting performance',
        'Enhanced analytics and reporting workflows by developing 10+ backend features including automated Excel exports, improving data usability for downstream consumers',
        'Designed and executed end-to-end testing for Kafka-based streaming workflows, validating reliable real-time data flow across producers, topics, and consumers in a microservices environment',
        'Wrote and optimized complex SQL queries on databases exceeding 3M+ records, supporting both operational services and analytics use cases while maintaining acceptable query performance',
        'Configured and validated ISO CAMT messages to meet business and regulatory requirements, ensuring accurate transaction processing and cash management reporting',
        'Built and deployed scalable backend services using Java, SpringBoot and MongoDB, contributing to stable CI/CD pipelines and consistent releases across environments',
        'Developed JUnit test cases to validate business logic and enforce coding standards and participated in code reviews to improve code quality and reduce regression issues',
        'Collaborated within an Agile Scrum team, working closely with engineers, QA, and product stakeholders to deliver production-ready data-driven features on schedule',
     */ /*'Designed MySQL entity relationship models for reporting and analytics, improving query performance by 40% through indexing and normalized schema design',
        'Standardized Jenkins CI CD for data pipeline deployments (build, test, package, promote), reducing failed releases by 20% and improving release governance',
        'Built reusable Python modules for transformation, validation, and configuration driven runs, enabling 10 plus pipelines to share common logic and lowering maintenance effort by 25%',
        'Built a transaction network style visualization graph to support analyst investigation, reducing ad hoc data pulls by 25% and improving self serve analytics',
        'Integrated Hadoop and Spark outputs into microservices APIs, improving data freshness from hourly to under 10 minutes for near real time decision support',
        'Integrated ISO 20022 CAMT message support end to end (ingestion, parsing, validation, transformation), increasing message coverage from 0 to 95% for the new format and improving data standardization across services',
      */'Worked on Citi\’s Intraday Liquidity Management platform, a global financial technology product used across 80+ countries to support liquidity reporting and transaction monitoring',
      'Built and improved data workflows that transformed high-volume financial transaction data into reliable reporting outputs for business and operations teams.',
      'Improved reporting reliability and performance through SQL optimization, Python validation modules, data quality checks, and reusable ETL logic.',
      'Supported near real-time decision-making by integrating Hadoop and Spark outputs into reporting workflows, reducing data latency to under 10 minutes.',
      'Worked with ISO 20022 CAMT message data to improve reporting consistency, data standardization, and downstream liquidity analysis.',    
      ],
      technologies: ['Python', 'SQL', 'Java', 'Spring Boot', 'ETL', 'Spark', 'Hadoop', 'MongoDB', 'Jenkins', 'Data Validation'],
    },
    {
      company: 'Citi',
      role: 'Intern',
      period: '2022 - 2022',
      location: 'Chennai, India',
      logo: citiLogo,
      achievements: [
        'Developed an internal tool to automate the upload and retrieval of objects from Amazon S3 cloud storage, reducing manual effort and processing time by 75%',
        'Implemented JSON comparison and CSV diff-generation features in Java, SpringBoot and AngularJS enhancing data validation and usability for internal users',
      ],
      technologies: ['Java', 'Spring Boot', 'AngularJS', 'Amazon S3', 'Bit Bucket', 'Jenkins'],
    },
  ],

  education: [
    {
      degree: 'Master of Quantitave Management Business Analytics',
      institution: 'Fuqua School of Business',
      period: 'May 2026',
      location: 'Durham, NC',
      logo: fuquaLogo,
      description: 'Specialized in Marketing Analytics and Business Analytics with a focus on data-driven solutions using Machine Learning, AI and analytical tools',
      achievements: ['Led multiple collaborative projects'],
    },
    {
      degree: 'Bachelor in Technology in Information Technology',
      institution: 'SSN College of Engineering',
      period: 'May 2023',
      location: 'Chennai, India',
      logo: ssnLogo,
      description: 'Focus on Software Engineering, Data Structures, and Machine Learning',
      achievements: ['Graduated with Distinction', 'Editor of the College Magazine'],
    },
  ],

  projects: [
    {
      title: 'Lead Scoring & Funnel Analytics',
      description: ' Designed a dashboard ready REST API over 84k Salesforce leads to compute funnel conversion, velocity KPIs, and segmentation, plus rule-based and ML lead scores predicting PQL/launch/first shipment within 30/60/90-day windows.',
      technologies: ['Spring Boot', 'MySQL'],
      github: 'https://github.com/sriya-vemuri/LeadAnalyticsDashboard',
      live:null,
      featured: true,
    },
    {
      title: 'Steam Metadata to Genres: Cross-Validated ML Pipeline',
      description: 'Predicts one or more genres for Steam games from metadata to support tagging and marketing decisions. Engineers features like price, platforms, languages to train and compare one-vs-rest logistic regression, random forest and SVC with 10-fold CV and threshold tuning.',
      technologies: ['Python', 'Feature Engineering', 'Regression'],
      github: 'https://github.com/sriya-vemuri/Steam-Metadata-to-Genres',
      live: null,
      featured: true,
    },
    /*{
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard',
      technologies: ['React', 'Next.js', 'Stripe', 'PostgreSQL', 'AWS'],
      github: 'https://github.com/username/ecommerce',
      live: 'https://ecommerce-demo.com',
      featured: false,
    },
    {
      title: 'Data Processing Framework',
      description: 'High-performance framework for processing large-scale datasets with distributed computing',
      technologies: ['Python', 'Apache Spark', 'Airflow', 'PostgreSQL'],
      github: 'https://github.com/username/data-framework',
      live: null,
      featured: false,
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, notifications, and team collaboration features',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      github: 'https://github.com/username/task-app',
      live: 'https://task-demo.com',
      featured: false,
    },
    {
      title: 'API Gateway Service',
      description: 'Microservices API gateway with authentication, rate limiting, and request routing',
      technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'Nginx'],
      github: 'https://github.com/username/api-gateway',
      live: null,
      featured: false,
    },*/
  ],

  blog: [
   /* {
      title: ,
      date: ,
      excerpt:,
      slug: ,
      category: ,
    },*/
    
  ],

  skills: {
    programmingLanguages: ['Java', 'Spring Boot', 'Python', 'SQL', 'NoSQL','React', 'AngularJS'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Oracle', 'MariaDB','Hadoop', 'Elasticsearch', 'Apache Kafka', 'Apache Spark'],
    analyticalMethods: ['Hypothesis Testing', 'A/B Testing', 'Statistical Modeling', 'Data Visualization', 'Regression Analysis', 'Forecasting'],
    tools: ['Git', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Tableau', 'Excel'],
    ml: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
  },

  certifications: [
    
  ],

  socials: [
    { name: 'GitHub', url: 'https://github.com/sriya-vemuri', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sai-sriya-v/', icon: 'linkedin' },
    { name: 'Email', url: 'mailto:sriya.vemuri@duke.edu', icon: 'email' },
  ],
};
