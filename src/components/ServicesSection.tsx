import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import serviceHarmonizacao from "@/assets/service-harmonizacao-new.jpg";
import servicePreenchimento from "@/assets/service-preenchimento-new.jpg";
import serviceBotox from "@/assets/service-botox-new.jpg";
import serviceRinomodelacao from "@/assets/service-rinomodelacao.jpg";
import serviceBioestimuladores from "@/assets/service-bioestimuladores.jpg";
import serviceFiosPdo from "@/assets/service-fios-pdo.jpg";

const services = [
  {
    title: "Toxina Botulínica",
    description:
      "A toxina botulínica é usada para suavizar rugas e linhas de expressão. O procedimento é rápido, seguro, e os resultados começam a aparecer em 3 dias. Pode ser feito em diversas áreas do rosto, de acordo com sua necessidade avaliada juntamente com o médico.",
    image: serviceBotox,
    number: "01",
  },
  {
    title: "Preenchedores Faciais",
    description:
      "Os preenchedores faciais são substâncias injetáveis à base de ácido hialurônico, usadas para suavizar linhas, adicionar volume, contornar e hidratar o rosto. Resultados imediatos e duradouros.",
    image: servicePreenchimento,
    number: "02",
  },
  {
    title: "Fios de PDO",
    description:
      "Os fios de PDO são utilizados para lifting e rejuvenescimento facial. Estimulam a produção de colágeno, suavizam rugas e redefinem contornos faciais. Minimamente invasivo, com resultados progressivos.",
    image: serviceFiosPdo,
    number: "03",
  },
  {
    title: "Bioestimulador de Colágeno",
    description:
      "Tratamento que utiliza substâncias injetáveis para estimular a produção natural de colágeno, melhorando firmeza e elasticidade da pele de forma gradual e duradoura.",
    image: serviceBioestimuladores,
    number: "04",
  },
  {
    title: "Ultrassom Micro e Macro Focado",
    description:
      "Tecnologia avançada que utiliza ondas de ultrassom para penetrar nas camadas profundas da pele, promovendo produção de colágeno e rejuvenescimento. Não invasivo, sem recuperação prolongada.",
    image: serviceRinomodelacao,
    number: "05",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="relative bg-background">
      {/* Section header */}
      <div className="px-6 md:px-16 lg:px-24 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent text-sm md:text-base font-semibold tracking-widest uppercase mb-4">
            Nossos Serviços
          </p>
          <h2 className="text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight max-w-3xl">
            Procedimentos{" "}
            <span className="text-accent">que transformam</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-6 max-w-xl leading-relaxed">
            Conheça os tratamentos que oferecemos com técnicas modernas e
            resultados naturais.
          </p>
        </motion.div>
      </div>

      {/* Stacked sticky cards */}
      <div className="relative">
        {services.map((service, i) => (
          <div
            key={service.number}
            className="sticky top-0 w-full min-h-[80vh] md:min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-4 md:py-8"
            style={{ zIndex: i + 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl bg-card"
            >
              <div className="grid md:grid-cols-2 min-h-[70vh]">
                {/* Image side */}
                <div className="relative overflow-hidden h-64 md:h-auto">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10" />
                  <span className="absolute top-4 left-4 md:top-6 md:left-8 text-white/20 text-7xl md:text-9xl font-semibold leading-none select-none">
                    {service.number}
                  </span>
                </div>

                {/* Content side */}
                <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                  <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">
                    Procedimento {service.number}
                  </span>
                  <h3 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <a href="https://api.whatsapp.com/send?phone=5547933802402&text=Ol%C3%A1%2C%20vim%20pelo%20Google!%20Estou%20navegando%20em%20seu%20site%20de%20Harmoniza%C3%A7%C3%A3o%20Facial%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer" className="self-start flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-full hover:brightness-110 transition-all text-sm">
                    Saiba Mais
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="relative flex flex-col justify-center items-center px-6 pt-20 pb-12 md:pt-32 md:pb-24 text-center bg-background" style={{ zIndex: services.length + 1 }}>
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background -translate-y-full pointer-events-none" style={{ zIndex: services.length + 1 }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Portfólio [ {services.length}+ procedimentos ]
          </p>
          <h3 className="text-foreground text-3xl md:text-5xl font-semibold leading-tight mb-6">
            Pronto para realçar sua beleza natural?
          </h3>
          <a href="https://api.whatsapp.com/send?phone=5547933802402&text=Ol%C3%A1%2C%20vim%20pelo%20Google!%20Estou%20navegando%20em%20seu%20site%20de%20Harmoniza%C3%A7%C3%A3o%20Facial%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-full hover:brightness-110 transition-all text-base">
            Agende sua Consulta
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
