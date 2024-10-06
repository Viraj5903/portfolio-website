import { Project } from "@/data/interfaces"; // Importing the Project interface for type safety
import Link from "next/link"; // Importing the Link component from Next.js for client-side navigation

/**
 * ProjectCard component displays information about a specific project.
 * It includes the project title, a short description, and buttons to access the GitHub repository and learn more about the project.
 * 
 * @param {{ project: Project }} props - The props for the ProjectCard component.
 * @param {Project} props.project - The project object containing details such as title, description, and links.
 * 
 * @returns {JSX.Element} The rendered ProjectCard component.
 */
const ProjectCard = ({ project }: { project: Project }): JSX.Element => {
    return (
        // Main container for the project card with styling and spacing
        <div className="flex flex-col flex-1 gap-6 bg-[#130f2a] rounded-xl border-solid border-2 border-[#6751b9] p-6 max-md:p-4">

            <h4 className="text-2xl font-bold text-center max-md:text-lg max-xsm:text-base">
                {project.title} {/* Display the project title */}
            </h4>

            <div className="text-lg flex-1 max-md:text-base">
                {project.shortDescription} {/* Display a short description of the project */}
            </div>

            {/* Container for the action buttons, using flexbox for horizontal alignment */}
            <div className="flex flex-col gap-8 text-center">

                {/* Button to navigate to the project's GitHub repository */}
                <Link
                    href={project.github}
                    target="_blank" // Open link in a new tab
                    rel="noopener noreferrer" // Security attributes for external links
                    className="flex-1 bg-[#6751b9] rounded-xl p-3 border border-solid border-transparent transition-all duration-300 ease-linear hover:bg-transparent hover:text-[#a892fe] hover:border-[#a892fe]"
                >
                    GitHub
                </Link>

                {/* Button to navigate to the project details page */}
                <Link
                    href={`/project/${project.id}`}
                    className="flex-1 bg-[#6751b9] rounded-xl p-3 border border-solid border-transparent transition-all duration-300 ease-linear hover:bg-transparent hover:text-[#a892fe] hover:border-[#a892fe]"
                >
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
