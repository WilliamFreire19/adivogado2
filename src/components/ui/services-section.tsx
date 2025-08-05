import scalesJustice from "@/assets/scales-justice.jpg";
import handshake from "@/assets/handshake.jpg";
import courthouseColumns from "@/assets/courthouse-columns.jpg";
import gavel from "@/assets/gavel.jpg";
import documentSigning from "@/assets/document-signing.jpg";

const services = [
  {
    title: "Direito Civil",
    subtitle: "Contratos e responsabilidades",
    image: documentSigning,
  },
  {
    title: "Direito Empresarial",
    subtitle: "Consultoria corporativa",
    image: handshake,
  },
  {
    title: "Direito Trabalhista",
    subtitle: "Relações de trabalho",
    image: scalesJustice,
  },
  {
    title: "Direito Penal",
    subtitle: "Defesa criminal",
    image: gavel,
  },
  {
    title: "Direito Tributário",
    subtitle: "Questões fiscais",
    image: courthouseColumns,
  },
];

export const ServicesSection = () => {
  return (
    <section className="legal-section bg-background">
      <div className="legal-container">
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Soluções jurídicas sob medida para cada necessidade
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa equipe especializada oferece atendimento personalizado em diversas áreas do direito, 
              garantindo a melhor estratégia para cada caso específico.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-80 rounded-lg overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm">
                  {service.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};