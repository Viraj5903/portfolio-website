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

/**
 * @interface WeatherData
 * Represents the structure of weather data returned from the OpenWeather API.
 */
export interface WeatherData {
    /**
     * An array of weather conditions.
     * Each condition contains an id, main description, detailed description, and an icon URL.
     */
    weather: Array<{
        /**
         * Unique identifier for the weather condition
         */
        id: number;

        /**
         * Short description of the weather condition (e.g., "Rain")
         */
        main: string;
        
        /**
         * Detailed description of the weather condition (e.g., "light rain")
         */
        description: string;
        
        /**
         * URL for the weather icon
         */ 
        icon: string;
    }>;

    /**
     * Contains main weather details.
     */
    main: {
        /**
         * The current temperature in degrees Celsius.
         */
        temp: number;

        /**
         * The perceived temperature, accounting for humidity and wind chill.
         */
        feels_like: number;

        /**
         * The minimum temperature at the given location.
         */
        temp_min: number;

        /**
         * The maximum temperature at the given location.
         */
        temp_max: number;

        /**
         * Atmospheric pressure in hPa.
         */
        pressure: number;

        /**
         * Humidity percentage.
         */
        humidity: number;
    };

    /**
     * The name of the city for which the weather data is provided.
     */
    name: string;
}
