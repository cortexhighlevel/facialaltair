import { motion } from "framer-motion";
import { Phone, GraduationCap, Award, Globe } from "lucide-react";
import drImg from "@/assets/dr-altair-menosso.webp";

const credentials = [
  { icon: GraduationCap, label: "Universidade Federal do Paraná" },
  { icon: Award, label: "Palestrante em Harvard" },
  { icon: Globe, label: "Expo Dubai 2020" },
  { icon: Award, label: "Hospital Albert Einstein" },
];

const DoctorSection = () => {
  return (
    <section id="doutor" className="py-6 md:py-10 px-3 md:px-6 lg:px-8">
      <div className="border border-border rounded-[2rem] md:rounded-[3rem] bg-primary p-5 md:p-10 lg:p-14 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 relative"
          >
            <img
              src={drImg}
              alt="Dr. Altair Menosso - Especialista em Harmonização Facial"
              className="w-full max-w-[500px] mx-auto h-auto object-cover rounded-2xl md:rounded-[2rem]"
            />
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-4 left-4 right-4 md:right-auto md:left-6 md:bottom-6 bg-background rounded-xl p-4 shadow-lg max-w-[320px]"
            >
              <p className="text-foreground text-sm font-medium leading-snug">
                Palestrante em Harvard, uma das instituições acadêmicas mais prestigiadas do mundo
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex-1 flex flex-col gap-6"
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              Quem Somos
            </span>

            <h2 className="text-primary-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
              Dr. Altair Menosso
            </h2>

            <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed">
              Dr. Altair Menosso é médico formado pela Universidade Federal do Paraná. Sua trajetória acadêmica e profissional é enriquecida por sua participação em uma série de eventos internacionais de prestígio. Ele teve o privilégio de ministrar palestras em congressos renomados, como o Congresso Mundial de Medicina Estética e o Congresso Brasileiro de Medicina Estética, além de prestigiosos locais como o Hospital Albert Einstein e Universidade de Harvard.
            </p>

            <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed">
              Também esteve presente na Expo Dubai 2020, ampliando ainda mais sua influência no campo da Medicina Estética.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 bg-primary-foreground/10 border border-primary-foreground/10 rounded-xl px-4 py-3"
                >
                  <cred.icon className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground text-sm font-medium">{cred.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://api.whatsapp.com/send?phone=5547933802402&text=Ol%C3%A1%2C%20vim%20pelo%20Google!%20Estou%20navegando%20em%20seu%20site%20de%20Harmoniza%C3%A7%C3%A3o%20Facial%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-full hover:brightness-110 transition-all text-sm md:text-base w-fit mt-2"
            >
              <Phone className="w-4 h-4" />
              Agendar Consulta
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
