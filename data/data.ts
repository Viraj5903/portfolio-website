import { NavLink, Project, SkillSection, WorkExperience } from "./interfaces";

/**
 * An array of navigation links for the application.
 * Each link contains a name and a corresponding href.
 * 
 * @type {readonly NavLink[]}
 * 
 * @constant navLinks
 */
export const navLinks: readonly NavLink[] = [
    {
        name: "Home",
        href: "#home"
    },
    {
        name: "About",
        href: "#about"
    },
    {
        name: "Skills",
        href: "#skills"
    },
    {
        name: "Work Experience",
        href: "#work_experience"
    },
    {
        name: "Projects",
        href: "#projects"
    },
    {
        name: "Contact Me",
        href: "#contact"
    }
] as const; // Ensures the array is read-only, providing better type safety.

/**
 * An array of skill sections, each containing a title and an array of skills.
 * 
 * @type {readonly SkillSection[]}
 * 
 * @constant SkillsInfo
 */
export const SkillsInfo: readonly SkillSection[] = [
    {
        title: "Programming Languages",
        skills: [
            { skill: "C#", percentage: "90%" },
            { skill: "Python", percentage: "75%" },
            { skill: "Java", percentage: "80%" },
            { skill: "Kotlin", percentage: "70%" },
            { skill: "Swift", percentage: "70%" },
            { skill: "C", percentage: "70%" },
            { skill: "C++", percentage: "60%" },
            { skill: "Typescript", percentage: "80%" },
        ]
    },
    {
        title: "Frontend",
        skills: [
            { skill: "HTML", percentage: "90%" },
            { skill: "CSS", percentage: "85%" },
            { skill: "JavaScript", percentage: "90%" },
            { skill: "Bootstrap", percentage: "70%" },
            { skill: "Tailwind", percentage: "80%" },
            { skill: "jQuery", percentage: "80%" },
            { skill: "React.js", percentage: "85%" },
            { skill: "Next.js", percentage: "75%" },
        ]
    },
    {
        title: "Backend",
        skills: [
            { skill: "Node.js", percentage: "90%" },
            { skill: "Express.js", percentage: "80%" },
            { skill: "PHP", percentage: "85%" },
            { skill: "Firebase", percentage: "80%" },
            { skill: "MongoDB", percentage: "90%" },
            { skill: "MySQL", percentage: "90%" },
            { skill: "PostgreSQL", percentage: "90%" },
            { skill: "SQL Server", percentage: "90%" },
            { skill: "RESTful API", percentage: "90%" },
        ]
    },
    {
        title: "Tools",
        skills: [
            { skill: "Git", percentage: "100%" },
            { skill: "GitHub", percentage: "100%" },
            { skill: "Visual Studio Code", percentage: "100%" },
            { skill: "Visual Studio", percentage: "100%" },
            { skill: "Postman", percentage: "100%" },
            { skill: "Docker", percentage: "90%" },
            { skill: "Wordpress", percentage: "80%" },
            { skill: "Android Studio", percentage: "90%" },
            { skill: "Xcode", percentage: "90%" },
            { skill: "Windows", percentage: "100%" },
            { skill: "Linux", percentage: "80%" },
        ]
    }
] as const; // Ensures the array is read-only, providing better type safety.

/**
 * An array of work experiences.
 * Each experience includes a title, date range, and a list of responsibilities.
 * 
 * @type {readonly WorkExperience[]} 
 * 
 * @constant WorkExperiences
 */
export const WorkExperiences: readonly WorkExperience[] = [
    {
        title: "Software Developer Intern at Radical AI",
        date: "May 2024 - August 2024",
        responsibilities: [
            'Led the Bug Catchers team to develop an AI chatbot for educators, enhancing user interactions.',
            'Implemented features like chat history, default prompts, and quick actions, improving the chat UI.',
            'Collaborated with cross-functional teams to ensure quality user experiences using Agile methodologies.',
            'Developed full-stack applications with JavaScript, React.js, Redux, Material UI, Next.js, Node.js, and Firebase.',
        ]
    },
    // Test for multiple work experiences:
    /* {
        title: "Software Developer Intern",
        date: "May 2024 - August 2024",
        responsibilities: [
            'Led the Bug Catchers team to develop an AI chatbot for educators, enhancing user interactions.',
            'Implemented features like chat history, default prompts, and quick actions, improving the chat UI.',
            'Collaborated with cross-functional teams to ensure quality user experiences using Agile methodologies.',
            'Developed full-stack applications with JavaScript, React.js, Redux, Material UI, Next.js, Node.js, and Firebase.',
        ]
    }, */
] as const; // Ensures the array is read-only, providing better type safety.

/**
 * An array of project information, each containing details such as title, short description, overview,
 * technologies used, and a GitHub link.
 * 
 * @type {readonly Project[]} 
 * 
 * @constant ProjectsInfo
 */
export const ProjectsInfo: readonly Project[] = [
    {
        id: 'portfolio',
        title: 'Portfolio Website',
        shortDescription: 'A personal site showcasing my skills and projects, built with Next.js, Tailwind and MongoDB.',
        overview: 'A personal website showcasing my skills, experience, and projects. Built with Next.js, Tailwind, and MongoDB.',
        technologies: ['Next.js', 'Tailwind', 'TypeScript', 'MongoDB', 'Git', 'GitHub', 'Visual Studio Code'],
        github: 'https://github.com/Viraj5903/portfolio-website'
    },
    {
        id: 'cosmochat',
        title: 'CosmoChat UI',
        shortDescription: 'Frontend application for engaging with an AI chatbot, featuring natural interaction and session management.',
        overview: `CosmoChat UI is the frontend application that enables users to engage in chat sessions with an AI chatbot powered by OpenAI's language model. The primary objective is to offer a seamless platform for users to interact with the chatbot, ask questions, and receive responses naturally. It incorporates features such as activity tracking, session ending, and session management.`,
        technologies: ['React.js', 'JavaScript', 'Material UI', 'OpenAI API', 'Git', 'GitHub', 'Visual Studio Code'],
        github: 'https://github.com/Viraj5903/CosmoChatUI'
    },
    {
        id: 'quantumbot',
        title: 'QuantumBot Core',
        shortDescription: 'Backend for real-time communication using Firebase, enabling CRUD operations in Firestore.',
        overview: `QuantumBot Core contains the backend logic for handling real-time communication and collaboration among individuals and teams. It uses Firebase Cloud Functions to provide the necessary API endpoints to support the core functionalities of QuantumBot Core, including CRUD (Create, Read, Update, Delete) operations in Firestore. These operations allow users to interact with the Firestore database to add, retrieve, update, and delete messages.`,
        technologies: ['Node.js', 'JavaScript', 'Firebase', 'Git', 'GitHub', 'Visual Studio Code'],
        github: 'https://github.com/Viraj5903/QuantumBot-Mission'
    },
    {
        id: 'professor-course-assignment-platform',
        title: 'Professor Course Assignment Platform',
        shortDescription: 'Java system for managing professor-course assignments, optimizing based on seniority.',
        overview: `The Professor Course Assignment Platform (PCAP) is a Java-based system designed to efficiently manage and match professors to courses within the Computer Science Department at LaSalle College. The platform features advanced data structures, including a priority queue, to optimize professor assignments based on seniority and requested hours, while also handling course and professor representations.`,
        technologies: ['Java', 'Git', 'GitHub', 'IntelliJ IDEA'],
        github: 'https://github.com/Viraj5903/Professor_Course_Assignment_Platform'
    },
    {
        id: 'taskops-api',
        title: 'TaskOps API',
        shortDescription: 'RESTful backend API for task management, featuring secure user authentication and CRUD operations.',
        overview: `TaskOps API, built using Python, is a Flask and MongoDB based RESTful backend API that simplifies task management with secure and efficient user registration, authentication, and CRUD operations for tasks using JWT authentication tokens.`,
        technologies: ['Python', 'Flask', 'JSON Web Token (JWT)', 'MongoDB', 'Git', 'GitHub', 'Visual Studio Code'],
        github: 'https://github.com/Viraj5903/TaskOps-API'
    },
    {
        id: 'user-access-management-system',
        title: 'User Access Management System',
        shortDescription: 'Full-stack PHP app for managing users and permissions with secure authentication.',
        overview: `A full-stack PHP application for managing users, user groups, and permissions, built with MySQL and Apache. Features a responsive front-end (HTML, CSS, Bootstrap, JS, jQuery) and secure authentication. Includes CRUD operations for users, groups, and permissions, with API endpoints for backend integration.`,
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'PHP', 'MySQL', 'Git', 'GitHub', 'PHPStorm'],
        github: 'https://github.com/Viraj5903/420DW3_07278_Project'
    },
    {
        id: 'mood-food',
        title: 'Mood Food Project',
        shortDescription: 'C# Windows Forms app tracking food intake and mood, offering personalized food recommendations.',
        overview: `The Mood Food Project is a Windows Forms application in C# for tracking food intake and mood, providing personalized food recommendations based on mood patterns. It features secure authentication and comprehensive mood tracking.`,
        technologies: ['C#', 'Windows Forms', 'Git', 'GitHub', 'Visual Studio'],
        github: 'https://github.com/Viraj5903/Mood_Food_Project'
    },
    {
        id: 'insurance-simulation',
        title: 'Insurance Simulation Software',
        shortDescription: 'C++ console app simulating insurance operations, including claims management and finances.',
        overview: `Insurance Simulation Software is a C++ console app that models insurance company operations. Users manage insurance agreements, track finances, handle claims, and interact through a menu system. Developed in Visual Studio with C++, it offers a realistic insurance simulation.`,
        technologies: ['C++', 'Git', 'GitHub', 'Visual Studio'],
        github: 'https://github.com/Viraj5903/Insurance_Simulation_Software'
    }
] as const;
