import { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaServer } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  {
    title: "Frontend",
    icon: FaReact,
    color: "#bcebdf",
    items: ["React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: FaServer,
    color: "#d0f2e7",
    items: ["Node.js", "Express"],
  },
  {
    title: "Database",
    icon: FaDatabase,
    color: "#ade0db",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Deploy",
    icon: SiVercel,
    color: "#ebf2f2",
    items: ["Vercel", "Railway", "DigitalOcean"],
  },
];

export default function Tech() {
  const sectionRef  = useRef(null);
  const labelRef    = useRef(null);
  const titleRef    = useRef(null);
  const descRef     = useRef(null);
  const rowRef      = useRef(null);
  const circleRefs  = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const circles = circleRefs.current.filter(Boolean);
      const row     = rowRef.current;

      // Raio visual do círculo em px (metade de w-44 = 176px → 88px)
      const RADIUS = 112;

      // Distância de viagem: da borda esquerda da tela até a posição final
      const travelDist = row.getBoundingClientRect().left + row.offsetWidth;

      // Rotação acumulada em graus = (distância / raio) × (180/π)
      const rollDeg = (travelDist / RADIUS) * (180 / Math.PI);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      // — label em digitação
      tl.fromTo(
        labelRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 0.65, ease: "none" }
      );

      // — título e descrição
      tl.fromTo(
        [titleRef.current, descRef.current],
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power2.out", stagger: 0.12 },
        "+=0.05"
      );

      // Fase 1 — todos os círculos rolam da esquerda juntos
      // (iniciam fora da tela à esquerda, rotation negativa = roda no sentido horário indo para a direita)
      tl.fromTo(
        circles,
        { x: -travelDist, rotation: -rollDeg },
        {
          x: 55,           // ultrapassam levemente a posição final (ponto de colisão)
          rotation: 18,    // pequena rotação residual no impacto
          duration: 1.35,
          ease: "power2.inOut",
          stagger: 0,      // todos se movem juntos como uma fila coesa
        },
        "+=0.05"
      );

      // Fase 2 — impacto: ricochete para a esquerda em cascata do último para o primeiro
      tl.to(circles, {
        x: -28,
        rotation: -6,
        duration: 0.16,
        ease: "power2.out",
        stagger: { from: "end", amount: 0.1 },
      });

      // Fase 3 — assentam na posição original em cascata
      tl.to(circles, {
        x: 0,
        rotation: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: { from: "end", amount: 0.09 },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tech"
      className="relative overflow-hidden bg-transparent px-6 py-24 text-white md:px-10"
    >
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* cabeçalho */}
        <div className="mb-16 text-center">
          <p
            ref={labelRef}
            className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d0f2e7]/80"
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              clipPath: "inset(0 100% 0 0)",
            }}
          >
            tecnologias
          </p>

          <h2
            ref={titleRef}
            className="text-3xl font-semibold md:text-5xl"
            style={{ fontFamily: '"Space Grotesk", sans-serif', opacity: 0 }}
          >
            Stack moderna e escalável
          </h2>

          <p
            ref={descRef}
            className="mx-auto mt-6 max-w-2xl text-white/70"
            style={{ opacity: 0 }}
          >
            Tecnologias que utilizo para construir aplicações rápidas,
            seguras e preparadas para crescer.
          </p>
        </div>

        {/* círculos */}
        <div
          ref={rowRef}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {techStack.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                ref={(el) => { circleRefs.current[index] = el; }}
                className="group relative flex h-56 w-56 flex-col items-center justify-center rounded-full border border-white/12 backdrop-blur-xl"
                style={{
                  background: `radial-gradient(circle at 38% 38%, ${category.color}1a, ${category.color}06 70%)`,
                  boxShadow: `0 0 40px ${category.color}18, inset 0 0 24px ${category.color}0a`,
                }}
              >
                {/* linha de destaque no topo — simula reflexo de bola */}
                <div
                  className="absolute top-4 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full opacity-40 blur-sm"
                  style={{ background: `linear-gradient(to right, transparent, ${category.color}, transparent)` }}
                />

                {/* brilho no hover */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{ boxShadow: `0 0 32px ${category.color}55, inset 0 0 18px ${category.color}18` }}
                />

                <Icon
                  size={38}
                  className="relative mb-3"
                  style={{ color: category.color }}
                />

                <p
                  className="relative text-sm font-semibold text-white"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  {category.title}
                </p>

                <div className="relative mt-1.5 flex flex-col items-center gap-0.5">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] text-white/50"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
