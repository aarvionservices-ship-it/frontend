export interface Job {
    id: string; // Changed to string for slug usage or keep separate slug field
    slug: string;
    title: string;
    department: string;
    type: string;
    WorkMode: string;
    location: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    createdAt: Date;
}

export const jobs: Job[] = [
    {
        id: '1',
        slug: 'senior-react-developer',
        title: "Senior React Developer",
        department: "Engineering",
        type: "Full-time",
        WorkMode: "Remote",
        location: "Hyderabad",
        description: "We are looking for an experienced Senior React Developer to join our dynamic engineering team. You will play a key role in building scalable web applications and shaping our frontend architecture.",
        responsibilities: [
            "Develop modern, interactive user interfaces using React and TypeScript.",
            "Collaborate with designers and backend engineers to deliver high-quality features.",
            "Optimize applications for maximum speed and scalability.",
            "Mentor junior developers and conduct code reviews.",
            "Stay up-to-date with emerging frontend technologies and best practices."
        ],
        requirements: [
            "5+ years of experience in frontend development.",
            "Strong proficiency in React, TypeScript, and modern CSS (Tailwind).",
            "Experience with state management (Redux, Zustand, or Context API).",
            "Familiarity with RESTful APIs or GraphQL.",
            "Excellent problem-solving and communication skills."
        ],
        createdAt: new Date('2026-02-09'),
    },
    {
        id: '2',
        slug: 'ui-ux-designer',
        title: "UI/UX Designer",
        department: "Design",
        type: "Full-time",
        WorkMode: "Hybrid",
        location: "Hyderabad",
        description: "Aarvion Services is seeking a creative UI/UX Designer to craft intuitive and visually stunning user experiences. You will work closely with product managers and developers to bring ideas to life.",
        responsibilities: [
            "Create wireframes, prototypes, and high-fidelity mockups.",
            "Conduct user research and usability testing to inform design decisions.",
            "Maintain and evolve our design system.",
            "Collaborate with the development team to ensure design fidelity.",
            "Stay current with design trends and tools (Figma, Adobe XD)."
        ],
        requirements: [
            "3+ years of experience in UI/UX design.",
            "Strong portfolio showcasing web and mobile design projects.",
            "Proficiency in Figma or similar design tools.",
            "Understanding of HTML/CSS capabilities and limitations.",
            "Good understanding of user-centered design principles."
        ],
        createdAt: new Date('2026-02-10'),
    },
    {
        id: '3',
        slug: 'digital-marketing-specialist',
        title: "Digital Marketing Specialist",
        department: "Marketing",
        type: "Part-time",
        WorkMode: "Remote",
        location: "Hyderabad",
        description: "We need a results-driven Digital Marketing Specialist to help grow our brand presence. You will manage campaigns across various channels and analyze performance metrics.",
        responsibilities: [
            "Plan and execute digital marketing campaigns (SEO/SEM, social media, email).",
            "Measure and report on the performance of all digital marketing campaigns.",
            "Identify trends and insights to optimize spend and performance.",
            "Collaborate with internal teams to create landing pages and optimize user experience.",
            "Manage social media accounts and engage with our audience."
        ],
        requirements: [
            "2+ years of experience in digital marketing.",
            "Proven experience with SEO, Google Analytics, and ad platforms.",
            "Strong analytical skills and data-driven thinking.",
            "Excellent written and verbal communication skills.",
            "Ability to work independently and manage multiple projects."
        ],
        createdAt: new Date('2026-01-31'),
    },

    // 🔹 New Jobs

    {
        id: '4',
        slug: 'nodejs-backend-developer',
        title: "Node.js Backend Developer",
        department: "Engineering",
        type: "Full-time",
        WorkMode: "Remote",
        location: "Hyderabad",
        description: "We are hiring a Node.js Backend Developer to build secure, scalable APIs and backend services that power our web and mobile applications.",
        responsibilities: [
            "Design and develop RESTful APIs using Node.js and Express.",
            "Work with databases like MongoDB and PostgreSQL.",
            "Ensure application performance, security, and scalability.",
            "Collaborate with frontend developers and product teams.",
            "Write clean, maintainable, and well-documented code."
        ],
        requirements: [
            "3+ years of backend development experience.",
            "Strong knowledge of Node.js, Express, and databases.",
            "Experience with authentication and authorization (JWT, OAuth).",
            "Understanding of cloud platforms and deployment processes.",
            "Good problem-solving and communication skills."
        ],
        createdAt: new Date('2026-02-11'),
    },
    {
        id: '5',
        slug: 'it-support-engineer',
        title: "IT Support Engineer",
        department: "IT Operations",
        type: "Full-time",
        WorkMode: "Onsite",
        location: "Hyderabad",
        description: "We are looking for an IT Support Engineer to provide technical assistance, troubleshoot systems, and ensure smooth day-to-day IT operations.",
        responsibilities: [
            "Provide technical support for hardware, software, and network issues.",
            "Install, configure, and maintain systems and applications.",
            "Monitor system performance and resolve issues proactively.",
            "Document issues and solutions for future reference.",
            "Assist users with IT-related queries and requests."
        ],
        requirements: [
            "2+ years of experience in IT support or system administration.",
            "Knowledge of Windows, networking basics, and troubleshooting.",
            "Good communication and customer service skills.",
            "Ability to work independently and in a team.",
            "Relevant IT certifications are a plus."
        ],
        createdAt: new Date('2026-02-08'),
    },
    {
        id: '6',
        slug: 'customer-support-executive',
        title: "Customer Support Executive",
        department: "Customer Support",
        type: "Full-time",
        WorkMode: "Hybrid",
        location: "Hyderabad",
        description: "We are seeking a Customer Support Executive to handle customer queries, provide timely resolutions, and ensure a positive customer experience.",
        responsibilities: [
            "Respond to customer inquiries via phone, email, or chat.",
            "Resolve issues efficiently and escalate when necessary.",
            "Maintain accurate records of customer interactions.",
            "Work closely with internal teams to resolve customer concerns.",
            "Ensure high levels of customer satisfaction."
        ],
        requirements: [
            "1–3 years of experience in customer support or service roles.",
            "Strong communication and interpersonal skills.",
            "Ability to handle multiple customer interactions calmly.",
            "Basic knowledge of CRM tools is a plus.",
            "Customer-focused mindset."
        ],
        createdAt: new Date('2026-02-07'),
    },
    {
        id: '7',
        slug: 'business-analyst',
        title: "Business Analyst",
        department: "Operations",
        type: "Full-time",
        WorkMode: "Hybrid",
        location: "Hyderabad",
        description: "We are looking for a Business Analyst to analyze processes, gather requirements, and help improve operational efficiency across teams.",
        responsibilities: [
            "Gather and document business requirements.",
            "Analyze workflows and identify improvement opportunities.",
            "Coordinate between technical and non-technical teams.",
            "Prepare reports, dashboards, and presentations.",
            "Support project planning and execution."
        ],
        requirements: [
            "3+ years of experience as a Business Analyst.",
            "Strong analytical and documentation skills.",
            "Experience working with cross-functional teams.",
            "Proficiency in Excel and reporting tools.",
            "Good communication and stakeholder management skills."
        ],
        createdAt: new Date('2026-02-06'),
    }
];

