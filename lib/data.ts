export const personalInfo = {
  name: "Piyush Kulkarni",
  fullName: "Piyush Girish Kulkarni",
  location: "Hamburg, Germany",
  email: "kulpiyush15@gmail.com",
  phone: "+4915560762743",
  linkedin: "https://www.linkedin.com/in/piyush-kulkarni-1649ba148/",
  github: "https://github.com/kulpiyush",
};

export const roles = [
  "Data Engineer",
  "AI Engineer",
  "GenAI Developer",
  "Data Scientist",
  "AI Consultant",
];

export const aboutSummary =
  "Versatile data and AI professional with a strong computer science foundation, specializing in building production-grade data pipelines, intelligent agentic systems, and advanced LLM applications. Proven track record leading technical teams, deploying semantic search engines, and engineering scalable ETL/ELT architectures across cloud platforms.";

export const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Production Pipelines", value: "5+" },
  { label: "Certification", value: "AWS Certified" },
  { label: "Team Leadership", value: "5-Member Team" },
];

export const skillCategories = [
  {
    title: "Languages & Core",
    skills: ["Python", "SQL", "JavaScript", "Git", "CI/CD"],
  },
  {
    title: "Data Engineering",
    skills: [
      "Apache Airflow",
      "Dagster",
      "Apache Kafka",
      "DuckDB",
      "AWS S3",
      "Docker",
      "ETL/ELT",
    ],
  },
  {
    title: "AI & GenAI",
    skills: [
      "LangChain",
      "RAG",
      "Self-RAG",
      "PyTorch",
      "Sentence Transformers",
      "LLMs",
      "MCP Servers",
    ],
  },
  {
    title: "ML & Data Science",
    skills: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "CNNs",
      "Deep Learning",
      "NLP",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "ChromaDB", "SQLAlchemy", "DuckDB"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Docker", "REST APIs", "Prometheus", "Grafana"],
  },
  {
    title: "BI & Visualization",
    skills: ["Power BI", "Streamlit", "Matplotlib", "Data Modeling"],
  },
];

export const experiences = [
  {
    role: "Data Engineer (Working Student)",
    company: "STATISTA GmbH",
    location: "Hamburg, Germany",
    period: "July 2025 – Present",
    bullets: [
      "Built automated ETL pipelines using Selenium and REST APIs to centralize 20+ international economic datasets into a scalable AWS S3 data lake with medallion architecture.",
      "Optimized system stability by implementing chunked processing in pandas to ingest files containing millions of records.",
      "Engineered comprehensive data quality validations and unit mapping transformations to standardize global data formats.",
    ],
  },
  {
    role: "GenAI & Data Infrastructure Engineer",
    company: "Galagos AI",
    location: "Hamburg, Germany",
    period: "March 2025 – August 2025",
    bullets: [
      "Led a 5-member team to architect a Semantic Search Engine using LangChain and ChromaDB for complex bioinformatics queries.",
      "Developed an autonomous Self-RAG agent to iteratively retrieve and evaluate context, significantly improving search accuracy.",
      "Directed core architectural decisions for automated data ingestion, vector embeddings, and external platform integrations via MCP servers.",
    ],
  },
  {
    role: "Data Scientist",
    company: "Quantum Innotek Solutions",
    location: "India",
    period: "Dec 2023 – Aug 2024",
    bullets: [
      "Engineered a targeted search and matching algorithm using KNN and FLAN to process complex data structures and deliver relevant results.",
      "Built custom relational databases and data access layers via SQLAlchemy and MySQL with Flask backends.",
      "Developed and maintained Git-based CI/CD pipelines for automated continuous deployment to Linode production servers.",
    ],
  },
  {
    role: "Software Engineer & Data Analyst",
    company: "CIS IT Solutions Pvt Ltd",
    location: "India",
    period: "Feb 2023 – Dec 2023",
    bullets: [
      "Engineered automated cloud workflow applications using AWS and Microsoft Power Apps to streamline client business pipelines.",
      "Conducted deep EDA and deployed interactive dashboards in Power BI for operational research.",
      "Developed predictive data models and automated mathematical logic using Python and NumPy.",
    ],
  },
];

export const projects = [
  {
    title: "IoT Smoke Detection Pipeline",
    description:
      "Real-time event-streaming pipeline for IoT sensor telemetry with automated predictive model deployment and monitoring.",
    tech: [
      "Apache Kafka",
      "Airflow",
      "Docker",
      "Scikit-learn",
      "Prometheus",
      "Grafana",
    ],
    link: "https://github.com/MissDinosaur/IOT_Smoke_Detection_Data_Pipeline",
    highlights: [
      "Real-time streaming",
      "95% test coverage",
      "Live drift monitoring",
    ],
  },
  {
    title: "Restaurant Data ELT Pipeline",
    description:
      "Automated ELT pipeline with Dagster orchestration, Azure Blob Storage, and DuckDB transformations using medallion architecture.",
    tech: ["Dagster", "DuckDB", "Azure", "Python", "Medallion Architecture"],
    link: "https://github.com/kulpiyush/restaurant_pipeline",
    highlights: [
      "Automated daily runs",
      "Medallion architecture",
      "QA validation",
    ],
  },
  {
    title: "FoodVisionAI",
    description:
      "Food recognition and nutrition app with fine-tuned CNNs achieving 95% accuracy and ultra-low latency semantic matching.",
    tech: [
      "PyTorch",
      "EfficientNet",
      "Sentence Transformers",
      "Streamlit",
      "Ollama",
    ],
    link: "https://github.com/kulpiyush/Food_Vision_AI",
    highlights: ["131K+ images", "~14ms latency", "95% accuracy"],
  },
];

export const education = [
  {
    degree: "Master of Science – Applied Data Science & Analytics",
    institution: "SRH University of Heidelberg Campus Hamburg",
    location: "Hamburg, Germany",
    period: "Oct 2024 – Present",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Big Data with Python",
      "Statistics",
      "Data Management",
    ],
  },
  {
    degree: "Bachelor of Technology – Computer Science & Engineering",
    institution: "MIT ADT University",
    location: "Pune, India",
    period: "Class of 2022",
    coursework: ["Core AI Technologies", "Deep Learning", "Machine Learning"],
  },
];

export const achievements = [
  "AWS Certified Cloud Practitioner",
  "Copyright: Perspective Approach for Mango Ripening Classifiers",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
