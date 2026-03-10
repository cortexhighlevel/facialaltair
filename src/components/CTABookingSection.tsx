import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import GlassButton from "@/components/GlassButton";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const services = [
  "Harmonização Facial",
  "Toxina Botulínica",
  "Preenchimento Facial",
  "Bioestimulador de Colágeno",
  "Fios de PDO",
  "Rinomodelação",
];

const CTABookingSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const isValid = name.trim().length >= 2 && phone.replace(/\D/g, "").length >= 10 && selectedService;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    const text = [
      `Olá, Dr. Altair! Vim pelo site e gostaria de agendar uma consulta.`,
      ``,
      `👤 Nome: ${name.trim()}`,
      `📱 Contato: ${phone.trim()}`,
      `💉 Procedimento: ${selectedService}`,
    ].join("\n");

    window.open(
      `https://api.whatsapp.com/send?phone=5547933802402&text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative pt-8 md:pt-16 pb-16 md:pb-28 px-4 md:px-6 lg:px-8 bg-foreground overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 right-0 w-[420px] h-[420px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Why choose us */}
          <motion.div {...fadeIn(0)} className="flex flex-col">
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Porque nos Escolher
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-background mb-5">
              Linha Completa de{" "}
              <span className="text-accent">Procedimentos Estéticos</span>
            </h2>

            <p className="text-background/55 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Nosso ambiente acolhedor e equipe especializada te proporcionarão
              o melhor atendimento. Agende e eleve sua autoestima!
            </p>

            <div className="flex flex-col gap-4">
              {[
                { value: "100%", label: "Procedimentos Bem-sucedidos" },
                { value: "100%", label: "Clientes Satisfeitos" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-xl font-bold text-background">{stat.value}</span>
                    <span className="text-background/50 text-sm ml-2">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div {...fadeIn(0.15)}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-background p-6 md:p-8 flex flex-col gap-5 shadow-lg"
            >
              <div className="text-center mb-1">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
Agende sua Consulta
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Preencha os dados e envie pelo WhatsApp
                </p>
              </div>

              {/* Nome */}
              <div>
                <label className="block text-muted-foreground text-[11px] font-medium tracking-wider uppercase mb-1.5">
                  Nome completo
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="block text-muted-foreground text-[11px] font-medium tracking-wider uppercase mb-1.5">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="(00) 00000-0000"
                  className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Procedimento — chips */}
              <div>
                <label className="block text-muted-foreground text-[11px] font-medium tracking-wider uppercase mb-2">
                  Procedimento de Interesse
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedService(s === selectedService ? "" : s)}
                      className={`rounded-xl px-3 py-2.5 text-xs font-medium border transition-all text-center ${
                        selectedService === s
                          ? "bg-accent text-accent-foreground border-accent"
                          : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <GlassButton type="submit" disabled={!isValid} className="mt-1 w-full">
                <Send className="w-4 h-4" />
                Enviar pelo WhatsApp
              </GlassButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABookingSection;
