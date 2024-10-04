"use client";

import AnimatedSection from "./AnimatedSection"; // Importing the AnimatedSection component for animation effects
import { WorkExperiences } from "@/data/data"; // Importing the list of work experiences
import WorkExperienceCard from "./WorkExperienceCard"; // Importing the WorkExperienceCard component to display individual work experiences

/**
 * WorkExperience component displays a list of work experiences.
 * It maps through the WorkExperiences data and renders a WorkExperienceCard for each experience.
 *
 * @returns {JSX.Element} The rendered WorkExperience component containing all work experience cards.
 */
const WorkExperience: React.FC = (): JSX.Element => {
    return (
        <AnimatedSection id="work_experience" title="Work Experience">
            <div className="experience-content relative flex flex-col flex-1 justify-center gap-8">
                {/* Map through WorkExperiences and render a WorkExperienceCard for each item */}
                {WorkExperiences.map((item) => (
                    <WorkExperienceCard key={item.title} details={item} />
                ))}
            </div>
        </AnimatedSection>
    );
};

export default WorkExperience;
