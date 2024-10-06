import Image from "next/image"; // Import the Image component from Next.js for optimized image handling
import Link from "next/link"; // Import the Link component from Next.js for client-side navigation

/**
 * Footer component displays a footer section with social media links and copyright information.
 * It includes links to LinkedIn and GitHub with corresponding icons, and a copyright notice.
 * 
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer: React.FC = (): JSX.Element => {
    return (
        <footer className="footer w-full p-6 flex flex-col justify-center items-center gap-4 bg-[#3d3072] mt-8 text-center">
            {/* Main footer container with flexbox for centering content and styling */}
            <div className="flex flex-col gap-4">
                <p className="text-lg">Connect with me</p> {/* Heading for connection prompt */}

                {/* Container for social media icons, using flexbox for horizontal alignment */}
                <div className="flex flex-row gap-4 w-full justify-center items-center">

                    {/* Link to LinkedIn profile */}
                    <Link
                        href="https://www.linkedin.com/in/viraj-patel-montreal" // URL to LinkedIn
                        target="_blank" // Open link in a new tab
                        rel="noopener noreferrer" // Security attributes for external links
                        aria-label="LinkedIn" // Accessibility label for screen readers
                    >
                        <Image
                            src="/images/linkedin-icon.svg" // Source of LinkedIn icon
                            alt="LinkedIn" // Alt text for the image
                            width={50} // Width of the image
                            height={50} // Height of the image
                        />
                    </Link>

                    {/* Link to GitHub profile */}
                    <Link
                        href="https://github.com/Viraj5903" // URL to GitHub
                        target="_blank" // Open link in a new tab
                        rel="noopener noreferrer" // Security attributes for external links
                        aria-label="GitHub" // Accessibility label for screen readers
                    >
                        <Image
                            src="/images/github-icon.svg" // Source of GitHub icon
                            alt="GitHub" // Alt text for the image
                            width={50} // Width of the image
                            height={50} // Height of the image
                        />
                    </Link>
                </div>
            </div>
            <p className="text-sm">
                {/* Copyright notice with current year dynamically generated */}
                &copy; {new Date().getFullYear()} Viraj Patel. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer; // Export the Footer component as the default export
