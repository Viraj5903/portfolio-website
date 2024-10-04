import { Skill } from "@/data/interfaces"; // Importing the Skill interface for type safety

/**
 * SkillsInfoCard component displays detailed information about a selected skill.
 * It shows the skill's title and a list of associated skills with their percentages.
 *
 * @param {{ heading: string; skills: Skill[] }} props - The props for the SkillsInfoCard component.
 * @param {string} props.heading - The title of the selected skill.
 * @param {Skill[]} props.skills - The list of skills with their associated percentages.
 * 
 * @returns {JSX.Element} The rendered SkillsInfoCard component.
 */
const SkillsInfoCard: React.FC<{ heading: string, skills: Skill[] }> = ({ heading, skills }: { heading: string; skills: Skill[]; }): JSX.Element => {

    return (
        <div className="h-full rounded-xl border-solid border-2 border-[#6751b9]">
            {/* Display the heading of the skills information card */}
            <h6 className="text-xl font-bold px-8 py-3 text-center text-[#FFF] border-b-solid border-b-2 border-b-[#6751b9]">
                {heading}
            </h6>

            <div className="flex flex-col py-8 px-16 max-sm:p-6">
                {/* Map through the skills to display each one */}
                {skills.map((skill, index) => (
                    <div key={`skill_${index}`}>
                        {/* Display skill name and its associated percentage */}
                        <div className="text-xl flex flex-row justify-between items-center font-medium max-sm:text-base max-xsm:text-sm">
                            <p>{skill.skill}</p> {/* Skill name */}
                            <p className="text-[#dd8cfa]">{skill.percentage}</p> {/* Skill percentage */}
                        </div>

                        {/* Progress bar for skill percentage */}
                        <div className="w-full h-2 bg-[#382e68] rounded-lg my-4 overflow-hidden">
                            <div
                                className="w-0 h-full bg-[#7c5fe6] rounded-lg transition-all duration-500 ease-linear"
                                style={{ width: skill.percentage }} // Set the width based on percentage
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsInfoCard;
