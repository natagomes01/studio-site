# Copy do site — albatroz.studio (rewrite PT)

**Como usar este arquivo**
- Edite o texto de cada campo diretamente nos blocos abaixo (sobrescreva).
- Mantenha os títulos `###` e os rótulos em negrito como estão — eles guiam o port para o `.ts`.
- Marcadores `**negrito**` dentro do texto são preservados pelo site (viram `<strong>`).
- Quebra de linha visual no headline: cada bloco `headlineLine1` / `headlineLine2` vira uma linha do título.
- Quando fechar, eu releio este MD, atualizo [src/i18n/pt-br.ts](../src/i18n/pt-br.ts) e gero a versão EN espelhada para você revisar antes do port para [src/i18n/en.ts](../src/i18n/en.ts).

---

## Meta (SEO + aba do navegador)

**title** *(≈ 60 chars, aparece na aba e no Google)*
> Albatroz Studio · PAI — Inteligência viva em vendas

**description** *(≈ 155 chars, snippet do Google e compartilhamento)*
> Implantamos o PAI, Protocolo de Ativação de Inteligência em Vendas. Atendimento 24h, condução automática do contato e equipe humana multiplicada por IA.

---

## Nav (menu topo)

**pillars** *(item 1 do menu)*
> O que fazemos

**projects** *(item 2)*
> Projetos

**contact** *(item 3 — leva pro WhatsApp)*
> Contato

---

## Banner de idioma *(aparece quando o navegador é EN)*

**detectedBanner**
> English version available

**detectedAction** *(link clicável)*
> Switch to English

**dismiss** *(aria-label do X)*
> Fechar

---

## Hero *(seção de abertura)*

**eyebrow** *(linha pequena acima do título)*
> Albatroz Studio · Inteligência em Vendas

**headlineLine1** *(linha 1 do título grande)*
> Você não está perdendo cliente por falta de marketing.

**headlineLine2** *(linha 2)*
> Está perdendo por falta de estrutura no atendimento.

**subheadline** *(parágrafo abaixo do título — pode usar `**negrito**`)*
> Implantamos o **PAI, Protocolo de Ativação de Inteligência em Vendas**, dentro da sua operação. Atendimento 24h no WhatsApp, condução automática do contato e equipe humana multiplicada por IA. O que hoje depende da sua memória, da sua disciplina e do humor do seu time, passa a operar como sistema.

**ctaPrimary** *(botão principal — agora abre WhatsApp)*
> Quero ativar o PAI na minha empresa

**ctaSecondary** *(botão secundário — rola pra seção Protocolo)*
> Ver como funciona

**support** *(linha de apoio abaixo dos botões)*
> Para empresas que já têm demanda, já têm equipe e estão perdendo vendas no silêncio entre uma mensagem e outra.

---

## ProofBar *(faixa de números/prova social abaixo do Hero)*

Quatro pares `metric` + `context`. Mantenha curto (metric = número, context = uma linha).

**Item 1 · metric**
> 80+

**Item 1 · context**
> atendimentos/dia · Estética Salomão

**Item 2 · metric**
> 423

**Item 2 · context**
> alunos ativos · Gracie Barra SG

**Item 3 · metric**
> R$ 3,5M

**Item 3 · context**
> em vendas/mês · Topografia com Você

**Item 4 · metric**
> 680

**Item 4 · context**
> atendimentos em 3 meses · Cirurgia plástica

---

## Pain *(seção "01 · O que trava sua operação hoje")*

**eyebrow**
> 01 · O que trava sua operação hoje

**headlineLine1**
> Não é falta de cliente.

**headlineLine2**
> É falta de estrutura.

**intro**
> A maior perda financeira de uma empresa de serviços hoje não está no anúncio. Está na operação. No silêncio entre o contato chegar e alguém responder. No cliente que esfriou enquanto sua equipe estava ocupada. Na agenda com buracos que ninguém percebeu fechar.

**introTail** *(linha final do intro, geralmente em destaque)*
> Você não vê esse dinheiro saindo, porque ele nunca chegou a entrar.

### Pain items *(6 cards de problemas — cada um tem `title` + `body`)*

**Item 1 · title**
> Mensagens sem resposta.

**Item 1 · body**
> O contato chega, o time está ocupado, o concorrente responde primeiro. A venda não foi perdida no preço. Foi perdida no tempo.

**Item 2 · title**
> Atendimento sem condução.

**Item 2 · body**
> O cliente pergunta valor, recebe valor e some. Ninguém qualificou, ninguém conduziu, ninguém marcou.

**Item 3 · title**
> Equipe despreparada comercialmente.

**Item 3 · body**
> Cada vendedor improvisa um script diferente. Cada um responde do jeito que acha melhor. O resultado é desigual, instável e impossível de medir.

**Item 4 · title**
> Contatos que esfriam.

**Item 4 · body**
> Ninguém faz follow-up porque ninguém tem tempo. O contato que custou caro para chegar morre dentro do seu próprio WhatsApp.

**Item 5 · title**
> Agenda com buracos invisíveis.

**Item 5 · body**
> Horários vagos que poderiam estar vendendo. Você só percebe no final do mês, no faturamento que não veio.

**Item 6 · title**
> Dono sobrecarregado.

**Item 6 · body**
> Você virou o gargalo da própria empresa. Tudo passa por você porque ninguém mais sabe conduzir do jeito certo.

### Fechamento da seção Pain

**closing**
> O resultado é sempre o mesmo: faturamento instável, crescimento travado, ansiedade operacional. Você trabalha mais e cresce menos do que deveria.

**closingTail**
> E o pior: a maioria das empresas tenta resolver isso contratando mais gente. O que só multiplica o problema, em vez de eliminá-lo.

---

## Cases *(seção "02 · Empresas que ativaram o PAI")*

**eyebrow**
> 02 · Empresas que ativaram o PAI

**headlineLine1**
> Quando a operação vira sistema,

**headlineLine2**
> o crescimento aparece.

**intro**
> Cada empresa que ativa o PAI parte de um diagnóstico próprio. Setores diferentes, portes diferentes, ticket diferente. Mas o padrão de resultado se repete: tempo de resposta que cai, conversão que sobe, time mais focado, dono fora do operacional.

### Cases items *(4 cards de caso — cada um tem `name`, `segment`, dois `stats` e `body`. `accent` é cor visual e fica como está, não precisa editar)*

**Case 1 · name**
> Estética Salomão

**Case 1 · segment**
> Clínica de estética

**Case 1 · stat 1 — value**
> 80+

**Case 1 · stat 1 — label**
> atendimentos/dia no WhatsApp

**Case 1 · stat 2 — value**
> 15K+

**Case 1 · stat 2 — label**
> mulheres atendidas no histórico

**Case 1 · body**
> Uma referência de porte: mais de 15 mil mulheres já atendidas pela clínica ao longo de sua história. Hoje, com o PAI ativo, a operação sustenta mais de 80 atendimentos por dia no WhatsApp sem travar e sem perder o tom humano da marca. Volume que, no modelo manual, exigiria triplicar o time de atendimento.

---

**Case 2 · name**
> Gracie Barra São Gonçalo

**Case 2 · segment**
> Academia de jiu-jitsu

**Case 2 · stat 1 — value**
> 292 → 423

**Case 2 · stat 1 — label**
> alunos ativos em 1 ano

**Case 2 · stat 2 — value**
> 4–8

**Case 2 · stat 2 — label**
> novos agendamentos por dia

**Case 2 · body**
> De 292 para 423 alunos ativos em 1 ano, entre adultos e crianças. 30 a 40 atendimentos por dia no WhatsApp, 4 a 8 novos agendamentos por dia entrando na agenda. Resultado: a unidade já está buscando espaço maior para comportar o crescimento.

---

**Case 3 · name**
> Topografia com Você

**Case 3 · segment**
> Equipamentos de engenharia topográfica

**Case 3 · stat 1 — value**
> R$ 3,5M

**Case 3 · stat 1 — label**
> em vendas/mês (média)

**Case 3 · stat 2 — value**
> B2B

**Case 3 · stat 2 — label**
> ciclo longo e técnico

**Case 3 · body**
> Média de R$ 3,5 milhões em vendas por mês, sustentada pela estrutura de inteligência comercial. Qualificação técnica, condução do contato e preparação do fechamento operando como sistema, não como improviso. Em um setor onde o ciclo de venda é longo e técnico, o PAI organiza o que antes dependia da memória do vendedor.

---

**Case 4 · name**
> Clínica de cirurgia plástica

**Case 4 · segment**
> Saúde e estética avançada

**Case 4 · stat 1 — value**
> 680+

**Case 4 · stat 1 — label**
> atendimentos em 3 meses

**Case 4 · stat 2 — value**
> 0

**Case 4 · stat 2 — label**
> gargalo no agendamento

**Case 4 · body**
> Mais de 680 contatos atendidos no WhatsApp em apenas 3 meses, com qualificação automática e entrega dos casos prontos para o time clínico fechar. O dono parou de ser o gargalo do agendamento.

### Bloco "padrão por trás dos números" + CTA da seção Cases

**pattern · title**
> O padrão por trás dos números

**pattern · body**
> Em todos os casos, o ponto de virada não foi mais tráfego, mais anúncio ou mais vendedor. Foi a estrutura por trás do atendimento.

**cta** *(botão final da seção, abre WhatsApp)*
> Quero um diagnóstico para a minha empresa

---

## Protocol *(seção "03 · Como o PAI é aplicado")*

**eyebrow**
> 03 · Como o PAI é aplicado na sua empresa

**headlineLine1**
> Não é uma ferramenta.

**headlineLine2**
> É uma implantação.

**intro**
> O PAI não é um software que você instala. Não é um chatbot pronto. Não é um curso de prompt. É um protocolo que entra na sua operação, aprende como sua empresa vende e ativa inteligência comercial onde antes existia improviso. Construído ao longo de seis anos vendendo no WhatsApp e no Direct, depois transferido para agentes de IA aplicados em contextos reais de cliente. Em cinco etapas:

### Protocol steps *(5 etapas — cada uma tem `title` + `body`)*

**Step 1 · title**
> Diagnóstico profundo da operação

**Step 1 · body**
> Mapeamos o fluxo de vendas, identificamos onde o dinheiro está vazando e desenhamos o protocolo específico para o seu negócio. Sem template genérico, sem copiar do concorrente.

**Step 2 · title**
> Treinamento da inteligência em vendas

**Step 2 · body**
> A IA é treinada com a sua linguagem, suas objeções reais, seus diferenciais e seu processo comercial. Ela vende como a sua empresa vende. Não como um chatbot qualquer falando em nome da sua marca.

**Step 3 · title**
> Implantação no WhatsApp e canais de venda

**Step 3 · body**
> Atendimento ativo 24h, qualificação automática, condução do contato até o ponto de fechamento. Tudo integrado ao canal onde o cliente já está, sem migrar ninguém para sistema novo.

**Step 4 · title**
> Integração com a equipe humana

**Step 4 · body**
> A IA não substitui o vendedor. Ela entrega o contato pronto, no momento certo, com o contexto completo. O time humano fecha, com mais tempo, mais informação e menos atrito. O vendedor para de ser atendente e volta a ser vendedor.

**Step 5 · title**
> Otimização contínua

**Step 5 · body**
> Acompanhamos o comportamento real dos contatos, ajustamos o protocolo e elevamos a conversão semana após semana. Implantação viva, não entrega única.

### Fechamento da seção Protocol + CTA

**closing**
> O futuro das empresas não é mais digital. O digital já é o mínimo. O futuro é inteligente. Empresas que ativam inteligência em vendas crescem com menos esforço, lideram seus mercados e libertam o dono do caos operacional. As que continuam dependendo da memória, da disciplina e do humor de pessoas vão continuar com faturamento instável, por mais tráfego que comprem.

**closingTail**
> A pergunta não é se sua empresa vai precisar disso. É quanto você ainda vai pagar para descobrir que precisava.

**cta** *(botão final — abre WhatsApp)*
> Ative o PAI na sua empresa

---

## Footer

**contactCta** *(botão grande do rodapé — abre WhatsApp)*
> Entre em contato

### Endereço *(três linhas)*

**address · line1**
> Avenida Gisele Constantino, 164, Sala 7A

**address · line2**
> Parque Bela Vista — Votorantim, SP

**address · line3**
> CEP 18110-650

**socialLabel** *(rótulo acima das redes)*
> Redes

**legal**
> © Albatroz Studio. Todos os direitos reservados.

---

## Form *(formulário — atualmente OCULTO no site; reativará para versão USA)*

Pode reescrever agora ou deixar para depois — o componente continua no repo.

**title**
> Diagnóstico para sua empresa

**nameLabel**
> Nome

**namePlaceholder**
> Como você prefere ser chamado

**companyLabel**
> Empresa

**companyPlaceholder**
> Nome da sua empresa

**emailLabel**
> E-mail

**emailPlaceholder**
> seu@email.com

**whatsappLabel**
> WhatsApp

**whatsappPlaceholder**
> (00) 00000-0000

**contextLabel**
> Onde sua operação está travando hoje?

**contextPlaceholder**
> Conte em poucas linhas: volume de contatos, time atual, principal gargalo.

**submit** *(texto do botão)*
> Solicitar diagnóstico

**submitting** *(texto do botão durante o envio)*
> Enviando…

**success** *(mensagem após envio OK)*
> Recebido. Vamos voltar em até 1 dia útil pelo WhatsApp ou e-mail informado.

**error** *(mensagem após erro)*
> Algo deu errado no envio. Tente novamente ou escreva para nata@albatroz.studio.
