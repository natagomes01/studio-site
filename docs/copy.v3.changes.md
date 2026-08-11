# Relatório de mudanças de copy, v3

**Data:** 11 de agosto de 2026
**Estado:** aplicado no site em 11/08/2026, com as decisões do Natã da seção 7.
**Arquivos tocados:** `src/i18n/pt-br.ts`, `src/i18n/en.ts`, `src/styles/site.css`,
`public/og-default.png`, `public/og-default-en.png`, `docs/og-template.html` (novo).

Pedido: revisão completa de copy pelas estratégias de Eugene Schwartz, com a dor movida
para a terceira pessoa, apoio ao leitor pela fórmula de Blair Warren, e encaixe de estilo
pela `/humanizador` e pela `/humanizador-estrutural`.

O corpo deste documento é a proposta como ela foi lida e aprovada. O que mudou entre a
proposta e o que foi ao ar está na seção 9, no fim.

---

## 1. A regra de pessoa, que é o coração desta revisão

A instrução foi tirar a culpa do leitor. Aplicada crua, ela apaga toda a segunda pessoa e o
site vira relatório de consultoria. Então ela virou regra de duas mãos:


| Registro                     | Pessoa   | Exemplo                                                                |
| ---------------------------- | -------- | ---------------------------------------------------------------------- |
| Dor, falha, perda            | terceira | "Empresas de serviço perdem mais cliente no WhatsApp do que no preço." |
| Solução, capacidade, decisão | segunda  | "Ative o PAI na sua empresa."                                          |


A dor vira cena de outro negócio, e o leitor se reconhece sozinho. A capacidade continua
sendo dele. Quem julga na página é o mercado, nunca a Albatroz.

**A segunda pessoa que fica.** Nem toda frase com "você" acusa. A linha
`pain.introTail`, "Você não vê esse dinheiro saindo, porque ele nunca chegou a entrar",
usa a segunda pessoa para **inocentar** o leitor: ele não corrigiu porque não tinha como
enxergar. É o "justify their failures" de Blair Warren em uma frase. Fica intacta.

O corte é pelo que a frase faz, e nunca pelo pronome que ela usa.

---



## 2. Diagnóstico Schwartz antes de tocar em qualquer linha

**Nível de consciência do mercado: 2, consciente do problema.** O dono sabe que perde
contato no WhatsApp. Ele já sente o gargalo. Não sabe que existe categoria de solução com
nome, protocolo e etapa. Headline que explica benefício de produto passa por cima dele;
headline que nomeia o problema com precisão maior do que ele mesmo consegue nomear, prende.
É a "verbalização" de Schwartz: pôr em palavras o que o leitor sente e não sabe formular.

**Estágio de sofisticação: 4.** O mercado brasileiro está saturado de "IA que vende no
WhatsApp" e de chatbot. Alegação simples ("respondemos 24h") já não move ninguém. No
estágio 4, Schwartz manda **elaborar o mecanismo**. É exatamente o ativo que o site já tem
e subusa: o PAI, com cinco etapas e seis anos de origem declarada. A seção 03 é o argumento
mais forte da página e hoje aparece depois de duas seções.

Três consequências práticas, e todas aparecem nas mudanças abaixo:

1. A headline passa a nomear o problema com precisão, no lugar de acusar o leitor.
2. Onde havia abstração, entra cena com hora, número ou nome. Schwartz chama de
  concretização, e é o que separa "o time está ocupado" de "o concorrente respondeu às 21h04".
3. O mecanismo ganha peso. "Onde antes existia improviso" vira "onde o resultado dependia
  de quem estava de plantão", que descreve a máquina em vez de julgar o operador.

**Blair Warren, os cinco movimentos, e onde cada um entra.** A frase é: as pessoas fazem
qualquer coisa por quem encoraja seus sonhos, justifica suas falhas, acalma seus medos,
confirma suas suspeitas e ajuda a jogar pedra no inimigo comum.


| Movimento           | Onde ele mora na página nova                                      |
| ------------------- | ----------------------------------------------------------------- |
| Justifica a falha   | Item 6 da dor, o dono como último filtro de qualidade da operação |
| Confirma a suspeita | Headline: o dono já desconfia que o problema não é falta de lead  |
| Acalma o medo       | FAQ 2, a IA não substitui o time. Já está escrito, fica como está |
| Encoraja o sonho    | Seção 02, dono fora do operacional                                |
| Pedra no inimigo    | Fecho da dor, o reflexo de contratar mais gente                   |


O inimigo nomeado é a operação manual e o reflexo de resolver com folha de pagamento.
Nunca o leitor, nunca a equipe dele.

---



## 3. Laudo da `/humanizador`, camada 1

Scanner determinístico sobre `src/i18n/pt-br.ts`: **0 erros, 1 aviso**. O aviso é o
`futuro-subjuntivo` na linha 183, e o teste da habitualidade confirma o presente do
indicativo ali. A superfície já tinha sido limpa na passada de 11/08.

Sobrou uma coisa só, e ela é de copy: `protocol.closing` **abre com "O digital já é o
mínimo. O futuro é inteligente."** A segunda frase é fecho positivo
genérico, do tipo que a camada 0 já barra. Não diz o que a coisa faz. Sai, e no lugar entra
o que empresas com inteligência em vendas literalmente fazem: respondem em segundos, medem
etapa, tiram o dono da fila.

No inglês há travessão em cinco pontos (`en.ts`, linhas 44, 90, 100, 146, 150). A regra de
casa vale para o português, então isso não é erro. Fica como decisão sua no item 7.

---



## 4. Laudo da `/humanizador-estrutural`, camada 2

**Gênero:** página de venda. Não está na tabela de calibragem, e foi calibrada como
carrossel longo: rodam as auditorias 1, 4 e 6, a 3 entra como opcional, e as auditorias 2
(digressão) e 5 (interpelação) ficam fora, porque a página já interpela o leitor por
natureza, como a carta.

**Abstenção por bloco, declarada antes do julgamento.** Ficaram fora do laudo, por não
terem esqueleto narrativo: `proofBar`, os campos `stats` dos quatro cases, `footer.address`,
`footer.legal`, `nav`, `langSwitch`, `consent` e todos os rótulos de `form`.

### Esqueleto extraído

Cinco seções numeradas, todas no mesmo molde: sobrancelha com número, headline em duas
linhas, intro, lista, fecho. Estrutura temporal linear. Zero tangentes. Emoção sempre
nomeada, nunca encenada no corpo. Referências fortes: quatro clientes, oito números, um
nome de segmento por case.

### Auditoria 1, tese enunciada: zona da IA por repetição

A tese "falta estrutura no atendimento" é dita em voz alta **cinco vezes**: `hero.headline`,
`pain.headline`, `pain.closing`, `cases.pattern.body` e `protocol.closing`. Em página de
venda, enunciar a tese é a função do texto, então o alvo é a repetição e a redundância.

A redundância mais clara é `cases.pattern.body`: "Em todos os casos, o ponto de virada foi a
estrutura por trás do atendimento." Ela diz em voz alta o que os quatro cases logo acima
acabaram de provar com número. Vira frase que **acrescenta** informação, no item 5.10.

### Auditoria 4, referência: falso concreto no meio de prova boa

Os oito números da página são todos de **volume**: atendimentos por dia, alunos ativos,
faturamento, contatos em três meses. A `cases.intro` promete outra coisa: "tempo de
resposta que cai, conversão que sobe". A página promete duas métricas e não mostra número
de nenhuma das duas.

Isso não se conserta com escrita, e já está aberto no roadmap. Um par antes e depois de
tempo de resposta, com período declarado, é o dado que falta para a headline nova sustentar
o que ela afirma. Fica no item 7.

### Auditoria 6, convergência de forma: zona da IA

Duas convergências dentro da mesma peça.

A primeira, as cinco seções no molde idêntico. A passada de 11/08 já quebrou parte disso
nas headlines. As mudanças abaixo terminam o serviço na seção 01, que passa a abrir com
duas frases de três e quatro palavras.

A segunda, e mais forte: **a tríade como cacoete de ritmo**. Ela aparece em
`hero.subheadline` ("memória, disciplina e humor"), `pain.intro` ("No silêncio... No
cliente... Na agenda"), `pain.items[1]` ("Ninguém qualificou, ninguém conduziu, ninguém
marcou"), `cases.intro` ("Setores diferentes, portes diferentes, ticket diferente") e
`protocol.closing` (a mesma "memória, disciplina e humor" de novo). Cinco tríades, e uma
delas repetida com as mesmas palavras.

Move aplicado: caem duas. A do `hero.subheadline` vira cena concreta, e a do
`protocol.closing` some junto com a frase que a carregava. As de `pain.items[1]` e `cases.intro`
ficam, porque ali a tríade é escolha de ritmo com conteúdo real em cada item.

### Auditoria 3, emoção: passa

"Dono sobrecarregado", "caos operacional". Sentimento nomeado, sem peito apertando nem
silêncio tomando conta da sala. Nada a fazer.

---



## 5. Mudanças, bloco a bloco



### 5.1 `meta.description`

**Hoje:** "Implantamos o PAI, Protocolo de Ativação de Inteligência em Vendas. Atendimento
24h, condução automática do contato e equipe humana multiplicada por IA."

**Proposta:** "Empresas de serviço perdem venda entre a mensagem chegar e alguém responder.
O PAI põe atendimento 24h no WhatsApp, condução do contato e IA junto do time."

Motivo: o snippet do Google hoje abre em mecanismo, para um mercado de consciência 2 que
ainda não sabe que o mecanismo existe. Abrindo na perda, o clique vem de quem sente a dor.
158 caracteres, dentro do limite.

`meta.title` fica.

### 5.2 `hero.headlineLine1` e `headlineLine2`, a decisão mais importante da revisão

**Hoje:** "Você está perdendo cliente / por falta de estrutura no atendimento."

Duas coisas de uma vez: acusa o leitor e diz a causa antes de ele aceitar o efeito. Três
opções, todas em terceira pessoa.

**Opção A, recomendada**

> Empresas de serviço perdem mais cliente
> no WhatsApp do que no preço.

Confirma a suspeita mais comum do dono de serviço, que é achar que perde por preço. Nomeia
o canal, que é concreto e verificável. Terceira pessoa limpa.

**Opção B**

> Donos de negócio já desconfiam
> que o gargalo não está no marketing.

Blair Warren puro, o movimento "confirma a suspeita". Mais macia, e serve melhor a quem já
comprou tráfego e não viu retorno. Menos concreta que a A.

**Opção C**

> Empresas com demanda e equipe
> perdem venda no silêncio entre uma mensagem e outra.

Qualifica o público na própria headline, e reaproveita a figura do "silêncio" que o site já
usa no `hero.support`. Linha 2 longa demais para o tamanho de fonte atual do hero, então
pede teste visual antes.

### 5.3 `hero.subheadline`

**Hoje:** "...O que hoje depende da memória, da disciplina e do humor do time passa a
operar como sistema."

**Proposta:** "...Na operação manual, quem responde primeiro é quem estiver livre. Com o
PAI, quem responde é o sistema, em segundos, a qualquer hora."

Dois problemas de uma vez. A frase de hoje diz que o time do leitor é indisciplinado e
mal-humorado, o que é julgamento sobre gente que ele contratou. E é a primeira das duas
aparições da mesma tríade. A proposta descreve o mecanismo da operação manual sem adjetivar
ninguém, e é mais concreta.

O bloco do PAI e o resto da subheadline ficam.

### 5.4 `hero.support`

Fica como está. Já é terceira pessoa, já qualifica o público, já é a frase mais Schwartz do
hero.

### 5.5 `pain.eyebrow` e `pain.headline`


| Campo           | Hoje                               | Proposta                   |
| --------------- | ---------------------------------- | -------------------------- |
| `eyebrow`       | 01 · O que trava sua operação hoje | 01 · Onde a venda se perde |
| `headlineLine1` | Você tem cliente.                  | A demanda chega.           |
| `headlineLine2` | Falta estrutura.                   | A estrutura não segura.    |


"Você tem cliente. Falta estrutura." é diagnóstico entregue na cara do leitor antes de ele
pedir. A versão nova descreve o mesmo fato sem apontar o dedo, e abre a seção com duas
frases de três palavras, que é o move da auditoria 6.

### 5.6 `pain.intro`

Uma palavra muda. "No cliente que esfriou enquanto **sua equipe** estava ocupada" vira "No
cliente que esfriou enquanto **a equipe atendia outro**".

O possessivo transformava a cena geral em acusação particular. E "atendia outro" é mais
exato que "estava ocupada": a equipe não estava parada, estava trabalhando.

### 5.7 `pain.introTail`

Fica intacta. Ver a seção 1.

### 5.8 `pain.items`, os seis

**Item 1, mensagens sem resposta**

Hoje: "O contato chega, o time está ocupado, o concorrente responde primeiro. A venda foi
perdida no tempo."

Proposta: "O contato chega numa terça às 21h. O time responde na quarta de manhã. O
concorrente respondeu às 21h04. A venda se perdeu no relógio."

É o item de maior conversão da seção e o mais abstrato de todos. Com hora na frase, o
leitor não lê um conceito, ele lê a própria terça-feira. Concretização de Schwartz. E "foi
perdida" vira "se perdeu", passiva sintética no lugar da analítica.

**Item 2, atendimento sem condução**

Fica inteiro. Nenhuma acusação, ritmo já no ponto, e a tríade ali carrega uma etapa real do
funil em cada item.

**Item 3, o script de cada um**


|                 |                                     |
| --------------- | ----------------------------------- |
| Título hoje     | Equipe despreparada comercialmente. |
| Título proposto | Cada vendedor com o próprio script. |


Corpo hoje: "Cada vendedor improvisa um script diferente. Cada um responde do jeito que
acha melhor. O resultado é desigual, instável e impossível de medir."

Corpo proposto: "Um responde rápido e sem contexto. Outro responde bem e três horas depois.
O resultado muda conforme quem estava de plantão, e não existe padrão para medir."

"Equipe despreparada" é julgamento sobre as pessoas que o leitor contratou e treinou, o que
o acusa por tabela. A versão nova mostra a mesma falha em cena, e a culpa fica na ausência
de padrão, que é o que o PAI vende.

**Item 4, contatos que esfriam**

"morre dentro do **seu próprio** WhatsApp" vira "morre dentro do WhatsApp **da própria
empresa**". Uma troca, mesma força.

**Item 5, agenda com buracos**

"**Você só percebe** no final do mês, no faturamento que não veio" vira "**O buraco só
aparece** no fechamento do mês, no faturamento que não veio."

"Você só percebe" é a acusação de desatenção. Com o sujeito no buraco, o defeito volta a
ser da operação, que é onde ele está.

**Item 6, o dono. A mudança de maior alavancagem do site.**


|                 |                                |
| --------------- | ------------------------------ |
| Título hoje     | Dono sobrecarregado.           |
| Título proposto | Dono no meio de toda conversa. |


Corpo hoje: "Você virou o gargalo da própria empresa. Tudo passa por você porque ninguém
mais sabe conduzir do jeito certo."

Corpo proposto: "O dono vira o último filtro de qualidade da operação. Não por vaidade:
porque é ele quem aprendeu a conduzir a conversa até o fechamento, e esse conhecimento
nunca saiu da cabeça dele."

"Você virou o gargalo da própria empresa" é a linha mais dura do site, dita para a única
pessoa que assina contrato. A proposta faz três coisas ao mesmo tempo: move a dor para a
terceira pessoa, **justifica a falha** pelo movimento de Blair Warren (ele está no meio
porque é o melhor vendedor da casa, o que é verdade), e aponta para o mecanismo do PAI,
porque tirar o conhecimento da cabeça do dono e pôr no sistema é literalmente a etapa 2 do
protocolo.

### 5.9 `pain.closing` e `closingTail`


| Campo         | Hoje                                                                                                         | Proposta                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| `closing`     | Você trabalha mais e cresce menos do que deveria.                                                            | Essas empresas trabalham mais e crescem menos do que o mercado delas permite.                      |
| `closingTail` | E o pior: a maioria das empresas tenta resolver isso contratando mais gente. O que só multiplica o problema. | E a saída mais comum é contratar mais gente. O que multiplica a folha antes de resolver o gargalo. |


"do que deveria" traz um dever que o leitor não cumpriu. "do que o mercado delas permite"
põe o teto onde ele está de fato, fora da pessoa.

No `closingTail`, "E o pior" é comentário do narrador julgando a plateia. Sai. E "multiplica
o problema" fica vago; "multiplica a folha antes de resolver o gargalo" nomeia a conta e é a
pedra no inimigo comum.

### 5.10 `cases.pattern.body`

**Hoje:** "Em todos os casos, o ponto de virada foi a estrutura por trás do atendimento."

**Proposta:** "Em todos os casos, o número mudou antes de o time crescer."

Auditoria 1, redundância. A frase de hoje repete a tese que os quatro cases acabaram de
provar. A proposta acrescenta um fato que os cases mostram e ninguém enunciou, e é o
argumento comercial mais forte da seção: cresceu resultado sem crescer custo.

`cases.eyebrow`, `headline`, `intro`, os quatro corpos de case e o `cta` ficam como estão.
Todos já em terceira pessoa, todos com número.

### 5.11 `protocol.intro`

"...ativa inteligência comercial onde antes existia **improviso**" vira "...onde o resultado
**dependia de quem estava de plantão**".

"Improviso" é o veredito da Albatroz sobre a operação do leitor. A troca descreve o mesmo
fato como propriedade do sistema, e serve melhor ao estágio 4 de sofisticação, porque fala
de mecanismo.

Os cinco passos ficam inteiros. Nenhum acusa, e o passo 4 já faz o contrário: "o vendedor
para de ser atendente e volta a ser vendedor" valoriza o time do leitor.

### 5.12 `protocol.closing`

**Hoje:** "O digital já é o mínimo. O futuro é inteligente. Empresas que ativam inteligência
em vendas crescem com menos esforço, lideram o mercado e libertam o dono do caos
operacional. As que continuam dependendo da memória, da disciplina e do humor de pessoas vão
continuar com faturamento instável, por mais tráfego que comprem."

**Proposta:** "O digital já é o mínimo. Empresas que ativam inteligência em vendas respondem
em segundos, medem cada etapa do funil e tiram o dono da fila de atendimento. As que seguem
no modelo manual seguem com faturamento instável, por mais tráfego que comprem."

Três consertos numa passada. "O futuro é inteligente" é fecho positivo genérico e sai.
"Crescem com menos esforço, lideram o mercado" é vago e vira o que a empresa literalmente
faz. E a segunda aparição de "memória, disciplina e humor" some, o que fecha a convergência
da auditoria 6.

A última frase fica com "por mais tráfego que comprem", que é a pedra na agência.

### 5.13 `protocol.closingTail`, decisão sua

**Hoje:** "A pergunta é quanto você ainda vai pagar para descobrir que precisava."

É o melhor fecho Schwartz do site e o único ponto onde a doutrina nova bate de frente com a
força da copy. A frase cobra do leitor uma conta pela demora dele.

**Proposta:** "Toda semana sem estrutura tem um preço. Ele só não aparece com esse nome no
relatório."

Mantém a lógica de custo de inação, tira o dedo apontado e fecha o arco com a
`pain.introTail`, que abriu o site falando do dinheiro que não se vê. Vira motivo, e motivo
repetido de propósito é assinatura.

Se você achar que a v3 ficou macia demais, este é o campo onde eu voltaria atrás primeiro.

### 5.14 FAQ, `reading`, `footer`, 404, `form`

Nada muda. As seis respostas estão na sua voz, foram escritas por você e nenhuma acusa o
leitor. A FAQ 2, sobre substituir o time, já é o movimento "acalma o medo" bem executado.

O `form` continua sem ser renderizado em página nenhuma, então segue congelado até a decisão
A/B do roadmap.

---



## 6. Espelho em inglês

Todas as mudanças acima têm par em `src/i18n/en.ts`, para os dois idiomas dizerem a mesma
coisa. As centrais:


| Campo                     | Proposta EN                                                                                                                                                                                         |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hero.headline` (opção A) | Service companies lose more customers / on WhatsApp than on price.                                                                                                                                  |
| `hero.subheadline`, fecho | In a manual operation, whoever is free answers first. With PAI, the system answers, in seconds, at any hour.                                                                                        |
| `pain.eyebrow`            | 01 · Where the deal is lost                                                                                                                                                                         |
| `pain.headline`           | Demand arrives. / The structure does not hold.                                                                                                                                                      |
| `pain.items[0]`           | The lead arrives on a Tuesday at 9pm. The team replies Wednesday morning. The competitor replied at 9:04pm. The deal was lost on the clock.                                                         |
| `pain.items[2]`, título   | Every rep with their own script.                                                                                                                                                                    |
| `pain.items[5]`, título   | An owner in the middle of every conversation.                                                                                                                                                       |
| `pain.items[5]`, corpo    | The owner becomes the last quality filter of the operation. Not out of vanity: because they are the one who learned to carry a conversation to the close, and that knowledge never left their head. |
| `pain.closing`            | These companies work harder and grow less than their market allows.                                                                                                                                 |
| `pain.closingTail`        | And the most common answer is to hire more people. Which grows payroll before it fixes the bottleneck.                                                                                              |
| `cases.pattern.body`      | In every case, the numbers moved before the team grew.                                                                                                                                              |
| `protocol.closingTail`    | Every week without structure has a price. It just does not show up under that name in the report.                                                                                                   |


---



## 7. O que preciso de você antes de eu escrever


| #   | Decisão                                                     | Por que trava                                                                          |
| --- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 1   | Headline: A, B ou C                                         | Tudo na página se calibra por ela, e o `og:image` das duas home é gerado a partir dela |
| 2   | `protocol.closingTail`: proposta nova ou a atual            | É o único ponto onde a força da copy e a doutrina nova brigam                          |
| 3   | Um antes e depois de tempo de resposta, com período         | Auditoria 4. A página promete a métrica e não mostra número de nenhum cliente          |
| 4   | Nome da clínica de cirurgia plástica, se houver autorização | O único case sem nome próprio, no meio de três nomeados                                |
| 5   | Travessão no inglês: mantém ou cai                          | A regra de casa é do português. Cinco ocorrências em `en.ts`                           |


Os itens 3 e 4 já estavam abertos no roadmap. Não travam a aplicação da v3, travam a
promessa da seção 02.

> Natã: 1. opção C, porque mensagem fala também com SMS do público americano. Sobre a questão da font, pode mudar os títulos para Anton, como no restante do site, que é font condensada, melhor para mobile.   
> 2. nova.  
> 3. antes prazo de respostas chegam até 48h ou ficam esquecidas mensagens, com o sistema a resposta chega na mesma hora. A taxa de conversão da academia subiu em mais de 40%.  
> 4. Dra Georgia Cirurgiã Plástica  
> 5. melhor remover também do inglês. Agora a tradução do inglês ela precisa ser mais estrutural para que o sentido não se perca. Vi umas frases com tradução literal, onde a gramática do inglês no site não está sendo respeitada. Para inglês, usar a versão inglesa da skill: /humanizer

---



## 8. Ordem de aplicação, depois do aval

1. `src/i18n/pt-br.ts`, bloco a bloco, na ordem da seção 5.
2. `src/i18n/en.ts`, espelho da seção 6.
3. Regerar `public/og-default.png` e `public/og-default-en.png` com a headline escolhida.
  As duas imagens atuais citam o H1 de hoje.
4. `npm run build` e leitura da home nos dois idiomas.
5. Nota da v3 no `docs/roadmap.md`, no mesmo formato da passada de 11/08.

Risco: baixo. A revisão inteira é troca de string em dois arquivos de i18n, mais dois PNG.
Nenhuma rota, nenhum componente, nenhum schema.
---

## 9. O que foi ao ar, e o que mudou depois do aval

Aplicado em 11 de agosto de 2026. As cinco decisões da seção 7 entraram assim:

| # | Decisão do Natã | O que entrou |
|---|---|---|
| 1 | Opção C, e headlines em Anton | `Empresas com demanda e equipe / perdem venda no silêncio entre uma mensagem e outra.` |
| 2 | Fecho novo | `Toda semana sem estrutura tem um preço. Ele só não aparece com esse nome no relatório.` |
| 3 | Resposta de até 48h para a mesma hora, e +40% de conversão | Entrou em `cases.pattern.body` e no case da Gracie Barra |
| 4 | Dra. Georgia | Nome próprio no case 4, no `proofBar` e no `og:image` |
| 5 | Travessão fora do inglês, e tradução estrutural | `en.ts` reescrito por inteiro |

### Quatro coisas que a proposta não previa

**A `hero.support` passou a repetir a headline.** A opção C usa a figura do "silêncio entre
uma mensagem e outra", que era exatamente a frase de apoio logo abaixo. A frase de apoio
virou "Para empresas que já têm demanda e já têm equipe, e mesmo assim veem contato entrar
e morrer sem resposta."

**A `cases.pattern.body` ficou melhor do que o proposto.** A seção 5.10 propunha "Em todos
os casos, o número subiu antes de o time crescer", escrita quando ainda não havia dado de
tempo de resposta. Com o número em mãos, o bloco carrega o antes e depois e a frase antiga
junto: "Sem sistema, a resposta leva até 48 horas, quando a mensagem não fica esquecida no
meio das outras. Com o PAI, chega na mesma hora. Em todos os casos, o número subiu antes de
o time crescer." Isso fecha a auditoria 4, que era o furo mais fundo do laudo.

**O `proofBar` trocou volume por conversão.** Os quatro números eram todos de volume. O
segundo virou `+40% em conversão · Gracie Barra SG`, e o `4–8 novos agendamentos por dia`
saiu das estatísticas do case para abrir espaço ao mesmo `+40%`. Os dois números continuam
escritos no corpo do case.

**O acento das maiúsculas sumia em Anton.** Achado na conferência visual. É defeito de
tipografia. Com entrelinha de 0.94, o circunflexo de SILÊNCIO era desenhado
por cima da linha acima e desaparecia. As sete headlines passaram para 1.14, e a do hero
para 1.2. O mesmo defeito já existia na 404, onde ESSA PÁGINA NÃO EXISTE perdia os dois
acentos, e foi corrigido junto.

### Inglês: o que estava traduzido ao pé da letra

Os erros que mudavam o sentido, além dos de ritmo:

- `The deal was lost on time.` Em inglês isso quer dizer que a venda saiu no prazo. Virou
  `The deal was lost on the clock.`
- `different ticket`, calco de "ticket diferente". Virou `different deal sizes`.
- `Each one replies the way they feel like.` Frase quebrada. Virou
  `One answers fast and with no context. Another answers well, three hours later.`
- `PAI is a protocol that enters your operation`, calco de "entra". Virou `drops into`.
- `When a system is already in the house`, calco de "na casa". Virou `already in place`.
- `Digital is already the minimum.` Virou `Digital is table stakes now.`
- `we survey your business`. Virou `we walk through your business`.
- `Active 24/7 response`, calco de "atendimento ativo". Virou `Round-the-clock coverage`.
- `form.success` prometia `within 1 business day` enquanto o `responsePromise` da mesma
  página prometia `under 24 hours`. As duas agora dizem a mesma coisa.

Os cinco travessões saíram, junto com os dois do endereço no rodapé.

Não existe skill `/humanizer` instalada nesta máquina. A passada de inglês foi feita à mão,
pelos mesmos critérios da `/humanizador`: calco, ritmo uniforme, hype sem referente.

### Verificação

- Scanner `scan_ptbr.py` sobre `pt-br.ts`: 0 erros, 1 aviso, o mesmo falso positivo de antes.
- `npm run build`: seis páginas, sem erro.
- Home em 390px e em 1440px, PT e EN: `scrollWidth` igual ao `clientWidth`, sem estouro
  horizontal. Vale registrar que a suspeita de overflow no mobile, aberta no roadmap, não
  se reproduz mais.
- Acentos conferidos glifo a glifo em SILÊNCIO, NÃO, OPERAÇÃO e PÁGINA.

### Ainda pendente

O nome do case 4 está como **Dra. Georgia**. Falta o sobrenome, se ele entra, e a
confirmação de que a autorização de uso do nome existe por escrito. Enquanto isso o nome
já está publicado em três lugares: `proofBar`, o card do case e a `og:image`.

O `docs/og-template.html` é novo. Ele gera as duas imagens sociais a partir de parâmetros
de URL, e existe porque a geração anterior não tinha ficado em lugar nenhum do repo.
