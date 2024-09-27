import { NavLink } from "./interfaces";

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