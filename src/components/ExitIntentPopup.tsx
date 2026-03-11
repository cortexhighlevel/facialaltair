import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";
import GlassButton from "@/components/GlassButton";

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (e.clientY <= 5 && !shown) {
        setOpen(true);
        setShown(true);
      }
    };
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, [shown]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md rounded-3xl border-accent/30 bg-card p-8 text-center gap-6">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-accent" />
          </div>
          <DialogTitle className="text-2xl font-bold text-foreground leading-tight">
            EI, ESPERE!!!
          </DialogTitle>
          <DialogDescription className="text-lg text-foreground font-semibold leading-snug">
            TEM DÚVIDAS SOBRE
            <br />
            <span className="text-accent">HARMONIZAÇÃO FACIAL?</span>
          </DialogDescription>
          <p className="text-muted-foreground text-sm">
            FALE COMIGO AGORA NO WHATSAPP
          </p>
          <GlassButton href="https://api.whatsapp.com/send?phone=5547933802402&text=Ol%C3%A1%2C%20vim%20pelo%20Google!%20Estou%20navegando%20em%20seu%20site%20de%20Harmoniza%C3%A7%C3%A3o%20Facial%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.">
            <MessageCircle className="w-5 h-5" />
            Tirar Dúvidas no WhatsApp
          </GlassButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
