import { Star } from "lucide-react";
import client1 from "@/assets/client1.jpg";
import client2 from "@/assets/client2.jpg";
import client3 from "@/assets/client3.jpg";

const testimonials = [
  {
    name: "Ana Paula Silva",
    role: "Empresária",
    image: client1,
    text: "Excelente atendimento e profissionalismo excepcional. Dr. Júlio resolveu meu caso de forma brilhante e sempre me manteve informada sobre cada etapa do processo.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    role: "Diretor Comercial",
    image: client2,
    text: "Recomendo fortemente os serviços jurídicos. A expertise e dedicação da equipe fizeram toda a diferença no resultado do meu caso empresarial.",
    rating: 5,
  },
  {
    name: "Mariana Costa",
    role: "Arquiteta",
    image: client3,
    text: "Profissional competente e confiável. Me senti segura durante todo o processo e o resultado superou minhas expectativas. Atendimento personalizado e eficiente.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="legal-section bg-muted">
      <div className="legal-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Feedbacks de quem confiou no nosso trabalho
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="legal-card bg-card">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-card-foreground text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <div className="flex space-x-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-card-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};