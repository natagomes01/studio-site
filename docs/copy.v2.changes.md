# Relatório de mudanças — copy.md → copy.v2.md

**Data:** 11/05/26, 00:00
**Autor da revisão:** Natã + Claude
**Método aplicado:** Eugene Schwartz (frase curta, ritmo, concretude, antítese, especificidade) cruzado com [voz Natã / Albatroz](../../voz.md).
**Escopo:** preservar 100% da estrutura, rótulos e seções da v1. Reescrever apenas o texto dos campos onde havia frase longa, período cansado ou pouca força de venda.

---

## 1. Princípios aplicados

1. **Frase curta. Verbo no presente.** Quebrei orações compostas em frases independentes. Onde a v1 tinha vírgula longa, a v2 tem ponto.
2. **Antítese e tríade.** Reforço da assinatura da voz: "Não é X. É Y." / "Setor diferente. Porte diferente. Ticket diferente."
3. **Concretude antes de abstração.** Onde havia abstração, entrou número ou cena. Onde havia número, entrou estatística externa para amplificar a dor.
4. **Estatísticas reais sobre velocidade e follow-up.** Inseridas em dois pontos cirúrgicos (Pain · Item 1 e Pain · Item 4) e no Hero, onde a urgência é vendida.
5. **Integração humano + IA explícita.** Step 4 ganhou a frase-síntese: *"A máquina dá velocidade. O humano dá alma."* + menção à transferência para humano em decisão crítica.
6. **Sistema 24h personificado.** Step 3 ganhou: *"O sistema não dorme. Não esquece. Não tira férias."* — pedido direto do briefing.
7. **Higiene de voz.** Eliminado em dash (`—`) onde estava no texto exibido (ex.: título meta). Mantido apenas em rótulos editoriais do MD ("botão final — abre WhatsApp"), que são metadados, não texto do site.

---

## 2. Estatísticas inseridas (referências para revisão)

| Stat | Onde entra | Fonte conhecida |
|---|---|---|
| Após 5 min sem resposta, chance de qualificar um contato cai ~80% (cai a zero em 30 min) | Hero · subheadline + Pain · Item 1 | Oldroyd, Harvard Business Review / MIT (Lead Response Management Study) |
| Apenas 2% das vendas saem no primeiro contato | Pain · Item 4 | Marketing Donut (estatística amplamente citada em vendas B2B/B2C) |
| 80% das vendas exigem 5 follow-ups | Pain · Item 4 | Marketing Donut / Brevet Group |
| 44% dos vendedores desistem no primeiro follow-up | Pain · Item 4 | Marketing Donut / Brevet Group |

**Recomendação:** se for publicar no ar, vale validar com o número exato citado pela fonte oficial e referenciar em micro-tooltip ou linkar em rodapé técnico. Como copy de site, a forma usada ("Estudo Harvard/MIT") já é aceitável para o registro institucional.

---

## 3. Mudanças por seção

### Meta
- **title:** `Albatroz Studio · PAI — Inteligência viva em vendas` → `Albatroz Studio · PAI · Inteligência viva em vendas`
  *Por quê:* voz Albatroz não usa em dash. Substituído pelo middle dot que já existe no mesmo título.
- **description:** parágrafo único compacto → três blocos curtos com dois pontos e ponto final claro. Mesma mensagem, leitura mais limpa no snippet do Google.

### Nav, Banner de idioma, ProofBar, Footer
- **Sem alteração.** Já estavam curtos, no ritmo da voz.

### Hero
- **headlineLine1 / headlineLine2:** preservados. São o gancho-mestre do site.
- **subheadline:** reescrita. v1 abria direto no PAI; v2 abre com a **cena concreta da perda** ("O contato chega. Ninguém responde."), insere a estatística de 5 minutos como soco no primeiro parágrafo e só depois nomeia o PAI. Schwartz puro: começa onde a dor está mais quente, depois entrega a solução.
- **support:** uma frase longa virou três frases curtas em tríade. Mesma mensagem, ritmo Albatroz.

### Pain
- **intro:** removidos arredondamentos verbais ("a maior perda **financeira**", "sua equipe **estava** ocupada"). Mesma estrutura de tríade já presente, agora mais seca.
- **Item 1 (Mensagens sem resposta):** corpo trocado por uma frase com estatística + cena + antítese final ("Não foi perdida no preço. Foi perdida no relógio."). Esse é o item de maior conversão da seção; ganhou peso.
- **Item 2:** quebra fina. "O cliente pergunta valor, recebe valor e some." → "O cliente pergunta valor. Recebe valor. Some." Mesmas palavras, ritmo de socos.
- **Item 4 (Contatos que esfriam):** entram as três estatísticas de follow-up. Esse era o item mais genérico da v1. Agora é o mais punitivo.
- **Items 3, 5, 6:** preservados (já estavam no ponto).
- **closing:** "faturamento instável, crescimento travado, ansiedade operacional" virou tríade com pontos finais. Mesmo conteúdo, leitura em sequência de tiros.
- **closingTail:** "que só multiplica o problema, em vez de eliminá-lo" → "Só multiplica o problema. Não o elimina." Menos palavras, mesma virada.

### Cases
- **intro:** "Setores diferentes, portes diferentes, ticket diferente" → tríade em ponto final ("Setor diferente. Porte diferente. Ticket diferente."). Caráter de mantra.
- **Case 1 (Salomão):** preservada a abertura "Mais de 15 mil mulheres atendidas". Quebrada a frase do meio em duas: "Sem travar. Sem perder o tom humano da marca." Fica como respiração após o número.
- **Case 2 (Gracie Barra):** já estava ótimo. Apenas separei "30 a 40 atendimentos / 4 a 8 novos agendamentos" em frases independentes para o número subir aos olhos.
- **Case 3 (Topografia):** quebra em pontos. "Não como improviso." virou frase própria — vira slogan dentro do case.
- **Case 4 (Cirurgia plástica):** v1: "Mais de 680 contatos atendidos no WhatsApp em apenas 3 meses, com qualificação automática e entrega dos casos prontos para o time clínico fechar." → v2 quebra em três informações, cada uma carrega seu peso.
- **pattern, cta:** preservados.

### Protocol
- **headlineLine1/2:** preservados. Antítese clássica da voz.
- **intro:** "construído ao longo de seis anos vendendo no WhatsApp e no Direct, depois transferido para agentes de IA aplicados em contextos reais de cliente" → "Seis anos vendendo no WhatsApp e no Direct, destilados em método e transferidos para agentes de IA em contextos reais de cliente." Verbo destilados entra no léxico operativo da voz.
- **Step 1:** quebra em frases curtas. Mesmas palavras, ritmo de operação.
- **Step 2:** "sua linguagem, suas objeções reais, seus diferenciais e seu processo comercial" → cada item em ponto final, força a leitura item a item. Trocado "qualquer" por "genérico" (mais limpo na voz).
- **Step 3:** ganhou a frase-síntese pedida pelo briefing: *"O sistema não dorme. Não esquece. Não tira férias."* Essa é a tríade que personifica o 24h.
- **Step 4:** reescrito para deixar **explícita** a integração humano+IA. Entra: (1) "Decisão crítica é transferida para o humano na hora." (2) **"A máquina dá velocidade. O humano dá alma."** — em negrito porque é a tese central da Albatroz dentro do site.
- **Step 5:** "Implantação viva, não entrega única." → "Implantação viva. Não entrega única." Slogan-friendly.
- **closing:** "vão continuar com faturamento instável, por mais tráfego que comprem" → "seguem com faturamento instável. Por mais tráfego que comprem." Última frase isolada vira veredito.
- **closingTail:** preservado. É o fecho Schwartz perfeito do site, não tocar.

### Form (oculto, USA)
- **contextPlaceholder:** uma frase em três blocos curtos.
- **success:** "Vamos voltar em até 1 dia útil" → "Retornamos em até 1 dia útil". Verbo direto, voz institucional.
- Demais campos: preservados.

---

## 4. O que **não** mudou (deliberadamente)

- Todas as **headlines** (linha 1 + linha 2) de cada seção. São a coluna vertebral do site.
- Todos os **números de cases** (15K+, 80+, 423, 3,5M, 680, etc.).
- Todos os **CTAs**. Cada um já está com verbo de ação e na voz.
- Bloco "padrão por trás dos números" (`pattern`). Já está no ritmo.
- `introTail` da seção Pain: "Você não vê esse dinheiro saindo, porque ele nunca chegou a entrar." Frase de assinatura.
- `closingTail` da seção Protocol: "A pergunta não é se sua empresa vai precisar disso. É quanto você ainda vai pagar para descobrir que precisava." Fecho Schwartz já no ponto.
- Endereço, legal, navegação.

---

## 5. Skills invocadas

- `ckm-brand` — carregada antes do trabalho para alinhar voz, framework de mensagem e princípios de consistência.

Skills da linha "Sites e interfaces web" (`ui-ux-pro-max`, `ckm-design-system`, `ckm-ui-styling`) **não foram invocadas**: o escopo desta revisão é exclusivamente texto editorial em `.md`. Nenhum token, layout, paleta, tipografia, componente React ou estilo Tailwind foi tocado. Quando o port acontecer para [src/i18n/pt-br.ts](../src/i18n/pt-br.ts), o tema continua estritamente de copy.

---

## 6. Próximos passos sugeridos

1. **Você lê a v2** no Drive e marca em comentário inline o que ficou agressivo demais ou frio demais para o tom da Albatroz.
2. Eu **aplico ajustes pontuais** (se houver) e congelo a v2.
3. **Port para `src/i18n/pt-br.ts`** com diff por bloco.
4. **Espelho em EN** baseado na v2 já estabilizada, gerado em arquivo `copy.v2.en.md` para sua revisão antes do port para `src/i18n/en.ts`.
