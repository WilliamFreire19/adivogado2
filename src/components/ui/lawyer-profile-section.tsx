import { Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";
import { Button } from "./button";
import lawyerProfile from "@/assets/lawyer-profile.jpg";

export const LawyerProfileSection = () => {
  return (
    <section className="legal-section hero-gradient">
      <div className="legal-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h3 className="text-primary text-lg font-semibold mb-4 tracking-wider uppercase">
              Prazer, seu advogado
            </h3>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-legal-text-light mb-8">
              Júlio Simas Ribeiro
            </h2>
            
            <div className="space-y-6 text-legal-text-light/90 text-lg leading-relaxed">
              <p>
                Com mais de 15 anos de experiência no Direito, dedico minha carreira a oferecer 
                soluções jurídicas eficazes e personalizadas para cada cliente. Formado pela 
                Universidade de São Paulo, possuo especialização em Direito Empresarial e Civil.
              </p>
              
              <p>
                Acredito que cada caso é único e merece atenção especial. Minha abordagem combina 
                conhecimento técnico profundo com estratégias inovadoras, sempre priorizando a 
                transparência e a comunicação clara com meus clientes.
              </p>
              
              <p>
                Ao longo da minha carreira, tive o privilégio de representar desde empresários 
                até pessoas físicas em questões complexas, sempre buscando os melhores resultados 
                através de uma defesa técnica e estratégica.
              </p>
            </div>
            
            <div className="mt-12">
              
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/" className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <Instagram className="w-6 h-6 text-primary-foreground" />
                </a>
                <a href="https://www.linkedin.com/" className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary-foreground" />
                </a>
                <a href="https://www.faceboock.com/" className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <Facebook className="w-6 h-6 text-primary-foreground" />
                </a>
                <a href="https://www.whatsapp.com/" className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={lawyerProfile} 
                alt="Júlio Simas Ribeiro" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative background */}
            <div className="absolute -inset-4 bg-primary/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};