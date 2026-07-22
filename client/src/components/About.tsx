import { personalInfo, certifications, education, languages } from "@/lib/portfolio-data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, MapPin, Linkedin, GraduationCap, Award, Languages } from "lucide-react";

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="relative py-24 md:py-32 grid-bg">
      <div className="container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section header */}
          <div className="mb-16">
            <p className="font-mono text-sm text-accent mb-2">// sobre</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Quem Sou Eu
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Bio */}
            <div className="space-y-6">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Sou um especialista em Cloud & DevOps com mais de 10 anos de experiência
                transformando infraestrutura corporativa em ambientes escaláveis, seguros e
                eficientes. Minha trajetória abrange desde administração de sistemas on-premises
                até arquitetura multi-cloud complexa em AWS e Azure.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Atuo como referência técnica em projetos críticos, liderando iniciativas de
                FinOps, SRE, DevSecOps e automação. Tenho resultados comprovados em redução de
                custos, aumento de uptime e aceleração de time-to-market através de práticas
                modernas de engenharia de infraestrutura.
              </p>

              {/* Contact info */}
              <div className="pt-4 space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  {personalInfo.email}
                </a>
                <a
                  href={`tel:${personalInfo.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  {personalInfo.phone}
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-accent" />
                  {personalInfo.location}
                </div>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-accent" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right: Cards */}
            <div className="space-y-6">
              {/* Certifications */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-accent" />
                  <h3 className="font-display font-semibold text-foreground">Certificações</h3>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">{cert.name}</p>
                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <span className="font-mono text-xs px-2 py-1 rounded bg-accent/10 text-accent">
                        {cert.code}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  <h3 className="font-display font-semibold text-foreground">Educação</h3>
                </div>
                <div className="space-y-3">
                  {education.map((edu, idx) => (
                    <div key={idx}>
                      <p className="text-sm font-medium text-foreground">{edu.degree}</p>
                      <p className="text-xs text-muted-foreground">
                        {edu.institution} · {edu.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Languages className="w-5 h-5 text-accent" />
                  <h3 className="font-display font-semibold text-foreground">Idiomas</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground">{lang.name}</span>
                      <span className="text-xs text-muted-foreground">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
