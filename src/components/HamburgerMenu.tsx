import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const menuItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
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
        className="relative z-50 flex flex-col justify-center items-center gap-[5px] w-10 h-10 group"
        aria-label="Abrir menu"
      >
        <span className="block w-6 h-[2px] bg-white transition-all group-hover:w-7" />
        <span className="block w-4 h-[2px] bg-white transition-all group-hover:w-7" />
        <span className="block w-5 h-[2px] bg-white transition-all group-hover:w-7" />
      </button>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col"
          >
            {/* Close Button */}
            <div className="flex justify-end p-5 md:p-12 lg:p-16">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Fechar menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 flex flex-col justify-center items-center gap-2 md:gap-4 px-8">
              {menuItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  onClick={() => handleNavigate(item.href)}
                  className="text-white/80 hover:text-accent text-3xl md:text-5xl font-light tracking-wide transition-colors py-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* Bottom accent line */}
            <div className="flex justify-center pb-8">
              <div className="w-16 h-[2px] bg-accent/40" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
