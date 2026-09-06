export const PROJECTS = [
  {
    name: "Leaves & Payroll Management System",
    type: "Fullstack",
    description:
      "A fullstack application for managing employee leaves and payroll processing, covering request workflows, approvals, and automated payroll calculations.",
    tools: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Redis", "Docker"],
    github: null,
    demo: null,
    note: "Client code.",
  },
  {
    name: "Nutritional Ingredient Analyzer",
    type: "API",
    description:
      "A REST API that retrieves product ingredient data based on EAN codes using Open Food Facts, evaluates nutritional scores, and flags ingredients based on religious dietary restrictions.",
    tools: ["Rust"],
    github: null,
    demo: null,
    note: "Code available upon request.",
  },
  {
    name: "Baby Routine Tracker",
    type: "Mobile",
    description:
      "A mobile app to track a baby's daily routine by scanning QR codes assigned to activities such as feeding, diaper changes, and naps. Sends push notifications when it's time for the next milk bottle or when too long has passed since the last diaper change.",
    tools: ["React Native", "NestJS", "PostgreSQL", "Supabase"],
    github: null,
    demo: null,
    note: "Code available upon request.",
  },
  {
    name: "Customer Service Requests",
    type: "Frontend",
    description:
      "Built the frontend for a customer service request management application, covering request submission, tracking, and resolution workflows.",
    tools: ["AngularJS", "Bootstrap"],
    github: null,
    demo: null,
    note: "Client code.",
  },
  {
    name: "Company Parking Management System",
    type: "Fullstack",
    description:
      "An internal tool that automates the process of issuing vehicle-use authorizations to drivers and tracking returns, including km driven and side notes.",
    tools: ["React", "Node.js", "Express.js", "MongoDB"],
    github: null,
    demo: null,
    note: "Client code.",
  },
];

export const EXPERIENCES = [
  {
    company: "Sensory-minds",
    location: "Offenbach am Main",
    roles: [
      { title: "Senior Fullstack Web Developer", period: "Oct 2023 – Present" },
      { title: "Fullstack Web Developer", period: "Oct 2022 – Oct 2023" },
    ],
    description:
      "Building and maintaining a B2B portal and admin panel for managing business operations in the tobacco distribution industry within a 10-person team. Contributing to technical decision-making, architecture, and team mentoring.",
    bullets: [
      "Translating business requirements into scalable technical solutions in close collaboration with stakeholders.",
      "Contributing to solution design during grooming sessions and sprint planning.",
      "Designing and implementing APIs and background jobs to automate business workflows and ensure reliable data processing.",
      "Collaborating with designers to build a responsive frontend aligned with the design vision.",
      "Onboarding new team members by guiding them through system architecture, local setup, and codebase structure.",
      "Conducting code reviews and providing recommendations for optimization, refactoring, and maintainability.",
      "Pair programming on complex tasks to improve code quality and share knowledge across the team.",
      "Daily maintenance, bug fixing, and continuous delivery of new features.",
    ],
    tools: [
      "React",
      "TypeScript",
      "Next.js",
      "GraphQL",
      "Directus",
      "Redis",
      "PostgreSQL",
      "Remix",
      "Cypress",
      "Jest",
      "Vitest",
      "Azure DevOps",
    ],
  },
  {
    company: "Total Energies",
    location: "Paris",
    roles: [
      { title: "Fullstack Web Developer", period: "Nov 2020 – Oct 2022" },
    ],
    description:
      "Developed a product management portal and a showcase website for lubricant products across multiple affiliates, within a 5-person team.",
    bullets: [
      "Building an API integrating 8 different data sources including external APIs, CMS, ERP, databases, and Redis.",
      "Developing a highly optimized responsive frontend in continuous collaboration with the UI/UX design team.",
      "Collaborating on technical solutions during grooming sessions.",
      "Writing unit and integration tests to ensure code reliability.",
      "Pair programming on complex features to maintain code quality.",
      "Daily maintenance, debugging, and delivery of new features.",
      "Managing CI/CD pipelines and deployment workflows using Azure DevOps to ensure reliable and automated releases.",
      "Facilitating daily standups, sprint planning, and retrospectives as Scrum Master.",
      "Tracking sprint progress, removing blockers, and ensuring the team stayed aligned with sprint goals.",
    ],
    tools: [
      "React",
      "TypeScript",
      "Next.js",
      "GraphQL",
      "Directus",
      "Redis",
      "PostgreSQL",
      "Remix",
      "Cypress",
      "Jest",
      "Vitest",
      "Azure DevOps",
    ],
  },
  {
    company: "RATP Group",
    location: "Paris",
    roles: [
      { title: "Fullstack Web Developer", period: "May 2019 – Nov 2020" },
    ],
    description:
      "Developed an application for managing construction sites across the METRO, RER, and TRAMWAY rail networks, within a 20-person team.",
    bullets: [
      "Developing responsive dashboards with complex data visualizations using D3.js.",
      "Building backend services using Java 8 (Play Framework) including APIs, document generation (PDF, CSV, DOCX, XLSX), and automated email reminders.",
      "Writing unit and integration tests to ensure code reliability.",
      "Configuring and maintaining CI/CD pipelines using Jenkins for automated builds, testing, and deployments.",
    ],
    tools: ["React", "Java 8", "D3.js", "PostgreSQL", "Jest", "Jenkins"],
  },
  {
    company: "Xtech",
    location: "Tunis",
    roles: [
      { title: "Fullstack Web Developer", period: "Oct 2018 – Apr 2019" },
    ],
    description:
      "Developed a scalable event management application and a financial dashboard module for a major music industry company.",
    bullets: [
      "Optimizing data fetching algorithms across 5 data sources, reducing processing time from 90 minutes to 8 minutes.",
      "Implementing APIs using FeathersJS.",
      "Building responsive dashboards with optimized rendering and improved data flow performance.",
      "Writing unit tests to ensure code reliability.",
    ],
    tools: [
      "React",
      "Redux",
      "TypeScript",
      "Node.js",
      "FeathersJS",
      "MongoDB",
      "Jest",
      "Mocha",
    ],
  },
  {
    company: "LPP Digital",
    location: "Brasilia",
    roles: [
      { title: "Fullstack Web Developer", period: "Jan 2018 – Oct 2018" },
    ],
    description:
      "Developed a school management system featuring smart tools including an exam generator, auto-corrector, schedule generator, and student notebook generator, within a 5-person team.",
    bullets: [
      "Full ownership of the frontend: proposing, developing, and testing solutions.",
      "Contributing to API development.",
      "Facilitating Scrum ceremonies including daily standups, sprint planning, and retrospectives.",
      "Reporting progress and presenting deliverables to stakeholders.",
    ],
    tools: ["React", "Node.js", "MongoDB", "D3.js", "Jest", "Mocha"],
  },
  {
    company: "EGOE Developer",
    location: "Tunis",
    roles: [
      { title: "Fullstack Web Developer", period: "Jun 2016 – Jan 2018" },
    ],
    description:
      "Developed multiple web and mobile applications across various business domains within a 5-person team, including a web media player, an advertising mobile app, a competitor monitoring tool, and an interactive family tree visualizer.",
    bullets: [
      "Migrating legacy applications to Angular.",
      "Developing a mobile application using React Native and Redux.",
      "Designing data models and building web scrapers using PhantomJS.",
      "Building dashboards with interactive lists and charts.",
      "Developing a custom interactive family tree visualization using D3.js.",
    ],
    tools: [
      "React",
      "React Native",
      "PhantomJS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "D3.js",
    ],
  },
];

export const SKILLS_ICONS = {
  languages: {
    javascript: "Javascript",
    typescript: "Typescript",
    java: "Java",
    solidity: "Solidity",
    rust: "Rust",
  },
  frontend: {
    html: "HTML5",
    css: "CSS3",
    react: "React",
    reactnative: "Reactnative",
    angularjs: "Angularjs",
    tailwind: "Tailwind",
    bootstrap: "Bootstrap",
    redux: "Redux",
    d3: "D3js",
    next: "Nextjs",
    remix: "Remix",
    vite: "Vitejs",
  },
  backend: {
    node: "Nodejs",
    express: "Express",
    feathers: "Feathersjs",
    nest: "Nestjs",
    graphql: "Graphql",
  },
  databases: {
    mongodb: "Mongodb",
    postgres: "Postgresql",
    redis: "Redis",
    elasticsearch: "Elasticsearch",
    mongoose: "Mongoose",
    prisma: "Prisma",
    supabase: "Supabase",
  },
  testing: {
    cypress: "Cypress",
    playwright: "Playwright",
    selenium: "Selenium",
    cucumber: "Cucumber",
    jest: "Jest",
    vitest: "Vitest",
    mocha: "Mocha",
  },
  devops: {
    docker: "Docker",
    git: "Git",
    github: "Github",
    linux: "Linux",
    nginx: "Nginx",
    azuredevops: "Azuredevops",
    jenkins: "Jenkins",
  },
  tools: {
    jira: "Jira",
    figma: "Figma",
    postman: "Postman",
    directus: "Directus",
  },
};

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/foued-melki-36ba7b197/";
export const GITHUB_URL = "https://github.com/FouedM";
