# Roadmap do site Albatroz

Estado em 10 de agosto de 2026. Base: auditoria do repo `studio-site` contra a lista
"20 things to tell Claude to add to your site before launching" mais o que a auditoria
achou por fora dela.

Stack: Astro 5 estático, deploy no GitHub Pages (`.github/workflows/deploy.yml`), apex
`albatroz.studio`. Páginas no ar: `/`, `/en/`, `/guia-whatsapp-2026/`.

---

## Achado que vale mais que a lista inteira

O `src/components/ContactForm.astro` está escrito, bilíngue, com validação e feedback,
e **não é renderizado em página nenhuma**. O `index.astro` não importa o componente. O
âncora `#contato` está declarado no `src/i18n/index.ts` e não existe seção com esse id.
O submit do form também não vai a lugar nenhum: `await new Promise(resolve => setTimeout(resolve, 600))`
com um `// TODO: wire to real endpoint`.

Consequência prática: 100% da conversão do site depende do clique no `wa.me`. Isso não é
errado, é uma decisão de canal. Mas ela precisa ser explícita, porque decide quatro itens
da lista dos 20 (obrigado, promessa de resposta, analytics, CTA). As duas saídas:

- **Caminho A, WhatsApp puro.** Apagar o `ContactForm.astro` e o âncora `#contato`.
  A página de obrigado vira desnecessária. A conversão é medida por clique no CTA.
- **Caminho B, form + WhatsApp.** Renderizar o form no fim da home, plugar num webhook
  n8n, criar `/obrigado/` e usar a página como evento de conversão no analytics.

Recomendo o **Caminho B**. Você já tem n8n rodando, e formulário dá um lead com e-mail e
contexto escrito que o `wa.me` não dá.

**Decisão do Natã em 10/08/2026: adiada.** O componente fica dormindo no repo, sem ser
renderizado, até a decisão. Enquanto isso, a página `/obrigado/` sai do escopo e a
promessa de tempo de resposta vira texto fixo perto dos CTAs de WhatsApp, no item 9 da
onda 1.

---

## Auditoria dos 20 itens

| # | Item | Estado | Onde |
|---|---|---|---|
| 1 | Página 404 própria | falta | não existe `src/pages/404.astro` |
| 2 | CTA acima da dobra | pronto | `Hero.astro`, botão primário `wa.me` + ghost |
| 3 | Links internos | fraco | a home não linka o guia; nav só tem âncoras |
| 4 | Página de obrigado | falta | depende da decisão A/B acima |
| 5 | Breadcrumbs | falta | o guia não tem trilha nem `BreadcrumbList` |
| 6 | Case studies | parcial | 4 cases com números na home, sem página própria |
| 7 | 5 FAQs | falta | não existe seção nem `FAQPage` |
| 8 | Promessa de tempo de resposta | escondido | só aparece no `form.success`, que ninguém vê |
| 9 | CTA fixo no mobile | pronto | `WhatsAppFab.astro`, fixo, com `prefers-reduced-motion` |
| 10 | robots.txt | falta | `public/` não tem robots nem sitemap |
| 11 | Títulos únicos por página | pronto | home, `/en/` e guia têm título próprio |
| 12 | Meta description | pronto | `BaseLayout.astro`, com override por página |
| 13 | Imagem de compartilhamento | metade | só o guia tem `og:image`; home e `/en/` não |
| 14 | Mapa e como chegar | falta | endereço no rodapé como texto morto |
| 15 | Depoimentos reais | falta | tem número de resultado, não tem voz de cliente |
| 16 | Alt em imagem | pronto | única `<img>` do site é o logo, com alt |
| 17 | Schema local | falta | só o guia tem JSON-LD, do tipo `Article` |
| 18 | Política de privacidade | falta | e você coleta dado: WhatsApp, e o form do caminho B |
| 19 | Analytics | falta | zero script de medição no site |
| 20 | Foto do time | falta | site inteiro sem rosto humano |

### Suspeita aberta: overflow horizontal no mobile

Achado durante a onda 1, ainda por confirmar em aparelho real. Renderizando a home
num viewport de 390px, o conteúdo estoura a largura: a headline do hero, o botão
laranja e a barra de prova saem pela direita. **O mesmo acontece no site publicado**,
antes de qualquer mudança desta sessão, então é defeito antigo, não regressão.

Entra na fila como item próprio. O CTA principal do site é um botão de WhatsApp, e a
maior parte de quem clica está no celular.

Fora da lista, dois furos do mesmo tamanho:

- **Sem `sitemap.xml`.** O `@astrojs/sitemap` resolve em uma linha de config.
- **`twitter:card` sem imagem.** O `BaseLayout` declara `summary_large_image` e a home
  não passa `og:image`. Link da home compartilhado no WhatsApp ou no LinkedIn hoje sai
  como caixa cinza.

---

## Onda 1: feita em 10 de agosto de 2026

Nove itens. Nenhum depende de dado que só você tem, nenhum toca em copy pública nova
que precise da sua revisão. Uma passada de código, um build, um commit.

1. **404 própria** (`src/pages/404.astro`). Título próprio, marca, um parágrafo, botão
   pra home e link pro guia. O GitHub Pages serve `/404.html` sozinho.
2. **robots.txt** em `public/`, apontando o sitemap.
3. **sitemap.xml** via `@astrojs/sitemap`, com as três rotas e o hreflang.
4. **`og:image` padrão** para home e `/en/`, mais `twitter:image`. Uso o vocabulário do
   deck da marca e gero o PNG 1200×630 como fiz no do guia.
5. **Schema `Organization` + `LocalBusiness`** na home, com o endereço que já está no
   rodapé, o WhatsApp de `i18n/index.ts` e o `sameAs` do Instagram e do LinkedIn.
   O horário de atendimento fica de fora até você me passar.
6. **Endereço vira link** pro Google Maps, no rodapé, com `aria-label` de "como chegar".
7. **Breadcrumb no guia**, visual e em `BreadcrumbList`, no formato Albatroz > Guia.
8. **Links internos.** Bloco do guia no fim da home (PT), item de guias no rodapé,
   link de volta pra home dentro do corpo do guia.
9. **Promessa de resposta visível.** Uma linha embaixo do CTA do hero e no rodapé. Texto
   que eu proponho: "Resposta em até 1 hora útil, das 9h às 18h." Se o número real for
   outro, você troca uma palavra e eu ajusto.

Feito. Duas notas de execução:

- A 404 é única para o site inteiro, porque o GitHub Pages serve um só `/404.html`.
  Ela sai em português, com `noindex, follow` e uma linha de saída para o `/en/`.
- A imagem social da home cita a headline do hero, que usa a antítese "não é X, é Y".
  Mantive porque o OG deve espelhar o H1 publicado. Se você reescrever a headline,
  a imagem é regerada em um comando.

Custo real: uma sessão. Risco: baixo, tudo aditivo, nada quebrou rota existente.

---

## Onda 2: construída em 10 de agosto de 2026, à espera de dois dados

O código está pronto e testado. Falta o que só você tem.

- **GA4.** O `measurementId` em `src/i18n/index.ts` está vazio de propósito. Com a
  string vazia o site não carrega gtag, não grava cookie e não mostra banner. Cole o
  `G-XXXXXXXXXX` naquela linha e as três coisas ligam juntas.
- **Consentimento.** Banner no rodapé da tela com aceitar e recusar, escolha guardada
  em `localStorage` sob `alb-consent`. O script do Google só é injetado depois do
  aceite, então nenhuma visita grava `_ga` antes da decisão. Consent Mode v2 entra com
  tudo negado por padrão.
- **Política de privacidade.** `/privacidade/` e `/en/privacy/`, nove seções, com base
  legal citada por artigo da LGPD. O texto se adapta sozinho: enquanto o GA4 estiver
  desligado, a página diz que o site não roda medição; ligando, o parágrafo de cookies
  aparece. **Precisa da sua leitura antes de publicar**, e falta decidir se entra o CNPJ
  da empresa. Prazo de guarda que escrevi: 5 anos para histórico comercial, 14 meses
  para o GA4.
- **FAQ.** Cinco perguntas na home, PT e EN, com `FAQPage` no schema. Escrevi as
  respostas a partir do que já está publicado no seu site, então nada ali é invenção
  minha. **A pergunta que mais chega de verdade, quanto custa, ficou de fora**, porque
  só você tem esse número.

## Passada do humanizador, 11 de agosto de 2026

Camada 1 e camada 2 rodadas sobre `src/i18n/pt-br.ts` e `src/pages/privacidade.astro`.
O `en.ts` acompanhou os cortes de conteúdo, para os dois idiomas dizerem a mesma coisa.
O guia já tinha recebido a passada em julho.

Scanner: 7 erros para 0. O único aviso que sobrou é falso positivo, e o teste da
habitualidade confirma o presente do indicativo ali.

**A antítese saiu do site inteiro.** Eram três headlines e sete trechos de corpo. As três
headlines viraram afirmativa pura, e a imagem OG foi regerada com a nova. O H1 passou de
"Você não está perdendo cliente por falta de marketing. Está perdendo por falta de
estrutura no atendimento." para "Você está perdendo cliente por falta de estrutura no
atendimento."

**Auditoria 6, convergência de forma.** As cinco seções eram o mesmo molde, e três delas
abriam com a mesma figura. Com as headlines novas, a 01 abre com duas frases curtas e a
03 com um período único, o que já quebra a série.

**Pendente de prova.** O stat `0 · gargalo no agendamento` saiu, porque era zero retórico
com tipografia de dado medido. Faltam três números que só o Natã tem:

- Um número real para o case da cirurgia plástica, no lugar do que saiu.
- O nome da clínica, se houver autorização.
- Um antes e depois de tempo de resposta ou de conversão, com período. A página promete
  as duas coisas e não mostra número de nenhuma. Os oito números atuais são de volume.

### Ainda pendente da onda 2

Cada um destes trava numa informação que não está no repo.

| Item | O que eu preciso de você |
|---|---|
| Measurement ID do GA4 | O `G-XXXXXXXXXX`. Uma linha em `src/i18n/index.ts` e a medição sobe. |
| Leitura da política | Confirmar prazos de guarda, e decidir se o CNPJ entra na seção 1. |
| Preço no FAQ | Se existe faixa que pode ser dita em público, vira a sexta pergunta. |
| Horário e telefone no schema (17) | Horário de funcionamento e se o telefone público é o mesmo do WhatsApp. O `openingHours` segue fora do schema até lá. |
| Form + obrigado (4) | Congelado até a decisão A/B do topo. |

O FAQ e a política pedem uma passada de `/humanizador` e `/voz-nata` antes de subir.

---

## Onda 3: precisa de material que ainda não existe

Aqui a sessão não é de código. É de produção.

- **Depoimento real (15).** Três clientes dos quatro cases já dão número. Falta a frase
  na voz deles, com nome, empresa e autorização por escrito. Um áudio de WhatsApp de 40
  segundos por cliente resolve; eu transcrevo e edito. Sem autorização, não sobe.
- **Página de case (6).** Um case por página, `/cases/gracie-barra-sg/`, com o antes, o
  que foi implantado e o depois. O padrão de artigo do guia já serve de molde, então o
  custo é de conteúdo, não de layout. Sugiro começar por Gracie Barra: é o número mais
  limpo de contar (292 para 423 em um ano).
- **Foto do time (20).** Precisa de foto sua de verdade, em resolução boa. Isso muda o
  site inteiro: hoje a Albatroz não tem rosto, e você vende consultoria de confiança.
  Entra no rodapé, numa seção de assinatura e no `og:image` de perfil.

---

## Ordem que eu recomendo

1. ~~Onda 1~~, publicada em 10/08/2026, commit `e8611eb`.
2. ~~Onda 2~~, construída em 10/08/2026, parada na sua leitura da política e no
   Measurement ID.
3. Overflow horizontal no mobile, depois de confirmado em aparelho real.
4. Decisão A/B do formulário, e o que ela puxa: obrigado e evento de conversão.
5. Depoimento e primeira página de case.
6. Foto, quando houver foto.
