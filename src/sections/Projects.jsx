import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Expand, X } from "lucide-react";
import { projects } from "../data/projects";
import LazyVideo from "../components/LazyVideo";

const textVariants = (direction = "left") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -60 : 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
});

const videoVariants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 24,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <section id="project" className="relative overflow-hidden bg-transparent px-6 py-28 text-white md:px-10">
      <div className="absolute left-1/2 top-10 h-80 w-[34rem] -translate-x-1/2 rounded-full bg-[#d0f2e7]/6 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#ade0db]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p
            className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d0f2e7]/80"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            projetos reais
          </p>

          <h2
            className="text-3xl font-semibold leading-tight md:text-5xl"
            style={{ fontFamily: '"Science Gothic", sans-serif' }}
          >
            Projetos que mostram
            <span className="block bg-gradient-to-r from-[#ebf2f2] via-[#d0f2e7] to-[#bcebdf] bg-clip-text text-transparent">
              na prática o que eu construo
            </span>
          </h2>

          <p
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg"
            style={{ fontFamily: '"Science Gothic", sans-serif' }}
          >
            Trabalhos reais desenvolvidos com foco em interface, performance e
            experiência profissional para o cliente final.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => {
            const reverse = index % 2 !== 0;
            const isExpanded = expandedProject === index;

            return (
              <div
                key={project.title}
                className={`group relative grid items-center gap-10 overflow-hidden rounded-[36px] border border-white/10 p-6 backdrop-blur-xl md:p-8 xl:grid-cols-[1.05fr_1.25fr] ${
                  index % 2 === 0 ? "bg-[#bcebdf]/8" : "bg-[#d0f2e7]/8"
                } ${reverse ? "xl:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#d0f2e7]/6 via-transparent to-[#bcebdf]/6 opacity-60" />

                <motion.div
                  variants={textVariants(reverse ? "right" : "left")}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  className={`relative z-10 transition duration-300 ${
                    isExpanded ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <p
                    className="mb-3 text-sm uppercase tracking-[0.25em] text-[#d0f2e7]/80"
                    style={{ fontFamily: '"JetBrains Mono", monospace' }}
                  >
                    0{index + 1} — {project.subtitle}
                  </p>

                  <h3
                    className="text-2xl font-semibold md:text-4xl"
                    style={{ fontFamily: '"Science Gothic", sans-serif' }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="mt-5 max-w-xl text-base leading-8 text-white/70"
                    style={{ fontFamily: '"Science Gothic", sans-serif' }}
                  >
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-5">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#ade0db]/20 bg-[#ade0db]/10 px-5 py-3 text-sm font-medium text-[#d0f2e7] transition duration-300 hover:border-[#ade0db]/40 hover:bg-[#ade0db]/15"
                      >
                        Ver projeto
                        <ArrowUpRight size={16} />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/75 transition duration-300 hover:bg-white/10 hover:text-white"
                      >
                        GitHub
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  variants={videoVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  className={`relative z-10 min-h-[320px] md:min-h-[380px] xl:min-h-[430px] transition duration-300 ${
                    isExpanded ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="absolute inset-0 rounded-[30px] bg-[#bcebdf]/10 blur-2xl" />

                  <div className="relative h-full overflow-hidden rounded-[30px] border border-white/10 bg-[#020202]/90 shadow-[0_0_40px_rgba(0,0,0,0.25)]">
                    <div className="group/video relative flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(188,235,223,0.08),transparent_60%)] p-4">
                      <LazyVideo
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full rounded-[22px] object-contain"
                      />

                      <button
                        type="button"
                        onClick={() => setExpandedProject(index)}
                        className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#020202]/70 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover/video:opacity-100 hover:scale-105 hover:bg-[#020202]/90"
                        aria-label={`Ampliar vídeo de ${project.title}`}
                      >
                        <Expand size={22} />
                      </button>

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020202]/20 via-transparent to-transparent" />
                    </div>
                  </div>
                </motion.div>

                {isExpanded && (
                  <div className="absolute inset-0 z-30">
                    <div className="absolute inset-0 bg-[#020202]/88 backdrop-blur-sm" />

                    <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
                      <div className="relative h-full w-full overflow-hidden rounded-[32px] border border-[#bcebdf]/20 bg-[#020202]/96 shadow-[0_0_60px_rgba(188,235,223,0.14)]">
                        <button
                          type="button"
                          onClick={() => setExpandedProject(null)}
                          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#020202]/70 text-white backdrop-blur-md transition duration-300 hover:bg-[#020202]/95"
                          aria-label={`Fechar vídeo de ${project.title}`}
                        >
                          <X size={18} />
                        </button>

                        <div className="flex h-full w-full items-center justify-center p-4 md:p-6">
                          <video
                            src={project.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_35%,transparent_65%,rgba(34,211,238,0.08))]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center">
          <a
            href="https://github.com/seuusuario"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-medium text-white/80 transition duration-300 hover:bg-white/10 hover:text-white"
          >
            Ver todos os projetos no GitHub
            <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
