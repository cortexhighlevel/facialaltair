import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        <div className="border border-border rounded-3xl p-6 md:p-8 bg-card">
          {/* Header */}
          <motion.div {...fadeIn()} className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Badge */}
              <div className="lg:col-span-2 flex items-center">
                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ring-border bg-background">
                  <span className="text-[11px] font-medium tracking-widest text-muted-foreground">
                    06
                  </span>
                  <span className="h-3 w-px bg-border" />
                  <span className="text-[11px] tracking-wide text-muted-foreground">
                    FAQ
                  </span>
                </span>
              </div>

              {/* Title */}
              <div className="lg:col-span-10">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[0.95] text-foreground font-semibold tracking-tight">
                  Dúvidas mais{" "}
                  <span className="text-accent">comuns</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl">
                  Tire suas principais dúvidas sobre harmonização facial e nossos procedimentos.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Accordion */}
          <motion.div {...fadeIn(0.2)}>
            <div className="rounded-2xl md:rounded-3xl border border-border bg-background overflow-hidden">
              <div className="p-6 md:p-8">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="border-border"
                    >
                      <AccordionTrigger className="text-left text-base sm:text-lg font-medium text-foreground hover:no-underline hover:text-accent transition-colors py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div {...fadeIn(0.4)} className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Ainda tem dúvidas? Entre em contato conosco.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5547933802402&text=Ol%C3%A1%2C%20vim%20pelo%20site!%20Tenho%20uma%20d%C3%BAvida%20sobre%20harmoniza%C3%A7%C3%A3o%20facial."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Fale Conosco
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
