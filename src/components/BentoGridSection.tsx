import { motion } from "framer-motion";
import drImg from "@/assets/dr-altair-menosso.webp";
import serviceHarmonizacao from "@/assets/service-harmonizacao.jpg";
import iconBeleza from "@/assets/icon-beleza-natural.png";
import iconRejuvenescimento from "@/assets/icon-rejuvenescimento.png";
import iconAutoestima from "@/assets/icon-autoestima.png";
import iconPersonalizado from "@/assets/icon-personalizado.png";
import iconMinimamente from "@/assets/icon-minimamente-invasivo.png";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const benefits = [
  {
    icon: iconBeleza,
    title: "Realce a sua beleza natural",
    description:
      "A harmonização facial destaca seus traços únicos, proporcionando um resultado natural e equilibrado, sem parecer artificial.",
  },
  {
    icon: iconRejuvenescimento,
    title: "Rejuvenescimento facial",
    description:
      "Suavize rugas, linhas de expressão e sinais de envelhecimento, recuperando a vitalidade e o frescor da pele.",
  },
  {
    icon: iconAutoestima,
    title: "Aumento da autoestima e confiança",
    description:
      "Sinta-se mais confiante e feliz com sua aparência, refletindo positivamente em todas as áreas da sua vida.",
  },
  {
    icon: iconPersonalizado,
    title: "Resultados personalizados",
    description:
      "Cada tratamento é adaptado às suas necessidades e desejos, garantindo um resultado harmonioso e exclusivo.",
  },
  {
    icon: iconMinimamente,
    title: "Procedimentos minimamente invasivos",
    description:
      "Técnicas modernas e seguras, com tempo de recuperação reduzido, permitindo que você retorne rapidamente à sua rotina.",
  },
];

const BentoGridSection = () => {
  return (
    <section className="py-10 md:py-20 px-3 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div {...fadeIn()} className="mb-10 md:mb-14">
          <p className="text-accent text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Vantagens e Benefícios
          </p>
          <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
            Oferecemos os Melhores{" "}
            <span className="text-accent">Procedimentos Estéticos</span>
          </h2>
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
                loading="lazy"
                className="aspect-video w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[hsl(214_84%_20%)] via-[hsl(214_84%_20%/0.4)] to-transparent" />
            </div>
            <div className="p-5 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium border-accent/30 bg-accent/15 text-accent">
                  DESTAQUE
                </span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-semibold tracking-tight"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                {benefits[0].title}
              </h3>
              <p
                className="mt-3 text-base sm:text-lg leading-relaxed max-w-lg"
                style={{ color: "hsl(214 30% 75%)" }}
              >
                {benefits[0].description}
              </p>
            </div>
          </motion.div>

          {/* Right column cards */}
          {benefits.slice(1, 3).map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeIn(0.2 + i * 0.1)}
              className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/50 bg-card"
            >
              <div className="p-5 sm:p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-3">
                  <img src={item.icon} alt={item.title} loading="lazy" className="w-10 h-10 rounded-xl object-cover" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Bottom row — 2 benefit cards + doctor card */}
          {benefits.slice(3).map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeIn(0.4 + i * 0.1)}
              className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/50 bg-card"
            >
              <div className="p-5 sm:p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-3">
                  <img src={item.icon} alt={item.title} loading="lazy" className="w-10 h-10 rounded-xl object-cover" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Doctor card */}
          <motion.div
            {...fadeIn(0.6)}
            className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/50"
            style={{ background: "hsl(214 84% 20%)" }}
          >
            <div className="p-5 sm:p-6 flex flex-col items-center text-center h-full justify-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-accent/30">
                <img
                  src={drImg}
                  alt="Dr. Altair Menosso"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 15%" }}
                />
              </div>
              <div>
                <h3
                  className="text-lg font-semibold tracking-tight"
                  style={{ color: "hsl(0 0% 100%)" }}
                >
                  Dr. Altair{" "}
                  <span className="text-accent">Menosso</span>
                </h3>
                <p
                  className="mt-1 text-sm leading-relaxed"
                  style={{ color: "hsl(214 30% 75%)" }}
                >
                  Especialista em Harmonização Facial com reconhecimento
                  internacional
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoGridSection;
