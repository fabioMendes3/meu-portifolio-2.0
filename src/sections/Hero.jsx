import { motion } from "framer-motion";
import FloatingTech from "../components/FloatingTech";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-transparent text-white">
      <FloatingTech />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto max-w-5xl text-center"
        >
          <TagFabio />

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            Desenvolvimento de
            <span className="block bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              sites e aplicações web
            </span>
            com visual moderno e presença profissional
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/72 md:text-lg"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Eu crio interfaces bonitas, rápidas e estratégicas para empresas que
            querem transmitir valor, destacar sua marca e conquistar mais clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#project"
              className="rounded-full bg-cyan-300 px-7 py-3 text-sm font-semibold text-[#051018] transition duration-300 hover:scale-[1.03] hover:bg-cyan-200"
            >
              Ver projetos
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-cyan-300/40 hover:bg-white/10"
            >
              Entrar em contato
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 1 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-3"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {["React", "Tailwind", "Node.js", "Express", "MySQL", "PostgreSQL"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TagFabio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="mb-10 flex justify-center"
    >
      <div className="group relative inline-flex items-center overflow-hidden rounded-full border border-cyan-400/25 bg-cyan-400/5 px-7 py-3.5 backdrop-blur-md">
        <motion.div
          animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.05, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-cyan-400/10 blur-xl"
        />

        <motion.div
          animate={{ x: ["-120%", "140%"] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-y-0 w-28 rotate-12 bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent blur-md"
        />

        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="relative mr-4 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.95)]"
        />

        <div
          className="relative flex items-center text-cyan-200"
          style={{ fontFamily: '"JetBrains Mono", monospace' }}
        >
          <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-cyan-300 pr-1 text-base font-medium tracking-[0.18em] sm:text-lg md:text-xl animate-[typing_2.2s_steps(15,end)_1_forwards,blink_0.9s_step-end_infinite] [width:0ch] [animation-delay:0.25s,2.45s]">
            {"<fabioMendes/>"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}