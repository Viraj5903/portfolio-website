/**
 * @interface NavLink
 * Represents a navigation link in the application.
 */
export interface NavLink {
    /**
     * The display name of the navigation link.
     */
    name: string;

    /**
     * The URL or anchor link the navigation link points to.
     */
    href: string;
}

/**
 * @interface Skill
 * Represents a skill with a corresponding proficiency percentage.
 */
export interface Skill {
    /**
     * The name of the skill.
     */
    skill: string;

    /**
     * The proficiency percentage of the skill (e.g., "80%").
     */
    percentage: string;
}

/**
 * @interface SkillSection
 * Represents a section of skills with a title.
 */
export interface SkillSection {
    /**
     * The title of the skill section.
     */
    title: string;

    /**
     * An array of skills included in this section.
     */
    skills: Skill[];
}

/**
 * @interface WorkExperience
 * Represents a work experience entry.
 */
export interface WorkExperience {
    /**
     * The title or position held during this work experience.
     */
    title: string;

    /**
     * The date or duration of the work experience (e.g., "Jan 2020 - Dec 2021").
     */
    date: string;

    /**
     * An array of responsibilities or tasks performed during this work experience.
     */
    responsibilities: string[];
}

/**
 * @interface Project
 * Represents a project with various details.
 */
export interface Project {
    /**
     * A unique identifier for the project.
     */
    id: string;

    /**
     * The title of the project.
     */
    title: string;

    /**
     * A brief description of the project.
     */
    shortDescription: string;

    /**
     * A detailed overview of the project.
     */
    overview: string;

    /**
     * An array of technologies used in the project.
     */
    technologies: string[];

    /**
     * The URL to the project's GitHub repository.
     */
    github: string;
}

/**
 * @interface ContactFormData
 * Represents the structure of the data submitted through a contact form.
 */
export interface ContactFormData {
    /**
     * The name of the person submitting the form.
     */
    name: string;

    /**
     * The email address of the person submitting the form.
     */
    email: string;

    /**
     * The message or content provided by the person submitting the form.
     */
    message: string;
}
