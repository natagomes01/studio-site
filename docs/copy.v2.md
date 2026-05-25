# Copy do site — albatroz.studio (rewrite PT · v2)

**Como usar este arquivo**
- v2: revisão no método Eugene Schwartz, dentro da voz Natã / Albatroz (ver [studio/brand/voz.md](../../voz.md)).
- Estrutura preservada: todas as seções, rótulos e blocos da v1 continuam aqui.
- Edite o texto de cada campo diretamente nos blocos abaixo (sobrescreva).
- Mantenha os títulos `###` e os rótulos em negrito como estão. Eles guiam o port para o `.ts`.
- Marcadores `**negrito**` dentro do texto são preservados pelo site (viram `<strong>`).
- Quebra de linha visual no headline: cada bloco `headlineLine1` / `headlineLine2` vira uma linha do título.
- Quando fechar, eu releio este MD, atualizo [src/i18n/pt-br.ts](../src/i18n/pt-br.ts) e gero a versão EN espelhada para você revisar antes do port para [src/i18n/en.ts](../src/i18n/en.ts).

---

## Meta (SEO + aba do navegador)

**title** *(≈ 60 chars, aparece na aba e no Google)*
> Albatroz Studio · PAI · Inteligência viva em vendas

**description** *(≈ 155 chars, snippet do Google e compartilhamento)*
> Implantamos o PAI: Protocolo de Ativação de Inteligência em Vendas. Resposta em segundos, 24h por dia. Equipe humana multiplicada por IA.

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
> O contato chega. Ninguém responde. Em 5 minutos sem resposta, a chance de qualificar cai 80%. Quem respondeu primeiro já fechou. Implantamos o **PAI, Protocolo de Ativação de Inteligência em Vendas**, dentro da sua operação. Resposta em segundos, 24h por dia. Condução automática até o ponto de fechamento. Equipe humana multiplicada por IA. O que hoje depende da memória, da disciplina e do humor do seu time, passa a operar como sistema.

**ctaPrimary** *(botão principal — agora abre WhatsApp)*
> Quero ativar o PAI na minha empresa

**ctaSecondary** *(botão secundário — rola pra seção Protocolo)*
> Ver como funciona

**support** *(linha de apoio abaixo dos botões)*
> Para empresas que já têm demanda. Já têm equipe. E perdem vendas no silêncio entre uma mensagem e outra.

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
> A maior perda financeira de uma empresa de serviços hoje não está no anúncio. Está na operação. No silêncio entre o contato chegar e alguém responder. No cliente que esfriou enquanto o time estava ocupado. Na agenda com buracos que ninguém viu fechar.

**introTail** *(linha final do intro, geralmente em destaque)*
> Você não vê esse dinheiro saindo, porque ele nunca chegou a entrar.

### Pain items *(6 cards de problemas — cada um tem `title` + `body`)*

**Item 1 · title**
> Mensagens sem resposta.

**Item 1 · body**
> Estudo Harvard/MIT: depois de 5 minutos sem resposta, a chance de qualificar o contato cai 80%. Depois de 30, vai a zero. Quem respondeu em 1 minuto já fechou. A venda não foi perdida no preço. Foi perdida no relógio.

**Item 2 · title**
> Atendimento sem condução.

**Item 2 · body**
> O cliente pergunta valor. Recebe valor. Some. Ninguém qualificou. Ninguém conduziu. Ninguém marcou.

**Item 3 · title**
> Equipe despreparada comercialmente.

**Item 3 · body**
> Cada vendedor improvisa um script diferente. Cada um responde do jeito que acha melhor. O resultado é desigual, instável e impossível de medir.

**Item 4 · title**
> Contatos que esfriam.

**Item 4 · body**
> Só 2% das vendas saem no primeiro contato. 80% exigem cinco follow-ups. E 44% dos vendedores param no primeiro. O contato que custou caro pra chegar morre dentro do seu próprio WhatsApp.

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
> O resultado é sempre o mesmo. Faturamento instável. Crescimento travado. Ansiedade operacional. Você trabalha mais e cresce menos do que deveria.

**closingTail**
> E o pior. A maioria das empresas tenta resolver isso contratando mais gente. Só multiplica o problema. Não o elimina.

---

## Cases *(seção "02 · Empresas que ativaram o PAI")*

**eyebrow**
> 02 · Empresas que ativaram o PAI

**headlineLine1**
> Quando a operação vira sistema,

**headlineLine2**
> o crescimento aparece.

**intro**
> Cada empresa que ativa o PAI parte de um diagnóstico próprio. Setor diferente. Porte diferente. Ticket diferente. O padrão de resultado se repete: tempo de resposta que cai, conversão que sobe, time focado, dono fora do operacional.

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
> Mais de 15 mil mulheres atendidas ao longo da história da clínica. Hoje, com o PAI ativo, a operação sustenta mais de 80 atendimentos por dia no WhatsApp. Sem travar. Sem perder o tom humano da marca. No modelo manual, exigiria triplicar o time de atendimento.

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
> De 292 para 423 alunos ativos em 1 ano. Adultos e crianças. 30 a 40 atendimentos por dia no WhatsApp. 4 a 8 novos agendamentos por dia entrando na agenda. Resultado: a unidade já busca espaço maior para sustentar o crescimento.

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
> Média de R$ 3,5 milhões em vendas por mês. Sustentada pela estrutura de inteligência comercial. Qualificação técnica, condução do contato e preparação do fechamento operando como sistema. Não como improviso. Em setor de ciclo longo e técnico, o PAI organiza o que antes dependia da memória do vendedor.

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
> Mais de 680 contatos atendidos no WhatsApp em 3 meses. Qualificação automática. Casos entregues prontos para o time clínico fechar. O dono parou de ser o gargalo do agendamento.

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
> O PAI não é um software que você instala. Não é um chatbot pronto. Não é um curso de prompt. É um protocolo que entra na sua operação, aprende como sua empresa vende e ativa inteligência comercial onde antes existia improviso. Seis anos vendendo no WhatsApp e no Direct, destilados em método e transferidos para agentes de IA em contextos reais de cliente. Em cinco etapas.

### Protocol steps *(5 etapas — cada uma tem `title` + `body`)*

**Step 1 · title**
> Diagnóstico profundo da operação

**Step 1 · body**
> Mapeamos o fluxo de vendas. Identificamos onde o dinheiro vaza. Desenhamos o protocolo específico do seu negócio. Sem template genérico. Sem copiar concorrente.

**Step 2 · title**
> Treinamento da inteligência em vendas

**Step 2 · body**
> A IA é treinada com a sua linguagem. Suas objeções reais. Seus diferenciais. Seu processo comercial. Ela vende como a sua empresa vende. Não como chatbot genérico falando em nome da sua marca.

**Step 3 · title**
> Implantação no WhatsApp e canais de venda

**Step 3 · body**
> Atendimento ativo 24h. Qualificação automática. Condução do contato até o ponto de fechamento. Tudo no canal onde o cliente já está. Sem migrar ninguém para sistema novo. O sistema não dorme. Não esquece. Não tira férias.

**Step 4 · title**
> Integração com a equipe humana

**Step 4 · body**
> A IA não substitui o vendedor. Entrega o contato pronto. No momento certo. Com contexto completo. O time humano fecha, com mais tempo, mais informação e menos atrito. Decisão crítica é transferida para o humano na hora. **A máquina dá velocidade. O humano dá alma.** O vendedor para de ser atendente e volta a ser vendedor.

**Step 5 · title**
> Otimização contínua

**Step 5 · body**
> Acompanhamos o comportamento real dos contatos. Ajustamos o protocolo. Elevamos a conversão semana após semana. Implantação viva. Não entrega única.

### Fechamento da seção Protocol + CTA

**closing**
> O futuro das empresas não é mais digital. O digital já é o mínimo. O futuro é inteligente. Empresas que ativam inteligência em vendas crescem com menos esforço, lideram o mercado e libertam o dono do caos operacional. As que dependem da memória, da disciplina e do humor de pessoas seguem com faturamento instável. Por mais tráfego que comprem.

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
> Volume de contatos, time atual, principal gargalo. Poucas linhas bastam.

**submit** *(texto do botão)*
> Solicitar diagnóstico

**submitting** *(texto do botão durante o envio)*
> Enviando…

**success** *(mensagem após envio OK)*
> Recebido. Retornamos em até 1 dia útil pelo WhatsApp ou e-mail informado.

**error** *(mensagem após erro)*
> Algo deu errado no envio. Tente novamente ou escreva para nata@albatroz.studio.
