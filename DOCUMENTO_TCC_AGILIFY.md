# CENTRO UNIVERSITÁRIO SENAC - SANTO AMARO
## BACHARELADO EM SISTEMAS DE INFORMAÇÃO

**Autores:**
- Alessandro Silva Cardoso
- Enzo Impieri Danner
- João Paulo Lira Bezerra Silva

**Orientador:** Prof. José Martinelli Alves Silva  
**Data:** São Paulo, 26 de Setembro de 2026

---

# AGILIFY: Gestão integrada e visibilidade para o mercado de arte independente

---

## 1. INTRODUÇÃO

A economia criativa ocupa posição relevante na estrutura produtiva brasileira. Segundo a Firjan (2025), a Indústria Criativa retomou o crescimento e alcançou 3,20% do PIB em 2021; após a quebra da série histórica da Relação Anual de Informações Sociais (RAIS), as participações registradas foram de 3,21% em 2022 e 3,59% em 2023, o equivalente a R$ 393,3 bilhões. Projeções para o setor apontam que o crescimento da indústria criativa deve permanecer acima da média mundial, com potencial ainda maior no Brasil, em razão da dimensão do mercado doméstico e da riqueza cultural que serve de insumo aos seus produtos e serviços (Nyko; Zendron, 2018).

Esse desempenho agregado, contudo, convive com transformações na forma de inserção do trabalhador: a própria Firjan (2025) observa que a *gig economy*, a informalidade e o trabalho autônomo com múltiplas fontes de renda tornaram-se mais prevalentes no cotidiano brasileiro.

Pensando nessas comunidades, o projeto busca se situar nos contextos dos Objetivos de Desenvolvimento Sustentável (ODS):
- **ODS 8 (Trabalho Decente e Crescimento Econômico):** A plataforma busca ampliar a capacidade de geração de renda de trabalhadores autônomos e reduzir a assimetria contratual a que estão submetidos.
- **ODS 9 (Indústria, Inovação e Infraestrutura):** Proposta de infraestrutura digital de suporte à inovação em um setor produtivo pouco atendido por soluções especializadas.
- **ODS 10 (Redução das Desigualdades):** A descoberta de artistas por estilo e não por localização geográfica tende a beneficiar profissionais situados fora dos grandes centros urbanos.
- **ODS 11 (Meta 11.4 - Salvaguarda do Patrimônio Cultural):** A solução proíbe o uso de conteúdos gerados por inteligência artificial (IA).
- **ODS 12 (Consumo e Produção Responsáveis):** A produção artesanal e sob encomenda opera em lógica oposta à do consumo em massa.

Segundo Laniuk (2021), a vida de bilhões de pessoas é conduzida de forma eletrônica, enquanto um punhado de empresas por trás da digitalização global detém capacidade sem precedentes de monitorar e controlar suas ações. Salles (2023) aponta que a lógica algorítmica orienta a produção cultural nas redes sociais e plataformas digitais para a maximização de lucros, precarizando o trabalho de artistas independentes.

Quadro agravado recentemente pelo **encerramento das operações do Elo7 em maio de 2026**, principal marketplace de produtos artesanais que sucumbiu à pressão competitiva e à queda de receita, supõe-se que funções críticas ao sustento desses trabalhadores (exposição de portfólio, negociação de preço, agendamento e cobrança) venham sendo executadas em redes sociais não projetadas para essa finalidade.

### Proposta do Agilify
Nesse meio é proposto o **Agilify**, uma plataforma digital de intermediação de encomendas artísticas (*commissions*) voltada a artistas independentes, articulando cinco componentes:
1. **Ambiente de Portfólio com Classificação por Estilo Artístico:** Substitui a busca genérica por profissão pela busca por linguagem visual, técnica e faixa de preço, sem leilão de posição.
2. **Vitrine de Itens Prontos (Pronta-Entrega):** Venda imediata de peças já finalizadas, definida pelo próprio artista.
3. **Fluxo Estruturado de Comissão:** Conduz a solicitação do cliente até o orçamento formal e o registro do pagamento seguro com retenção em garantia (sinal e saldo).
4. **Calendário de Disponibilidade e Fila de Espera:** Ordem de atendimento e prioridade definida pelo próprio artista, e não por imposição de ordem cronológica.
5. **Mecanismo de Verificação de Autoria Humana (Anti-IA):** Apoiado em registro voluntário de procedência do trabalho (rascunhos, camadas, arquivos de processo), canal de denúncia e processo de moderação com direito de defesa.

---

## 1.1 Objetivos

### 1.1.1 Objetivo Geral
Proporcionar oportunidades justas para artistas independentes, gerenciando e auxiliando na divulgação dos trabalhos e centralizando processos em um único ambiente, como gerenciamento de portfólio, vendas e abertura de comissões.

### 1.1.2 Objetivos Específicos
a) Levantar e caracterizar, junto a artistas independentes e a contratantes de encomendas, os requisitos de divulgação, negociação, agendamento e recebimento praticados no segmento;  
b) Projetar a arquitetura da aplicação e o modelo de dados capaz de representar artistas, portfólios, estilos artísticos, itens de estoque, pedidos de comissão e registros de disponibilidade;  
c) Implementar o fluxo de comissão, abrangendo solicitação, orçamento, aceite, calendário de disponibilidade com fila de prioridade e registro do pagamento;  
d) Avaliar a solução quanto à usabilidade e à aderência aos requisitos levantados, considerando separadamente as perspectivas do artista e do contratante.

---

## 1.2 Delimitação do Estudo
- **Escopo Inicial:** Limitado às modalidades de **arte digital e pintura**. A arte digital é entregue remotamente em ciclos de revisão de arquivos digitais, enquanto peças físicas exigem logística e prazos distintos.
- **Fora de Escopo:** Operação logística própria (frete será tratado via integração com agregadores ou sob responsabilidade do artista no protótipo); modelos computacionais automáticos de detecção de IA (devido à imprecisão e risco de falsos positivos, optou-se pela abordagem por procedência humana e moderação comunitária com contraditório); custódia bancária direta (será utilizado intermediador de pagamento terceiro com split e Pix nativo).

---

## 1.4 Metodologia & Tecnologias

- **Método:** *Design Science Research* (DSR) e método misto quanti-qualitativo (entrevistas iniciais e avaliação estatística via escala SUS - *System Usability Scale*).
- **Prototipagem & UI/UX:** Figma para wireframes, design system e protótipo de alta fidelidade.
- **Front-end Móvel / Web:** Framework multiplataforma responsivo.
- **Back-end & Persistência:** Plataforma gerenciada (PostgreSQL, armazenamento de mídia em Cloudflare R2 / Object Storage).
- **Hospedagem:** VPS Hostinger e domínio no Registro.br.
- **Acessibilidade:** Diretrizes Web Content Accessibility Guidelines (WCAG) do W3C.

---

## 1.7 Orçamento do Projeto (Período: 12 meses)

### Quadro 2 – Estimativa de Custos de Pessoal (Equipe)
| Perfil Profissional | Qtde. | Salário Mensal (R$) | Total 12 Meses (R$) |
|---|---|---|---|
| Analista de Front-end Júnior | 1 | R$ 4.900,00 | R$ 58.800,00 |
| Analista de Back-end Júnior | 1 | R$ 5.200,00 | R$ 62.400,00 |
| Analista de Projetos Júnior | 1 | R$ 4.000,00 | R$ 48.000,00 |
| **Total** | **3** | **R$ 14.100,00** | **R$ 169.200,00** |

### Quadro 3 – Estimativa com Recursos Materiais
| Item | Especificação | Qtde. | Unitário (R$) | Total (R$) |
|---|---|---|---|---|
| Notebook | Asus Vivobook Go 15 (Ryzen 5 7520U, 16GB RAM, SSD 512GB) | 3 | R$ 4.500,00 | R$ 13.500,00 |
| Monitor Adicional | Lenovo ThinkVision T24-40 (23.8" Full HD IPS) | 3 | R$ 900,00 | R$ 2.700,00 |
| Smartphone Android | Samsung Galaxy A26 5G (256GB, 8GB RAM) | 1 | R$ 1.800,00 | R$ 1.800,00 |
| Smartphone iOS | Apple iPhone 13 Pro (128GB) | 1 | R$ 4.000,00 | R$ 4.000,00 |
| Periféricos | Kit Dell KM3322W (Teclado e Mouse Sem Fio) | 3 | R$ 400,00 | R$ 1.200,00 |
| Conectividade | Link Internet Banda Larga Fibra Óptica (12 meses) | 12 | R$ 150,00 | R$ 1.800,00 |
| Energia Elétrica | Rateio consumo elétrico estações de trabalho | 12 | R$ 120,00 | R$ 1.440,00 |
| Material de Consumo | Impressão, encadernação e papelaria | 1 | R$ 400,00 | R$ 400,00 |
| **Total Materiais** | | | | **R$ 26.840,00** |

### Quadro 4 – Licenças e Softwares
| Item | Especificação | Qtde. | Unitário (R$) | Total (R$) |
|---|---|---|---|---|
| Hospedagem VPS | Hostinger VPS (Aplicação + PostgreSQL) | 12 | R$ 250,00 | R$ 3.000,00 |
| Armazenamento | Cloudflare R2 / Object Storage (10 GB Free Tier) | 12 | R$ 0,00 | R$ 0,00 |
| Prototipagem | Figma Profissional (3 licenças de edição) | 12 | R$ 270,00 | R$ 3.240,00 |
| Repositório Git | GitHub Team (Versionamento de equipe) | 12 | R$ 120,00 | R$ 1.440,00 |
| Mensageria | Notificações e e-mail transacional | 12 | R$ 100,00 | R$ 1.200,00 |
| Apple Dev | Apple Developer Program (Anuidade iOS) | 1 | R$ 550,00 | R$ 550,00 |
| Google Play | Google Play Console (Taxa única Android) | 1 | R$ 140,00 | R$ 140,00 |
| Domínio | Registro.br + Certificado SSL | 1 | R$ 250,00 | R$ 250,00 |
| **Total Softwares** | | | | **R$ 9.820,00** |

### Quadro 5 – Consolidação do Orçamento
- **Salários (Mão de Obra):** R$ 169.200,00 (82,19%)
- **Recursos Materiais:** R$ 26.840,00 (13,04%)
- **Licenças e Softwares:** R$ 9.820,00 (4,77%)
- **Total Geral do Projeto:** **R$ 205.860,00 (100,0%)**

---

## 3. ANÁLISE DE MERCADO & BENCHMARKING

### Quadro 7 – Comparativo com Concorrentes
| Característica | VGen / Commissions.gg / Artistree | Artesanou (Ex-Elo7) | AGILIFY (Nosso Projeto) | Shopee / Mercado Livre | Redes Sociais (Instagram/TikTok) |
|---|---|---|---|---|---|
| **Público-Alvo** | Artistas visuais digitais e VTubers (Internacional) | Artesanato físico (Brasil) | **Artistas independentes (Arte Digital, Pintura, Artesanato autoral sob encomenda)** | E-commerce geral industrializado | Público geral e conexões informais |
| **Modelo de Cobrança** | Artista paga 5% (VGen) ou Cliente paga 5% a 6,5% | Artista paga 15% + frete + gateway | **Artista paga 0%; Contratante paga Taxa de Proteção (10% ou mín. R$ 3,00)** | Vendedor paga 14% a 20% + taxas fixas | Gratuito orgânico / Pago em anúncios |
| **Moeda e Pagamento** | Dólares / Euros (PayPal/Stripe) | Reais (Mercado Pago) | **100% em Reais com Pix nativo e liquidação imediata** | Reais (Parcelado / Cartões) | Nenhuma transação embutida |
| **Mecanismo de Descoberta** | Por estilo visual e tipo de comissão | Por categoria de produto | **Por estilo visual declarativo, técnica, preço e disponibilidade (sem leilão algorítmico)** | Palavra-chave e relevância paga | Algoritmos de engajamento, curtidas e vídeos |
| **Proteção de Pagamento** | Retido e liberado após aprovação | Intermediação padrão | **Pagamento retido com garantia de reembolso em caso de descumprimento** | Retenção até rastreio dos correios | Inexistente (risco total de golpes e calotes) |
| **Verificação Anti-IA** | Filtros comunitários | Inexistente | **Registro voluntário de procedência humana + moderação com direito de defesa** | Inexistente (proliferação de IA) | Algoritmos priorizam volume gerado por IA |
| **Link Externo** | Páginas da plataforma | Inexistente | **Permite gerar links de comissão seguros para divulgar na bio do Instagram e WhatsApp** | Proíbe direcionar vendas externas | Não aplicável |

---

## 3.3 Modelo de Monetização do Agilify

### Quadro 8 – Fontes de Receita
1. **Taxa de Proteção Transacional (Paga pelo Contratante):**
   - R$ 3,00 para encomendas de até R$ 30,00.
   - 10% do valor da comissão acima de R$ 30,00.
   - *Justificativa:* Cobre retenção segura do dinheiro, garantia contra inadimplência, suporte e mediação de disputas sem onerar o artista autônomo.
2. **Planos de Assinatura Opcionais para o Artista:**
   - **Ateliê (Gratuito - R$ 0/mês):** Até 3 comissões simultâneas, vitrine ilimitada, 2 links externos/mês, fluxo de pagamento protegido.
   - **Pro (R$ 19,90/mês ou R$ 199/ano):** Comissões ilimitadas, links ilimitados, aviso de agenda aos seguidores, calculadora de preços e licença comercial, painel financeiro com teto do MEI.
   - **Estúdio (R$ 59,90/mês ou R$ 599/ano):** Para coletivos de até 4 artistas, fila compartilhada e divisão automática de repasses (*split*).

### Quadro 9 – Composição de Valores por Encomenda
| Encomenda | Taxa de Proteção (TP) | Total no Pix | Artista Recebe | Agilify Retém (Líquido) |
|---|---|---|---|---|
| R$ 10,00 | R$ 3,00 (mín.) | R$ 13,00 | R$ 10,00 (100%) | R$ 2,87 |
| R$ 30,00 | R$ 3,00 | R$ 33,00 | R$ 30,00 (100%) | R$ 2,67 |
| R$ 60,00 | R$ 6,00 | R$ 66,00 | R$ 60,00 (100%) | R$ 5,34 |
| R$ 100,00 | R$ 10,00 | R$ 110,00 | R$ 100,00 (100%) | R$ 8,91 |
| R$ 250,00 | R$ 25,00 | R$ 275,00 | R$ 250,00 (100%) | R$ 22,28 |
| R$ 500,00 | R$ 50,00 | R$ 550,00 | R$ 500,00 (100%) | R$ 44,55 |
