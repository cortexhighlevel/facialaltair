import { motion } from "framer-motion";
import { Phone, Award, Clock, Shield, Sparkles, Users } from "lucide-react";
import serviceHarmonizacao from "@/assets/service-harmonizacao.jpg";
import serviceBotox from "@/assets/service-botox.jpg";
import servicePreenchimento from "@/assets/service-preenchimento.jpg";
import serviceBioestimuladores from "@/assets/service-bioestimuladores.jpg";
import serviceRinomodelacao from "@/assets/service-rinomodelacao.jpg";
import drImg from "@/assets/dr-altair-menosso.webp";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5547933802402&text=Ol%C3%A1%2C%20vim%20pelo%20Google!%20Estou%20navegando%20em%20seu%20site%20de%20Harmoniza%C3%A7%C3%A3o%20Facial%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

const BentoGridSection = () => {
  return (
    <section className="py-10 md:py-20 px-3 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div {...fadeIn()} className="mb-10 md:mb-14">
          <p className="text-accent text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Diferenciais
          </p>
          <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] max-w-2xl">
            Por que escolher o{" "}
            <span className="text-accent">Dr. Altair</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-xl leading-relaxed">
            Excelência médica, tecnologia de ponta e resultados naturais que
            valorizam sua beleza única.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid gap-4 md:gap-6 md:grid-cols-3">
          {/* Big feature — col-span-2 row-span-2 */}
          <motion.div
            {...fadeIn(0.1)}
            className="relative overflow-hidden rounded-2xl md:rounded-3xl md:col-span-2 md:row-span-2 border border-border/50"
            style={{ background: "hsl(214 84% 20%)" }}
          >
            <div className="relative">
              <img
                src={serviceHarmonizacao}
                alt="Harmonização facial natural"
                className="aspect-video w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[hsl(214_84%_20%)] via-[hsl(214_84%_20%/0.4)] to-transparent" />
            </div>
            <div className="p-5 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium border-accent/30 bg-accent/15 text-accent">
                  DESTAQUE
                </span>
                <span className="text-xs" style={{ color: "hsl(214 30% 65%)" }}>
                  Harmonização Facial
                </span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-semibold tracking-tight"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                Resultados naturais que realçam sua beleza
              </h3>
              <p
                className="mt-3 text-base sm:text-lg leading-relaxed"
                style={{ color: "hsl(214 30% 75%)" }}
              >
                Técnicas avançadas e personalizadas para cada paciente, com foco
                em harmonia e naturalidade. Cada procedimento é planejado para
                valorizar seus traços únicos.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold rounded-full px-5 py-2.5 text-sm hover:brightness-110 transition"
                >
                  <Phone className="w-4 h-4" />
                  Agendar Consulta
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium backdrop-blur transition"
                  style={{
                    background: "hsl(214 84% 25% / 0.5)",
                    color: "hsl(0 0% 90%)",
                  }}
                >
                  <Sparkles className="w-4 h-4" />
                  Ver Procedimentos
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right top — Experiência Internacional */}
          <motion.div
            {...fadeIn(0.2)}
            className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/50 bg-card"
          >
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  Experiência Internacional
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Formação pela UFPR, palestrante em Harvard e presença na Expo
                Dubai 2020. Referência em medicina estética com reconhecimento
                mundial.
              </p>
              <div className="mt-4 rounded-xl overflow-hidden">
                <img
                  src={serviceBotox}
                  alt="Procedimento estético avançado"
                  className="aspect-video w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right bottom — Tecnologia de Ponta */}
          <motion.div
            {...fadeIn(0.3)}
            className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/50 bg-card"
          >
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  Tecnologia de Ponta
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Equipamentos de última geração e técnicas modernas para
                procedimentos mais seguros e eficazes.
              </p>
              <div className="mt-4 rounded-xl overflow-hidden">
                <img
                  src={servicePreenchimento}
                  alt="Tecnologia estética moderna"
                  className="aspect-video w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Bottom row — 3 small cards */}
          <motion.div
            {...fadeIn(0.4)}
            className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/50 bg-card"
          >
            <div className="p-5 sm:p-6">
              <h3 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                Atendimento Ágil
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Consultas pontuais e procedimentos eficientes, respeitando o seu
                tempo sem comprometer a qualidade.
              </p>
              <div className="mt-4 rounded-xl overflow-hidden">
                <img
                  src={serviceBioestimuladores}
                  alt="Atendimento rápido"
                  className="aspect-video w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeIn(0.5)}
            className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/50 bg-card"
          >
            <div className="p-5 sm:p-6">
              <h3 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                Segurança Total
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Protocolos rigorosos de segurança e materiais certificados para
                garantir tranquilidade em cada procedimento.
              </p>
              <div className="mt-4 rounded-xl overflow-hidden">
                <img
                  src={serviceRinomodelacao}
                  alt="Segurança nos procedimentos"
                  className="aspect-video w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeIn(0.6)}
            className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/50 bg-card"
          >
            <div className="p-5 sm:p-6">
              <h3 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                Acompanhamento
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Suporte completo pré e pós-procedimento, com retornos e
                orientações personalizadas para cada paciente.
              </p>
              <div className="mt-4 rounded-xl overflow-hidden">
                <img
                  src={serviceBotox}
                  alt="Acompanhamento personalizado"
                  className="aspect-video w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoGridSection;
