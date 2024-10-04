
/**
 * SkillCard component displays an individual skill.
 * It highlights the active skill and handles click events for selection.
 *
 * @param {{ title: string; isActive: boolean; onClick: () => void }} props - The props for the SkillCard component.
 * @param {string} props.title - The title of the skill.
 * @param {boolean} props.isActive - Indicates if this skill is currently selected.
 * @param {() => void} props.onClick - Function to handle click events on the card.
 * 
 * @returns {JSX.Element} The rendered SkillCard component.
 */
const SkillCard: React.FC<{ title: string, isActive: boolean, onClick: () => void }> = ({ title, isActive, onClick }: { title: string; isActive: boolean; onClick: () => void; }): JSX.Element => {

    // Render the SkillCard component with dynamic styles based on the isActive state
    return (
        <div
            className={`flex-1 flex flex-col justify-evenly rounded-xl border-[#6751b9] border-solid border-2 p-4 text-center bg-[rgba(22, 17, 47, 0.3)] cursor-pointer transition-all duration-300 ease-linear hover:bg-[#6751b9] max-lg:p-2 ${isActive ? 'active bg-[#6751b9]' : 'bg-transparent'}`}
            onClick={onClick} // Handle click event to select this skill
        >

            <span className="text-xl font-medium max-md:text-base">{title}</span> {/* Display the skill title */}

        </div>
    );
};

export default SkillCard;
