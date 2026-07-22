import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Shield, DollarSign, Server, Cloud } from "lucide-react";

const cases = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Mitigação de Ataque DDoS Massivo",
    company: "Multiplica Crédito e Investimento",
    challenge:
      "Ambiente sob ataque DDoS com picos de 8 milhões de requisições por minuto durante 3 semanas consecutivas, ameaçando a continuidade do negócio.",
    solution:
      "Implementação de arquitetura Zero Trust (ZTNA) com Cloudflare, configuração de WAF e Rate Limiting, remoção de superfícies de ataque expostas e reestruturação de tráfego.",
    result: "SLA superior a 98% nas semanas finais, sem downtime crítico para o negócio. Redução de 87% na superfície de ataque.",
    metrics: [
      { value: "8M", label: "req/min mitigadas" },
      { value: "98%+", label: "SLA mantido" },
      { value: "0", label: "downtime crítico" },
    ],
    tags: ["ZTNA", "Cloudflare", "WAF", "DDoS", "DevSecOps"],
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Otimização FinOps: 63% de Redução de Custos",
    company: "CB Partners",
    challenge:
      "Faturas cloud mensais de R$ 1 milhão sem governança adequada, com significativo desperdício de recursos e ausência de visibilidade financeira.",
    solution:
      "Implementação de práticas FinOps com rightsizing de instâncias, consolidação de recursos, eliminação de desperdícios e reservas de capacidade.",
    result: "Redução de R$ 1M/mês para R$ 370k/mês (63% de redução), mantendo performance e disponibilidade.",
    metrics: [
      { value: "63%", label: "redução de custos" },
      { value: "R$ 630k", label: "economia mensal" },
      { value: "R$ 7.5M", label: "economia anual" },
    ],
    tags: ["FinOps", "AWS", "Azure", "Rightsizing", "Cost Optimization"],
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Arquitetura Kubernetes para 350+ Aplicações",
    company: "Multiplica Crédito e Investimento",
    challenge:
      "Necessidade de orquestrar centenas de aplicações críticas com alta disponibilidade, escalabilidade automática e governança centralizada em ambiente cloud.",
    solution:
      "Arquitetura e provisionamento de 4 clusters Kubernetes (AKS) em produção, com 80 nodes totais, GitOps (Helm/Kustomize) e CI/CD automatizado.",
    result: "99.95% de uptime, p99 latência <150ms, taxa de erro <0.05%, deploys automatizados e padronizados.",
    metrics: [
      { value: "4", label: "clusters AKS" },
      { value: "350+", label: "aplicações" },
      { value: "99.95%", label: "uptime" },
    ],
    tags: ["Kubernetes", "AKS", "GitOps", "Helm", "CI/CD"],
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Infraestrutura Hub-and-Spoke do Zero",
    company: "Multiplica Crédito e Investimento",
    challenge:
      "Ausência de arquitetura de rede estruturada em cloud, com necessidade de isolamento de ambientes, segurança perimeter e conectividade híbrida.",
    solution:
      "Projeto e implementação de arquitetura Hub-and-Spoke no Azure com Terraform, incluindo VNets, Azure Firewall, VPN Gateways, VNet Peering, Private Endpoints e Key Vaults. Replicação na AWS com CloudFormation.",
    result: "Evolução completa de PoC para Homologação e Produção. Estrutura de rede segura, escalável e totalmente versionada via IaC.",
    metrics: [
      { value: "100%", label: "IaC (Terraform)" },
      { value: "3", label: "ambientes (PoC/HML/PRD)" },
      { value: "2", label: "clouds (Azure + AWS)" },
    ],
    tags: ["Terraform", "CloudFormation", "Hub-and-Spoke", "Azure Firewall", "VPN", "IaC"],
  },
];

export default function Cases() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="cases" className="relative py-24 md:py-32">
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
            <p className="font-mono text-sm text-accent mb-2">// cases</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Cases de Destaque
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Projetos reais com impacto de negócio comprovado, desde mitigação de ataques até
              otimização financeira e arquitetura de infraestrutura.
            </p>
          </div>

          {/* Cases grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {cases.map((caseItem, idx) => (
              <div
                key={idx}
                className="glass-card p-6 md:p-8 flex flex-col"
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    {caseItem.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground leading-tight mb-1">
                      {caseItem.title}
                    </h3>
                    <p className="text-xs text-accent font-mono">{caseItem.company}</p>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <p className="text-xs font-mono text-accent mb-1">DESAFIO</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {caseItem.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <p className="text-xs font-mono text-accent mb-1">SOLUÇÃO</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {caseItem.solution}
                  </p>
                </div>

                {/* Result */}
                <div className="mb-6">
                  <p className="text-xs font-mono text-accent mb-1">RESULTADO</p>
                  <p className="text-sm text-foreground leading-relaxed">
                    {caseItem.result}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4 mt-auto">
                  {caseItem.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="text-center p-3 rounded-lg bg-secondary/40">
                      <div className="font-display font-bold text-lg cyan-text-gradient">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {caseItem.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-secondary/60 text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
