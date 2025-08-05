import { useState } from "react";
import { ChevronDown, Quote } from "lucide-react";
import { Button } from "./button";
import courthouseColumns from "@/assets/courthouse-columns.jpg";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "Por que escolher nossa experiência jurídica?",
    answer:
      "Com mais de 15 anos de experiência, oferecemos soluções jurídicas eficazes e personalizadas para cada cliente.",
  },
  {
    question: "Como garantimos a qualidade do atendimento?",
    answer:
      "Mantemos comunicação constante com nossos clientes e utilizamos as melhores práticas do mercado jurídico.",
  },
  {
    question: "Qual o diferencial da nossa advocacia?",
    answer:
      "Combinamos conhecimento técnico profundo com estratégias inovadoras para alcançar os melhores resultados.",
  },
];

export const WhyChooseSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="legal-section hero-gradient">
      <div className="legal-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-legal-text-light mb-8">
              Por que escolher nossa assessoria jurídica?
            </h2>

            <p className="text-xl text-legal-text-light/90 mb-12 leading-relaxed">
              Nossa experiência e dedicação garantem que você tenha a melhor
              representação legal, com estratégias personalizadas e resultados
              efetivos.
            </p>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-white/20">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center py-6 text-left"
                  >
                    <span className="text-lg font-semibold text-legal-text-light pr-4">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-6 h-6 text-legal-text-light transition-transform duration-300",
                        openIndex === index && "rotate-180"
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                    )}
                  >
                    <p className="text-legal-text-light/80 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={courthouseColumns}
                alt="Courthouse columns"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quote Box */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-legal-text-light text-lg italic leading-relaxed mb-6">
                "A justiça é a base de toda sociedade civilizada, e nosso
                compromisso é garantir que ela seja acessível a todos."
              </p>
            </div>

            {/* CTA Card */}
            <div className="bg-primary rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Precisa de assessoria jurídica?
              </h3>
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                Entre em contato conosco e descubra como podemos ajudar a
                resolver sua situação jurídica.
              </p>
              <Button
                variant="secondary"
                className="legal-button-secondary"
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
