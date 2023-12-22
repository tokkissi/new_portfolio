import About from "@/components/About";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Landing />
      <About />
      <Projects />
    </main>
  );
}
