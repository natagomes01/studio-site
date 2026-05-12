# Albatroz Studio — Site

Landing page institucional bilíngue (PT-BR + EN) construída em **Astro 5**.

> **Importante:** este é o projeto **vivo** do site. O design system canônico fica em `studio/brand/design-sys/` e **não deve ser alterado a partir daqui**. Este projeto consome os tokens do design-sys; novas versões e iterações acontecem aqui dentro.

---

## Stack

| Camada | Escolha | Por quê |
|---|---|---|
| Framework | Astro 5 | Zero-JS por padrão, build estático leve, i18n nativo, fácil de migrar para Next no futuro. |
| Estilos | CSS puro (tokens do design-sys + `site.css`) | Tokens já maduros, sem necessidade de Tailwind/runtime. |
| i18n | Astro i18n nativo | Default `pt-br`, alternativa `/en/`. |
| Animação | IntersectionObserver + CSS transitions | Sem libs externas, respeita `prefers-reduced-motion`. |
| Form | HTML form + script vanilla | Pronto para plugar em endpoint (n8n / Resend / API). Atualmente em modo simulado. |

---

## Estrutura

```
site/
├── astro.config.mjs           ← config + i18n
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── logo-horizontal.svg
│   ├── logo-square.svg
│   ├── albatroz-symbol.svg
│   └── fonts/
│       └── GT-Sectra-Display-Bold.otf
└── src/
    ├── pages/
    │   ├── index.astro        ← rota / (PT-BR)
    │   └── en/index.astro     ← rota /en/ (EN-US)
    ├── layouts/
    │   └── BaseLayout.astro   ← <head>, hreflang, OG, slot banner
    ├── components/
    │   ├── Nav.astro          ← logo + links + switcher PT|EN
    │   ├── LangBanner.astro   ← banner discreto de detecção
    │   ├── Hero.astro
    │   ├── ProofBar.astro     ← faixa de prova social numérica
    │   ├── PainPoints.astro   ← 6 dores em grid 2col
    │   ├── Cases.astro        ← 4 cases com stats grandes + bloco "padrão por trás"
    │   ├── Protocol.astro     ← 5 etapas do PAI
    │   ├── ContactForm.astro  ← form bilíngue, feedback inline
    │   └── Footer.astro       ← army + selo circular + CTA Anton + watermark
    ├── i18n/
    │   ├── index.ts           ← `t()`, `altLocale()`, `localizedPath()`, `anchor()`
    │   ├── types.ts
    │   ├── pt-br.ts           ← copy v2 Schwartz (PT)
    │   └── en.ts              ← copy v2 Schwartz (EN)
    ├── scripts/
    │   └── reveal.ts          ← reveal on-scroll + nav sticky + lang banner
    └── styles/
        ├── tokens.css         ← cópia 1:1 do design-sys/colors_and_type.css
        └── site.css           ← estilos específicos do site (extensões dos tokens)
```

---

## Comandos

```bash
# Instalar dependências (1ª vez)
npm install

# Dev server em http://localhost:4321
npm run dev

# Build estático (gera dist/)
npm run build

# Pré-visualizar build localmente
npm run preview
```

---

## i18n — como funciona

### Padrão de roteamento

| Idioma | URL |
|---|---|
| Português (default) | `albatroz.studio/` |
| Inglês | `albatroz.studio/en/` |

Definido em [`astro.config.mjs`](./astro.config.mjs) com `prefixDefaultLocale: false`.

### Switcher manual + detecção híbrida

- **Switcher textual `PT | EN`** sempre visível no nav (não bandeiras — bandeiras carregam conotação nacional, conflita com a sobriedade da marca).
- **Detecção na primeira visita**: o script `reveal.ts` lê `navigator.language` e, se o usuário estiver em uma página cujo idioma não bate com o do navegador, exibe um banner discreto sugerindo a versão alternativa por 8 segundos (dismissível).
- **Memória de escolha**: ao clicar no switcher, a preferência é gravada em `localStorage` (`alb-lang-pref`). Próxima visita nunca mostra o banner novamente.
- **Sem redirect forçado**: o usuário sempre cai na URL canônica que digitou; a sugestão é só sugestão.

### Editar a copy

Toda a copy vive em arquivos de idioma:

- **PT-BR** → [`src/i18n/pt-br.ts`](./src/i18n/pt-br.ts)
- **EN** → [`src/i18n/en.ts`](./src/i18n/en.ts)

Os componentes leem via `t(locale)`. Para corrigir uma frase, abra o arquivo do idioma, edite a string, salve. O dev server faz hot-reload.

A interface `Strings` em [`src/i18n/types.ts`](./src/i18n/types.ts) é o contrato — ambos os idiomas precisam ter as mesmas chaves. TypeScript vai reclamar se faltar alguma.

---

## Tokens & design system

### Fonte da verdade

Os tokens (cores, tipografia, spacing, motion) vivem no design-sys e foram **copiados** para `src/styles/tokens.css`. Se o design-sys for atualizado, refletir aqui:

```bash
cp ../design-sys/colors_and_type.css src/styles/tokens.css
# ajustar caminho da font @font-face para /fonts/...
```

Não edite `tokens.css` diretamente para mudanças de marca — vá no design-sys, valide visualmente lá, depois propague.

### Convenção de classes

Todas as classes do site começam com `alb-` para evitar colisão. Estrutura BEM:

- `.alb-hero` — bloco
- `.alb-hero__title` — elemento
- `.alb-btn--primary` — modificador

---

## Animações

Implementadas com **IntersectionObserver + CSS transitions** — sem libs.

### Reveal on-scroll

Adicione `class="reveal"` em qualquer elemento. Use modificadores `reveal--delay-1` até `reveal--delay-4` para escalonar (80ms, 160ms, 240ms, 320ms).

```html
<h2 class="reveal">Aparece com fade+up ao entrar na viewport</h2>
<p class="reveal reveal--delay-2">Aparece 160ms depois</p>
```

### Hero halo pulse

Animação sutil de "respiração" no halo orange do Hero (4s loop).

### Nav sticky

A `Nav.astro` muda de estado após 24px de scroll: bg semi-transparente + blur + sombra discreta.

### Reduced motion

`@media (prefers-reduced-motion: reduce)` desliga todas as animações. Já implementado em [`site.css`](./src/styles/site.css).

---

## Formulário de contato

O `ContactForm.astro` está pronto para submit, mas hoje o handler é **simulado** (`setTimeout` 600ms → success). Para conectar de verdade:

1. Edite [`src/components/ContactForm.astro`](./src/components/ContactForm.astro), bloco `<script>` no fim.
2. Substitua o `await new Promise(...)` por `fetch('/api/contact', { method: 'POST', body: ... })` ou webhook do n8n.
3. O payload já inclui `locale`, então o backend pode rotear o e-mail/WhatsApp em PT ou EN.

Sugestões de backend:

- **Resend** (`POST /api/contact` em Astro com adapter Node/Vercel) — manda e-mail.
- **n8n webhook** — encaminha para WhatsApp + planilha + e-mail.
- **Notion API** — joga direto no CRM.

---

## Deploy

Build é 100% estático (216KB total). Compatível com:

- **Vercel** — `vercel deploy` (zero config).
- **Netlify** — `netlify deploy --dir=dist`.
- **Cloudflare Pages** — push para git, conectar repo.
- **GitHub Pages** — workflow de Astro.

Para o form funcionar, escolher um host com runtime serverless (Vercel/Netlify) e adicionar adapter:

```bash
npx astro add vercel  # ou netlify, cloudflare
```

---

## Iterações futuras

Esta é a **v0.1**. Próximas versões devem:

- [ ] Conectar form a backend real (n8n ou Resend).
- [ ] Adicionar OG image dinâmica (1200x630, identidade Albatroz).
- [ ] Substituir GT Sectra por Kameron via Google Fonts se a fonte oficial não puder ser distribuída publicamente (ver caveat no design-sys/README).
- [ ] Adicionar página `/cases/[slug]` para casos detalhados quando começarmos a contar histórias longas.
- [ ] Schema.org JSON-LD para `Organization` e `Service`.
- [ ] Sitemap.xml automático (Astro tem integração nativa: `npx astro add sitemap`).

Cada iteração acontece **dentro deste projeto**, sem mexer no design-sys.

---

## Decisões registradas

| Decisão | Razão |
|---|---|
| Astro em vez de Next.js | 1 landing institucional, performance, i18n nativo. Migrar para Next depois é trivial se virar site grande. |
| CSS puro em vez de Tailwind | Tokens já estavam em CSS no design-sys. Reescrever para Tailwind config seria retrabalho sem ganho. |
| Switcher textual em vez de bandeiras | Bandeiras são nacionalistas; conflita com a paleta editorial sóbria. PT|EN em Raleway 700 bate com o resto do design. |
| Banner de detecção dismissível em vez de redirect | Redirect automático irrita usuário bilíngue e prejudica SEO. Sugestão respeita escolha. |
| Form simulado por padrão | Backend depende de decisão (n8n, Resend, Notion). UI fica pronta para plugar. |
