import { useEffect, useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MessageCircle, X } from "lucide-react";
import GlassButton from "@/components/GlassButton";

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const lastScrollY = useRef(0);
  const scrollThreshold = useRef(100);

  useEffect(() => {
    // Desktop: detect mouse leaving viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !shown) {
        setOpen(true);
        setShown(true);
      }
    };

    // Mobile: detect scroll up near top (exit intent behavior on mobile)
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const currentScrollY = window.scrollY;
        const isScrollingUp = currentScrollY < lastScrollY.current;
        const isNearTop = currentScrollY < scrollThreshold.current;
        
        // Trigger if scrolling up and near top (user might be leaving)
        if (isScrollingUp && isNearTop && !shown && currentScrollY > 50) {
          setOpen(true);
          setShown(true);
        }
        
        lastScrollY.current = currentScrollY;
      }, 150);
    };

    // Mobile: detect when user shows address bar (scroll to very top quickly)
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch.clientY < 50 && !shown && window.scrollY < 200) {
        setOpen(true);
        setShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("touchstart", handleTouchStart);
      clearTimeout(scrollTimeout);
    };
  }, [shown]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-md rounded-2xl sm:rounded-3xl border-accent/30 bg-card p-5 sm:p-8 text-center gap-4 sm:gap-6">
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent/20 flex items-center justify-center">
            <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
            EI, ESPERE!!!
          </DialogTitle>
          <DialogDescription className="text-base sm:text-lg text-foreground font-semibold leading-snug">
            TEM DÚVIDAS SOBRE
            <br />
            <span className="text-accent">HARMONIZAÇÃO FACIAL?</span>
          </DialogDescription>
          <p className="text-muted-foreground text-xs sm:text-sm">
            FALE COMIGO AGORA NO WHATSAPP
          </p>
          <GlassButton 
            href="https://api.whatsapp.com/send?phone=5547933802402&text=Ol%C3%A1%2C%20vim%20pelo%20Google!%20Estou%20navegando%20em%20seu%20site%20de%20Harmoniza%C3%A7%C3%A3o%20Facial%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            className="w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Tirar Dúvidas no WhatsApp</span>
          </GlassButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
