import About from "@/components/About";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Landing />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
