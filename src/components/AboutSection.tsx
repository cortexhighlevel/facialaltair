import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Syringe } from "lucide-react";
import aboutImg from "@/assets/about-clinic.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-6 md:py-10 px-3 md:px-6 lg:px-8">
      <div className="border border-border rounded-[2rem] md:rounded-[3rem] bg-background p-5 md:p-10 lg:p-14">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-foreground text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1] tracking-tight mb-8 md:mb-12"
        >
          A beleza do seu rosto,{" "}
          <span className="italic text-accent">transformada.</span>
        </motion.h2>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-4">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1"
          >
            <img
              src={aboutImg}
              alt="Clínica de harmonização facial do Dr. Altair Menosso"
              className="w-full h-[300px] md:h-[520px] object-cover rounded-2xl md:rounded-[2rem]"
            />
          </motion.div>

          {/* Right — Text + Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex-1 flex flex-col gap-6"
          >
            {/* Description + CTA */}
            <div>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 max-w-lg">
                Escolha a clínica do Dr. Altair Menosso como referência em
                harmonização facial. Seu rosto merece o cuidado de quem é
                reconhecido internacionalmente por resultados naturais e seguros.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="group flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-full hover:brightness-110 transition-all text-sm md:text-base">
                  Agendar consulta
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center gap-2 border border-border text-foreground font-medium px-6 py-3 rounded-full hover:bg-secondary transition-colors text-sm md:text-base">
                  Conheça
                </button>
              </div>
            </div>

            {/* Service Cards */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <div className="flex-1 bg-card border border-border rounded-2xl p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Syringe className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-foreground text-lg font-semibold">
                  Preenchimento Facial
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ácido hialurônico para volume, contorno e rejuvenescimento com resultados imediatos.
                </p>
              </div>
              <div className="flex-1 bg-card border border-border rounded-2xl p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-foreground text-lg font-semibold">
                  Harmonização Completa
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Protocolos personalizados para equilíbrio e simetria facial com naturalidade.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
