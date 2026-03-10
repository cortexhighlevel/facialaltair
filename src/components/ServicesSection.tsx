import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

import serviceHarmonizacao from "@/assets/service-harmonizacao.jpg";
import servicePreenchimento from "@/assets/service-preenchimento.jpg";
import serviceBotox from "@/assets/service-botox.jpg";
import serviceRinomodelacao from "@/assets/service-rinomodelacao.jpg";
import serviceBioestimuladores from "@/assets/service-bioestimuladores.jpg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Harmonização Facial",
    description: "Procedimentos personalizados para realçar a beleza natural do seu rosto com equilíbrio e proporção.",
    image: serviceHarmonizacao,
    number: "01",
  },
  {
    title: "Preenchimento Labial",
    description: "Volume e definição natural para lábios mais harmoniosos e expressivos.",
    image: servicePreenchimento,
    number: "02",
  },
  {
    title: "Toxina Botulínica",
    description: "Suavização de linhas de expressão com técnica precisa para um resultado jovem e natural.",
    image: serviceBotox,
    number: "03",
  },
  {
    title: "Rinomodelação",
    description: "Remodelação do nariz sem cirurgia, com resultados imediatos e harmônicos.",
    image: serviceRinomodelacao,
    number: "04",
  },
  {
    title: "Bioestimuladores",
    description: "Estímulo natural da produção de colágeno para uma pele mais firme e rejuvenescida.",
    image: serviceBioestimuladores,
    number: "05",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const totalScroll = track.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="servicos"
      className="relative overflow-hidden"
    >
      {/* Scrolling track */}
      <div
        ref={trackRef}
        className="flex h-screen will-change-transform"
      >
        {/* First panel — Title */}
        <div className="flex-shrink-0 w-screen h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent text-sm md:text-base font-semibold tracking-widest uppercase mb-4">
              Nossos Serviços
            </p>
            <h2 className="text-foreground text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight max-w-3xl">
              Procedimentos{" "}
              <span className="text-accent">que transformam</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mt-6 max-w-xl leading-relaxed">
              Conheça os tratamentos que oferecemos com técnicas modernas e resultados naturais.
            </p>
            <div className="flex items-center gap-3 mt-8 text-muted-foreground text-sm">
              <span className="w-12 h-px bg-accent" />
              Deslize para explorar
              <ArrowRight className="w-4 h-4 animate-pulse" />
            </div>
          </motion.div>
        </div>

        {/* Service panels */}
        {services.map((service, i) => (
          <div
            key={service.number}
            className="flex-shrink-0 w-screen h-screen flex items-center justify-center px-4 md:px-8"
          >
            <div className="relative w-full max-w-5xl h-[75vh] rounded-3xl overflow-hidden group cursor-pointer">
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Number */}
              <span className="absolute top-6 right-8 text-white/20 text-8xl md:text-9xl font-semibold leading-none select-none">
                {service.number}
              </span>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <h3 className="text-white text-3xl md:text-5xl font-semibold leading-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base max-w-md leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-full hover:brightness-110 transition-all text-sm">
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Last panel — CTA */}
        <div className="flex-shrink-0 w-screen h-screen flex flex-col justify-center items-center px-6 text-center">
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
            <button className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-full hover:brightness-110 transition-all text-base">
              Agende sua Consulta
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
