import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-dr-altair-menosso.png";

const menuItems = [
  { label: "Início", href: "#inicio", number: "01" },
  { label: "Sobre", href: "#sobre", number: "02" },
  { label: "Procedimentos", href: "#servicos", number: "03" },
  { label: "Resultados", href: "#antes-depois", number: "04" },
  { label: "Depoimentos", href: "#depoimentos", number: "05" },
  { label: "Contato", href: "#contato", number: "06" },
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative z-50 flex flex-col justify-center items-end gap-[6px] w-11 h-11 group"
        aria-label="Abrir menu"
      >
        <span className="block w-7 h-[1.5px] bg-white/90 transition-all duration-300 group-hover:bg-accent" />
        <span className="block w-5 h-[1.5px] bg-white/90 transition-all duration-300 group-hover:w-7 group-hover:bg-accent" />
      </button>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 3rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-primary flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between p-5 md:p-12 lg:p-16">
              <img src={logo} alt="Dr. Altair Menosso" className="h-7 md:h-10 w-auto brightness-0 invert opacity-40" />
              <button
                onClick={() => setIsOpen(false)}
                className="flex flex-col justify-center items-end gap-[6px] w-11 h-11 group"
                aria-label="Fechar menu"
              >
                <span className="block w-7 h-[1.5px] bg-white/70 transition-colors duration-300 group-hover:bg-accent rotate-45 translate-y-[3.75px]" />
                <span className="block w-7 h-[1.5px] bg-white/70 transition-colors duration-300 group-hover:bg-accent -rotate-45 -translate-y-[3.75px]" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24">
              <div className="flex flex-col gap-0">
                {menuItems.map((item, i) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: [0.76, 0, 0.24, 1] }}
                    onClick={() => handleNavigate(item.href)}
                    className="group flex items-center gap-4 md:gap-6 py-3 md:py-4 border-b border-white/[0.06] text-left transition-all duration-300"
                  >
                    <span className="text-accent/50 text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase w-8 group-hover:text-accent transition-colors duration-300">
                      {item.number}
                    </span>
                    <span className="text-white/80 group-hover:text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-tight transition-all duration-300 group-hover:translate-x-2"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {item.label}
                    </span>
                    <motion.span
                      className="ml-auto text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg md:text-xl"
                    >
                      →
                    </motion.span>
                  </motion.button>
                ))}
              </div>
            </nav>

            {/* Bottom Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center justify-between px-8 md:px-16 lg:px-24 pb-6 md:pb-10"
            >
              <div className="flex items-center gap-6">
                <a
                  href="https://www.instagram.com/draltairmenosso/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-accent text-xs tracking-[0.2em] uppercase transition-colors duration-300"
                >
                  Instagram
                </a>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <a
                  href="https://api.whatsapp.com/send?phone=5547933802402"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-accent text-xs tracking-[0.2em] uppercase transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </div>
              <span className="text-white/15 text-[10px] tracking-[0.3em] uppercase">
                Menu
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
