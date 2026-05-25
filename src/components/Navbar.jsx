import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#service" },
  { label: "Tecnologias", href: "#tech" },
  { label: "Projetos", href: "#project" },
  { label: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-transparent backdrop-blur-none"
          : "bg-[#020202]/70 backdrop-blur-xl"
      }`}
    >
      {/* linha de brilho mint na base — some junto com o fundo */}
      <div className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d0f2e7]/40 to-transparent transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-100"}`} />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">

        {/* Logo */}
        <a
          href="#hero"
          className="text-base text-[#d0f2e7] transition duration-200 hover:text-white"
          style={{
            fontFamily: '"Black Ops One", cursive',
            filter: "drop-shadow(0 0 10px rgba(188,235,223,0.65))",
          }}
        >
          {"<fabioMendes/>"}
        </a>

        {/* Links desktop */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-white/90 transition duration-200 hover:text-[#d0f2e7]"
              style={{ fontFamily: '"Science Gothic", sans-serif' }}
            >
              {link.label}
              {/* underline animado no hover */}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-[#d0f2e7]/70 to-[#bcebdf]/40 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Botão CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-[#ade0db] px-5 py-2.5 text-sm font-semibold text-[#020202] transition duration-200 hover:bg-[#bcebdf] md:inline-block"
          style={{
            fontFamily: '"Science Gothic", sans-serif',
            boxShadow: "0 0 18px rgba(173,224,219,0.35), 0 0 6px rgba(188,235,223,0.2)",
          }}
        >
          Contratar
        </a>

        {/* Hamburger mobile */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d0f2e7]/20 bg-[#d0f2e7]/8 text-[#d0f2e7] transition hover:bg-[#d0f2e7]/15 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="border-t border-[#d0f2e7]/15 bg-[#020202]/96 px-6 pb-6 pt-4 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col" aria-label="Menu mobile">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] items-center text-base font-medium text-white/85 transition hover:text-[#d0f2e7]"
                  style={{ fontFamily: '"Science Gothic", sans-serif' }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 flex min-h-[44px] items-center justify-center rounded-full bg-[#ade0db] px-5 text-sm font-semibold text-[#020202] transition hover:bg-[#bcebdf]"
                style={{
                  fontFamily: '"Science Gothic", sans-serif',
                  boxShadow: "0 0 16px rgba(173,224,219,0.3)",
                }}
              >
                Contratar
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
