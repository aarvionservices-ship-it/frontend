export interface Job {
    id: string; // Changed to string for slug usage or keep separate slug field
    slug: string;
    title: string;
    department: string;
    type: string;
    location: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
}

export const jobs: Job[] = [
    {
        id: '1',
        slug: 'senior-react-developer',
        title: "Senior React Developer",
        department: "Engineering",
        type: "Full-time",
        location: "Remote",
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
        ]
    },
    {
        id: '2',
        slug: 'ui-ux-designer',
        title: "UI/UX Designer",
        department: "Design",
        type: "Full-time",
        location: "Hybrid",
        description: "Aarvion Services is seeking a creative UI/UX Designer to craft intuitive and visually stunning user experiences. You will work closely with product managers and developers to bring ideas to life.",
        responsibilities: [
            "Create wireframes, prototypes, and high-fidelity mockups.",
            "Conduct user research and usability testing to inform design decisions.",
            "Maintain and evolve our design system.",
            "Collaborate with the development team to ensure design fidelity.",
            "stay current with design trends and tools (Figma, Adobe XD)."
        ],
        requirements: [
            "3+ years of experience in UI/UX design.",
            "Strong portfolio showcasing web and mobile design projects.",
            "Proficiency in Figma or similar design tools.",
            "Understanding of HTML/CSS capabilities and limitations.",
            "Good understanding of user-centered design principles."
        ]
    },
    {
        id: '3',
        slug: 'digital-marketing-specialist',
        title: "Digital Marketing Specialist",
        department: "Marketing",
        type: "Part-time",
        location: "Remote",
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
        ]
    }
];
