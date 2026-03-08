import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Will be populated as images are added
const FRAME_COUNT = 120;

const getFramePath = (index: number): string => {
  const padded = String(index + 1).padStart(4, "0");
  return `/frames/frame-${padded}.webp`;
};

const ScrollSequence = () => {
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

    // Cover behavior
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
    // Lerp interpolation
    currentFrameRef.current +=
      (targetFrameRef.current - currentFrameRef.current) * smoothFactor;

    const frame = Math.round(currentFrameRef.current);
    drawFrame(frame);

    rafRef.current = requestAnimationFrame(animate);
  }, [drawFrame]);

  useEffect(() => {
    // Preload all frames
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

    // ScrollTrigger
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        targetFrameRef.current = self.progress * (FRAME_COUNT - 1);
      },
    });

    // Start render loop
    rafRef.current = requestAnimationFrame(animate);

    // Handle resize
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
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-screen pointer-events-none"
        style={{ zIndex: 0 }}
      />
    </div>
  );
};

export default ScrollSequence;
