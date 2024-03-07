import Image from "next/image";
import Introduction from "./components/Introduction";
import { Navbar } from "./components/Navbar";
import AboutSection from "./components/AboutSection" 
import EmailSection from "./components/EmailSection";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white container mx-auto px-12 py-4">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <Introduction/>
        <AboutSection/>
        <Projects/>
        <EmailSection/>

      </div>
    </main>
  );
}

