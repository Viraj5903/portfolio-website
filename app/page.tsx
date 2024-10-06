import About from "@/components/About"; // Importing the About component to display personal information
import ContactMe from "@/components/ContactMe"; // Importing the ContactMe component for user contact options
import Footer from "@/components/Footer"; // Importing the Footer component for the bottom of the page
import HomeSection from "@/components/HomeSection"; // Importing the HomeSection component as the landing section
import Navbar from "@/components/Navbar"; // Importing the Navbar component for site navigation
import Projects from "@/components/Projects"; // Importing the Projects component to showcase work
import Skills from "@/components/Skills"; // Importing the Skills component to display technical skills
import WorkExperience from "@/components/WorkExperience"; // Importing the WorkExperience component to detail job history

/**
 * Home component serves as the main entry point for the application.
 * It integrates various sections of the page, including the navigation bar,
 * home section, about section, skills section, work experience, projects,
 * contact information, and footer.
 * 
 * @returns {JSX.Element} The rendered Home component containing the main layout of the application.
 */
export default function Home(): JSX.Element {
  return (
    <div className="relative"> {/* Outer container for layout, relative positioning for child components */}
      <Navbar /> {/* Rendering the navigation bar at the top of the page */}
      <main className="max-w-screen-xl mx-auto relative flex flex-col gap-8"> {/* Main content area */}
        <HomeSection /> {/* Rendering the introductory home section */}
        <About /> {/* Rendering the about section */}
        <Skills /> {/* Rendering the skills section */}
        <WorkExperience /> {/* Rendering the work experience section */}
        <Projects /> {/* Rendering the projects section */}
        <ContactMe /> {/* Rendering the contact me section */}
      </main>
      <Footer /> {/* Rendering the footer at the bottom of the page */}
    </div>
  );
}
