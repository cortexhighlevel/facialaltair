import { motion } from "framer-motion";

const images = [
  { src: "/before-after/case1-before.jpg", alt: "Caso 1" },
  { src: "/before-after/case1-after.jpg", alt: "Caso 1 resultado" },
  { src: "/before-after/case2-before.jpg", alt: "Caso 2" },
  { src: "/before-after/case2-after.jpg", alt: "Caso 2 resultado" },
  { src: "/before-after/case3-before.jpg", alt: "Caso 3" },
  { src: "/before-after/case3-after.jpg", alt: "Caso 3 resultado" },
  { src: "/before-after/case4-before.jpg", alt: "Caso 4" },
  { src: "/before-after/case4-after.jpg", alt: "Caso 4 resultado" },
];

// Duplicate for seamless loop
const allImages = [...images, ...images];

const GalleryCarouselSection = () => {
  return (
    <section className="pt-12 md:pt-16 pb-0 overflow-hidden bg-foreground">
      <div className="relative">
        <motion.div
          className="flex gap-4 md:gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {allImages.map((img, i) => (
            <div
              key={i}
              className="shrink-0 w-[260px] h-[340px] md:w-[340px] md:h-[440px] rounded-2xl overflow-hidden border border-background/10"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryCarouselSection;
