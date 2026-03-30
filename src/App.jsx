import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Tech from "./sections/Tech";
import AnimatedBackground from "./components/AnimatedBackground";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#04070d] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <AnimatedBackground />
      </div>

      <div className="relative z-10">
        <Hero />
        <Services />
        <Tech />
        <Projects />
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}
