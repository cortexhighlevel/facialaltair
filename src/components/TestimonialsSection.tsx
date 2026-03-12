import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import testimonialsBg from "@/assets/testimonials-bg.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

interface Review {
  name: string;
  role: string;
  text: string;
  rating: number;
  timeAgo: string;
}

const reviews: Review[] = [
  {
    name: "Gabriela Pompeu",
    role: "Paciente",
    text: "Dr Altair e dra Andressa são maravilhosos e os tratamentos dão resultados incríveis!!! Ambiente muito agradável e a equipe super acolhedora. Nota 10 para os profissionais e para os tratamentos.",
    rating: 5,
    timeAgo: "1 ano atrás",
  },
  {
    name: "Marcia Scariot",
    role: "Local Guide · 105 avaliações",
    text: "Faço tratamentos na clínica e com Dr. Altair antes mesmo de abrir a Clínica há anos. O atendimento pré e pós procedimentos é único! Os resultados foram sempre maravilhosos. Simplesmente, os melhores profissionais!",
    rating: 5,
    timeAgo: "1 ano atrás",
  },
  {
    name: "João Hay",
    role: "Paciente",
    text: "Clínica muito top, médicos prestativos e educados, ambiente moderno, agradável e procedimentos impecáveis!! 👏👏",
    rating: 5,
    timeAgo: "9 meses atrás",
  },
  {
    name: "Carolina Zart",
    role: "Paciente · 8 avaliações",
    text: "Clínica excelente, sempre muito bem atendida por toda equipe, em especial com o Dr Altair e a Dr Andressa.",
    rating: 5,
    timeAgo: "1 ano atrás",
  },
  {
    name: "Thatiane Ribeiro Marques",
    role: "Paciente · 4 avaliações",
    text: "Atendimento maravilhoso! Profissionais competentes e dedicados. Super recomendo a clínica pela qualidade e cuidado com os clientes.",
    rating: 5,
    timeAgo: "1 ano atrás",
  },
  {
    name: "Keterly Laurindo",
    role: "Local Guide · 17 avaliações",
    text: "Dá pra ver de longe o cuidado, amor e entrega que o Dr tem ao realizar os procedimentos. A equipe também é maravilhosa, e o atendimento de excelência.",
    rating: 5,
    timeAgo: "1 ano atrás",
  },
  {
    name: "Sandra Menezes Gomes",
    role: "Local Guide · 82 avaliações",
    text: "Toda a equipe maravilhosa, gentis... nos tratam com muito carinho! Dr. Altair além de qualificado é muito atencioso! Super recomendo! Clínica maravilhosa!",
    rating: 5,
    timeAgo: "1 ano atrás",
  },
  {
    name: "Luciana Koehler",
    role: "Paciente · 8 avaliações",
    text: "Ser muito bem cuidada e sair com auto estima lá em cima é muito gratificante. Obrigada a toda equipe.",
    rating: 5,
    timeAgo: "1 ano atrás",
  },
  {
    name: "Betiza Benicio",
    role: "Paciente · 6 avaliações",
    text: "Amei meus procedimentos. Dr muito atencioso, lugar maravilhoso. Não vejo a hora de fazer outros procedimentos.",
    rating: 5,
    timeAgo: "1 ano atrás",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"
        }`}
      />
    ))}
  </div>
);

const GoogleBadge = () => (
  <div className="flex items-center gap-3 rounded-2xl border border-border bg-background px-5 py-4">
    {/* Google "G" logo */}
    <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
    <div>
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-foreground leading-none">4.8</span>
        <StarRating rating={5} />
      </div>
      <p className="text-xs text-muted-foreground mt-0.5">
        Avaliações no Google
      </p>
    </div>
  </div>
);

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.offsetWidth * 0.85;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Render a single review card
  const ReviewCard = ({ review, featured = false, accent = false }: { review: Review; featured?: boolean; accent?: boolean }) => (
    <article
      className={`rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-500 ${
        accent
          ? "ring-1 ring-accent/30 bg-accent/5 hover:-translate-y-1"
          : "ring-1 ring-border bg-card"
      } ${featured ? "min-h-[280px]" : ""}`}
    >
      <div className="flex items-start justify-between mb-4">
        <span
          className={`text-4xl sm:text-5xl leading-none font-light tracking-tighter ${
            accent ? "text-accent/40" : "text-muted-foreground/30"
          }`}
        >
          "
        </span>
        <div className="flex flex-col items-end gap-1">
          <StarRating rating={review.rating} />
          <span className="text-[10px] text-muted-foreground">
            {review.timeAgo}
          </span>
        </div>
      </div>
      <p
        className={`text-base sm:text-lg leading-relaxed flex-1 ${
          accent ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        "{review.text}"
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center ring-1 ring-accent/30">
          <span className="text-sm font-semibold text-accent">
            {review.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className={`text-sm font-medium ${accent ? "text-foreground" : "text-foreground/80"}`}>
            {review.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {review.role}
          </p>
        </div>
        <svg viewBox="0 0 24 24" className="w-4 h-4 ml-auto shrink-0 opacity-40" aria-hidden="true">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
      </div>
    </article>
  );

  return (
    <section id="depoimentos" className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="border border-border rounded-3xl p-6 md:p-8 relative overflow-hidden" style={{ backgroundImage: `url(${testimonialsBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm rounded-3xl" />
          {/* Header */}
          <motion.div {...fadeIn()} className="mb-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-2 flex items-center">
                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ring-border bg-background">
                  <span className="text-[11px] font-medium tracking-widest text-muted-foreground">05</span>
                  <span className="h-3 w-px bg-border" />
                  <span className="text-[11px] tracking-wide text-muted-foreground">Depoimentos</span>
                </span>
              </div>
              <div className="lg:col-span-6">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[0.95] text-foreground font-semibold tracking-tight">
                  Quem já fez,{" "}
                  <span className="text-accent">recomenda</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl">
                  Avaliações reais de pacientes no Google. Resultados que falam por si.
                </p>
              </div>
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <GoogleBadge />
              </div>
            </div>
          </motion.div>

          {/* Cards Container */}
          <div className="rounded-2xl md:rounded-3xl border border-border bg-background/90 backdrop-blur-sm overflow-hidden relative z-10">
            <div className="p-6 md:p-8">

              {/* Mobile: Horizontal Carousel */}
              {isMobile ? (
                <div className="relative">
                  <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {reviews.map((review, i) => (
                      <div
                        key={review.name}
                        className="flex-shrink-0 w-[92%] snap-start"
                      >
                        <ReviewCard review={review} featured accent={i === 1} />
                      </div>
                    ))}
                  </div>
                  {/* Carousel nav buttons */}
                  <div className="flex justify-center gap-3 mt-4">
                    <button
                      onClick={() => scrollCarousel("left")}
                      className="w-9 h-9 rounded-full ring-1 ring-border bg-card flex items-center justify-center hover:bg-accent/10 transition-colors"
                      aria-label="Anterior"
                    >
                      <ChevronLeft className="w-4 h-4 text-foreground" />
                    </button>
                    <button
                      onClick={() => scrollCarousel("right")}
                      className="w-9 h-9 rounded-full ring-1 ring-border bg-card flex items-center justify-center hover:bg-accent/10 transition-colors"
                      aria-label="Próximo"
                    >
                      <ChevronRight className="w-4 h-4 text-foreground" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Desktop: Grid layout */
                <>
                  <div className="grid lg:grid-cols-3 gap-4 md:gap-5">
                    {reviews.slice(0, 3).map((review, i) => (
                      <motion.div key={review.name} {...fadeIn(0.1 + i * 0.15)}>
                        <ReviewCard review={review} featured accent={i === 1} />
                      </motion.div>
                    ))}
                  </div>
                  <motion.div {...fadeIn(0.5)} className="mt-5">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {reviews.slice(3).map((review) => (
                        <div key={review.name}>
                          <ReviewCard review={review} />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
