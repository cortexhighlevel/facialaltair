import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Send } from "lucide-react";
import { useState } from "react";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const CTABookingSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedService = service.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedPhone) return;

    const text = [
      `Olá! Gostaria de agendar uma consulta.`,
      `Nome: ${trimmedName}`,
      `Telefone: ${trimmedPhone}`,
      trimmedService ? `Procedimento: ${trimmedService}` : "",
      trimmedMessage ? `Mensagem: ${trimmedMessage}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://api.whatsapp.com/send?phone=5547933802402&text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-foreground overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Content */}
          <div className="flex flex-col">
            {/* Badge */}
            <motion.span
              {...fadeIn(0)}
              className="inline-block w-fit text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              Porque nos Escolher
            </motion.span>

            <motion.h2
              {...fadeIn(0.1)}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-background mb-6"
            >
              Nós Oferecemos uma Linha Completa de{" "}
              <span className="text-accent">Procedimentos Estéticos</span>
            </motion.h2>

            <motion.p
              {...fadeIn(0.15)}
              className="text-background/60 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
            >
              Transforme sua autoestima! Nossos tratamentos personalizados te
              farão se sentir renovada. Nosso ambiente acolhedor e equipe
              especializada te proporcionarão o melhor atendimento.
            </motion.p>

            {/* Stats */}
            <motion.div {...fadeIn(0.2)} className="flex gap-8 mb-10">
              {[
                { value: "100%", label: "Procedimentos\nBem-sucedidos" },
                { value: "100%", label: "Clientes\nSatisfeitos" },
              ].map((stat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-3xl font-bold text-background">{stat.value}</span>
                    <span className="text-background/50 text-sm whitespace-pre-line leading-snug">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* WhatsApp direct CTA */}
            <motion.div {...fadeIn(0.25)}>
              <a
                href="https://api.whatsapp.com/send?phone=5547933802402&text=Ol%C3%A1%2C%20vim%20pelo%20site!%20Gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground hover:brightness-110 transition-all"
              >
                Agende Agora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div {...fadeIn(0.2)}>
            <div className="rounded-2xl border border-background/10 bg-background/5 backdrop-blur-sm p-8 md:p-10">
              <h3 className="text-2xl font-semibold text-background mb-2">
                Agende sua Consulta
              </h3>
              <p className="text-background/50 text-sm mb-8">
                Eleve sua autoestima! Preencha o formulário e entraremos em contato.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-background/40 text-xs font-medium tracking-wider uppercase mb-1.5">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full rounded-xl border border-background/10 bg-background/5 px-4 py-3 text-sm text-background placeholder:text-background/30 outline-none focus:border-accent/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-background/40 text-xs font-medium tracking-wider uppercase mb-1.5">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={20}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(00) 00000-0000"
                    className="w-full rounded-xl border border-background/10 bg-background/5 px-4 py-3 text-sm text-background placeholder:text-background/30 outline-none focus:border-accent/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-background/40 text-xs font-medium tracking-wider uppercase mb-1.5">
                    Procedimento de interesse
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-xl border border-background/10 bg-background/5 px-4 py-3 text-sm text-background outline-none focus:border-accent/50 transition-colors appearance-none"
                  >
                    <option value="" className="text-foreground">Selecione...</option>
                    <option value="Harmonização Facial" className="text-foreground">Harmonização Facial</option>
                    <option value="Toxina Botulínica" className="text-foreground">Toxina Botulínica</option>
                    <option value="Preenchimento Facial" className="text-foreground">Preenchimento Facial</option>
                    <option value="Bioestimulador de Colágeno" className="text-foreground">Bioestimulador de Colágeno</option>
                    <option value="Fios de PDO" className="text-foreground">Fios de PDO</option>
                    <option value="Rinomodelação" className="text-foreground">Rinomodelação</option>
                    <option value="Outro" className="text-foreground">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-background/40 text-xs font-medium tracking-wider uppercase mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    rows={3}
                    maxLength={500}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Deixe sua mensagem (opcional)"
                    className="w-full rounded-xl border border-background/10 bg-background/5 px-4 py-3 text-sm text-background placeholder:text-background/30 outline-none focus:border-accent/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-2 flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground hover:brightness-110 transition-all w-full"
                >
                  <Send className="w-4 h-4" />
                  Agende Sua Consulta Agora Mesmo!
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABookingSection;
