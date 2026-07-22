import { personalInfo, metrics } from "@/lib/portfolio-data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Hero() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-12">
        <div
          ref={ref}
          className={`flex flex-col items-center text-center max-w-4xl mx-auto transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full glass-card text-xs font-mono text-accent">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Disponível para oportunidades
          </div>

          {/* Name */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 glow-text">
            {personalInfo.name}
          </h1>

          {/* Title */}
          <p className="font-display text-lg sm:text-xl md:text-2xl text-accent mb-3">
            {personalInfo.title}
          </p>

          {/* Subtitle */}
          <p className="font-mono text-sm sm:text-base text-muted-foreground mb-8">
            {personalInfo.subtitle}
          </p>

          {/* Summary */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            {personalInfo.summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg cyan-gradient text-primary-foreground font-medium transition-transform hover:scale-105"
            >
              Ver Experiência
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg glass-card text-foreground font-medium hover:border-accent/30"
            >
              Entrar em Contato
            </a>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-3xl">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="glass-card p-4 md:p-6 text-center"
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                <div className="font-display font-bold text-2xl md:text-3xl cyan-text-gradient mb-1">
                  {metric.value}
                </div>
                <div className="text-xs md:text-sm font-medium text-foreground mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground hidden md:block">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-accent animate-bounce" />
        </div>
      </div>
    </section>
  );
}
