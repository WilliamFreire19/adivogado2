export const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="legal-container">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <h3 className="text-3xl font-bold text-primary-foreground mb-6">
              Júlio Simas Ribeiro 
            </h3>
            <p className="text-primary-foreground/90 leading-relaxed text-lg max-w-md">
              Escritório de advocacia especializado em defesa técnica e estratégica, 
              oferecendo soluções jurídicas personalizadas para garantir seus direitos.
            </p>
          </div>
          
          {/* Right Column */}
          <div className="text-right">
            <p className="text-primary-foreground/80 mb-4">
              © 2024 Júlio Simas Ribeiro. Todos os direitos reservados.
            </p>
            <div className="space-x-4 text-primary-foreground/70">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Termos de Uso
              </a>
              <span>|</span>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Políticas de Privacidade
              </a>
              <span>|</span>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Políticas de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};