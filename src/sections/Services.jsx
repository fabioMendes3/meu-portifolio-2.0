import { motion } from "framer-motion";
import { Globe, Code2, Rocket } from "lucide-react";

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <section id="service" className="relative overflow-hidden bg-transparent px-6 py-24 text-white md:px-10">
      {/* glows suaves, sem faixa horizontal */}
      <div className="absolute left-1/2 top-10 h-64 w-[30rem] -translate-x-1/2 rounded-full bg-cyan-400/6 blur-3xl" />
      <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute left-[-80px] bottom-10 h-64 w-64 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p
            className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/85"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            serviços
          </p>

          <h2
            className="text-3xl font-semibold leading-tight md:text-5xl"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            O que eu posso construir
            <span className="block bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              para o seu negócio
            </span>
          </h2>

          <p
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Soluções digitais com foco em estética, performance e estratégia,
            pensadas para valorizar sua empresa e gerar resultados reais.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/8 via-transparent to-fuchsia-400/8 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-60" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.12)]">
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

                  <div className="mt-8 flex items-center gap-2 text-sm text-cyan-300/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]" />
                    <span style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                      solução personalizada
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
