import { Button } from "./button";

const scrollToContact = () => {
  const contactSection = document.getElementById("contact-form");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundPosition: "center center",
        }}
      >
      </div>

      {/* Fallback caso a imagem não carregue */}
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 opacity-30"></div>
      {/* Content */}
      <div className="relative z-10 legal-container">
        <div className="max-w-3xl lg:max-w-4xl ml-0 lg:ml-16 xl:ml-24">
          <h1 className="text-5xl lg:text-7xl font-bold text-legal-text-light mb-6 leading-tight">
            Defesa técnica e estratégica para garantir seus direitos
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Atendimento especializado para garantir a melhor solução jurídica
            para você e sua empresa, assegurando um julgamento justo e uma
            defesa eficiente.
          </p>

          <Button
            size="lg"
            className="legal-button-primary text-xl px-10 py-6"
            onClick={scrollToContact}
          >
            Consulta Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};