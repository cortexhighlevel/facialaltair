import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Fiz harmonização facial com o Dr. Altair e o resultado superou todas as minhas expectativas. Muito natural e equilibrado, exatamente o que eu queria.",
    name: "Mariana S.",
    role: "Paciente — Harmonização Facial",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote:
      "Profissional excepcional! Me senti segura durante todo o procedimento. O acompanhamento pós foi impecável e os resultados são incríveis.",
    name: "Carolina M.",
    role: "Paciente — Preenchimento Labial",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    featured: true,
  },
  {
    quote:
      "Depois de anos pensando, finalmente fiz a rinomodelação. O Dr. Altair entendeu exatamente o que eu precisava. Resultado lindo e natural!",
    name: "Fernanda L.",
    role: "Paciente — Rinomodelação",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
  },
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const TestimonialsSection = () => {
  return (
    <section
      id="depoimentos"
      className="py-16 md:py-24 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="border border-border rounded-3xl bg-card p-6 md:p-8">
          {/* Header */}
          <motion.div {...fadeIn()} className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Badge */}
              <div className="lg:col-span-2 flex items-center">
                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ring-border bg-background">
                  <span className="text-[11px] font-medium tracking-widest text-muted-foreground">
                    05
                  </span>
                  <span className="h-3 w-px bg-border" />
                  <span className="text-[11px] tracking-wide text-muted-foreground">
                    Depoimentos
                  </span>
                </span>
              </div>

              {/* Title */}
              <div className="lg:col-span-7">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[0.95] text-foreground font-semibold tracking-tight">
                  Quem já fez,{" "}
                  <span className="text-accent">recomenda</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl">
                  Histórias reais de pacientes que transformaram sua autoestima
                  com procedimentos naturais e personalizados.
                </p>
              </div>

              {/* CTA */}
              <div className="lg:col-span-3 lg:flex lg:justify-end">
                <a
                  href="https://wa.me/5544999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  Agende sua consulta
                </a>
              </div>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="rounded-2xl md:rounded-3xl border border-border bg-background overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
                {testimonials.map((t, i) => (
                  <motion.article
                    key={t.name}
                    {...fadeIn(0.1 + i * 0.15)}
                    className={`rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-500 ${
                      t.featured
                        ? "ring-1 ring-accent/30 bg-accent/5 hover:-translate-y-1"
                        : "ring-1 ring-border bg-card"
                    }`}
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-6">
                      <span
                        className={`text-4xl sm:text-5xl leading-none font-light tracking-tighter ${
                          t.featured
                            ? "text-accent/40"
                            : "text-muted-foreground/30"
                        }`}
                      >
                        "
                      </span>
                      <div className="w-14 h-14 rounded-xl ring-1 ring-border overflow-hidden bg-muted">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Quote */}
                    <p
                      className={`text-base sm:text-lg leading-relaxed ${
                        t.featured
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      "{t.quote}"
                    </p>

                    {/* Author */}
                    <div className="mt-6">
                      <p className="text-xs text-muted-foreground">
                        {t.role}
                      </p>
                      <p
                        className={`text-sm mt-1 ${
                          t.featured
                            ? "text-foreground"
                            : "text-foreground/80"
                        }`}
                      >
                        {t.name}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
