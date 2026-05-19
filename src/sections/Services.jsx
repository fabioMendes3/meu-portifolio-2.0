import { useEffect, useRef } from "react";
import { Globe, Code2, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Globe,
    title: "Sites Profissionais",
    description:
      "Landing pages e sites institucionais modernos, pensados para transmitir credibilidade, destacar sua marca e converter visitantes em clientes.",
  },
  {
    icon: Code2,
    title: "Aplicações Web",
    description:
      "Sistemas administrativos, dashboards e soluções sob medida para automatizar processos, organizar informações e melhorar a operação do negócio.",
  },
  {
    icon: Rocket,
    title: "Performance e Presença",
    description:
      "Projetos rápidos, responsivos e bem estruturados, com visual premium e experiência fluida em desktop, tablet e celular.",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const labelRef  = useRef(null);
  const titleRef  = useRef(null);
  const descRef   = useRef(null);
  const cardRefs  = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // 1 — label "serviços" em digitação (wipe da esquerda para direita)
      tl.fromTo(
        labelRef.current,
        { clipPath: "inset(0 100% 0 0)", opacity: 1 },
        { clipPath: "inset(0 0% 0 0)", duration: 0.75, ease: "none" }
      );

      // 3 — título
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power2.out" },
        "+=0.05"
      );

      // 4 — descrição
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
        "+=0.05"
      );

      // 5 — cards da direita para esquerda, um por vez
      tl.fromTo(
        cardRefs.current,
        { opacity: 0, x: 120 },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
          ease: "power2.out",
          stagger: 0.18,
        },
        "+=0.1"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="service"
      className="relative overflow-hidden bg-transparent px-6 py-24 text-white md:px-10"
    >

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p
            ref={labelRef}
            className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d0f2e7]/85"
            style={{ fontFamily: '"JetBrains Mono", monospace', clipPath: "inset(0 100% 0 0)" }}
          >
            serviços
          </p>

          <h2
            ref={titleRef}
            className="text-3xl font-semibold leading-tight md:text-5xl"
            style={{ fontFamily: '"Space Grotesk", sans-serif', opacity: 0 }}
          >
            O que eu posso construir
            <span className="block bg-gradient-to-r from-[#ebf2f2] via-[#d0f2e7] to-[#bcebdf] bg-clip-text text-transparent">
              para o seu negócio
            </span>
          </h2>

          <p
            ref={descRef}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg"
            style={{ fontFamily: '"Inter", sans-serif', opacity: 0 }}
          >
            Soluções digitais com foco em estética, performance e estratégia,
            pensadas para valorizar sua empresa e gerar resultados reais.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`group relative overflow-hidden rounded-[28px] border border-white/10 p-7 backdrop-blur-xl ${
                  index % 2 === 0 ? "bg-[#bcebdf]/8" : "bg-[#d0f2e7]/8"
                }`}
                style={{ opacity: 0 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#d0f2e7]/8 via-transparent to-[#bcebdf]/8 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d0f2e7]/60 to-transparent opacity-60" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#bcebdf]/20 bg-[#bcebdf]/10 text-[#bcebdf] shadow-[0_0_28px_rgba(188,235,223,0.12)]">
                      <Icon size={26} strokeWidth={2} />
                    </div>
                    <span
                      className="text-sm text-white/25"
                      style={{ fontFamily: '"JetBrains Mono", monospace' }}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3
                    className="text-2xl font-semibold text-white"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="mt-4 leading-8 text-white/68"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm text-[#d0f2e7]/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#bcebdf] shadow-[0_0_10px_rgba(188,235,223,0.9)]" />
                    <span style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                      solução personalizada
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
