import { experiences } from "@/lib/portfolio-data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="experience" className="relative py-24 md:py-32 grid-bg">
      <div className="container relative">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section header */}
          <div className="mb-16">
            <p className="font-mono text-sm text-accent mb-2">// trajetória</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Experiência Profissional
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Mais de 10 anos de evolução contínua em infraestrutura, cloud e DevOps.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px timeline-line" />

            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative pl-12 md:pl-16"
                  style={{
                    transitionDelay: `${idx * 100}ms`,
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2.5 md:left-4.5 top-6 w-4 h-4 rounded-full border-2 ${
                      exp.current
                        ? "bg-accent border-accent shadow-[0_0_12px_oklch(0.72_0.18_200/50%)]"
                        : "bg-background border-muted-foreground/40"
                    }`}
                    style={{ left: "0.625rem" }}
                  />

                  {/* Content card */}
                  <div className="glass-card p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase className="w-4 h-4 text-accent" />
                          <h3 className="font-display font-semibold text-lg text-foreground">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs font-mono rounded bg-accent/10 text-accent">
                              Atual
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-medium text-accent">{exp.company}</p>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground md:text-right">
                        {exp.period}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.summary}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="text-xs md:text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-accent mt-0.5 shrink-0">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-xs font-mono rounded bg-secondary/60 text-muted-foreground border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
