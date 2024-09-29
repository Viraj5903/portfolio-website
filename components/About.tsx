"use client";

import AnimatedSection from "./AnimatedSection";

/**
 * About component renders an animated section that provides about me information.
 * It highlights the educational background, skills, and career aspirations.
 * The section uses the AnimatedSection component to add animation effects when it comes into view.
 *
 * @returns {JSX.Element} The rendered About component.
 */
const About: React.FC = (): JSX.Element => {
    return (
        <AnimatedSection id="about" title="About">
            <div className="flex flex-col gap-4 text-2xl max-md:text-xl max-xsm:text-lg">
                {/* First paragraph detailing the background and technical skills */}
                <p>
                    As a recent graduate in Information Technology Programmer Analyst from LaSalle College, I am passionate about building robust and scalable software solutions. I specialize in full-stack development, leveraging technologies such as React.js, Node.js, and Next.js to create seamless user experiences. My expertise extends to working with various databases, including MySQL, MongoDB, SQL Server, and PostgreSQL, and I am proficient in web server development using PHP, C#, and Python. Additionally, I have experience in developing mobile applications for both iOS and Android platforms. I take pride in writing clean, maintainable code while continuously improving my technical skills.
                </p>

                {/* Second paragraph discussing the collaborative approach and career goals */}
                <p>
                    Beyond technical proficiency, I value collaboration and adaptability. I have experience working in agile environments and enjoy solving complex challenges alongside talented teams. My goal is to contribute my skills in a junior software development role, where I can support meaningful projects, grow professionally, and make a positive impact on both my team and end users. With a strong foundation in software development and a commitment to lifelong learning, I am eager to embark on the next phase of my career.
                </p>
            </div>
        </AnimatedSection>
    );
};

export default About;
