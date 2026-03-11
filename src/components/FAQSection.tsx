import { motion } from "framer-motion";
import GlassButton from "@/components/GlassButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import drAltairFaq from "@/assets/dr-altair-faq.jpg";

const faqs = [
  {
    question: "Quanto custa a harmonização facial?",
    answer:
      "O Dr. Altair avalia em consulta as necessidades e objetivos de cada paciente individualmente. A harmonização facial possui uma gama bem diversificada e cada tratamento parte de um valor diferente. O tratamento escolhido varia de paciente para paciente.",
  },
  {
    question: "Quais são os riscos e efeitos colaterais?",
    answer:
      "São extremamente raros os casos em que há algum efeito colateral. Sempre pedimos exames prévios e uma análise detalhada de cada paciente. Além disso, possuímos um pós-procedimento excelente, onde além de passados todos os cuidados necessários, haverá uma pessoa responsável por acompanhar a recuperação, dia após dia, por meio de fotos e vídeos.",
  },
  {
    question: "Quanto tempo dura o resultado?",
    answer:
      "Varia de acordo com os procedimentos. Toxina botulínica dura até 6 meses. Preenchedores em média de 12 a 18 meses.",
  },
  {
    question: "A harmonização facial dói?",
    answer:
      "Sempre utilizamos anestésicos tópicos para maior conforto do paciente. Seja utilização de agulhas, fios ou tecnologias, é normal sentir um desconforto. A resistência de cada paciente também muda e alguns relatam dor, outros não.",
  },
  {
    question: "Qual profissional realiza a harmonização facial?",
    answer:
      "Os atendimentos serão realizados pelo Dr. Altair Menosso. Ele é speaker de algumas marcas renomadas e está sempre buscando conhecimento dentro e fora do país. É muito importante buscar profissionais de excelência para fazer procedimentos estéticos, pois é de sua saúde que estamos falando.",
  },
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Doctor Photo */}
          <motion.div {...fadeIn(0.1)} className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={drAltairFaq}
                alt="Dr. Altair Menosso respondendo dúvidas sobre harmonização facial"
                loading="lazy"
                className="w-full h-auto object-cover object-top rounded-2xl"
              />
            </div>
            {/* Stats badge */}
            <div className="absolute bottom-6 right-6 rounded-2xl p-5 flex flex-col items-center gap-1 shadow-lg" style={{ backgroundColor: 'hsl(214, 84%, 20%)' }}>
              <svg className="w-8 h-8 mb-1" viewBox="0 0 24 24" fill="none" stroke="hsl(45, 90%, 42%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
                <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" />
                <circle cx="20" cy="10" r="2" />
              </svg>
              <span className="text-3xl font-bold" style={{ color: 'hsl(0, 0%, 100%)' }}>100%</span>
              <span className="text-xs text-center leading-tight" style={{ color: 'hsla(0, 0%, 100%, 0.8)' }}>
                Procedimentos
                <br />
                Bem-sucedidos
              </span>
            </div>
          </motion.div>

          {/* FAQ Content */}
          <motion.div {...fadeIn(0.2)} className="flex flex-col">
            {/* Label */}
            <span className="text-accent text-sm font-semibold tracking-wide mb-2">
              FAQ
            </span>
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-8">
              Dúvidas mais Comuns
            </h2>

            {/* Accordion */}
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-border rounded-xl px-5 data-[state=open]:ring-1 data-[state=open]:ring-accent/30 transition-all"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-foreground hover:no-underline hover:text-accent transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* CTA */}
            <div className="mt-8">
              <GlassButton href="https://api.whatsapp.com/send?phone=5547933802402&text=Ol%C3%A1%2C%20vim%20pelo%20site!%20Tenho%20uma%20d%C3%BAvida%20sobre%20harmoniza%C3%A7%C3%A3o%20facial.">
                Agende sua Consulta
              </GlassButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
