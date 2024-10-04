import { NavLink, SkillSection, WorkExperience } from "./interfaces";

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
