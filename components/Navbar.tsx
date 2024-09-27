"use client"

import { navLinks } from "@/data/data";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { motion } from "framer-motion";
import Link from "next/link";

/**
 * Navbar component renders a navigation bar.
 * It includes a logo and a list of navigation links.
 * The "Contact Me" button is styled differently from the other links.
 *
 * @returns {JSX.Element} The rendered Navbar component.
 */
const Navbar: React.FC = (): JSX.Element => {

    // State to manage whether the mobile menu is open or closed
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    // Function to toggle the mobile menu's visibility
    const toggleMenu: () => void = () => {
        // Toggle the openMenu state between true and false
        setOpenMenu(!openMenu);
    };

    // Function to generate navigation items from the navLinks data
    const navBarItems = (): JSX.Element[] => {
        // Map through each navigation link and create a list item for it
        return navLinks.map((navLink) => {
            // Check if the current navLink is not "Contact Me"
            if (navLink.name !== "Contact Me") {
                return (
                    <li key={navLink.href} className={`${!openMenu ? 'my-0 mx-6' : ''}`}>
                        <Link
                            href={navLink.href} // Link for navigation
                            className="flex text-lg font-medium text-white relative cursor-pointer 
                            before:content-['_'] before:w-8 before:h-1 before:bg-gradient-to-r before:from-[#A993FE] before:to-[#7E61E7] before:rounded-lg before:absolute before:-bottom-[0.6rem] before:opacity-0 before:-translate-x-[1.5rem] before:transition-all before:duration-300 before:ease-linear 
                            hover:before:opacity-100 hover:before:translate-x-0 hover:before:w-full"
                        >
                            {navLink.name} {/* Display the name of the navigation link */}
                        </Link>
                    </li>
                );
            } else {
                // Render the "Contact Me" button with unique styling
                return (
                    <li key={navLink.href}>
                        <Link
                            href={navLink.href} // Link for "Contact Me"
                            className="text-base font-medium flex items-center justify-center text-white bg-gradient-to-r from-[#A993FE] to-[#7E61E7] px-8 py-2 border-none outline outline-1 outline-transparent rounded cursor-pointer transition-all duration-300 ease-linear text-center
                            hover:text-[#A993FE] hover:bg-[#000] hover:from-transparent hover:to-transparent hover:outline-[#A993FE] hover:outline hover:outline-1"
                        >
                            {navLink.name}
                        </Link>
                    </li>
                );
            }
        });
    };

    return (
        <div>
            {/* Render the MobileNavbar component for mobile navigation */}
            <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu} navBarItems={navBarItems} />

            {/* Main navigation bar that appears on larger screens */}
            <motion.nav
                initial={{ translateY: - 100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-black bg-opacity-10 px-0 py-[0.5rem] w-screen fixed top-0 z-30 backdrop-blur-[50px] max-2xl:px-8">
                <div className="max-w-screen-xl flex items-center justify-between py-[1rem] px-0 mx-auto my-0">

                    {/* Logo for the navbar */}
                    <Link href="/" className="text-4xl font-bold h-auto w-48 max-xsm:w-40">Viraj</Link>

                    <ul className="flex items-center text-center gap-2 list-none max-lg:hidden">
                        {navBarItems()} {/* Render the navigation items for larger screens */}
                    </ul>

                    {/* Menu Button for mobile view */}
                    <button className="text-2xl w-10 h-10 items-center justify-center border-none rounded-md text-white bg-gradient-to-r from-[#A993FE] to-[#7E61E7] leading-[0] cursor-pointer transition-all duration-400 ease-linear hidden
                    hover:text-[#A993FE] hover:bg-[#000] hover:from-transparent hover:to-transparent hover:border hover:border-solid border-[#A993FE] max-lg:flex" onClick={toggleMenu}>
                        {/* Button that shows a menu icon when the menu is closed and a close icon when the menu is open */}
                        <span className="material-symbols-outlined text-[1.8rem]">
                            {openMenu ? "close" : "menu"} {/* Change icon based on menu state */}
                        </span>
                    </button>
                </div>
            </motion.nav>
        </div>
    );
};

export default Navbar;
