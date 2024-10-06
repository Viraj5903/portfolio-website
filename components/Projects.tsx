"use client"

import AnimatedSection from "./AnimatedSection"; // Importing the AnimatedSection component for visual effects and layout.
import { ProjectsInfo } from "@/data/data"; // Importing static project data for fallback in case the API call fails.
import ProjectCard from "./ProjectCard"; // Importing the ProjectCard component to display individual projects in the grid.
import { Project } from "@/data/interfaces"; // Importing the Project interface to enforce type safety for project data.
import { useEffect, useState } from "react"; // Importing React hooks for managing component state and handling side effects.
import { OrbitProgress } from "react-loading-indicators";

/**
 * Projects component fetches and displays a list of projects.
 * It first attempts to fetch project data from an API endpoint,
 * and if the fetch fails, it falls back to static project data.
 *
 * @returns {JSX.Element} The rendered Projects component containing a grid of project cards.
 */
const Projects = (): JSX.Element => {
    // State to hold the list of projects, initialized as an empty array.
    const [projects, setProjects] = useState<Project[]>([]);

    // State to track loading status, initialized to true.
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        /**
         * Async function to fetch project data from the API.
         * If the fetch fails or returns non-array data, it falls back to static data.
         *
         * @returns {Promise<void>} A promise that resolves when the project data is fetched and state is updated.
         */
        const getProjects = async (): Promise<void> => {
            try {
                const response = await fetch('/api/projects'); // API call to fetch projects from the server.

                // Check if the response is not ok (e.g., 404 error).
                if (!response.ok) {
                    console.error('Failed to fetch projects'); // Log error message for failed fetch.
                    setProjects(ProjectsInfo.map((project) => project)); // Fallback to static projects if fetch fails.
                    return; // Exit early to avoid further processing.
                }

                const data = await response.json(); // Parse the JSON response.

                // Ensure data is an array before setting it to state.
                if (Array.isArray(data)) {
                    setProjects(data as Project[]); // Update state with fetched data if valid.
                } else {
                    throw new Error('Fetched data is not an array'); // Throw error if data is not in expected format.
                }
            } catch (error) {
                console.error('Error fetching projects:', error); // Log any errors encountered during fetch.
                // Fallback to static projects if fetch fails.
                setProjects(ProjectsInfo.map((project) => project)); // Use static data as fallback.
            }
            finally {
                setLoading(false);
            }
        };

        getProjects(); // Call the async function to fetch project data.
    }, []); // Empty dependency array: runs once on component mount.

    return (
        <AnimatedSection id="projects" title="Projects">
            {/*  If the loading state is true, render a loading indicator. Else render the project cards.*/}
            {loading ? ( // If the loading state is true, render a loading indicator.
                <div className="flex justify-center items-center w-full"> {/* Center the loading indicator within the full width of the container. */}
                    {/* Display a loading indicator while data is being fetched. 
                        The color is set to #6751b9, and the size is set to large. */}
                    <OrbitProgress color="#6751b9" size="large" text="" textColor="" />
                </div>
            ) : ( // If the loading state is false, render the project cards.
                // Grid layout for project cards: 1 column on small screens, 2 columns on medium screens, and 3 columns on extra-large screens.
                <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
                    {projects.map((project) => ( // Iterate over the 'projects' array and render a ProjectCard for each project.
                        <ProjectCard key={project.title} project={project} /> //Render individual ProjectCard component, using the project title as a unique key for optimal performance in lists.
                    ))}
                </div>
            )
            }
        </AnimatedSection >
    );
};

export default Projects;
