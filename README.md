# Rafael Damasceno — Portfólio Profissional

Portfólio profissional de **Rafael Magnani Damasceno**, Especialista em Cloud & DevOps.

## Stack

- **React 19** + **TypeScript**
- **Tailwind CSS 4** + **shadcn/ui**
- **Vite 7** (build tool)
- **Wouter** (routing)
- **Framer Motion** (animações)
- **Lucide React** (ícones)

## Deploy no GitHub Pages

### Pré-requisitos

- Conta no GitHub
- Node.js 22+
- pnpm instalado (`npm install -g pnpm`)

### Passo a Passo

#### 1. Criar repositório no GitHub

Crie um repositório público com o nome que desejar (ex: `rafael-damasceno-portfolio`).

#### 2. Fazer upload do código

Extraia o ZIP e faça push para o repositório:

```bash
git init
git add .
git commit -m "Initial portfolio deploy"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```

#### 3. Configurar GitHub Pages

1. Acesse o repositório no GitHub
2. Vá em **Settings** → **Pages**
3. Em **Source**, selecione **GitHub Actions**
4. O workflow `.github/workflows/deploy.yml` fará o deploy automaticamente

#### 4. Configurar domínio customizado (rafael.damasceno.nom.br)

##### No GitHub:

1. Vá em **Settings** → **Pages**
2. Em **Custom domain**, digite: `rafael.damasceno.nom.br`
3. Clique em **Save**
4. Marque **Enforce HTTPS** (recomendado)

##### No Cloudflare (DNS):

Adicione os seguintes registros DNS no painel do Cloudflare para a zona `damasceno.nom.br`:

| Tipo  | Nome     | Conteúdo                          | Proxy      | TTL  |
|-------|----------|-----------------------------------|------------|------|
| A     | rafael   | 185.199.108.153                   | DNS only   | Auto |
| A     | rafael   | 185.199.109.153                   | DNS only   | Auto |
| A     | rafael   | 185.199.110.153                   | DNS only   | Auto |
| A     | rafael   | 185.199.111.153                   | DNS only   | Auto |
| CNAME | www.rafael | SEU_USUARIO.github.io            | DNS only   | Auto |

> **Importante:** Os registros A devem ter **Proxy = DNS only** (nuvem cinza). O GitHub Pages precisa dos IPs diretos do GitHub.

##### Verificação:

Após configurar, aguarde alguns minutos para propagação DNS. Acesse:
- https://rafael.damasceno.nom.br

### Desenvolvimento Local

```bash
# Instalar dependências
pnpm install

# Servidor de desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Preview do build
pnpm preview
```

## Estrutura do Projeto

```
client/
  public/
    img/           ← Imagens (hero, logo, og-cover)
    CNAME          ← Domínio customizado GitHub Pages
    .nojekyll      ← Bypass Jekyll
  src/
    components/    ← Componentes (Navbar, Hero, About, Skills, Experience, Cases, Contact, Footer)
    hooks/         ← Hooks customizados (useScrollReveal)
    lib/           ← Dados e utilidades (portfolio-data.ts)
    pages/         ← Páginas (Home, NotFound)
    App.tsx        ← App principal
    main.tsx       ← Entry point
    index.css      ← Estilos globais e tema
.github/
  workflows/
    deploy.yml     ← Workflow GitHub Actions para deploy automático
```

## Personalização

Para editar o conteúdo do portfólio, modifique:
- `client/src/lib/portfolio-data.ts` — informações pessoais, experiências, skills, cases
- `client/src/index.css` — cores, fontes, tema
- `client/public/img/` — imagens (hero, logo, og-cover)

## Licença

Uso pessoal. Todos os direitos reservados.
