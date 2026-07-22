import { personalInfo } from "@/lib/portfolio-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg cyan-gradient flex items-center justify-center font-display font-bold text-xs text-primary-foreground">
              RD
            </div>
            <div>
              <p className="font-display font-semibold text-sm text-foreground">
                {personalInfo.name}
              </p>
              <p className="text-xs text-muted-foreground">{personalInfo.title}</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xs text-muted-foreground hover:text-accent transition-colors"
            >
              Email
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground font-mono">
            © {currentYear} · Built with precision
          </p>
        </div>
      </div>
    </footer>
  );
}
