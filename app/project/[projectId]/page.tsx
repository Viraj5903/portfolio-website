"use client"; // Indicates that this component uses client-side rendering and can access client-side features.

import { ProjectsInfo } from "@/data/data"; // Importing project data from the specified path in the project directory.
import { Project } from "@/data/interfaces"; // Importing the Project interface for type safety.
import { motion } from "framer-motion"; // Importing motion for animation effects when rendering components.
import Link from "next/link"; // Importing Link for client-side navigation between pages in Next.js.
import { useRouter } from "next/navigation"; // Importing useRouter hook for programmatic navigation in Next.js.
import { useEffect, useState } from "react"; // Importing React hooks for managing component state and side effects.
import { Commet } from "react-loading-indicators"; // Importing a loading indicator component.
// Reference: https://react-loading-indicators.netlify.app/ - React Loading Indicators

/**
 * Page component displays detailed information about a specific project.
 * This component is designed for dynamic routing in Next.js, where the URL contains 
 * a variable segment (projectId) that identifies the project to display.
 * 
 * The component retrieves the projectId from the URL parameters and fetches the 
 * corresponding project data from the ProjectsInfo array or an API endpoint. 
 * If the project is not found, it displays a user-friendly message.
 *
 * @param {{ params: { projectId: string } }} params - The dynamic parameters passed to the page.
 * 
 * @returns {JSX.Element} The rendered Page component displaying project details or a loading indicator.
 */
export default function Page({ params }: { params: { projectId: string } }): JSX.Element {

    // Initialize the router for handling navigation events.
    const router = useRouter();

    // The unique identifier for the project extracted from the URL parameters.
    // Extracting projectId from params for further processing.
    const { projectId } = params; // Accessing projectId from URL parameters.

    // State to hold the project data, initialized to null.
    const [project, setProject] = useState<Project | null>(null);

    // State to track the loading status whether the project data is being fetched, initialized to true.
    const [loading, setLoading] = useState<boolean>(true);

    /**
     * Function to search for a project in the local static ProjectsInfo array.
     * This serves as a fallback mechanism to retrieve project data when API calls 
     * fail or return an error. It searches for the project using its unique id 
     * and updates the project state with the found project or null if not found.
     *
     * @param {string} id - The unique identifier for the project to be searched.
     */
    const findProject: (id: string) => void = (id: string) => {
        const foundProject = ProjectsInfo.find((project) => project.id === id.toLowerCase());
        setProject(foundProject ?? null); // Set project state to found data or null if not found.
    };

    useEffect(() => {
        /**
         * Async function to fetch project information from the API or fall back to local data.
         * This function attempts to retrieve project data based on the provided projectId. 
         * If the API call fails or returns an error, it will search for the project 
         * in the local ProjectsInfo array as a fallback.
         *
         * @returns {Promise<void>} A promise that resolves when the project data has been fetched and state updated.
         */
        const getProjectInfo: () => Promise<void> = async (): Promise<void> => {
            try {
                // Make an API call to fetch the project data based on projectId.
                const response = await fetch(`/api/projects/${projectId}`);

                // Check if the response is not ok (e.g., 404 error).
                if (!response.ok) {
                    findProject(projectId); // Attempt to find the project in the local ProjectsInfo array if fetch fails.
                } else {
                    // Parse the JSON response and update project state.
                    const data = await response.json();
                    setProject(data as Project); // Cast the data to Project type for type safety.
                }
            } catch (error) {
                // Log any error that occurs during fetch.
                console.error(error);
                findProject(projectId); // Attempt to find the project in the local ProjectsInfo array on error.
            } finally {
                // Set loading to false after fetching is complete.
                setLoading(false);
            }
        };

        // Call the async function to fetch project info.
        getProjectInfo();
    }, [projectId]); // Dependency array: re-run effect when projectId changes..

    // Render a loading indicator if still fetching data.
    if (loading) {
        /**
         * Loading indicator is displayed while data is being fetched.
         * The loading state is checked, and if true, a centered loading
         * component is returned to provide visual feedback to the user.
         * 
         * @returns {JSX.Element} A div containing the loading indicator component.
         */
        return (
            <div className="flex justify-center items-center h-screen">
                {/* Display loading indicator with specified color and size */}
                <Commet color="#6751b9" size="large" text="" />
            </div>
        );
    }

    // Render the main content of the page if projectData is found
    return (
        project ? ( // Check if the project data exists, rendering the main content of the page that contains the project details
            <motion.main
                initial={{ opacity: 0 }} // Initial opacity for fade-in effect
                animate={{ opacity: 1 }} // Animate to full opacity
                transition={{ duration: 2 }} // Transition duration of 2 second
                className="flex flex-col min-h-screen gap-12 p-10 w-full"
            >
                <div>
                    <button
                        className="flex flex-row justify-center items-center gap-2 p-4 bg-[#6751b9] rounded-full transition-all duration-300 ease-linear text-base hover:bg-[#000] hover:text-[#A993FE] hover:outline-[#A993FE] hover:outline hover:outline-1"
                        onClick={() => router.back()} // Navigate back when clicked
                    >
                        <span className="material-symbols-outlined">arrow_back</span> {/* Icon for back navigation */}
                        Go back
                    </button>
                </div>
                <div className="flex flex-col gap-10">
                    <h1 className="text-5xl font-bold max-sm:text-3xl">{project.title}</h1> {/* Project title */}

                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-bold max-sm:text-2xl">Project Overview:</h2> {/* Section title */}
                        <p className="text-xl font-normal max-sm:text-lg">{project.overview}</p> {/* Project overview */}
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold max-sm:text-xl">Technologies and Tools Used:</h2> {/* Section title */}
                        <div className="flex flex-row flex-wrap gap-4 text-lg font-normal max-sm:text-base">
                            {project.technologies.map((technology, index) => (
                                <span key={index} className="py-4 px-6 bg-[rgba(103,_81,_185,_0.5)] rounded-full">
                                    {technology} {/* Display each technology used */}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 items-start">
                        <h2 className="text-2xl font-bold max-sm:text-xl">View source code:</h2> {/* Section title */}
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-[#6751b9] rounded-full transition-all duration-300 ease-linear hover:bg-[#000] hover:text-[#A993FE] hover:outline-[#A993FE] hover:outline hover:outline-1"
                        >
                            View on GitHub {/* Link to the project's GitHub repository */}
                        </Link>
                    </div>
                </div>
            </motion.main>
        ) : ( // If project data does not exist, render a message indicating project not found and a button to go back to previous page 
            <motion.div
                initial={{ opacity: 0 }} // Initial opacity for fade-in effect
                animate={{ opacity: 1 }} // Animate to full opacity
                transition={{ duration: 2 }} // Transition duration of 2 second
                className="flex flex-col justify-center items-center h-screen gap-20 p-10">
                <h1 className="text-3xl font-bold">Project not found</h1> {/* Display message for project not found */}
                <button
                    className="p-6 bg-[#6751b9] rounded-full transition-all duration-300 ease-linear hover:bg-[#000] hover:text-[#A993FE] hover:outline-[#A993FE] hover:outline hover:outline-1"
                    onClick={() => router.back()} // Navigate back when clicked
                >
                    Go back
                </button>
            </motion.div>
        )
    );
}
