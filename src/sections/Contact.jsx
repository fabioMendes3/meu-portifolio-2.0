import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MessageCircle, Send, MapPin } from "lucide-react";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({ type: "", message: "" });

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        type: "error",
        message:
          "As variáveis do EmailJS não foram configuradas corretamente no arquivo .env.",
      });
      return;
    }

    try {
      setIsSending(true);

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setStatus({
        type: "success",
        message: "Mensagem enviada com sucesso. Vou te responder em breve.",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);

      setStatus({
        type: "error",
        message:
          "Não foi possível enviar a mensagem agora. Tente novamente em instantes.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-transparent px-4 py-28 text-white md:px-8 xl:px-12"
    >
      <div className="absolute left-1/2 top-10 h-72 w-[34rem] -translate-x-1/2 rounded-full bg-cyan-400/6 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[1800px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p
            className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/80"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            bio + contato
          </p>

          <h2
            className="text-3xl font-semibold leading-tight md:text-5xl"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            Vamos transformar
            <span className="block bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              sua ideia em uma presença digital forte
            </span>
          </h2>

          <p
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Se você procura um site moderno, uma landing page profissional ou um
            sistema web sob medida, eu posso ajudar a construir uma solução com
            estética, performance e estratégia.
          </p>
        </motion.div>

        <div className="grid gap-8 xl:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            className="min-h-[760px] rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8 xl:p-10"
          >
            <div className="grid h-full gap-8 lg:grid-cols-[380px_1fr]">
              <div className="flex items-start justify-center">
                <div className="relative w-full max-w-[380px] overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1220]/90 shadow-[0_0_30px_rgba(0,0,0,0.25)]">
                  <div className="aspect-[4/5] w-full">
                    <img
                      src="public/images/foto.png"
                      alt="Foto de Fabio Mendes"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/30 via-transparent to-transparent" />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <p
                  className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300/80"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  sobre mim
                </p>

                <h3
                  className="text-3xl font-semibold xl:text-4xl"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Fabio Mendes
                </h3>

                <p
                  className="mt-5 text-base leading-8 text-white/72 xl:text-lg"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Sou desenvolvedor focado em criação de sites, landing pages e
                  aplicações web com visual moderno, boa performance e estrutura
                  pensada para gerar valor real para negócios.
                </p>

                <p
                  className="mt-4 text-base leading-8 text-white/72 xl:text-lg"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Meu objetivo é unir design, tecnologia e clareza para entregar
                  projetos que transmitam profissionalismo, melhorem a presença
                  digital da marca e ofereçam uma experiência forte para o
                  usuário final.
                </p>

                <p
                  className="mt-4 text-base leading-8 text-white/72 xl:text-lg"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Trabalho com foco em estética, experiência e estrutura bem
                  construída, buscando sempre criar soluções digitais que não
                  sejam apenas bonitas, mas também estratégicas e funcionais.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    "Sites Profissionais",
                    "Landing Pages",
                    "Sistemas Web",
                    "Aplicativos web",
                    
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <a
                    href="mailto:fabiohuem@hotmail.com"
                    className="flex items-center gap-3 text-white/75 transition hover:text-white"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Mail size={18} />
                    </span>
                    <span>fabiohuem@hotmail.com</span>
                  </a>

                  <a
                    href="https://wa.me/5541999581713"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-white/75 transition hover:text-white"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <MessageCircle size={18} />
                    </span>
                    <span>WhatsApp para contato rápido</span>
                  </a>

                  <div className="flex items-center gap-3 text-white/60">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <MapPin size={18} />
                    </span>
                    <span>Brasil, Curitiba/PR</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            className="min-h-[760px] rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8 xl:p-10"
          >
            <div className="flex h-full flex-col">
              <p
                className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300/80"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                entre em contato
              </p>

              <h3
                className="text-3xl font-semibold xl:text-4xl"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Vamos conversar sobre seu projeto
              </h3>

              <p
                className="mt-4 max-w-xl text-base leading-8 text-white/70 xl:text-lg"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Me envie uma mensagem com sua ideia, objetivo ou necessidade.
                Posso te ajudar a transformar isso em uma solução digital bonita,
                funcional e profissional.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-1 flex-col space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-white/65">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Seu nome"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-[#0b1220]/80 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/35"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/65">
                      Email
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      placeholder="seuemail@exemplo.com"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-[#0b1220]/80 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/35"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/65">
                    Tipo de projeto
                  </label>
                  <input
                    type="text"
                    name="project_type"
                    placeholder="Site, landing page, sistema web..."
                    className="w-full rounded-2xl border border-white/10 bg-[#0b1220]/80 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/35"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/65">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    rows="10"
                    placeholder="Me conte um pouco sobre o que você precisa..."
                    required
                    className="min-h-[280px] w-full rounded-2xl border border-white/10 bg-[#0b1220]/80 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/35"
                  />
                </div>

                {status.message && (
                  <div
                    className={`rounded-2xl border px-4 py-3 text-sm ${
                      status.type === "success"
                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                        : "border-red-400/20 bg-red-400/10 text-red-300"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-3 text-sm font-semibold text-[#051018] transition duration-300 hover:scale-[1.02] hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSending ? "Enviando..." : "Enviar mensagem"}
                    <Send size={16} />
                  </button>

                  <a
                    href="https://wa.me/5541999581713"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-white/85 transition duration-300 hover:bg-white/10"
                  >
                    Falar no WhatsApp
                    <MessageCircle size={16} />
                  </a>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
