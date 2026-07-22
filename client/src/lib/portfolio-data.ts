export const personalInfo = {
  name: "Rafael Magnani Damasceno",
  title: "Especialista em Cloud & DevOps",
  subtitle: "AWS · Azure · Kubernetes · SRE · FinOps · DevSecOps",
  email: "rafael.damasceno1@hotmail.com",
  phone: "(11) 97851-1240",
  linkedin: "https://www.linkedin.com/in/rafael-magnani-damasceno",
  location: "São Paulo, Brasil",
  summary: "Especialista em Cloud & DevOps com 10+ anos de experiência em infraestrutura crítica. Profundo conhecimento em AWS/Azure, Kubernetes, SRE, IaC (Terraform/CloudFormation) e FinOps. Liderança técnica na implementação de arquiteturas multi-cloud, pipelines CI/CD automatizados, estratégias de Disaster Recovery e governança cloud. Expertise em DevSecOps, Zero Trust, hardening e mitigação de ataques DDoS.",
  yearsExperience: "10+",
};

export const metrics = [
  { value: "70%", label: "Redução de Custos", description: "Otimização FinOps em ambiente cloud" },
  { value: "99.95%", label: "Uptime", description: "SLA em aplicações críticas" },
  { value: "60%", label: "Time-to-Market", description: "Aceleração com CI/CD automatizado" },
  { value: "10+", label: "Anos de Experiência", description: "Em infraestrutura e Cloud" },
];

export const skills = [
  {
    category: "Cloud Architecture & Multi-Cloud",
    icon: "cloud",
    items: [
      "AWS (EC2, S3, RDS, VPC, Lambda, ECS, EKS, CloudFormation, Route 53, CloudWatch)",
      "Microsoft Azure (VMs, App Services, AKS, EntraID, Azure DevOps, Application Gateway)",
      "Cloud Governance, Cost Optimization & FinOps",
    ],
  },
  {
    category: "Containerization & Orchestration",
    icon: "container",
    items: [
      "Kubernetes (AKS, EKS, Helm, Kustomize)",
      "Docker",
      "OpenShift",
      "High Availability, Scalability & Resilience",
    ],
  },
  {
    category: "Infrastructure as Code & Automation",
    icon: "code",
    items: [
      "Terraform",
      "AWS CloudFormation",
      "Azure Resource Manager (ARM)",
      "Ansible",
      "Python, PowerShell, Bash",
    ],
  },
  {
    category: "CI/CD Pipelines & DevOps",
    icon: "pipeline",
    items: [
      "Azure DevOps",
      "GitHub Actions",
      "Jenkins",
      "GitOps",
      "Continuous Integration & Deployment",
    ],
  },
  {
    category: "Observability & Monitoring",
    icon: "monitor",
    items: [
      "Datadog",
      "Grafana",
      "Prometheus",
      "AWS CloudWatch",
      "Azure Monitor",
      "Centralized Logging, APM & Proactive Alerting",
    ],
  },
  {
    category: "Security, Compliance & DevSecOps",
    icon: "shield",
    items: [
      "Zero Trust Network Access (ZTNA)",
      "Web Application Firewall (WAF)",
      "Cloudflare, Fortigate, Zscaler",
      "IAM, RBAC & Hardening",
      "Disaster Recovery (DR), RTO/RPO",
      "Compliance & Risk Management",
    ],
  },
  {
    category: "Site Reliability Engineering (SRE)",
    icon: "sre",
    items: [
      "SLO/SLI Definition & Monitoring",
      "High Availability (HA) & Resilience",
      "FinOps & Cost Optimization",
      "Advanced Troubleshooting & Incident Management",
    ],
  },
  {
    category: "Networking & Infrastructure",
    icon: "network",
    items: [
      "VPN, DNS & Private Endpoints",
      "Hub-and-Spoke Architecture",
      "Network Security",
      "Wazuh & Security Monitoring",
    ],
  },
  {
    category: "Data Management",
    icon: "database",
    items: [
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "NoSQL",
      "PL/SQL",
    ],
  },
];

export const experiences = [
  {
    company: "Multiplica Crédito e Investimento",
    role: "Especialista DevOps / Cloud Architect",
    period: "Agosto 2025 – Presente",
    current: true,
    summary: "Referência técnica em arquitetura multi-cloud (AWS/Azure) para 350+ aplicações críticas, liderando informalmente equipe técnica de 4 membros. Arquiteto e administrador de 4 clusters Kubernetes (AKS) em produção com 99.95% uptime e 80 nodes.",
    highlights: [
      "Projetou infraestrutura Hub-and-Spoke (Terraform/CloudFormation) com Azure Firewall, VPN Gateways, Private Endpoints — PoC até Produção",
      "Implementou Zero Trust (ZTNA) com Cloudflare, mitigando ataque DDoS de 8M requisições/min sem downtime crítico (SLA 98%+)",
      "Otimizou custos em 70% mantendo gastos estáveis em crescimento (R$ 115-120k/mês)",
      "Defini SLO/SLI estruturados (99.95% uptime, p99 <150ms, erro <0.05%)",
      "Automatizou CI/CD (Azure DevOps, GitHub Actions, Jenkins) com GitOps (Helm, Kustomize)",
      "Implementou observabilidade completa (Grafana, Datadog, Zabbix) com dashboards executivos e alertas proativos",
      "Estratégias de DR com RPO 5-15 min e RTO 10-30 min",
    ],
    tags: ["AWS", "Azure", "Kubernetes", "Terraform", "FinOps", "SRE", "DevSecOps", "ZTNA"],
  },
  {
    company: "Webmotors",
    role: "Analista Cloud AWS SR / Cloud Engineer",
    period: "Maio 2025 – Agosto 2025",
    current: false,
    summary: "Especialista em administração multi-cloud (AWS/Azure) com foco em infraestrutura crítica e suporte Tier-3. Atuou como referência técnica para incidentes críticos, garantindo SLAs de alta disponibilidade e conformidade operacional.",
    highlights: [
      "Administração avançada de AWS e Azure (EC2, RDS, IAM, VPC, API Gateway, CloudFront, ECS/EKS, SQS/SNS) com conformidade e governança",
      "Troubleshooting avançado em incidentes críticos (servidores Linux/Windows, redes, Apache/IIS/NGINX)",
      "Correção de vulnerabilidades, gestão de patching, hardening de servidores e auditorias (DevSecOps)",
      "Gestão de redes complexas (Fortigate, Zscaler, VPN, topologias LAN/WAN)",
      "Monitoramento contínuo em tempo real (Datadog, Grafana) para antecipação de incidentes",
    ],
    tags: ["AWS", "Azure", "DevSecOps", "Datadog", "Grafana", "Fortigate"],
  },
  {
    company: "OpenLabs",
    role: "DevOps Engineer / Analista de Sistemas",
    period: "Janeiro 2023 – Maio 2025",
    current: false,
    summary: "Engenheiro DevOps sênior responsável por sustentação e evolução de ambientes multi-cloud e híbridos. Liderou implementação de projetos críticos para clientes enterprise, garantindo alta disponibilidade, observabilidade e governança técnica.",
    highlights: [
      "Gestão multi-cloud e híbrida (On-Premises, Azure, AWS) com Kubernetes, OpenShift e Docker",
      "Projeto Integração Vtal: Suporte N3 avançado em ambiente híbrido crítico com observabilidade (Datadog, Grafana) e governança técnica",
      "Projeto Sistema AAA (Vivo): Implantação completa de sistema de autenticação, autorização e accounting integrando OpenStack, SQL/NoSQL, redes legadas e cloud",
      "Automação de pipelines de deploy (Azure DevOps, Git, Ansible)",
      "Documentação técnica abrangente de padrões IaC, CI/CD e diretrizes de governança",
    ],
    tags: ["Azure", "AWS", "Kubernetes", "OpenShift", "OpenStack", "Ansible", "Datadog"],
  },
  {
    company: "CB Partners",
    role: "Administrador de Rede / Cloud Administrator",
    period: "Março 2020 – Junho 2023",
    current: false,
    summary: "Administrador de infraestrutura cloud responsável por gestão de identidades, otimização de custos e operações de rede corporativa. Promovido após 12 meses devido à alta performance técnica e entrega de resultados significativos.",
    highlights: [
      "Administração de infraestrutura Azure/AWS com foco em gestão de identidades e dispositivos (EntraID, Microsoft Intune)",
      "FinOps e otimização de custos: Reduzi faturas de R$ 1M/mês para R$ 370k/mês (63% de redução) através de rightsizing, consolidação e eliminação de desperdícios",
      "Manutenção e suporte avançado de redes corporativas com alta disponibilidade e segurança",
      "Evolução de carreira: Promovido após 12 meses de atuação",
    ],
    tags: ["Azure", "AWS", "EntraID", "Intune", "FinOps", "Networking"],
  },
  {
    company: "WPS Brasil",
    role: "Analista de Sistemas / Cloud Support",
    period: "Agosto 2019 – Março 2020",
    current: false,
    summary: "Analista de sistemas responsável por sustentação e modernização de aplicações cloud. Atuou na integração de plataforma crítica e migração de infraestrutura para cloud, aumentando velocidade de entrega e confiabilidade.",
    highlights: [
      "Suporte Tier-2 na plataforma Veloe, identificando gargalos e aplicando melhorias de performance",
      "Migração e execução de deploys na AWS com Docker e Amazon ECS, aumentando velocidade de entrega e confiabilidade das versões",
    ],
    tags: ["AWS", "Docker", "ECS", "Cloud Migration"],
  },
  {
    company: "Tok&Stok",
    role: "Analista de Suporte / SysAdmin",
    period: "Março 2011 – Agosto 2017",
    current: false,
    summary: "Administrador de sistemas responsável por infraestrutura on-premises, automação operacional e suporte técnico. Implementou soluções de automação que reduziram significativamente a carga operacional e erros manuais.",
    highlights: [
      "Automação de processos: Scripts avançados em ShellScript e PowerShell integrados com SQL para automação de rotinas de banco de dados",
      "Redução drástica de carga operacional e mitigação de erros manuais através de automação",
      "Gestão completa de servidores Windows Server e Linux (patching, hardening, liderança técnica em implantações e homologações)",
    ],
    tags: ["Windows Server", "Linux", "PowerShell", "ShellScript", "SQL"],
  },
];

export const certifications = [
  { name: "Azure Administrator Associate", code: "AZ-104", issuer: "Microsoft" },
  { name: "AWS Solutions Architect Associate", code: "SAA", issuer: "Amazon Web Services" },
];

export const education = [
  {
    degree: "Tecnólogo em Defesa Cibernética, Redes e Segurança de Sistemas",
    institution: "Estácio",
    period: "2021 – 2023",
  },
];

export const courses = [
  "Fundamentos de Azure",
  "Administração e Segurança de Redes",
  "Java Web, HTML5, CSS3, JavaScript",
  "API REST com Spring Boot",
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Intermediário" },
  { name: "Espanhol", level: "Intermediário" },
];

export const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experiência", href: "#experience" },
  { label: "Cases", href: "#cases" },
  { label: "Contato", href: "#contact" },
];
