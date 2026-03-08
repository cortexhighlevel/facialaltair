import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 10;

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
      {/* Sticky wrapper for canvas + content */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full p-8 md:p-16">
          {/* Top Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <span className="text-white text-xl md:text-2xl font-bold tracking-tight">
              FitFlow
            </span>
            <button className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium tracking-widest uppercase hover:bg-white/30 transition-colors">
              Menu
            </button>
          </motion.div>

          {/* Rating */}
          <div className="flex-1 flex flex-col justify-center md:justify-start md:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 text-white/90 text-sm"
            >
              <span className="font-medium">Excellent 4.9 out of 5</span>
              <Star className="w-3.5 h-3.5 fill-white text-white" />
              <span className="text-white/70 font-medium">TrustPoint</span>
            </motion.div>
          </div>

          {/* Bottom Content */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:flex-1"
            >
              <h1 className="text-white font-bold leading-[0.9] tracking-tight">
                <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[120px]">
                  Stronger.
                </span>
                <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[120px]">
                  Healthier.
                </span>
                <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[120px]">
                  You.
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="md:flex-1 md:max-w-md flex flex-col gap-6 md:items-end md:text-right"
            >
              <p className="text-white/85 text-base md:text-lg leading-relaxed">
                Transform your body and mindset with expert online coaching.
                Personalized training, real results, and full support — wherever
                you are.
              </p>
              <button className="group flex items-center gap-3 bg-white text-gray-900 font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-colors w-fit text-base">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
