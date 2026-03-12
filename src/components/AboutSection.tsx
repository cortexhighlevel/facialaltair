import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import aboutImg from "@/assets/about-clinic-new.jpg";
import GlassButton from "@/components/GlassButton";


const features = [
  "Técnicas Avançadas",
  "Profissionais Especializados",
  "Resultados Naturais e Personalizados",
  "Produtos de Alta Qualidade",
  "Ambiente Seguro e Confortável",
  "Acompanhamento Personalizado",
  "Atendimento Humanizado",
];

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
          Como podemos{" "}
          <span className="text-accent">lhe ajudar?</span>
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
            <div className="relative overflow-hidden rounded-2xl md:rounded-[2rem]">
              <img
                src={aboutImg}
                alt="Clínica de harmonização facial do Dr. Altair Menosso"
                loading="lazy"
                className="w-full h-[300px] md:h-[520px] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>
          </motion.div>

          {/* Right — Text + Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex-1 flex flex-col gap-6"
          >
            {/* Description */}
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Na Med Menosso, sabemos que os clientes de harmonização facial se preocupam com resultados artificiais, segurança e a recuperação. Para resolver isso, oferecemos atendimento personalizado, com profissionais experientes que usam técnicas modernas e produtos de alta qualidade. Escutamos suas expectativas, explicamos todo o processo de forma clara e cuidamos de você no pós-procedimento, garantindo resultados naturais e seguros que realçam sua beleza.
            </p>

            <GlassButton href="https://api.whatsapp.com/send?phone=5547933802402&text=Ol%C3%A1%2C%20vim%20pelo%20Google!%20Estou%20navegando%20em%20seu%20site%20de%20Harmoniza%C3%A7%C3%A3o%20Facial%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.">
              Veja nossos Serviços
              <ArrowRight className="w-4 h-4" />
            </GlassButton>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {features.map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 text-sm text-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 md:mt-12 bg-accent/10 border border-accent/20 rounded-2xl md:rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div>
            <h3 className="text-foreground text-xl md:text-2xl font-semibold mb-1">
              Marque uma consulta conosco
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Harmonização facial personalizada. Marque sua consulta e descubra seu potencial.
            </p>
          </div>
          <GlassButton href="https://api.whatsapp.com/send?phone=5547933802402&text=Ol%C3%A1%2C%20vim%20pelo%20Google!%20Estou%20navegando%20em%20seu%20site%20de%20Harmoniza%C3%A7%C3%A3o%20Facial%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.">
            <Phone className="w-4 h-4" />
            Entre em Contato
          </GlassButton>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
