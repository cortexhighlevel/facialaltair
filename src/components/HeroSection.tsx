import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo-dr-altair-menosso.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 70;

const getFramePath = (index: number): string => {
  const padded = String(index + 1).padStart(4, "0");
  return `/frames/frame-${padded}.webp`;
};

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const rafRef = useRef<number>(0);

  const smoothFactor = 0.08;

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cW = canvas.width;
    const cH = canvas.height;
    const iW = img.naturalWidth;
    const iH = img.naturalHeight;

    const scale = Math.max(cW / iW, cH / iH);
    const drawW = iW * scale;
    const drawH = iH * scale;
    const drawX = (cW - drawW) / 2;
    const drawY = (cH - drawH) / 2;

    ctx.clearRect(0, 0, cW, cH);
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  const animate = useCallback(() => {
    currentFrameRef.current +=
      (targetFrameRef.current - currentFrameRef.current) * smoothFactor;

    const frame = Math.round(currentFrameRef.current);
    drawFrame(frame);

    rafRef.current = requestAnimationFrame(animate);
  }, [drawFrame]);

  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) {
          drawFrame(0);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        targetFrameRef.current = self.progress * (FRAME_COUNT - 1);
      },
    });

    rafRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      drawFrame(Math.round(currentFrameRef.current));
    };
    window.addEventListener("resize", handleResize);

    return () => {
      trigger.kill();
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [animate, drawFrame]);

  return (
    <div ref={containerRef} className="relative" style={{ height: "200vh" }}>
      {/* Sticky wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full p-6 md:p-12 lg:p-16">
          {/* Top Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <img src={logo} alt="Dr. Altair Menosso" className="h-8 md:h-10 w-auto" />
          </motion.div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Bottom Content */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-xs font-semibold tracking-widest uppercase border border-accent/30">
                Palestrante em Harvard, Paris e Dubai
              </span>
            </motion.div>

            {/* Main heading + description row */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="md:flex-1"
              >
                <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
                  Especialista
                </p>
                <h1 className="text-primary-foreground font-bold leading-[0.92] tracking-tight">
                  <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                    Harmonização
                  </span>
                  <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl italic font-medium text-accent">
                    Facial
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="md:flex-1 md:max-w-md flex flex-col gap-6 md:items-end md:text-right"
              >
                <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed font-light">
                  Formado pela Universidade Federal do Paraná, Dr. Altair Menosso já teve o privilégio de palestrar em locais como o{" "}
                  <span className="text-primary-foreground font-medium">Hospital Albert Einstein</span> e{" "}
                  <span className="text-primary-foreground font-medium">Universidade de Harvard</span>.
                </p>
                <button className="group flex items-center gap-3 bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-full hover:brightness-110 transition-all w-fit text-base">
                  Saiba mais
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
