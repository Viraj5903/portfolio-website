import About from "@/components/About";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="max-w-screen-xl mx-auto relative flex flex-col gap-8">
        <HomeSection />
        <About />
      </main>
    </div>
  );
}
