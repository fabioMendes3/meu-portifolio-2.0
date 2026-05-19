import { useEffect, useRef } from "react";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Tech from "./sections/Tech";
import AnimatedBackground from "./components/AnimatedBackground";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const bgVideoRef = useRef(null);

  useEffect(() => {
    if (bgVideoRef.current) bgVideoRef.current.playbackRate = 0.6;
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020202] text-white">
      {/* camada 0 — animação de partículas/orbs */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <AnimatedBackground />
      </div>

      {/* camada 1 — background2 fixo para as seções após a Hero */}
      <video
        ref={bgVideoRef}
        src="/videos/background2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none fixed inset-0 z-[1] h-full w-full object-cover"
        style={{ opacity: 0.22 }}
      />
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[#020202]/50" />

      {/* camada 10 — conteúdo (Hero cobre o background2 com bg-[#020202]) */}
      <div className="relative z-10">
        <Hero />
        <Services />
        <Tech />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
