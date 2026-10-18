# 🎨 GUIA RÁPIDO: Como Abrir e Mexer no Projeto Agilify no FIGMA

Olá Alessandro, Enzo e João Paulo!  
Preparamos o projeto do **Agilify** exatamente com o design e a experiência inspirados no **VGen (vgen.co/commission)**, adaptado para a realidade do mercado brasileiro (Pix nativo, taxa zero para artistas, 10% de proteção ao contratante e foco em arte humana anti-IA).

Aqui estão as **duas formas mais práticas e profissionais** para você abrir, personalizar e mexer em tudo dentro do **Figma**:

---

## 🚀 Método 1: Importação Direta em 1 Clique (Recomendado)
*Este método transforma o site inteiro em camadas nativas do Figma, com Auto-Layout, fontes, vetores e textos 100% editáveis.*

1. **Abra o Figma** (no navegador ou aplicativo desktop).
2. Crie um novo arquivo de design em branco (`+ New design file`).
3. Vá no menu de Plugins do Figma e busque por:
   👉 **`html.to.design`** (desenvolvido por Divriots, gratuito e oficial na comunidade).  
   *Link direto:* [Figma Community - html.to.design](https://www.figma.com/community/plugin/1159123024924461424)
4. Abra o arquivo `index.html` do projeto no seu navegador Chrome, Edge ou Firefox (ou acesse o link local gerado pelo servidor).
5. No plugin **html.to.design**:
   - Se estiver com o site aberto no navegador, copie o endereço (ex: `http://localhost:5173` ou cole o código HTML/URL).
   - Clique em **"Import"**.
6. **Pronto!** O plugin vai gerar frames organizados no seu Figma:
   - Frame Desktop (1440px)
   - Frame Mobile (390px)
   - Todos os botões, cards, filtros e modais com Auto-Layout e tipografia editável!

---

## 🧩 Método 2: Arrastar o Vetor Completo (Sem necessidade de plugin)
*Se você quiser começar a mexer imediatamente sem instalar nenhum plugin:*

1. Localize o arquivo vetorial que criamos na pasta do projeto:
   👉 `c:\Users\alesi\VisualNOVO\agilify-figma-frames.svg`
2. Abra o seu **Figma**.
3. **Arraste o arquivo `.svg` e solte dentro da tela do Figma**!
4. Todas as telas, cards, botões e elementos gráficos serão renderizados como vetores nativos. Você pode desagrupar (`Ctrl + Shift + G` no Windows), alterar cores, fontes e adicionar suas próprias imagens de arte.

---

## 🎨 Como Usar os Tokens de Cores e Estilos no Figma

Disponibilizamos o arquivo **`figma-tokens.json`** na raiz do projeto:
- Ele contém toda a paleta de cores (Roxo elétrico `#8B5CF6`, Ciano neon `#06B6D4`, Dark mode `#0B0C12`, Cards `#131522`), raios de borda, sombras e tipografia.
- Você pode carregar esse arquivo no plugin **Tokens Studio for Figma** para vincular diretamente às variáveis do seu arquivo Figma!

---

## 💡 Destaques do Agilify criados para a sua Banca do TCC:
1. **Estética VGen**: Dark theme moderno, superfícies de vidro (*glassmorphism*), tags de estilo estético e badges de status.
2. **Filtro Declarativo**: Busca orientada por estilo visual, técnica e preço (eliminando a opacidade dos algoritmos de redes sociais).
3. **Mecanismo Anti-IA**: Badge "100% Autoria Humana", incentivo a envio de arquivos de processo (.psd, rascunhos, timelapses).
4. **Calculadora Transparente de Comissões**:
   - Cálculo exato conforme a regra do TCC (Quadro 9 do documento): Artista recebe 100% do combinado e o comprador paga a Taxa de Proteção (10% Pix / mín. R$ 3,00).
5. **Quadro de Fila de Trabalho (Pipeline)**: Demonstração clara de Fila de Espera -> Rascunho -> Arte Final.
6. **Gerador de Link de Bio para Instagram**: Ferramenta comercial para captar encomendas das redes sociais para dentro da plataforma.
