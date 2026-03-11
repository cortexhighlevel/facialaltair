import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import drImg from "@/assets/dr-altair-menosso.webp";
import assinaturaImg from "@/assets/assinatura-dr-altair.png";

const credentials = [
  "Universidade Federal do Paraná",
  "Palestrante em Harvard",
  "Expo Dubai 2020",
  "Hospital Albert Einstein",
  "Congresso Mundial de Medicina Estética",
  "Congresso Brasileiro de Medicina Estética",
];

const DoctorSection = () => {
  return (
    <section id="doutor" className="py-6 md:py-10 px-3 md:px-6 lg:px-8">
      <div
        className="rounded-[2rem] md:rounded-[3rem] overflow-hidden relative"
        style={{ background: "hsl(214 84% 20%)" }}
      >
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, hsl(214 84% 30% / 0.4) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:flex-1 relative overflow-hidden min-h-[500px] md:min-h-[650px] lg:min-h-[700px]"
          >
            <img
              src={drImg}
              alt="Dr. Altair Menosso - Especialista em Harmonização Facial"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover block"
              style={{ objectPosition: "center 20%", maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)" }}
            />

            {/* Gradient fade at bottom on mobile */}
            <div
              className="absolute bottom-0 left-0 right-0 h-72 lg:hidden pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, hsl(214 84% 20%) 0%, hsl(214 84% 20%) 25%, hsl(214 84% 20% / 0.9) 45%, hsl(214 84% 20% / 0.5) 70%, transparent 100%)",
              }}
            />
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:flex-1 flex flex-col gap-5 md:gap-6 p-6 md:p-10 lg:p-14 lg:justify-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-accent text-xs font-bold tracking-[0.25em] uppercase"
            >
              Quem Somos
            </motion.span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold leading-[1.05] tracking-tight" style={{ color: "hsl(0 0% 100%)" }}>
              Dr. Altair{" "}
              <span className="text-accent">Menosso</span>
            </h2>

            <p className="text-sm md:text-base leading-relaxed max-w-[540px]" style={{ color: "hsl(214 30% 75%)" }}>
              Dr. Altair Menosso é médico formado pela Universidade Federal do Paraná. Sua trajetória acadêmica e profissional é enriquecida por participações em eventos internacionais de prestígio, ministrando palestras em congressos renomados como o Congresso Mundial de Medicina Estética, Hospital Albert Einstein e a Universidade de Harvard.
            </p>

            <p className="text-sm md:text-base leading-relaxed max-w-[540px]" style={{ color: "hsl(214 30% 75%)" }}>
              Também esteve presente na Expo Dubai 2020, ampliando ainda mais sua influência no campo da Medicina Estética.
            </p>

            {/* Credential tags */}
            <div className="flex flex-wrap gap-2 mt-1">
              {credentials.map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  className="flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-medium border"
                  style={{
                    background: "hsl(214 84% 25% / 0.5)",
                    borderColor: "hsl(214 60% 40% / 0.3)",
                    color: "hsl(0 0% 95%)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {label}
                </motion.div>
              ))}
            </div>

            {/* CTA + Signature */}
            <div className="flex items-center gap-5 mt-2 flex-wrap justify-center lg:justify-start">
              <a
                href="https://api.whatsapp.com/send?phone=5547933802402&text=Ol%C3%A1%2C%20vim%20pelo%20Google!%20Estou%20navegando%20em%20seu%20site%20de%20Harmoniza%C3%A7%C3%A3o%20Facial%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-full hover:brightness-110 transition-all text-sm md:text-base w-fit"
              >
                <Phone className="w-4 h-4" />
                Agendar Consulta
              </a>
              <img
                src={assinaturaImg}
                alt="Assinatura Dr. Altair Menosso"
                className="h-20 md:h-28 w-auto brightness-0 invert"
              />
            </div>
          </motion.div>
        </div>

        {/* Floating Harvard card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl max-w-[280px] hidden lg:block"
        >
          <p className="text-foreground text-sm font-medium leading-snug">
            Palestrante em <span className="text-accent font-bold">Harvard</span>, uma das instituições acadêmicas mais prestigiadas do mundo
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorSection;
