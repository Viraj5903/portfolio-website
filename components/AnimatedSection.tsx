// The "use client" directive in Next.js indicates that the component or module should be rendered on the client-side only, rather than on the server. This directive is used to ensure that React components relying on client-specific features, like browser APIs or local state, do not get executed on the server during server-side rendering.
"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * AnimatedSection component renders a section with an animation effect 
 * that triggers when the section comes into the viewport. It includes 
 * a title and allows rendering of children components within the section.
 * 
 * @param {{ id: string; title: string; children: React.ReactNode }} props - The props for the component.
 * @param {string} props.id - The unique identifier for the section.
 * @param {string} props.title - The title of the section displayed at the top.
 * @param {React.ReactNode} props.children - The content to be displayed within the section.
 * 
 * @returns {JSX.Element} The rendered AnimatedSection component.
 */
const AnimatedSection: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }: { id: string, title: string, children: React.ReactNode }): JSX.Element => {

    // Create a reference to the section element for visibility detection
    const ref = useRef(null);

    // The useInView hook from Framer Motion is a React hook that allows you to detect when a DOM element enters or exits the viewport. It takes a reference to an element and an options object (like amount to specify how much of the element must be visible) and returns a boolean value indicating whether the element is currently in view. This hook is particularly useful for triggering animations or effects when components appear on the screen, enhancing user engagement and experience. By using useInView, you can manage animations based on visibility without manually handling scroll events, simplifying our code and improving performance.
    const isInView = useInView(ref); // Use the hook to get the visibility status

    return (
        <motion.section
            id={id}
            className="w-full flex flex-col justify-start items-center"
            ref={ref} // Attach the ref to the section for visibility detection
            initial={{ opacity: 0 }} // Initial opacity set to 0 for fade-in effect
            animate={{ opacity: isInView ? 1 : 0 }} // Animate opacity based on visibility
            transition={{ duration: 1 }} // Duration of the fade-in effect
        >
            <div className="flex-1 flex flex-col gap-4 w-full h-full px-6 mt-24">
                <h1 className="py-4 text-5xl font-bold text-center max-sm:text-3xl">{title}</h1> {/* Section title */}
                {children} {/* Render any children components passed to this section */}
            </div>
        </motion.section>
    );
};

export default AnimatedSection;
