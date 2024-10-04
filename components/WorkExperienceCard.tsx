import { WorkExperience } from "@/data/interfaces"; // Importing the WorkExperience interface for type safety

/**
 * WorkExperienceCard component displays work experience details.
 * It shows the job title, duration of employment, and a list of responsibilities
 * associated with that position.
 *
 * @param {{ details: WorkExperience }} props - The props for the WorkExperienceCard component.
 * @param {WorkExperience} props.details - An object containing details of the work experience,
 * including title, date, and responsibilities.
 *
 * @returns {JSX.Element} The rendered WorkExperienceCard component.
 */
const WorkExperienceCard: React.FC<{ details: WorkExperience }> = ({
    details,
}: {
    details: WorkExperience;
}): JSX.Element => {
    return (
        <div className="work-experience-card h-full bg-[#130f2a] rounded-xl border-solid border-2 border-[#6751b9] p-6 mx-4 max-md:m-2 max-md:p-4">
            {/* Job title */}
            <h4 className="text-2xl font-bold mb-3 max-md:text-lg max-xsm:text-base">
                {details.title}
            </h4>

            {/* Displaying the duration of employment */}
            <div className="work-duration inline-block text-base font-normal bg-[rgba(103,_81,_185,_0.5)] px-3 py-1 mb-5 max-xsm:text-xs">
                {details.date}
            </div>

            {/* List of responsibilities for the job position */}
            <ul className="ml-6">
                {details.responsibilities.map((responsibility, index) => (
                    <li
                        key={`${details.title}_${index}`} // Unique key for each responsibility
                        className="list-none text-lg font-normal mb-2 relative after:content-['_'] after:absolute after:w-2 after:h-2 after:rounded-full after:bg-[#6751b9] after:-left-5 after:top-1
                        max-lg:text-base max-md:text-lg max-sm:text-sm"
                    >
                        {responsibility} {/* Displaying the responsibility */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkExperienceCard;
