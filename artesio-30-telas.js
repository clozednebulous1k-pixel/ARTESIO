/**
 * ARTESIO 30 TELAS — REGISTRO E NAVEGAÇÃO COMPLETA
 * Baseado estritamente na especificação acadêmica do TCC Artesio
 */

const ARTESIO_SCREENS = [
  {
    num: 1,
    id: "screen-01",
    num_str: "01",
    title: "Página inicial (Home)",
    scope: "MVP",
    viewTarget: "marketplace",
    desc: "Porta de entrada pública para visualizar obras de pronta-entrega, estilos e artistas, com navegação para descoberta e cadastro.",
    elements: "Busca global; categorias do recorte físico; cards de obras; acesso aos perfis e filtros.",
    rf: "RF01, RF03, RF04, RF12",
    rn: "RN03, RN04",
    rnf: "RNF01, RNF04",
    area: "Exploração pública"
  },
  {
    num: 2,
    id: "screen-02",
    num_str: "02",
    title: "Explorar artes e artistas",
    scope: "MVP",
    viewTarget: "marketplace",
    desc: "Catálogo pesquisável que organiza portfólios por atributos declarados e não por métricas de popularidade.",
    elements: "Busca por estilo, técnica, preço, localização e disponibilidade; opções explícitas de ordenação; resultados vazios.",
    rf: "RF03, RF04",
    rn: "RN03, RN04",
    rnf: "RNF01, RNF04, RNF05",
    area: "Exploração pública"
  },
  {
    num: 3,
    id: "screen-03",
    num_str: "03",
    title: "Descubra Novos Talentos",
    scope: "FUTURO",
    viewTarget: "newTalents",
    desc: "Seção proposta para expor artistas recém-chegados ou ainda pouco avaliados, independente do plano pago.",
    elements: "Cards de perfis elegíveis; filtros por estilo e preço; explicação dos critérios; acesso ao portfólio.",
    rf: "RF03, RF12 (parcial)",
    rn: "RN03 (parcial)",
    rnf: "RNF01, RNF04",
    area: "Exploração pública"
  },
  {
    num: 4,
    id: "screen-04",
    num_str: "04",
    title: "Perfil público do artista",
    scope: "MVP",
    viewTarget: "artistProfile",
    desc: "Página de apresentação do artista, com biografia, metadados técnicos, portfólio e obras publicadas.",
    elements: "Avatar; descrição; estilos; técnicas; preço de referência; galeria; disponibilidade; ação para seguir.",
    rf: "RF02, RF03, RF04, RF12, RF16",
    rn: "RN01, RN02, RN03, RN14",
    rnf: "RNF01, RNF02, RNF04",
    area: "Exploração pública"
  },
  {
    num: 5,
    id: "screen-05",
    num_str: "05",
    title: "Detalhes da obra/produto",
    scope: "MVP",
    viewTarget: "artworkDetail",
    desc: "Ficha individual da obra física, permitindo compreender o item antes de iniciar a compra.",
    elements: "Galeria; preço; material; dimensão; estoque; entrega; artista; ação de compra.",
    rf: "RF02, RF04, RF14",
    rn: "RN02, RN04, RN12",
    rnf: "RNF01, RNF04",
    area: "Exploração pública"
  },
  {
    num: 6,
    id: "screen-06",
    num_str: "06",
    title: "Planos e benefícios",
    scope: "MVP",
    viewTarget: "plans",
    desc: "Página comparativa dos planos Ateliê, Pro e Estúdio com limites e ferramentas existentes na proposta.",
    elements: "Preço; diferenças; limites de encomendas/links; métricas; personalização; opção de escolha ilustrativa.",
    rf: "RF09, RF10, RF11, RF13, RF15, RF16",
    rn: "RN07, RN08, RN09, RN11, RN13, RN14",
    rnf: "RNF04",
    area: "Exploração pública"
  },
  {
    num: 7,
    id: "screen-07",
    num_str: "07",
    title: "Login",
    scope: "MVP",
    viewTarget: "authLogin",
    desc: "Ponto de acesso para comprador, artista/coletivo e administrador, respeitando as permissões.",
    elements: "E-mail; senha; recuperação futura; mensagens de erro; entrada por perfil demonstrativo.",
    rf: "RF01",
    rn: "RN01, RN15, RN16",
    rnf: "RNF02, RNF04",
    area: "Acesso e conta"
  },
  {
    num: 8,
    id: "screen-08",
    num_str: "08",
    title: "Cadastro de usuário",
    scope: "MVP",
    viewTarget: "authRegister",
    desc: "Registro inicial com escolha entre comprador e artista/coletivo e dados de identificação necessários.",
    elements: "Dados básicos; perfil; termos; avatar e estilos para artistas; confirmação.",
    rf: "RF01, RF02",
    rn: "RN01, RN02, RN15",
    rnf: "RNF02, RNF04",
    area: "Acesso e conta"
  },
  {
    num: 9,
    id: "screen-09",
    num_str: "09",
    title: "Configurações da conta",
    scope: "FUTURO",
    viewTarget: "accountSettings",
    desc: "Área prevista para atualização de preferências, credenciais e opções de privacidade.",
    elements: "Dados de conta; senha; preferências de notificação; solicitações de privacidade.",
    rf: "RF01, RF12 (parcial)",
    rn: "RN15, RN16",
    rnf: "RNF02, RNF04",
    area: "Acesso e conta"
  },
  {
    num: 10,
    id: "screen-10",
    num_str: "10",
    title: "Painel do comprador",
    scope: "FUTURO",
    viewTarget: "client",
    desc: "Visão consolidada da jornada do comprador, incluindo pedidos e etapas de encomenda.",
    elements: "Pedidos recentes; status; histórico; valores informativos; atalhos para detalhes.",
    rf: "RF05, RF06, RF17",
    rn: "RN01, RN05, RN17",
    rnf: "RNF01, RNF02, RNF04",
    area: "Comprador"
  },
  {
    num: 11,
    id: "screen-11",
    num_str: "11",
    title: "Favoritos e artistas seguidos",
    scope: "FUTURO",
    viewTarget: "favorites",
    desc: "Área para reunir referências salvas e perfis acompanhados e facilitar novas visitas.",
    elements: "Obras salvas; artistas seguidos; acesso a portfólios; avisos de novas publicações.",
    rf: "RF12",
    rn: "RN10",
    rnf: "RNF01, RNF02, RNF04",
    area: "Comprador"
  },
  {
    num: 12,
    id: "screen-12",
    num_str: "12",
    title: "Carrinho de compras",
    scope: "MVP",
    viewTarget: "cart",
    desc: "Resumo dos itens físicos de pronta-entrega selecionados antes da confirmação do pedido.",
    elements: "Itens; quantidades; subtotal; exclusão de itens; botão para checkout.",
    rf: "RF04, RF14 (parcial)",
    rn: "RN04, RN12",
    rnf: "RNF01, RNF04",
    area: "Comprador"
  },
  {
    num: 13,
    id: "screen-13",
    num_str: "13",
    title: "Checkout e pagamento (simulado)",
    scope: "MVP",
    viewTarget: "checkout",
    desc: "Exibição transparente da composição do preço para validar o fluxo de compra de pronta-entrega em ambiente demonstrativo.",
    elements: "Endereço/entrega; obra; taxa de proteção; meio de pagamento Pix; resumo; confirmação fictícia.",
    rf: "RF04, RF14, RF06 (conceitual)",
    rn: "RN04, RN12, RN15",
    rnf: "RNF02, RNF04",
    area: "Comprador"
  },
  {
    num: 14,
    id: "screen-14",
    num_str: "14",
    title: "Detalhes e acompanhamento do pedido",
    scope: "MVP",
    viewTarget: "orderTracking",
    desc: "Visão do status de compra de pronta-entrega e das informações necessárias à entrega por conta do artista.",
    elements: "Identificador; itens; valor; etapa; prazo; contato; condições de entrega.",
    rf: "RF04, RF14, RF05 (parcial)",
    rn: "RN04, RN12",
    rnf: "RNF01, RNF02, RNF04",
    area: "Comprador"
  },
  {
    num: 15,
    id: "screen-15",
    num_str: "15",
    title: "Dashboard do artista",
    scope: "MVP",
    viewTarget: "artist",
    desc: "Página inicial privada do artista com panorama de seu portfólio, itens e atividade comercial.",
    elements: "Resumo de produtos; solicitações; vagas; planos; atalhos para gestão.",
    rf: "RF02, RF04, RF09, RF10, RF11",
    rn: "RN01, RN07, RN08, RN09",
    rnf: "RNF01, RNF02, RNF04",
    area: "Artista"
  },
  {
    num: 16,
    id: "screen-16",
    num_str: "16",
    title: "Gerenciar portfólio",
    scope: "MVP",
    viewTarget: "managePortfolio",
    desc: "Lista de artes publicadas e referências para organização e manutenção do portfólio artístico.",
    elements: "Listar; ordenar; editar; ocultar; remover; ver prévia de obra.",
    rf: "RF02, RF04, RF16",
    rn: "RN01, RN02, RN04, RN14",
    rnf: "RNF01, RNF04",
    area: "Artista"
  },
  {
    num: 17,
    id: "screen-17",
    num_str: "17",
    title: "Cadastrar/editar obra",
    scope: "MVP",
    viewTarget: "newArtworkModal",
    desc: "Formulário para publicar trabalhos e produtos, com características visuais e comerciais.",
    elements: "Imagens; título; descrição; técnica; estilo; preço; estoque e condições de entrega.",
    rf: "RF02, RF03, RF04",
    rn: "RN01, RN02, RN04",
    rnf: "RNF01, RNF02, RNF04",
    area: "Artista"
  },
  {
    num: 18,
    id: "screen-18",
    num_str: "18",
    title: "Gerenciar vendas e estoque",
    scope: "MVP",
    viewTarget: "stockManagement",
    desc: "Painel de operações para itens prontos, permitindo enxergar disponibilidade e andamento dos pedidos.",
    elements: "Quantidade; status do item; pedidos; atualização de estoque; sinalização de esgotado.",
    rf: "RF04, RF02",
    rn: "RN04, RN01",
    rnf: "RNF01, RNF04",
    area: "Artista"
  },
  {
    num: 19,
    id: "screen-19",
    num_str: "19",
    title: "Agenda e fila de espera",
    scope: "FUTURO",
    viewTarget: "waitlistSchedule",
    desc: "Visualização do planejamento da capacidade de receber e ordenar encomendas personalizadas.",
    elements: "Calendário; vagas; fila; prioridade definida pelo artista; abertura de agenda.",
    rf: "RF05, RF12 (parcial)",
    rn: "RN05, RN07, RN10",
    rnf: "RNF01, RNF04",
    area: "Artista"
  },
  {
    num: 20,
    id: "screen-20",
    num_str: "20",
    title: "Financeiro e controle do MEI",
    scope: "MVP",
    viewTarget: "meiFinance",
    desc: "Painel de dados demonstrativos para acompanhamento de receitas e estimativa do limite anual do MEI.",
    elements: "Gráficos e indicadores exemplificativos; valores recebidos; projeção; avisos de limite.",
    rf: "RF10, RF09",
    rn: "RN07, RN08, RN13",
    rnf: "RNF01, RNF02, RNF04",
    area: "Artista"
  },
  {
    num: 21,
    id: "screen-21",
    num_str: "21",
    title: "Estatísticas do portfólio",
    scope: "MVP",
    viewTarget: "portfolioStats",
    desc: "Área analítica para assinantes Pro e Estúdio acompanharem visitas e conversões com dados fictícios.",
    elements: "Visitas; fontes; obras acessadas; cliques; taxa de conversão privada.",
    rf: "RF15, RF09",
    rn: "RN07, RN13",
    rnf: "RNF01, RNF02, RNF04",
    area: "Artista"
  },
  {
    num: 22,
    id: "screen-22",
    num_str: "22",
    title: "Personalização do portfólio",
    scope: "MVP",
    viewTarget: "portfolioCustomizer",
    desc: "Interface de configuração estética do portfólio nos planos pagos.",
    elements: "Temas; cores; componentes; visualização prévia; salvar configuração simulada.",
    rf: "RF16, RF09, RF02",
    rn: "RN07, RN14",
    rnf: "RNF01, RNF04",
    area: "Artista"
  },
  {
    num: 23,
    id: "screen-23",
    num_str: "23",
    title: "Chat e negociação",
    scope: "FUTURO",
    viewTarget: "chats",
    desc: "Canal de comunicação entre cliente e artista para esclarecer detalhes e negociar encomendas.",
    elements: "Lista de conversas; mensagens; anexos; histórico; referência à obra.",
    rf: "RF05, RF12 (parcial)",
    rn: "RN01, RN05",
    rnf: "RNF01, RNF02, RNF04",
    area: "Encomendas e comunicação"
  },
  {
    num: 24,
    id: "screen-24",
    num_str: "24",
    title: "Solicitação de encomenda personalizada",
    scope: "FUTURO",
    viewTarget: "customCommissionRequest",
    desc: "Formulário futuro para o comprador explicar o que deseja contratar sob medida.",
    elements: "Descrição; referências; materiais; prazo esperado; solicitação de orçamento.",
    rf: "RF05, RF11",
    rn: "RN05, RN09",
    rnf: "RNF02, RNF04",
    area: "Encomendas e comunicação"
  },
  {
    num: 25,
    id: "screen-25",
    num_str: "25",
    title: "Orçamento e aprovação",
    scope: "FUTURO",
    viewTarget: "quoteApproval",
    desc: "Representação do orçamento formal e do aceite ou solicitação de ajustes pelo comprador.",
    elements: "Escopo; prazo; revisões; preço; taxa; estado da proposta; aceite ilustrativo.",
    rf: "RF05, RF06, RF11, RF14",
    rn: "RN05, RN09, RN12, RN17",
    rnf: "RNF02, RNF04",
    area: "Encomendas e comunicação"
  },
  {
    num: 26,
    id: "screen-26",
    num_str: "26",
    title: "Acompanhamento da encomenda",
    scope: "FUTURO",
    viewTarget: "orderTimeline",
    desc: "Linha do tempo do futuro fluxo de produção sob medida, de rascunho a entrega final.",
    elements: "Fases; aprovar rascunho; solicitar revisão; entregar; custódia simulada.",
    rf: "RF05, RF06, RF17",
    rn: "RN05, RN17",
    rnf: "RNF01, RNF02, RNF04",
    area: "Encomendas e comunicação"
  },
  {
    num: 27,
    id: "screen-27",
    num_str: "27",
    title: "Dashboard administrativo",
    scope: "FUTURO",
    viewTarget: "admin",
    desc: "Visão gerencial para indicadores de usuários, conteúdo, denúncias e operação do Artesio.",
    elements: "KPIs; volumes; fila de revisão; atalhos para usuários e denúncias.",
    rf: "RF07, RF08, RF18",
    rn: "RN01, RN06, RN15",
    rnf: "RNF01, RNF02, RNF04",
    area: "Administração e autoria"
  },
  {
    num: 28,
    id: "screen-28",
    num_str: "28",
    title: "Gerenciamento de usuários",
    scope: "FUTURO",
    viewTarget: "adminUsers",
    desc: "Painel restrito para consulta de contas e possíveis medidas de administração de perfis.",
    elements: "Pesquisa; papéis; status; consulta; sinalização de bloqueio e revisão.",
    rf: "RF01, RF07",
    rn: "RN01, RN15, RN16",
    rnf: "RNF02, RNF04",
    area: "Administração e autoria"
  },
  {
    num: 29,
    id: "screen-29",
    num_str: "29",
    title: "Denúncias e moderação",
    scope: "FUTURO",
    viewTarget: "adminModeration",
    desc: "Fluxo administrativo para registro, análise e decisão sobre conteúdo reportado.",
    elements: "Lista de denúncias; evidências; justificativa; direito de defesa; decisão; recurso.",
    rf: "RF07, RF08, RF18",
    rn: "RN06, RN15",
    rnf: "RNF02, RNF04",
    area: "Administração e autoria"
  },
  {
    num: 30,
    id: "screen-30",
    num_str: "30",
    title: "Verificação de autoria humana",
    scope: "FUTURO",
    viewTarget: "humanVerification",
    desc: "Painel de apresentação e análise de registros voluntários de procedência das obras.",
    elements: "Enviar evidências; visualizar arquivos; verificar histórico; decisão; selo ilustrativo.",
    rf: "RF18, RF08",
    rn: "RN06, RN15",
    rnf: "RNF02, RNF04",
    area: "Administração e autoria"
  }
];

// Estado do Carrinho (Tela 12 e 13)
let CART_STATE = [
  {
    id: 101,
    title: "Quadro Original Pintura a Óleo - Aurora",
    artist: "Mayumi Art",
    artistHandle: "@mayumi_arts",
    price: 320.00,
    quantity: 1,
    category: "Pintura em Tela",
    dimensions: "30x40 cm",
    stock: 2
  },
  {
    id: 102,
    title: "Pack 5 Stickers Holográficos - Gatinhos Místicos",
    artist: "Gabi Pixel",
    artistHandle: "@gabipixels",
    price: 35.00,
    quantity: 2,
    category: "Stickers Físicos",
    dimensions: "6x6 cm cada",
    stock: 14
  }
];

// Estado de Favoritos (Tela 11)
let FAVORITES_STATE = {
  artworks: [1, 2, 3],
  artists: ["@mayumi_arts", "@lucasprado_art"]
};

// Navegação direta para qualquer uma das 30 telas
window.navigateToScreen = function(screenNum) {
  const scr = ARTESIO_SCREENS.find(s => s.num === screenNum);
  if (!scr) return;

  const modal = document.getElementById("screensNavigatorModal");
  if (modal) modal.style.display = "none";

  // Se a tela é modal ou view existente ou nova view
  if (scr.viewTarget === "authLogin") {
    openAuthModalWithTab("client");
    return;
  }
  if (scr.viewTarget === "authRegister") {
    openAuthModalWithTab("client");
    const tabReg = document.getElementById("tabAuthRegister");
    if (tabReg) tabReg.click();
    return;
  }
  if (scr.viewTarget === "artworkDetail") {
    if (window.openArtworkDetail) {
      const targetId = (typeof COMMISSIONS_DATA !== "undefined" && COMMISSIONS_DATA.length > 0) ? COMMISSIONS_DATA[0].id : 1;
      window.openArtworkDetail(targetId);
    }
    return;
  }
  if (scr.viewTarget === "newArtworkModal") {
    if (window.openNewArtworkModal) window.openNewArtworkModal();
    return;
  }
  if (scr.viewTarget === "accountSettings") {
    if (window.openChangePasswordModal) window.openChangePasswordModal();
    return;
  }

  // Se for uma das views principais ou novas views
  switchView(scr.viewTarget);
  window.scrollTo({ top: 0, behavior: "smooth" });
  showToast(`Navegando para Tela ${scr.num_str}: ${scr.title}`);
};

// Renderizar o catálogo do modal navegador 30 telas
window.renderScreensNavigator = function() {
  const container = document.getElementById("screensCatalogGrid");
  if (!container) return;

  const currentNum = getCurrentScreenNum();

  container.innerHTML = ARTESIO_SCREENS.map(s => {
    const isMvp = s.scope === "MVP";
    const isActive = s.num === currentNum;
    return `
      <div class="screen-card-item ${isActive ? 'active' : ''}" onclick="navigateToScreen(${s.num})">
        <div>
          <div class="screen-item-top">
            <span class="screen-item-num">TELA ${s.num_str}</span>
            <span class="screen-badge-scope ${isMvp ? 'badge-scope-mvp' : 'badge-scope-future'}">
              ${isMvp ? '● Escopo MVP' : '○ Protótipo Futuro'}
            </span>
          </div>
          <div class="screen-item-area">${s.area}</div>
          <h4 class="screen-item-title">${s.title}</h4>
          <p class="screen-item-desc">${s.desc}</p>
        </div>
        <div>
          <div class="screen-req-tags">
            <span class="req-tag">${s.rf}</span>
            <span class="req-tag rn">${s.rn}</span>
          </div>
          <button class="btn-secondary btn-block" style="font-size:0.78rem; padding:6px 10px;">Visualizar Tela ${s.num_str} →</button>
        </div>
      </div>
    `;
  }).join("");
};

window.openScreensNavigatorModal = function() {
  const m = document.getElementById("screensNavigatorModal");
  if (m) {
    m.style.display = "flex";
    renderScreensNavigator();
  }
};

window.closeScreensNavigatorModal = function() {
  const m = document.getElementById("screensNavigatorModal");
  if (m) m.style.display = "none";
};

function getCurrentScreenNum() {
  const v = AppState.currentView;
  const match = ARTESIO_SCREENS.find(s => s.viewTarget === v);
  return match ? match.num : 1;
}

// Inicializações de renderizadores para as telas específicas adicionadas
window.renderCartView = function() {
  const body = document.getElementById("cartItemsBody");
  if (!body) return;

  if (CART_STATE.length === 0) {
    body.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:30px; color:#64748B;">Seu carrinho de pronta-entrega está vazio.</td></tr>`;
    updateCartTotals();
    return;
  }

  body.innerHTML = CART_STATE.map(item => `
    <tr class="cart-item-row-tr">
      <td>
        <strong>${item.title}</strong><br>
        <small style="color:#64748B;">${item.artist} (${item.artistHandle}) • ${item.dimensions}</small>
      </td>
      <td>R$ ${item.price.toFixed(2).replace('.', ',')}</td>
      <td>
        <div style="display:flex; align-items:center; gap:8px;">
          <button class="btn-secondary" style="padding:2px 8px;" onclick="changeCartQty(${item.id}, -1)">-</button>
          <span><strong>${item.quantity}</strong></span>
          <button class="btn-secondary" style="padding:2px 8px;" onclick="changeCartQty(${item.id}, 1)">+</button>
        </div>
      </td>
      <td><strong>R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</strong></td>
      <td>
        <button class="btn-secondary danger" style="padding:4px 8px;" onclick="removeCartItem(${item.id})">Remover</button>
      </td>
    </tr>
  `).join("");

  updateCartTotals();
};

window.changeCartQty = function(id, delta) {
  const it = CART_STATE.find(i => i.id === id);
  if (!it) return;
  it.quantity += delta;
  if (it.quantity <= 0) {
    removeCartItem(id);
    return;
  }
  renderCartView();
};

window.removeCartItem = function(id) {
  CART_STATE = CART_STATE.filter(i => i.id !== id);
  renderCartView();
  showToast("Item removido do carrinho.");
};

window.updateCartTotals = function() {
  const subtotal = CART_STATE.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const protectionFee = subtotal > 0 ? (subtotal * 0.10) : 0;
  const shipping = subtotal > 0 ? 25.00 : 0;
  const total = subtotal + protectionFee + shipping;

  const subEl = document.getElementById("cartSubtotal");
  const feeEl = document.getElementById("cartProtectionFee");
  const shipEl = document.getElementById("cartShipping");
  const totEl = document.getElementById("cartTotal");

  if (subEl) subEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
  if (feeEl) feeEl.textContent = `R$ ${protectionFee.toFixed(2).replace('.', ',')}`;
  if (shipEl) shipEl.textContent = `R$ ${shipping.toFixed(2).replace('.', ',')}`;
  if (totEl) totEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
};

window.proceedToCheckout = function() {
  if (CART_STATE.length === 0) {
    showToast("Adicione itens ao carrinho antes de continuar.");
    return;
  }
  switchView('checkout');
};

window.finishSimulatedCheckout = function() {
  showToast("✅ Pagamento Pix simulado com sucesso! Pedido confirmado.");
  CART_STATE = [];
  setTimeout(() => {
    switchView('orderTracking');
  }, 1000);
};

window.renderFavoritesView = function() {
  const grid = document.getElementById("favoritesArtworksGrid");
  if (!grid) return;

  const favArts = COMMISSIONS_DATA.filter(c => FAVORITES_STATE.artworks.includes(c.id));
  if (favArts.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#64748B; padding:30px;">Nenhuma arte favoritada ainda.</p>`;
    return;
  }

  grid.innerHTML = favArts.map(art => `
    <div class="vgen-card">
      <div class="card-media" style="background:${art.bgPattern}; height:180px; display:flex; align-items:center; justify-content:center; border-radius:10px 10px 0 0;">
        <span style="font-weight:800; color:#4F46E5;">${art.title}</span>
      </div>
      <div class="card-content" style="padding:14px;">
        <div style="font-weight:700; margin-bottom:4px;">${art.title}</div>
        <div style="font-size:0.85rem; color:#64748B; margin-bottom:8px;">${art.artistName} (${art.artistHandle})</div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong style="color:#0F172A;">R$ ${art.price.toFixed(2).replace('.', ',')}</strong>
          <button class="btn-primary" style="padding:6px 12px; font-size:0.8rem;" onclick="openArtworkDetailModal(${art.id})">Ver Obra</button>
        </div>
      </div>
    </div>
  `).join("");
};

