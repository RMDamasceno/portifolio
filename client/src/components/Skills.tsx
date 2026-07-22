import { skills } from "@/lib/portfolio-data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Cloud,
  Box,
  Code2,
  GitBranch,
  Activity,
  ShieldCheck,
  Gauge,
  Network,
  Database,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  cloud: <Cloud className="w-5 h-5" />,
  container: <Box className="w-5 h-5" />,
  code: <Code2 className="w-5 h-5" />,
  pipeline: <GitBranch className="w-5 h-5" />,
  monitor: <Activity className="w-5 h-5" />,
  shield: <ShieldCheck className="w-5 h-5" />,
  sre: <Gauge className="w-5 h-5" />,
  network: <Network className="w-5 h-5" />,
  database: <Database className="w-5 h-5" />,
};

export default function Skills() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="container relative">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section header */}
          <div className="mb-16 text-center">
            <p className="font-mono text-sm text-accent mb-2">// skills</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Habilidades Técnicas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tecnologias e competências que utilizo para projetar, automatizar e sustentar
              infraestruturas cloud de alta disponibilidade.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="glass-card p-6 group"
                style={{
                  transitionDelay: `${idx * 50}ms`,
                }}
              >
                {/* Icon + Category */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center transition-colors group-hover:bg-accent/20">
                    {iconMap[skill.icon]}
                  </div>
                  <h3 className="font-display font-semibold text-sm text-foreground leading-tight">
                    {skill.category}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-2">
                  {skill.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-accent mt-0.5 shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
