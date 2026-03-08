import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Fitness training"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, hsla(355, 85%, 77%, 0.85) 0%, hsla(320, 55%, 60%, 0.75) 25%, hsla(290, 30%, 60%, 0.7) 50%, hsla(185, 50%, 49%, 0.6) 75%, hsla(175, 48%, 49%, 0.55) 100%)",
        }}
      />

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

        {/* Spacer + Rating */}
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
          {/* Headline */}
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

          {/* Description + CTA */}
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
    </section>
  );
};

export default HeroSection;
