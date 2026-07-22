import { personalInfo } from "@/lib/portfolio-data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contact" className="relative py-24 md:py-32 grid-bg">
      <div className="container relative">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section header */}
          <div className="mb-16 text-center">
            <p className="font-mono text-sm text-accent mb-2">// contato</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Vamos Conversar
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Disponível para oportunidades, projetos e consultoria em Cloud, DevOps, SRE e
              Arquitetura de Infraestrutura.
            </p>
          </div>

          {/* Contact cards */}
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="glass-card p-6 group flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-muted-foreground mb-1">EMAIL</p>
                  <p className="text-sm font-medium text-foreground truncate">
                    {personalInfo.email}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone.replace(/\D/g, "")}`}
                className="glass-card p-6 group flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-muted-foreground mb-1">TELEFONE</p>
                  <p className="text-sm font-medium text-foreground">{personalInfo.phone}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 group flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-muted-foreground mb-1">LINKEDIN</p>
                  <p className="text-sm font-medium text-foreground truncate">
                    /rafael-magnani-damasceno
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>

              {/* Location */}
              <div className="glass-card p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-muted-foreground mb-1">LOCALIZAÇÃO</p>
                  <p className="text-sm font-medium text-foreground">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg cyan-gradient text-primary-foreground font-medium text-base transition-transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
