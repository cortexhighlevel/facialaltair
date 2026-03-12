import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo-dr-altair-menosso.png";
import GlassButton from "@/components/GlassButton";
import HamburgerMenu from "@/components/HamburgerMenu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 25;

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
  const lastDrawnFrameRef = useRef(-1);

  const smoothFactor = 0.16;

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.floor(window.innerWidth * dpr);
    const height = Math.floor(window.innerHeight * dpr);

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    }
  }, []);

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const safeFrame = Math.min(FRAME_COUNT - 1, Math.max(0, frameIndex));
    if (lastDrawnFrameRef.current === safeFrame) return;

    const img = imagesRef.current[safeFrame];
    if (!img || !img.complete) return;

    const cW = canvas.width;
    const cH = canvas.height;
    const iW = img.naturalWidth;
    const iH = img.naturalHeight;

    if (!iW || !iH) return;

    const scale = Math.max(cW / iW, cH / iH);
    const drawW = iW * scale;
    const drawH = iH * scale;
    const drawX = (cW - drawW) / 2;
    const drawY = (cH - drawH) / 2;

    ctx.clearRect(0, 0, cW, cH);
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
    lastDrawnFrameRef.current = safeFrame;
  }, []);

  const animate = useCallback(() => {
    const delta = targetFrameRef.current - currentFrameRef.current;

    if (Math.abs(delta) < 0.01) {
      currentFrameRef.current = targetFrameRef.current;
      drawFrame(Math.round(currentFrameRef.current));
      rafRef.current = 0;
      return;
    }

    currentFrameRef.current += delta * smoothFactor;
    drawFrame(Math.round(currentFrameRef.current));

    rafRef.current = requestAnimationFrame(animate);
  }, [drawFrame]);

  const startAnimationLoop = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(animate);
  }, [animate]);

  useEffect(() => {
    resizeCanvas();

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
      scrub: 0.2,
      onUpdate: (self) => {
        targetFrameRef.current = self.progress * (FRAME_COUNT - 1);
        startAnimationLoop();
      },
    });

    const handleResize = () => {
      resizeCanvas();
      lastDrawnFrameRef.current = -1;
      drawFrame(Math.round(currentFrameRef.current));
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      trigger.kill();
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [drawFrame, resizeCanvas, startAnimationLoop]);

  return (
    <div id="inicio" ref={containerRef} className="relative" style={{ height: "135vh" }}>
      <div className="sticky top-0 w-full overflow-hidden" style={{ height: '100svh' }}>
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        />

        {/* Gradient overlays - stronger for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none md:block hidden" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full p-5 md:p-12 lg:p-16">
          {/* Top Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <img src={logo} alt="Dr. Altair Menosso" className="h-7 md:h-10 w-auto" />
            <HamburgerMenu />
          </motion.div>

          {/* Spacer - pushes content up on mobile, less on desktop */}
          <div className="flex-[0.65] md:flex-[0.7]" />

          {/* Bottom Content */}
          <div className="flex flex-col gap-4 md:gap-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-white text-[10px] md:text-xs font-semibold tracking-widest uppercase border border-accent/30">
                Palestrante em Harvard, Paris e Dubai
              </span>
            </motion.div>

            {/* Main heading + description row */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="md:flex-1"
              >
                <p className="text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 md:mb-3">
                  Especialista
                </p>
                <h1 className="text-white font-bold leading-[0.92] tracking-tight">
                  <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
                    Harmonização
                  </span>
                  <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium text-accent">
                    Facial
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="md:flex-1 md:max-w-md flex flex-col gap-4 md:gap-6 md:items-end md:text-right"
              >
                <p className="text-white/90 text-sm md:text-lg leading-relaxed font-light">
                  Formado pela Universidade Federal do Paraná, Dr. Altair Menosso já teve o privilégio de palestrar em locais como o{" "}
                  <span className="text-accent font-medium">Hospital Albert Einstein</span> e{" "}
                  <span className="text-accent font-medium">Universidade de Harvard</span>.
                </p>
                <GlassButton href="https://api.whatsapp.com/send?phone=5547933802402&text=Ol%C3%A1%2C%20vim%20pelo%20Google!%20Estou%20navegando%20em%20seu%20site%20de%20Harmoniza%C3%A7%C3%A3o%20Facial%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.">
                  Saiba mais
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </GlassButton>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
