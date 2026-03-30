import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiVercel,
  SiRailway,
  SiDigitalocean,
  SiExpress,
} from "react-icons/si";

const techStack = [
  {
    title: "Frontend",
    icon: FaReact,
    items: [
      { name: "React", icon: FaReact },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    icon: FaServer,
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
    ],
  },
  {
    title: "Database",
    icon: FaDatabase,
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Deploy",
    icon: SiVercel,
    items: [
      { name: "Vercel", icon: SiVercel },
      { name: "Railway", icon: SiRailway },
      { name: "DigitalOcean", icon: SiDigitalocean },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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

export default function Tech() {
  return (
    <section id="tech" className="relative overflow-hidden bg-transparent px-6 py-24 text-white md:px-10">

      {/* glow de fundo leve */}
      <div className="absolute left-1/2 top-0 h-72 w-[30rem] -translate-x-1/2 rounded-full bg-cyan-400/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* título */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/80"
             style={{ fontFamily: '"JetBrains Mono", monospace' }}>
            tecnologias
          </p>

          <h2
            className="text-3xl font-semibold md:text-5xl"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            Stack moderna e escalável
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            Tecnologias que utilizo para construir aplicações rápidas,
            seguras e preparadas para crescer.
          </p>
        </motion.div>

        {/* grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {techStack.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                {/* glow hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-fuchsia-400/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* header */}
                <div className="relative z-10 mb-6 flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {category.title}
                  </h3>
                </div>

                {/* itens */}
                <div className="space-y-3">
                  {category.items.map((tech) => {
                    const TechIcon = tech.icon;

                    return (
                      <div
                        key={tech.name}
                        className="flex items-center gap-3 text-white/70 transition group-hover:text-white"
                      >
                        <TechIcon size={16} />
                        <span>{tech.name}</span>
                      </div>
                    );
                  })}
                </div>

                {/* número decorativo */}
                <span className="absolute bottom-4 right-4 text-sm text-white/10">
                  0{index + 1}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}