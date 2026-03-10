import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const CTABookingSection = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-foreground overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--accent)) 0%, transparent 40%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Location badge */}
        <motion.div {...fadeIn(0)} className="flex items-center justify-center gap-2 mb-8">
          <MapPin className="w-4 h-4 text-accent" />
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Balneário Camboriú, SC
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          {...fadeIn(0.1)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-6"
        >
          <span className="text-background/90">Transforme sua </span>
          <span className="text-accent italic">autoestima</span>
          <br />
          <span className="text-background/90">com quem é </span>
          <span className="text-accent italic">referência.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          {...fadeIn(0.2)}
          className="text-background/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Agende sua avaliação personalizada e descubra o procedimento
          ideal para realçar a sua beleza natural com segurança e
          sofisticação.
        </motion.p>

        {/* Filters row */}
        <motion.div
          {...fadeIn(0.3)}
          className="flex flex-col sm:flex-row items-stretch gap-3 max-w-3xl mx-auto mb-4"
        >
          <div className="flex-1 rounded-xl border border-background/10 bg-background/5 backdrop-blur-sm px-5 py-4 text-left">
            <span className="block text-background/40 text-xs font-medium tracking-wider uppercase mb-1">
              Procedimento
            </span>
            <span className="text-background text-sm font-medium">
              Harmonização Facial
            </span>
          </div>

          <div className="flex-1 rounded-xl border border-background/10 bg-background/5 backdrop-blur-sm px-5 py-4 text-left">
            <span className="block text-background/40 text-xs font-medium tracking-wider uppercase mb-1">
              Atendimento
            </span>
            <span className="text-background text-sm font-medium">
              Presencial
            </span>
          </div>

          <div className="flex-1 rounded-xl border border-background/10 bg-background/5 backdrop-blur-sm px-5 py-4 text-left">
            <span className="block text-background/40 text-xs font-medium tracking-wider uppercase mb-1">
              Disponibilidade
            </span>
            <span className="text-background text-sm font-medium">
              Agenda Aberta
            </span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div {...fadeIn(0.4)}>
          <a
            href="https://api.whatsapp.com/send?phone=5547933802402&text=Ol%C3%A1%2C%20vim%20pelo%20site!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-10 py-4 text-sm md:text-base font-semibold text-accent-foreground hover:brightness-110 transition-all"
          >
            Agendar Avaliação
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABookingSection;
