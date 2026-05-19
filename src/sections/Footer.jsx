import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="relative mt-10 w-full border-t border-white/10 bg-transparent text-white backdrop-blur-xl">
      <div className="mx-auto w-full max-w-[1800px] px-4 py-10 md:px-8 xl:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p
              className="text-sm uppercase tracking-[0.3em] text-[#d0f2e7]/80"
              style={{ fontFamily: '"JetBrains Mono", monospace' }}
            >
              {"<fabioMendes/>"}
            </p>

            <h3
              className="mt-4 text-2xl font-semibold md:text-3xl"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Desenvolvimento web com presença profissional
            </h3>

            <p
              className="mt-4 max-w-2xl text-base leading-8 text-white/65"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Criação de sites, landing pages e sistemas web com visual moderno,
              performance e foco em entregar valor real para marcas, negócios e
              produtos digitais.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">
              navegação
            </p>

            <div className="space-y-3 text-white/75">
              <a href="#hero" className="block transition hover:text-white">
                Início
              </a>
              <a href="#service" className="block transition hover:text-white">
                Serviços
              </a>
              <a href="#tech" className="block transition hover:text-white">
                Tecnologias
              </a>
              <a href="#project" className="block transition hover:text-white">
                Projetos
              </a>
              <a href="#contact" className="block transition hover:text-white">
                Contato
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">
              contato
            </p>

            <div className="space-y-3">
              <a
                href="https://github.com/fabioMendes3"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/75 transition hover:text-white"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/fabio-mendes-73421727a/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/75 transition hover:text-white"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/fabiomendesdev/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/75 transition hover:text-white"
              >
                <Instagram size={16} />
                <span>Instagram</span>
              </a>

              <a
                href="mailto:fabiohuem@hotmail.com"
                className="flex items-center gap-3 text-white/75 transition hover:text-white"
              >
                <Mail size={16} />
                <span>fabiohuem@hotmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mt-6 flex flex-col gap-3 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Fabio Mendes. Todos os direitos reservados.</p>
          
        </div>
      </div>
    </footer>
  );
}
