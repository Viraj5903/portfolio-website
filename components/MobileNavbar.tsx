import Link from "next/link";

/**
 * MobileNavbar component for rendering a mobile navigation menu.
 * 
 * This component displays a full-screen overlay with navigation items when the menu is open.
 * 
 * @param {{ isOpen: boolean; toggleMenu: () => void; navBarItems: () => JSX.Element[]; }} props - The props for the component.
 * @param {boolean} props.isOpen - Indicates if the mobile menu is currently open.
 * @param {() => void} props.toggleMenu - Function to toggle the menu visibility.
 * @param {() => JSX.Element[]} props.navBarItems - Function that returns an array of JSX elements for the navbar items.
 * 
 * @returns {React.JSX.Element} The rendered MobileNavbar component.
 */
const MobileNavbar: React.FC<{ isOpen: boolean; toggleMenu: () => void; navBarItems: () => JSX.Element[]; }> =
    ({ isOpen, toggleMenu, navBarItems }: { isOpen: boolean; toggleMenu: () => void; navBarItems: () => JSX.Element[]; }): React.JSX.Element => {
        return (
            // Full-screen overlay menu that appears when isOpen is true 
            < div
                className={`w-screen h-screen hidden bg-black bg-opacity-30 fixed left-0 top-0 !z-[999] shadow-[rgba(0,0,0,0.3)] shadow-2xl transition-all duration-300 ease-linear ${isOpen ? 'opacity-1 translate-x-0' : 'translate-x-[-100vw] opacity-0'} max-lg:block`
                }
                onClick={toggleMenu} >

                {/* Container for the menu items */}
                < div className="mobile-menu-container w-[60vw] h-screen bg-[#342864] p-8 overflow-auto" >
                    {/* Title of the mobile navbar */}
                    <h1 className="mb-10 text-3xl font-bold">
                        <Link href="/">Viraj</Link>
                    </h1>

                    {/* List of navigation items */}
                    < ul className="flex flex-col gap-8 list-none" >
                        {/* Call the navBarItems function to render items */}
                        {navBarItems()}
                    </ul >
                </div >
            </div >
        );
    };

export default MobileNavbar;