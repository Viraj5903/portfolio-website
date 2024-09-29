"use client"

import { useInView, motion } from "framer-motion"; // Importing hooks from Framer Motion for animations
import { useRef } from "react";

/**
 * HomeSection component renders a section of the homepage.
 * It features an introduction to the user and a button to download a resume.
 * The section includes animations that trigger when it comes into the viewport.
 * 
 * @returns {JSX.Element} The rendered HomeSection component.
 */
const HomeSection: React.FC = (): JSX.Element => {
    // Create a reference to the section element for visibility detection
    const ref = useRef(null);

    // The useInView hook from Framer Motion is a React hook that allows you to detect when a DOM element enters or exits the viewport. It takes a reference to an element and an options object (like amount to specify how much of the element must be visible) and returns a boolean value indicating whether the element is currently in view. This hook is particularly useful for triggering animations or effects when components appear on the screen, enhancing user engagement and experience. By using useInView, you can manage animations based on visibility without manually handling scroll events, simplifying our code and improving performance.
    const isInView = useInView(ref); // Use the hook to get the visibility status

    return (
        // Motion section that animates based on its visibility in the viewport
        <motion.section
            id="#home"
            ref={ref} // Attach the ref to the section for visibility detection
            className="min-h-screen flex flex-col justify-center items-center"
            initial={{ opacity: 0 }} // Initial state: fully transparent and scaled down
            animate={{ opacity: isInView ? 1 : 0 }} // Animate based on visibility
            transition={{ duration: 2 }} // Duration of the animation (2 seconds)
        >
            <div>
                <div className="flex flex-col text-center">
                    <h2 className="text-5xl font-bold p-6">Hello, I am Viraj Patel</h2>
                    <p className="text-3xl p-3">Software Developer | Web Developer</p>
                </div>

                <div className="my-5 flex flex-row justify-center items-center">
                    <a
                        href="/Viraj-Patel-Resume.pdf"
                        download// Link to download the resume
                        className="text-base font-medium flex items-center justify-center text-white bg-gradient-to-r from-[#A993FE] to-[#7E61E7] px-8 py-2 border-none outline outline-1 outline-transparent rounded cursor-pointer transition-all duration-300 ease-linear 
                        hover:text-[#A993FE] hover:bg-[#000] hover:from-transparent hover:to-transparent hover:outline-[#A993FE] hover:outline hover:outline-1"
                    >
                        Download Resume {/* Button text for downloading the resume */}
                    </a>
                </div>
            </div>
        </motion.section>
    );
};

export default HomeSection;