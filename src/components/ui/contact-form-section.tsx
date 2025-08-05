import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { MessageCircle, Scale } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  legalArea: z.string().min(1, "Selecione uma área jurídica"),
  urgency: z.string().min(1, "Selecione o nível de urgência"),
  description: z
    .string()
    .min(10, "Descreva brevemente sua situação (mínimo 10 caracteres)"),
});

type FormData = z.infer<typeof formSchema>;

export const ContactFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      legalArea: "",
      urgency: "",
      description: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Formatando a mensagem para WhatsApp
    const message = `
*Nova Consulta Jurídica*

*Nome:* ${data.name}
*Email:* ${data.email}
*Telefone:* ${data.phone}
*Área Jurídica:* ${data.legalArea}
*Urgência:* ${data.urgency}

*Descrição do Caso:*
${data.description}

---
Enviado através do site
    `.trim();

    const whatsappUrl = `https://wa.me/5591991883384?text=${encodeURIComponent(
      message
    )}`;

    // Pequeno delay para UX
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
      form.reset();
    }, 500);
  };

  return (
    <section id="contact-form" className="legal-section bg-legal-dark">
      <div className="legal-container">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center mb-4">
              <Scale className="w-7 h-7 text-primary mr-3" />
              <h3 className="text-primary text-base font-semibold tracking-wider uppercase">
                Primeira Consulta
              </h3>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Conte-nos sobre seu caso
            </h2>

            <p className="text-black/80 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              Preencha este formulário para que possamos entender melhor sua
              situação e oferecer a orientação jurídica mais adequada.
            </p>
          </div>

          {/* Form */}
          <div className="bg-legal-light rounded-xl p-4 md:p-8 lg:p-12 shadow-2xl">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* Informações Pessoais */}
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-legal-text font-semibold text-sm">
                          Nome Completo *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu nome completo"
                            {...field}
                            className="h-11 bg-white border-legal-accent/20 focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-legal-text font-semibold text-sm">
                          Email *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="seu@email.com"
                            type="email"
                            {...field}
                            className="h-11 bg-white border-legal-accent/20 focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-legal-text font-semibold text-sm">
                        Telefone/WhatsApp *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="(11) 99999-9999"
                          {...field}
                          className="h-11 bg-white border-legal-accent/20 focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Informações Jurídicas */}
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="legalArea"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-legal-text font-semibold text-sm">
                          Área Jurídica *
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-11 bg-white border-legal-accent/20 focus:border-primary">
                              <SelectValue placeholder="Selecione a área" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="civil">Direito Civil</SelectItem>
                            <SelectItem value="empresarial">
                              Direito Empresarial
                            </SelectItem>
                            <SelectItem value="trabalhista">
                              Direito Trabalhista
                            </SelectItem>
                            <SelectItem value="criminal">
                              Direito Criminal
                            </SelectItem>
                            <SelectItem value="familiar">
                              Direito de Família
                            </SelectItem>
                            <SelectItem value="tributario">
                              Direito Tributário
                            </SelectItem>
                            <SelectItem value="imobiliario">
                              Direito Imobiliário
                            </SelectItem>
                            <SelectItem value="outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="urgency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-legal-text font-semibold text-sm">
                          Nível de Urgência *
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-11 bg-white border-legal-accent/20 focus:border-primary">
                              <SelectValue placeholder="Selecione a urgência" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="baixa">
                              Baixa - Posso aguardar alguns dias
                            </SelectItem>
                            <SelectItem value="media">
                              Média - Preciso de resposta em 48h
                            </SelectItem>
                            <SelectItem value="alta">
                              Alta - Urgente, preciso de ajuda hoje
                            </SelectItem>
                            <SelectItem value="emergencia">
                              Emergência - Situação crítica
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-legal-text font-semibold text-sm">
                        Descreva brevemente sua situação *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Conte-nos sobre o que aconteceu, quais documentos você possui, prazos importantes, etc. Quanto mais detalhes, melhor poderemos ajudá-lo."
                          className="min-h-[100px] bg-white border-legal-accent/20 focus:border-primary resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="text-center pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="legal-button-primary min-w-[200px] h-11 text-base"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Enviar via WhatsApp
                      </>
                    )}
                  </Button>

                  <p className="mt-3 text-legal-text/60 text-sm">
                    Ao enviar, você será redirecionado para o WhatsApp com suas
                    informações
                  </p>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
