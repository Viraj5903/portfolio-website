"use client";

import AnimatedSection from "./AnimatedSection"; // Importing the AnimatedSection component for animation effects
import { SkillsInfo } from "@/data/data"; // Importing the SkillsInfo array containing information about various skills
import SkillCard from "./SkillCard"; // Importing the SkillCard component to represent each individual skill as a card
import { useState } from "react"; // Importing the useState hook to manage the state of the selected skill
import { SkillSection } from "@/data/interfaces"; // Importing the SkillSection interface for type safety
import SkillsInfoCard from "./SkillsInfoCard"; // Importing the SkillsInfoCard component to display detailed information about the selected skill

/**
 * Skills component displays a section with skills.
 * It allows users to select a skill to view detailed information about it.
 * Each skill is represented as a card, and clicking on a card updates the displayed skill information.
 * The section uses the AnimatedSection component to add animation effects when it comes into view.
 *
 * @returns {JSX.Element} The rendered Skills component.
 */
const Skills: React.FC = (): JSX.Element => {
    // State to manage the currently selected skill
    const [selectedSkill, setSelectedSkill] = useState<SkillSection>(
        SkillsInfo[0]
    );

    // Function to handle skill card click events
    const handleSkillClick = (skill: SkillSection) => {
        setSelectedSkill(skill); // Update the selected skill
    };

    return (
        <AnimatedSection id="skills" title="Skills">
            <div className="flex flex-col justify-center gap-12">
                {/* Container for skill cards */}
                <div className="min-h-max w-full flex flex-row justify-center flex-wrap gap-6 max-sm:grid max-sm:grid-cols-2 max-sm:gap-3 max-sm:items-stretch">
                    {/* Render each SkillCard */}
                    {SkillsInfo.map((item) => (
                        <SkillCard
                            key={item.title}
                            title={item.title}
                            isActive={item.title == selectedSkill.title} // Check if the skill is active
                            onClick={() => handleSkillClick(item)} // Handle click event
                        />
                    ))}
                </div>
                {/* Display information about the selected skill */}
                <div className="w-full">
                    <SkillsInfoCard
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                    />
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Skills;
