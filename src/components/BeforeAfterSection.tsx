import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface CaseData {
  before: string;
  after: string;
  label: string;
}

const cases: CaseData[] = [
  {
    before: "/before-after/case1-before.jpg",
    after: "/before-after/case1-after.jpg",
    label: "Harmonização Facial",
  },
  {
    before: "/before-after/case2-before.jpg",
    after: "/before-after/case2-after.jpg",
    label: "Rejuvenescimento",
  },
  {
    before: "/before-after/case3-before.jpg",
    after: "/before-after/case3-after.jpg",
    label: "Preenchimento Labial",
  },
  {
    before: "/before-after/case4-before.jpg",
    after: "/before-after/case4-after.jpg",
    label: "Rinomodelação",
  },
];

const ImageComparison = ({ before, after, label }: CaseData) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const y = clientY - rect.top;
    const pct = Math.max(0, Math.min(100, (y / rect.height) * 100));
    setSliderPos(pct);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientY);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientY);
    },
    [updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-2xl cursor-row-resize select-none touch-none border border-border/30"
        style={{ aspectRatio: "3/4" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* After image (bottom layer) */}
        <img
          src={after}
          alt={`${label} - Depois`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before image (top layer, clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 ${100 - sliderPos}% 0)` }}
        >
          <img
            src={before}
            alt={`${label} - Antes`}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute left-0 right-0 h-[2px] bg-accent z-10 pointer-events-none"
          style={{ top: `${sliderPos}%` }}
        >
          {/* Handle */}
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-accent border-2 border-background flex items-center justify-center shadow-lg">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-background"
            >
              <path
                d="M8 2L8 14M8 2L5 5M8 2L11 5M8 14L5 11M8 14L11 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 z-20 rounded-full bg-foreground/80 px-3 py-1 text-[11px] font-semibold tracking-wider uppercase text-background backdrop-blur-sm">
          Antes
        </span>
        <span className="absolute bottom-3 left-3 z-20 rounded-full bg-accent/90 px-3 py-1 text-[11px] font-semibold tracking-wider uppercase text-background backdrop-blur-sm">
          Depois
        </span>
      </div>

      {/* Label removed per client request */}
    </div>
  );
};

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const BeforeAfterSection = () => {
  return (
    <section id="antes-depois" className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div {...fadeIn()} className="text-center mb-12 md:mb-16">
          <p className="text-accent text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Resultados Reais
          </p>
          <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            Veja Alguns Casos de{" "}
            <span className="text-accent">Antes e Depois</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Arraste o controle verticalmente para comparar os resultados dos
            procedimentos realizados pelo Dr. Altair Menosso.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 md:gap-8 grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {cases.map((c, i) => (
            <motion.div key={c.label} {...fadeIn(0.1 + i * 0.15)}>
              <ImageComparison {...c} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
