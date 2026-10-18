/**
 * AGILIFY - Plataforma de Gestão Integrada e Encomendas Artísticas
 * TCC SENAC Santo Amaro 2026 | Alessandro, Enzo e João Paulo
 * Layout VGen Fiel • Acesso Condicional a Painéis • Onboarding do Artista
 */

// ================= ESTADO GLOBAL DA APLICAÇÃO =================
const AppState = {
  currentUser: {
    isLoggedIn: false,
    role: "visitor", // visitor | client | artist | admin
    name: "Visitante",
    handle: "@visitante",
    avatar: "V",
    email: "",
    userId: null
  },
  currentView: "marketplace",
  currentStyleFilter: "all",
  currentSlotsFilter: "all",
  currentPriceFilter: "all",
  currentSortOrder: "relevance",
  searchQuery: "",
  selectedArtist: null,
  selectedTierPrice: 80,
  selectedArtistHandle: null,
  activeChatId: null,
  authModalRole: "client",
  authMode: "login",
  savedBookmarks: new Set(),
  pendingArtworkAfterLogin: null,
  pendingChatAfterLogin: null,
  pendingArtistSignup: null,
  registerPhotoData: "",
  newArtPhotoData: "",
  editProfilePhotoData: ""
};

// ================= DADOS INICIAIS DO CATÁLOGO (ESTILO VGEN) =================
let COMMISSIONS_DATA = [
  {
    id: 1,
    title: "the critter / YCH & Personagem Custom",
    artistName: "Mayumi Art",
    artistHandle: "@mayumi_arts",
    avatar: "M",
    style: "Anime / Mangá",
    technique: "Clip Studio Paint",
    price: 120,
    slotsStatus: "open",
    slotsText: "OPEN",
    rating: 5.0,
    reviewsCount: 145,
    isHumanVerified: true,
    turnaround: "7 dias úteis",
    description: "Criação de OC, poses dinâmicas e ilustração completa com camadas em alta resolução.",
    bgPattern: "#F5F3FF",
    artTheme: "anime",
    isReadyItem: false
  },
  {
    id: 2,
    title: "YCH Love Sign & Retrato de Casal",
    artistName: "Lucas Prado",
    artistHandle: "@lucasprado_art",
    avatar: "L",
    style: "Semirrealismo",
    technique: "Photoshop & Textured Brushes",
    price: 180,
    slotsStatus: "waitlist",
    slotsText: "WAITLIST",
    rating: 5.0,
    reviewsCount: 110,
    isHumanVerified: true,
    turnaround: "10 dias úteis",
    description: "Retratos dramáticos com iluminação suave, textura de óleo e acabamento de alta definição.",
    bgPattern: "#F0FDF4",
    artTheme: "portrait",
    isReadyItem: false
  },
  {
    id: 3,
    title: "Animated YCH Emote Mega Pack (Mix)",
    artistName: "Gabi Pixel",
    artistHandle: "@gabipixels",
    avatar: "G",
    style: "Pixel Art",
    technique: "Aseprite 32x32 / 64x64",
    price: 60,
    slotsStatus: "open",
    slotsText: "OPEN",
    rating: 5.0,
    reviewsCount: 615,
    isHumanVerified: true,
    turnaround: "3 dias úteis",
    description: "Pacote de emotes animados ou estáticos para Twitch, Discord e stickers de redes sociais.",
    bgPattern: "#FFF1F2",
    artTheme: "pixel",
    isReadyItem: false
  },
  {
    id: 4,
    title: "NEW B3 Explosion YCH & Cena de Ação",
    artistName: "Danilo Castro",
    artistHandle: "@danilocastro_arte",
    avatar: "D",
    style: "Pintura Digital",
    technique: "Procreate & Concept Art",
    price: 240,
    slotsStatus: "open",
    slotsText: "OPEN",
    rating: 5.0,
    reviewsCount: 448,
    isHumanVerified: true,
    turnaround: "12 dias úteis",
    description: "Arte conceitual com efeitos de iluminação volumétrica e perspectiva de cena imersiva.",
    bgPattern: "#F0F9FF",
    artTheme: "scenery",
    isReadyItem: false
  },
  {
    id: 5,
    title: "Chibi Sweetheart & Emotes Fofos",
    artistName: "Camila Bunny",
    artistHandle: "@camila_chibis",
    avatar: "C",
    style: "Chibi & Emotes",
    technique: "Vetor & Ilustração Digital",
    price: 75,
    slotsStatus: "open",
    slotsText: "OPEN",
    rating: 4.9,
    reviewsCount: 88,
    isHumanVerified: true,
    turnaround: "4 dias úteis",
    description: "Estilo chibi expressivo e carismático, perfeito para presentes e avatares pessoais.",
    bgPattern: "#FDF2F8",
    artTheme: "chibi",
    isReadyItem: false
  },
  {
    id: 6,
    title: "Art Print A3 Assinado: 'Aurora Boreal'",
    artistName: "Mayumi Art",
    artistHandle: "@mayumi_arts",
    avatar: "M",
    style: "Pronta-Entrega",
    technique: "Fine Art Print em Algodão",
    price: 95,
    slotsStatus: "open",
    slotsText: "OPEN",
    rating: 5.0,
    reviewsCount: 38,
    isHumanVerified: true,
    turnaround: "Envio em 24h",
    description: "Obra autoral impressa em papel 308g, numerada e assinada. Envio com seguro Correios.",
    bgPattern: "#FAF5FF",
    artTheme: "print",
    isReadyItem: true
  },
  {
    id: 7,
    title: "Model Sheet de Criatura Fantástica",
    artistName: "Rafael Souza",
    artistHandle: "@grimsouza_art",
    avatar: "R",
    style: "Concept Art",
    technique: "Photoshop & Concept",
    price: 190,
    slotsStatus: "open",
    slotsText: "OPEN",
    rating: 4.9,
    reviewsCount: 122,
    isHumanVerified: true,
    turnaround: "8 dias úteis",
    description: "Fichas de visualização frontal, lateral e variações de cor para jogos e quadrinhos.",
    bgPattern: "#FEF3C7",
    artTheme: "creature",
    isReadyItem: false
  },
  {
    id: 8,
    title: "Ilustração Semirrealista Sob Medida",
    artistName: "Lucas Prado",
    artistHandle: "@lucasprado_art",
    avatar: "L",
    style: "Semirrealismo",
    technique: "Pintura Digital Acadêmica",
    price: 210,
    slotsStatus: "waitlist",
    slotsText: "WAITLIST",
    rating: 5.0,
    reviewsCount: 204,
    isHumanVerified: true,
    turnaround: "14 dias úteis",
    description: "Pintura a óleo digital de alta complexidade com foco em luz dramática e anatomia precisa.",
    bgPattern: "#F8FAFC",
    artTheme: "classical",
    isReadyItem: false
  }
];

// Pedidos do Cliente Logado
let CLIENT_ORDERS = [
  {
    code: "#AGI-8041",
    artistName: "Mayumi Art",
    artistHandle: "@mayumi_arts",
    title: "the critter / YCH & Personagem Custom",
    stage: "review",
    stageText: "Rascunho Disponível",
    basePrice: 120,
    totalPix: 132,
    deadline: "22/10/2026",
    actionType: "approve_sketch"
  },
  {
    code: "#AGI-7920",
    artistName: "Gabi Pixel",
    artistHandle: "@gabipixels",
    title: "Animated YCH Emote Mega Pack",
    stage: "done",
    stageText: "Entregue & Concluído",
    basePrice: 60,
    totalPix: 66,
    deadline: "Entregue em 14/10",
    actionType: "download"
  }
];

// Fila de Produção do Artista (Mayumi Art)
let ARTIST_QUEUE = [
  {
    code: "#AGI-8041",
    clientName: "Carlos Eduardo (Cliente)",
    spec: "the critter / YCH • Pose Feiticeira",
    payout: 120.00,
    stage: "review",
    stageText: "Rascunho sob Avaliação",
    nextStageLabel: "Avançar para Pintura Final"
  },
  {
    code: "#AGI-8055",
    clientName: "Mariana Costa",
    spec: "Busto Anime • Avatar Discord",
    payout: 80.00,
    stage: "waiting",
    stageText: "Fila de Espera",
    nextStageLabel: "Iniciar Rascunho"
  },
  {
    code: "#AGI-7998",
    clientName: "Rodrigo Toledo",
    spec: "Ilustração Completa • Capa",
    payout: 240.00,
    stage: "production",
    stageText: "Renderização / Cores",
    nextStageLabel: "Concluir & Liberar Repasse"
  }
];

// Moderação Administrativa (Anti-IA)
let ADMIN_MODERATION = [
  {
    id: 101,
    artistName: "Danilo Castro (@danilocastro_arte)",
    artworkTitle: "NEW B3 Explosion YCH",
    declaredTechnique: "Procreate & Concept Art",
    fileProof: "explosao_camadas_v3.psd (48 camadas)",
    status: "Pendente de Homologação",
    statusType: "waiting"
  },
  {
    id: 102,
    artistName: "Rafael Souza (@grimsouza_art)",
    artworkTitle: "Model Sheet Criatura",
    declaredTechnique: "Photoshop CC & Sketches",
    fileProof: "processo_sketches_timelapse.mp4",
    status: "Pendente de Homologação",
    statusType: "waiting"
  }
];

let USERS_DATA = [
  { id: 1, name: "Carlos Eduardo", handle: "@carlos_ed", email: "cliente@senac.br", password: "123456", role: "client", avatar: "C" },
  { id: 2, name: "Mayumi Art", handle: "@mayumi_arts", email: "mayumi@agilify.com", password: "123456", role: "artist", avatar: "M" },
  { id: 3, name: "Lucas Prado", handle: "@lucasprado_art", email: "lucas@agilify.com", password: "123456", role: "artist", avatar: "L" },
  { id: 4, name: "Gabi Pixel", handle: "@gabipixels", email: "gabi@agilify.com", password: "123456", role: "artist", avatar: "G" },
  { id: 5, name: "Danilo Castro", handle: "@danilocastro_arte", email: "danilo@agilify.com", password: "123456", role: "artist", avatar: "D" },
  { id: 6, name: "Camila Bunny", handle: "@camila_chibis", email: "camila@agilify.com", password: "123456", role: "artist", avatar: "C" },
  { id: 7, name: "Rafael Souza", handle: "@grimsouza_art", email: "rafael@agilify.com", password: "123456", role: "artist", avatar: "R" },
  { id: 8, name: "Coordenação Senac", handle: "@admin_senac", email: "admin@senac.br", password: "admin", role: "admin", avatar: "A" }
];

let ARTIST_PROFILES = {
  "@mayumi_arts": { city: "São Paulo, SP", bio: "Ilustradora autoral focada em personagens, OCs e peças digitais em alta resolução.", technique: "Clip Studio Paint", turnaround: "7 dias úteis" },
  "@lucasprado_art": { city: "Curitiba, PR", bio: "Retratos semirrealistas com iluminação cinematográfica e textura de óleo digital.", technique: "Photoshop", turnaround: "10 dias úteis" },
  "@gabipixels": { city: "Recife, PE", bio: "Pixel art e emotes animados para streams, Discord e jogos independentes.", technique: "Aseprite", turnaround: "3 dias úteis" },
  "@danilocastro_arte": { city: "Belo Horizonte, MG", bio: "Concept art de ação, explosões e cenários com luz volumétrica.", technique: "Procreate", turnaround: "12 dias úteis" },
  "@camila_chibis": { city: "Rio de Janeiro, RJ", bio: "Chibis expressivos, stickers e avatares fofos para presentes e redes.", technique: "Ilustração vetorial", turnaround: "4 dias úteis" },
  "@grimsouza_art": { city: "Porto Alegre, RS", bio: "Model sheets e criaturas fantásticas para jogos e quadrinhos.", technique: "Photoshop & Concept", turnaround: "8 dias úteis" }
};

let CHAT_THREADS = [
  {
    id: 1,
    clientEmail: "cliente@senac.br",
    clientName: "Carlos Eduardo",
    artistHandle: "@mayumi_arts",
    artistName: "Mayumi Art",
    artworkId: 1,
    artworkTitle: "the critter / YCH & Personagem Custom",
    status: "accepted",
    messages: [
      { from: "client", text: "Oi Mayumi! Vi sua arte do critter e gostei demais 🔥", at: "14:02" },
      { from: "artist", text: "Oi Carlos! Que bom 😊 Quer conversar sobre essa peça?", at: "14:05" },
      { from: "client", text: "Sim! Dá para fazer o personagem com cabelo azul e fundo de floresta?", at: "14:07" },
      { from: "artist", text: "Dá sim. Posso incluir o fundo e 2 revisões no rascunho.", at: "14:09" },
      { from: "client", text: "Perfeito. Qual o prazo?", at: "14:10" },
      { from: "artist", text: "7 dias úteis depois do aceite. Qualquer dúvida é só mandar aqui.", at: "14:12" },
      { from: "client", text: "Fechado! Obrigado 🙌", at: "14:13" }
    ]
  },
  {
    id: 2,
    clientEmail: "cliente@senac.br",
    clientName: "Carlos Eduardo",
    artistHandle: "@lucasprado_art",
    artistName: "Lucas Prado",
    artworkId: 2,
    artworkTitle: "YCH Love Sign & Retrato de Casal",
    status: "pending",
    messages: []
  }
];
let nextUserId = 20;
let nextChatId = 3;
let nextArtworkId = 20;

function escapeHtml(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getUserByEmail(email) {
  return USERS_DATA.find(u => u.email.toLowerCase() === String(email || "").toLowerCase());
}

function getUserByHandle(handle) {
  return USERS_DATA.find(u => u.handle === handle);
}

function ensureArtistProfile(handle, extras = {}) {
  if (!ARTIST_PROFILES[handle]) {
    ARTIST_PROFILES[handle] = {
      city: extras.city || "Brasil",
      bio: extras.bio || "Artista independente na vitrine Agilify.",
      technique: extras.technique || "Digital",
      turnaround: extras.turnaround || "7 dias úteis"
    };
  }
  return ARTIST_PROFILES[handle];
}

function readImageAsDataUrl(file, onDone) {
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    showToast("Selecione um arquivo de imagem.");
    return;
  }
  const reader = new FileReader();
  reader.onload = () => onDone(reader.result);
  reader.readAsDataURL(file);
}

function avatarMarkup(letter, photoUrl, className) {
  if (photoUrl) {
    return `<img class="${className} avatar-photo" src="${photoUrl}" alt="">`;
  }
  return `<div class="${className}">${escapeHtml(letter || "?")}</div>`;
}

function artistPhotoByHandle(handle) {
  return getUserByHandle(handle)?.photoUrl || "";
}

function artworkMediaHtml(item) {
  if (item.imageUrl) {
    return `<img class="artwork-photo-fill" src="${item.imageUrl}" alt="${escapeHtml(item.title)}">`;
  }
  return getArtSvgIllustration(item.artTheme, item.bgPattern);
}

function chatStatusLabel(status) {
  if (status === "pending") return "Aguardando aceite do artista";
  if (status === "accepted") return "Chat aceito";
  if (status === "declined") return "Recusado";
  return status;
}

// ================= RENDERIZADOR DOS CARDS VGEN =================

function getArtSvgIllustration(type, bg) {
  return `
    <svg width="100%" height="100%" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="250" fill="${bg}"/>
      <line x1="0" y1="40" x2="400" y2="40" stroke="#E2E8F0" stroke-width="1"/>
      <line x1="0" y1="210" x2="400" y2="210" stroke="#E2E8F0" stroke-width="1"/>
      <g transform="translate(100, 30)">
        <rect x="0" y="0" width="200" height="180" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5" rx="3"/>
        <path d="M20 160 L60 80 L110 130 L150 60 L180 160 Z" fill="#E0E7FF" stroke="#4F46E5" stroke-width="1.5"/>
        <circle cx="150" cy="50" r="16" fill="#FDE68A" stroke="#F59E0B" stroke-width="1.5"/>
        <circle cx="90" cy="90" r="28" fill="none" stroke="#6366F1" stroke-width="1.5" stroke-dasharray="3 3"/>
        <rect x="25" y="145" width="20" height="4" fill="#4F46E5" rx="1"/>
        <rect x="50" y="145" width="20" height="4" fill="#059669" rx="1"/>
        <rect x="75" y="145" width="20" height="4" fill="#D97706" rx="1"/>
        <rect x="100" y="145" width="20" height="4" fill="#0F172A" rx="1"/>
      </g>
    </svg>
  `;
}

function renderCommissions() {
  const commissionsGrid = document.getElementById("commissionsGrid");
  const emptyState = document.getElementById("emptyState");

  let filtered = COMMISSIONS_DATA.filter(item => {
    if (AppState.currentStyleFilter === "Pronta-Entrega" && !item.isReadyItem) return false;
    if (AppState.currentStyleFilter === "Anti-IA" && !item.isHumanVerified) return false;
    if (AppState.currentStyleFilter !== "all" && AppState.currentStyleFilter !== "Pronta-Entrega" && AppState.currentStyleFilter !== "Anti-IA") {
      if (item.style !== AppState.currentStyleFilter) return false;
    }

    if (AppState.currentSlotsFilter === "open" && item.slotsStatus !== "open") return false;

    if (AppState.searchQuery.trim() !== "") {
      const q = AppState.searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchArtist = item.artistName.toLowerCase().includes(q) || item.artistHandle.toLowerCase().includes(q);
      const matchStyle = item.style.toLowerCase().includes(q) || item.technique.toLowerCase().includes(q);
      if (!matchTitle && !matchArtist && !matchStyle) return false;
    }

    return true;
  });

  if (AppState.currentSortOrder === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (AppState.currentSortOrder === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (AppState.currentSortOrder === "rating") {
    filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }

  if (filtered.length === 0) {
    commissionsGrid.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  commissionsGrid.innerHTML = filtered.map(item => `
    <article class="vgen-card" onclick="handleCardClick(${item.id})">
      <div class="vgen-card-media">
        ${artworkMediaHtml(item)}
        
        <!-- Bright OPEN badge like VGen -->
        <span class="${item.slotsStatus === 'open' ? 'vgen-open-badge' : 'vgen-waitlist-badge'}">
          ${item.slotsText}
        </span>

        <!-- Bookmark button -->
        <button class="vgen-bookmark-btn" onclick="toggleBookmark(event, ${item.id})" title="Salvar referência">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="${AppState.savedBookmarks.has(item.id) ? '#4F46E5' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>

      <div class="vgen-card-info">
        <h3 class="vgen-card-title">${item.title}</h3>
        <div class="vgen-artist-row">
          <div class="vgen-artist-meta" onclick="openArtistProfile(event, '${item.artistHandle}')" title="Ver perfil do artista">
            ${avatarMarkup(item.avatar, artistPhotoByHandle(item.artistHandle), "vgen-artist-avatar")}
            <span class="vgen-artist-name">${item.artistName}</span>
            <span class="vgen-verified-icon" title="Artista Verificado">✓</span>
          </div>
          <div class="vgen-rating">★ ${item.rating.toFixed(1)} <span>(${item.reviewsCount})</span></div>
        </div>
        <div class="vgen-price-tag">A partir de R$ ${item.price.toFixed(2).replace('.', ',')}</div>
      </div>
    </article>
  `).join('');
}

// ================= FLUXO DE COMPRA & AUTENTICAÇÃO LIVRE =================

window.handleCardClick = function(id) {
  openArtworkDetail(id);
};

window.toggleBookmark = function(e, id) {
  e.stopPropagation();
  if (AppState.savedBookmarks.has(id)) {
    AppState.savedBookmarks.delete(id);
    showToast("Referência removida dos seus salvos.");
  } else {
    AppState.savedBookmarks.add(id);
    showToast("Arte salva nas suas referências!");
  }
  renderCommissions();
};

// ================= GESTÃO DE NAVEGAÇÃO LIVRE (SEM LOGIN OBRIGATÓRIO) =================

function requiredRoleForView(viewName) {
  if (viewName === "artist") return "artist";
  if (viewName === "admin") return "admin";
  if (viewName === "client") return "client";
  if (viewName === "chats") return "chats";
  return null;
}

function canOpenView(viewName) {
  const need = requiredRoleForView(viewName);
  if (!need) return true;
  const u = AppState.currentUser;
  if (!u.isLoggedIn) return false;
  if (need === "chats") return u.role === "client" || u.role === "artist";
  return u.role === need;
}

window.switchView = function(viewName) {
  if (!canOpenView(viewName)) {
    const labels = {
      artist: "Portal do Artista",
      admin: "Painel Admin",
      client: "Área do Cliente",
      chats: "Conversas"
    };
    const loginRole = viewName === "chats" ? "client" : viewName;
    const desc = viewName === "artist"
      ? "O Portal do Artista só aparece depois do login de artista."
      : viewName === "admin"
        ? "O Painel Admin só aparece depois do login de administrador."
        : viewName === "client"
          ? "A Área do Cliente só aparece depois do login de cliente."
          : "Entre para ver e responder as conversas.";
    showToast(desc);
    openAuthModalWithTab(loginRole, desc);
    return;
  }

  AppState.currentView = viewName;

  document.querySelectorAll(".app-view").forEach(view => {
    view.style.display = "none";
  });

  const targetView = document.getElementById(`view${capitalize(viewName)}`);
  if (targetView) targetView.style.display = "block";

  document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
  if (viewName === "marketplace") {
    const navComm = document.getElementById("navCommissionBtn");
    if (navComm) navComm.classList.add("active");
    renderCommissions();
  } else if (viewName === "artist") {
    const navArt = document.getElementById("navArtistBtn");
    if (navArt) navArt.classList.add("active");
    renderArtistQueue();
  } else if (viewName === "client") {
    const navCli = document.getElementById("navClientBtn");
    if (navCli) navCli.classList.add("active");
    renderClientOrders();
  } else if (viewName === "admin") {
    const navAdm = document.getElementById("navAdminBtn");
    if (navAdm) navAdm.classList.add("active");
    renderAdminModeration();
    renderAdminUsers();
    renderAdminArtworks();
  } else if (viewName === "chats") {
    const navChats = document.getElementById("navChatsBtn");
    if (navChats) navChats.classList.add("active");
    renderChatsView();
    openChatApp();
  } else if (viewName === "artistProfile") {
    renderArtistProfile(AppState.selectedArtistHandle);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
};

function updateSessionUI() {
  const sessionLoggedOut = document.getElementById("sessionLoggedOut");
  const sessionLoggedIn = document.getElementById("sessionLoggedIn");
  const authProtectedLinks = document.getElementById("authProtectedLinks");
  const navClientDynamicBtn = document.getElementById("navClientDynamicBtn");
  const navArtistDynamicBtn = document.getElementById("navArtistDynamicBtn");
  const navAdminDynamicBtn = document.getElementById("navAdminDynamicBtn");
  const userBadgeAvatar = document.getElementById("userBadgeAvatar");
  const userBadgeName = document.getElementById("userBadgeName");
  const userBadgeRole = document.getElementById("userBadgeRole");

  const btnOpenAuth = document.getElementById("btnOpenAuthModal");
  const navArtistBtn = document.getElementById("navArtistBtn");
  const navAdminBtn = document.getElementById("navAdminBtn");
  const navClientBtn = document.getElementById("navClientBtn");
  const navChatsBtn = document.getElementById("navChatsBtn");
  const role = AppState.currentUser.role;
  const logged = AppState.currentUser.isLoggedIn;

  if (navArtistBtn) navArtistBtn.style.display = logged && role === "artist" ? "inline-flex" : "none";
  if (navAdminBtn) navAdminBtn.style.display = logged && role === "admin" ? "inline-flex" : "none";
  if (navClientBtn) navClientBtn.style.display = logged && role === "client" ? "inline-flex" : "none";
  if (navChatsBtn) navChatsBtn.style.display = logged && (role === "client" || role === "artist") ? "inline-flex" : "none";

  if (!logged) {
    if (sessionLoggedOut) sessionLoggedOut.style.display = "flex";
    if (sessionLoggedIn) sessionLoggedIn.style.display = "none";
    if (authProtectedLinks) authProtectedLinks.style.display = "none";
    if (btnOpenAuth) btnOpenAuth.style.display = "";
    return;
  }

  if (sessionLoggedOut) sessionLoggedOut.style.display = "none";
  if (sessionLoggedIn) sessionLoggedIn.style.display = "flex";
  if (authProtectedLinks) authProtectedLinks.style.display = "flex";

  if (userBadgeAvatar) {
    if (AppState.currentUser.photoUrl) {
      userBadgeAvatar.innerHTML = `<img class="avatar-photo" src="${AppState.currentUser.photoUrl}" alt="">`;
    } else {
      userBadgeAvatar.textContent = AppState.currentUser.avatar;
    }
  }
  if (userBadgeName) userBadgeName.textContent = AppState.currentUser.name;

  if (navClientDynamicBtn) navClientDynamicBtn.style.display = role === "client" ? "inline-flex" : "none";
  if (navArtistDynamicBtn) navArtistDynamicBtn.style.display = role === "artist" ? "inline-flex" : "none";
  if (navAdminDynamicBtn) navAdminDynamicBtn.style.display = role === "admin" ? "inline-flex" : "none";

  if (userBadgeRole) {
    if (AppState.currentUser.role === "client") userBadgeRole.textContent = "Cliente";
    if (AppState.currentUser.role === "artist") userBadgeRole.textContent = "Artista";
    if (AppState.currentUser.role === "admin") userBadgeRole.textContent = "Admin";
  }

  const menuViewProfile = document.getElementById("menuViewProfile");
  const menuEditProfile = document.getElementById("menuEditProfile");
  if (menuViewProfile) menuViewProfile.style.display = role === "artist" ? "flex" : "none";
  if (menuEditProfile) menuEditProfile.style.display = (role === "artist" || role === "client") ? "flex" : "none";
  const menuAddArt = document.getElementById("menuAddArt");
  if (menuAddArt) menuAddArt.style.display = role === "artist" ? "flex" : "none";
  closeUserMenu();
}

function applyUserSession(user, options = {}) {
  AppState.currentUser.isLoggedIn = true;
  AppState.currentUser.userId = user.id;
  AppState.currentUser.role = user.role;
  AppState.currentUser.name = user.name;
  AppState.currentUser.handle = user.handle;
  AppState.currentUser.avatar = user.avatar || user.name.charAt(0).toUpperCase();
  AppState.currentUser.email = user.email;
  AppState.currentUser.photoUrl = user.photoUrl || "";

  const studioArtistName = document.getElementById("studioArtistName");
  if (studioArtistName && user.role === "artist") studioArtistName.textContent = user.name;

  const studioBioInput = document.getElementById("studioBioInput");
  if (studioBioInput && user.role === "artist") {
    studioBioInput.value = `https://agilify.com.br/${user.handle}/vitrine`;
  }

  updateSessionUI();

  if (options.skipRedirect) return;

  if (AppState.pendingChatAfterLogin) {
    const pending = AppState.pendingChatAfterLogin;
    AppState.pendingChatAfterLogin = null;
    requestChatWithArtist(pending.artistHandle, pending.artworkId);
    return;
  }

  if (AppState.pendingArtworkAfterLogin) {
    const pendingId = AppState.pendingArtworkAfterLogin;
    AppState.pendingArtworkAfterLogin = null;
    openArtworkDetail(pendingId);
    return;
  }

  if (user.role === "client") switchView("client");
  else if (user.role === "artist") switchView("artist");
  else if (user.role === "admin") switchView("admin");
}

window.loginAs = function(role, customName, customHandle) {
  let user = null;
  if (role === "client") user = USERS_DATA.find(u => u.role === "client");
  if (role === "artist") {
    user = USERS_DATA.find(u => u.handle === (customHandle || "@mayumi_arts") && u.role === "artist")
      || USERS_DATA.find(u => u.role === "artist");
  }
  if (role === "admin") user = USERS_DATA.find(u => u.role === "admin");

  if (!user && role === "artist" && customName) {
    user = {
      id: nextUserId++,
      name: customName,
      handle: customHandle,
      email: `${String(customHandle).replace("@", "")}@agilify.com`,
      password: "123456",
      role: "artist",
      avatar: customName.charAt(0).toUpperCase()
    };
    USERS_DATA.push(user);
    ensureArtistProfile(customHandle, { bio: `Estúdio de ${customName}.` });
  }

  if (!user) {
    showToast("Usuário de demonstração não encontrado.");
    return;
  }

  applyUserSession(user);
  showToast(`Bem-vindo, ${user.name}!`);
};

window.logout = function() {
  AppState.currentUser = {
    isLoggedIn: false,
    role: "visitor",
    name: "Visitante",
    handle: "@visitante",
    avatar: "V",
    email: "",
    userId: null,
    photoUrl: ""
  };
  updateSessionUI();
  switchView("marketplace");
  showToast("Você saiu da sua conta. Navegando como visitante.");
};

window.setAuthMode = function(mode) {
  AppState.authMode = mode;
  const loginFields = document.getElementById("authLoginFields");
  const registerFields = document.getElementById("authRegisterFields");
  const demoBox = document.getElementById("authDemoBox");
  const tabLogin = document.getElementById("tabAuthLogin");
  const tabRegister = document.getElementById("tabAuthRegister");
  const title = document.getElementById("authModalHeaderTitle");
  const confirmBtn = document.getElementById("btnConfirmManualLogin");
  const handleBlock = document.getElementById("registerHandleBlock");

  if (tabLogin) tabLogin.classList.toggle("active", mode === "login");
  if (tabRegister) tabRegister.classList.toggle("active", mode === "register");
  if (loginFields) loginFields.style.display = mode === "login" ? "block" : "none";
  if (registerFields) registerFields.style.display = mode === "register" ? "block" : "none";
  if (demoBox) demoBox.style.display = mode === "login" ? "block" : "none";
  if (title) {
    title.textContent = mode === "login"
      ? "Entrar na plataforma"
      : (AppState.authModalRole === "artist" ? "Criar usuário e perfil de artista" : "Criar usuário");
  }
  if (handleBlock) handleBlock.style.display = AppState.authModalRole === "artist" ? "block" : "none";
  const artistExtra = document.getElementById("artistRegisterExtra");
  if (artistExtra) {
    artistExtra.style.display = (mode === "register" && AppState.authModalRole === "artist") ? "block" : "none";
  }
  const authWindow = document.getElementById("authModalWindow");
  if (authWindow) {
    authWindow.classList.toggle("modal-lg", mode === "register" && AppState.authModalRole === "artist");
  }
  if (confirmBtn) {
    confirmBtn.textContent = mode === "login"
      ? "Entrar"
      : (AppState.authModalRole === "artist" ? "Criar perfil de artista" : "Criar usuário");
  }
  const terms = document.getElementById("registerAgreeTerms");
  if (terms && mode === "register") terms.checked = false;
  const antiIa = document.getElementById("registerAgreeAntiIa");
  if (antiIa && mode === "register") antiIa.checked = false;
};

window.togglePasswordVisibility = function(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const show = input.type === "password";
  input.type = show ? "text" : "password";
  if (btn) btn.textContent = show ? "Ocultar senha" : "Ver senha";
};

window.submitAuthForm = function() {
  if (AppState.authMode === "register") {
    registerNewUserFromModal();
    return;
  }

  const email = document.getElementById("clientLoginEmail").value.trim();
  const password = document.getElementById("clientLoginPassword").value;
  const user = getUserByEmail(email);

  if (!user || user.password !== password) {
    showToast("E-mail ou senha inválidos.");
    return;
  }

  document.getElementById("authModal").style.display = "none";
  applyUserSession(user);
  showToast(`Olá, ${user.name}! Login realizado.`);
};

function registerNewUserFromModal() {
  if (AppState.authModalRole === "admin") {
    showToast("Contas de administrador só podem ser criadas no painel admin.");
    return;
  }

  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value;
  const passwordConfirm = document.getElementById("registerPasswordConfirm").value;
  let handle = document.getElementById("registerHandle").value.trim();

  if (!name || !email || !password) {
    showToast("Preencha nome, e-mail e senha para criar o usuário.");
    return;
  }
  if (password !== passwordConfirm) {
    showToast("A senha e a confirmação não coincidem.");
    return;
  }
  if (!document.getElementById("registerAgreeTerms")?.checked) {
    showToast("Para criar a conta é preciso aceitar os Termos de Uso.");
    return;
  }
  if (getUserByEmail(email)) {
    showToast("Este e-mail já está cadastrado. Entre com sua senha.");
    return;
  }

  if (AppState.authModalRole === "artist") {
    handle = handle || `@${name.toLowerCase().replace(/\s+/g, "_")}`;
    if (!handle.startsWith("@")) handle = `@${handle}`;
    const agreeAntiIa = document.getElementById("registerAgreeAntiIa")?.checked;
    if (!agreeAntiIa) {
      showToast("Para criar o perfil de artista é preciso concordar com a autoria humana.");
      return;
    }

    const technique = document.getElementById("registerTechnique").value || "Digital";
    const turnaround = document.getElementById("registerTurnaround").value || "7 dias úteis";
    const basePrice = parseFloat(document.getElementById("registerBasePrice").value) || 100;
    const slots = parseInt(document.getElementById("registerSlots").value) || 3;
    const checkedStyles = Array.from(document.querySelectorAll("input[name='regStyles']:checked")).map(cb => cb.value);
    const primaryStyle = checkedStyles.length > 0 ? checkedStyles[0] : "Semirrealismo";
    const photoUrl = AppState.registerPhotoData || "";

    const user = {
      id: nextUserId++,
      name,
      handle,
      email,
      password,
      role: "artist",
      avatar: name.charAt(0).toUpperCase(),
      photoUrl
    };
    USERS_DATA.push(user);

    ensureArtistProfile(handle, { technique, turnaround, bio: `Estilo ${primaryStyle} autoral.` });

    COMMISSIONS_DATA.unshift({
      id: nextArtworkId++,
      title: `Arte autoral de ${name}`,
      artistName: name,
      artistHandle: handle,
      avatar: name.charAt(0).toUpperCase(),
      style: primaryStyle,
      technique,
      price: basePrice,
      slotsStatus: "open",
      slotsText: "OPEN",
      rating: 5.0,
      reviewsCount: 1,
      isHumanVerified: true,
      turnaround,
      description: `Estilo ${primaryStyle} autoral. Arquivos PSD com camadas incluídos e autoria humana verificada.`,
      bgPattern: "#F8FAFC",
      artTheme: "anime",
      isReadyItem: primaryStyle === "Pronta-Entrega"
    });

    const openSlotsCount = document.getElementById("artistOpenSlotsCount");
    if (openSlotsCount) openSlotsCount.textContent = slots;

    AppState.registerPhotoData = "";
    document.getElementById("authModal").style.display = "none";
    applyUserSession(user);
    showToast(`Perfil de artista criado. Bem-vindo, ${name}!`);
    return;
  }

  handle = handle || `@${email.split("@")[0]}`;

  const user = {
    id: nextUserId++,
    name,
    handle,
    email,
    password,
    role: AppState.authModalRole,
    avatar: name.charAt(0).toUpperCase()
  };
  USERS_DATA.push(user);

  document.getElementById("authModal").style.display = "none";
  applyUserSession(user);
  showToast(`Conta criada. Bem-vindo, ${name}!`);
}

// ================= MODAL DE AUTENTICAÇÃO =================

window.openAuthModalWithTab = function(role, customDesc) {
  AppState.authModalRole = role;
  const authModal = document.getElementById("authModal");
  const authModalHeaderDesc = document.getElementById("authModalHeaderDesc");
  const tabAuthClient = document.getElementById("tabAuthClient");
  const tabAuthArtist = document.getElementById("tabAuthArtist");
  const tabAuthAdmin = document.getElementById("tabAuthAdmin");
  const btnQuickDemoLogin = document.getElementById("btnQuickDemoLogin");
  const tabAuthRegister = document.getElementById("tabAuthRegister");

  if (authModalHeaderDesc) {
    authModalHeaderDesc.textContent = customDesc || "Crie um usuário ou entre com e-mail e senha.";
  }

  [tabAuthClient, tabAuthArtist, tabAuthAdmin].forEach(t => t && t.classList.remove("active"));

  if (role === "client") {
    if (tabAuthClient) tabAuthClient.classList.add("active");
    if (btnQuickDemoLogin) btnQuickDemoLogin.textContent = "Entrar como Carlos (Cliente / Comprador)";
    if (tabAuthRegister) tabAuthRegister.style.display = "";
    document.getElementById("clientLoginEmail").value = "cliente@senac.br";
    document.getElementById("clientLoginPassword").value = "123456";
  } else if (role === "artist") {
    if (tabAuthArtist) tabAuthArtist.classList.add("active");
    if (btnQuickDemoLogin) btnQuickDemoLogin.textContent = "Entrar como Mayumi Art (Artista)";
    if (tabAuthRegister) tabAuthRegister.style.display = "";
    document.getElementById("clientLoginEmail").value = "mayumi@agilify.com";
    document.getElementById("clientLoginPassword").value = "123456";
  } else if (role === "admin") {
    if (tabAuthAdmin) tabAuthAdmin.classList.add("active");
    if (btnQuickDemoLogin) btnQuickDemoLogin.textContent = "Entrar como Administrador";
    if (tabAuthRegister) tabAuthRegister.style.display = "none";
    AppState.authMode = "login";
    document.getElementById("clientLoginEmail").value = "admin@senac.br";
    document.getElementById("clientLoginPassword").value = "admin";
  }

  setAuthMode(AppState.authModalRole === "admin" ? "login" : AppState.authMode);
  if (authModal) authModal.style.display = "flex";
};

// ================= MODAL DE DETALHE DA ARTE =================

function formatBRL(value) {
  return `R$ ${Number(value).toFixed(2).replace('.', ',')}`;
}

window.openArtworkDetail = function(id) {
  const item = COMMISSIONS_DATA.find(a => a.id === id);
  if (!item) return;

  AppState.selectedArtist = item;
  AppState.selectedTierPrice = item.price;

  const modal = document.getElementById("artworkDetailModal");
  const titleEl = document.getElementById("artworkDetailTitle");
  const subtitleEl = document.getElementById("artworkDetailSubtitle");
  const photoEl = document.getElementById("artworkDetailPhoto");
  const descEl = document.getElementById("artworkDetailDescription");
  const specsEl = document.getElementById("artworkDetailSpecs");
  const priceEl = document.getElementById("artworkDetailPrice");

  if (titleEl) titleEl.textContent = item.title;
  if (subtitleEl) subtitleEl.textContent = `${item.artistName} (${item.artistHandle})`;
  if (photoEl) photoEl.innerHTML = artworkMediaHtml(item);
  if (descEl) descEl.textContent = item.description;
  if (priceEl) priceEl.textContent = formatBRL(item.price);

  if (specsEl) {
    const specs = [
      ["Artista", item.artistName],
      ["Estilo", item.style],
      ["Técnica", item.technique],
      ["Prazo", item.turnaround],
      ["Autoria", item.isHumanVerified ? "Humana verificada" : "Não verificada"],
      ["Disponibilidade", item.slotsText]
    ];

    specsEl.innerHTML = specs.map(([label, value]) => `
      <div class="artwork-spec-row">
        <dt>${label}</dt>
        <dd>${value}</dd>
      </div>
    `).join("");
  }

  const btnChat = document.getElementById("btnRequestChatFromArt");
  if (btnChat) {
    btnChat.dataset.artworkId = String(item.id);
    btnChat.dataset.artistHandle = item.artistHandle;
  }

  if (modal) modal.style.display = "flex";
};

window.closeArtworkDetail = function() {
  const modal = document.getElementById("artworkDetailModal");
  if (modal) modal.style.display = "none";
};

window.openArtistProfile = function(event, handle) {
  if (event) event.stopPropagation();
  AppState.selectedArtistHandle = handle;
  switchView("artistProfile");
};

window.toggleUserMenu = function() {
  const dropdown = document.getElementById("userDropdown");
  const btn = document.getElementById("btnUserMenu");
  if (!dropdown) return;
  const open = dropdown.hasAttribute("hidden");
  if (open) {
    dropdown.removeAttribute("hidden");
    if (btn) btn.setAttribute("aria-expanded", "true");
  } else {
    dropdown.setAttribute("hidden", "");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }
};

window.closeUserMenu = function() {
  const dropdown = document.getElementById("userDropdown");
  const btn = document.getElementById("btnUserMenu");
  if (dropdown) dropdown.setAttribute("hidden", "");
  if (btn) btn.setAttribute("aria-expanded", "false");
};

window.openEditProfileModal = function() {
  if (!AppState.currentUser.isLoggedIn) {
    openAuthModalWithTab("client", "Entre para editar o perfil.");
    return;
  }
  const user = USERS_DATA.find(u => u.id === AppState.currentUser.userId) || getUserByEmail(AppState.currentUser.email);
  if (!user) return;
  AppState.editProfilePhotoData = user.photoUrl || "";
  document.getElementById("editProfileEmail").value = user.email;
  document.getElementById("editProfileHandle").value = user.handle;
  document.getElementById("editProfileName").value = user.name;
  const artistFields = document.getElementById("editProfileArtistFields");
  const preview = document.getElementById("editProfilePhotoPreview");
  if (user.role === "artist") {
    const profile = ensureArtistProfile(user.handle);
    if (artistFields) artistFields.style.display = "block";
    document.getElementById("editProfileBio").value = profile.bio || "";
    document.getElementById("editProfileCity").value = profile.city || "";
    document.getElementById("editProfileTechnique").value = profile.technique || "";
    document.getElementById("editProfileTurnaround").value = profile.turnaround || "";
    if (preview) {
      preview.innerHTML = user.photoUrl ? `<img src="${user.photoUrl}" alt="Foto">` : "Foto";
    }
  } else if (artistFields) {
    artistFields.style.display = "none";
  }
  document.getElementById("editProfileModal").style.display = "flex";
};

window.closeEditProfileModal = function() {
  document.getElementById("editProfileModal").style.display = "none";
};

window.saveEditedProfile = function() {
  const user = USERS_DATA.find(u => u.id === AppState.currentUser.userId) || getUserByEmail(AppState.currentUser.email);
  if (!user) return;
  const name = document.getElementById("editProfileName").value.trim();
  if (!name) {
    showToast("O nome não pode ficar vazio.");
    return;
  }
  user.name = name;
  user.avatar = name.charAt(0).toUpperCase();
  if (AppState.editProfilePhotoData) user.photoUrl = AppState.editProfilePhotoData;

  if (user.role === "artist") {
    const profile = ensureArtistProfile(user.handle);
    profile.bio = document.getElementById("editProfileBio").value.trim() || profile.bio;
    profile.city = document.getElementById("editProfileCity").value.trim() || profile.city;
    profile.technique = document.getElementById("editProfileTechnique").value.trim() || profile.technique;
    profile.turnaround = document.getElementById("editProfileTurnaround").value.trim() || profile.turnaround;
    COMMISSIONS_DATA.forEach(art => {
      if (art.artistHandle === user.handle) {
        art.artistName = name;
        art.avatar = user.avatar;
        art.technique = profile.technique;
        art.turnaround = profile.turnaround;
      }
    });
  }

  AppState.currentUser.name = user.name;
  AppState.currentUser.avatar = user.avatar;
  AppState.currentUser.photoUrl = user.photoUrl || "";
  const studioArtistName = document.getElementById("studioArtistName");
  if (studioArtistName && user.role === "artist") studioArtistName.textContent = user.name;
  updateSessionUI();
  closeEditProfileModal();
  renderCommissions();
  if (AppState.currentView === "artistProfile") renderArtistProfile(user.handle);
  showToast("Perfil atualizado.");
};

window.openMyArtistProfile = function() {
  if (!AppState.currentUser.isLoggedIn || AppState.currentUser.role !== "artist") {
    showToast("O perfil público com artes fica disponível para contas de artista.");
    return;
  }
  openArtistProfile(null, AppState.currentUser.handle);
};

function renderArtistProfile(handle) {
  const hero = document.getElementById("artistProfileHero");
  const grid = document.getElementById("artistProfileGrid");
  const countEl = document.getElementById("artistProfileArtCount");
  if (!hero || !grid) return;

  const arts = COMMISSIONS_DATA.filter(a => a.artistHandle === handle);
  const sample = arts[0];
  const user = getUserByHandle(handle);
  const profile = ensureArtistProfile(handle);
  const name = user?.name || sample?.artistName || handle;
  const avatar = user?.avatar || sample?.avatar || name.charAt(0).toUpperCase();
  const styles = [...new Set(arts.map(a => a.style))].join(", ") || "Estilo em definição";

  const isOwn = AppState.currentUser.isLoggedIn && AppState.currentUser.handle === handle;
  const editTop = document.getElementById("btnEditProfileTop");
  const addArtTop = document.getElementById("btnAddArtFromProfile");
  if (editTop) editTop.style.display = isOwn ? "inline-flex" : "none";
  if (addArtTop) addArtTop.style.display = isOwn ? "inline-flex" : "none";
  const chatBtn = isOwn
    ? `<button class="btn-secondary" onclick="openEditProfileModal()">✎ Editar perfil</button>`
    : `<button class="btn-primary" onclick="requestChatWithArtist('${handle}', ${sample ? sample.id : "null"})">Chamar para conversar</button>`;

  hero.innerHTML = `
    <div class="artist-profile-photo-wrap">
      ${avatarMarkup(avatar, user?.photoUrl || "", "artist-profile-avatar")}
    </div>
    <div class="artist-profile-copy">
      <span class="modal-badge">PERFIL DO ARTISTA</span>
      <h2>${escapeHtml(name)} ${isOwn ? `<button class="icon-edit-btn" onclick="openEditProfileModal()" title="Editar perfil">✎</button>` : ""}</h2>
      <p class="artist-handle">${escapeHtml(handle)}</p>
      <h3 class="artwork-detail-heading">Descrição</h3>
      <p class="artist-bio">${escapeHtml(profile.bio)}</p>
      <dl class="artwork-specs-list" style="margin-top:12px;">
        <div class="artwork-spec-row"><dt>Cidade</dt><dd>${escapeHtml(profile.city)}</dd></div>
        <div class="artwork-spec-row"><dt>Técnica</dt><dd>${escapeHtml(profile.technique)}</dd></div>
        <div class="artwork-spec-row"><dt>Prazo médio</dt><dd>${escapeHtml(profile.turnaround)}</dd></div>
        <div class="artwork-spec-row"><dt>Estilos</dt><dd>${escapeHtml(styles)}</dd></div>
        <div class="artwork-spec-row"><dt>Obras na vitrine</dt><dd>${arts.length}</dd></div>
      </dl>
      <div style="margin-top:14px; display:flex; gap:8px; flex-wrap:wrap;">
        ${chatBtn}
      </div>
    </div>
  `;

  if (countEl) countEl.textContent = `${arts.length} obra${arts.length === 1 ? "" : "s"}`;

  if (arts.length === 0) {
    grid.innerHTML = `<p class="view-desc">Este artista ainda não publicou artes.</p>`;
    return;
  }

  grid.innerHTML = arts.map(item => `
    <article class="vgen-card" onclick="handleCardClick(${item.id})">
      <div class="vgen-card-media">${artworkMediaHtml(item)}</div>
      <div class="vgen-card-info">
        <h3 class="vgen-card-title">${item.title}</h3>
        <div class="vgen-price-tag">${formatBRL(item.price)}</div>
        <button class="btn-secondary" style="margin-top:8px; width:100%;" onclick="event.stopPropagation(); requestChatWithArtist('${item.artistHandle}', ${item.id})">Conversar sobre esta arte</button>
      </div>
    </article>
  `).join("");
}

window.requestChatWithArtist = function(artistHandle, artworkId) {
  if (!AppState.currentUser.isLoggedIn) {
    AppState.pendingChatAfterLogin = { artistHandle, artworkId };
    openAuthModalWithTab("client", "Entre ou crie um usuário para solicitar o chat com o artista.");
    return;
  }

  if (AppState.currentUser.role === "artist" && AppState.currentUser.handle === artistHandle) {
    showToast("Você não pode iniciar chat com o próprio perfil.");
    return;
  }

  if (AppState.currentUser.role === "admin") {
    showToast("Use uma conta de cliente para solicitar conversa com o artista.");
    return;
  }

  const artist = getUserByHandle(artistHandle) || { name: artistHandle, handle: artistHandle };
  const art = COMMISSIONS_DATA.find(a => a.id === artworkId);
  const existing = CHAT_THREADS.find(t =>
    t.clientEmail === AppState.currentUser.email &&
    t.artistHandle === artistHandle &&
    t.artworkId === artworkId &&
    t.status !== "declined"
  );

  if (existing) {
    closeArtworkDetail();
    if (existing.status === "accepted") openChatThread(existing.id);
    else {
      showToast("Solicitação já enviada. Aguarde o artista aceitar.");
      switchView("chats");
    }
    return;
  }

  CHAT_THREADS.unshift({
    id: nextChatId++,
    clientEmail: AppState.currentUser.email,
    clientName: AppState.currentUser.name,
    artistHandle,
    artistName: artist.name,
    artworkId: artworkId || null,
    artworkTitle: art ? art.title : "Conversa geral",
    status: "pending",
    messages: []
  });

  closeArtworkDetail();
  showToast("Solicitação de chat enviada. O artista precisa aceitar para vocês conversarem.");
  switchView("chats");
  renderArtistQueue();
};

function threadsForCurrentUser() {
  const u = AppState.currentUser;
  if (!u.isLoggedIn) return [];
  if (u.role === "artist") return CHAT_THREADS.filter(t => t.artistHandle === u.handle);
  if (u.role === "admin") return CHAT_THREADS;
  return CHAT_THREADS.filter(t => t.clientEmail === u.email);
}

function renderChatRows(tbodyId) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;
  const threads = threadsForCurrentUser();
  const isArtist = AppState.currentUser.role === "artist";

  if (!AppState.currentUser.isLoggedIn) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:24px;">Entre na sua conta para ver as conversas.</td></tr>`;
    renderWhatsAppChatList([], isArtist);
    return;
  }

  if (threads.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:24px;">Nenhuma solicitação de chat ainda.</td></tr>`;
    renderWhatsAppChatList([], isArtist);
    return;
  }

  tbody.innerHTML = threads.map(t => {
    const who = isArtist ? t.clientName : t.artistName;
    let actions = "";
    if (isArtist && t.status === "pending") {
      actions = `
        <button class="btn-action-sm btn-success" onclick="acceptChat(${t.id})">Aceitar</button>
        <button class="btn-action-sm btn-danger" onclick="declineChat(${t.id})">Recusar</button>
      `;
    } else if (t.status === "accepted") {
      actions = `<button class="btn-action-sm" onclick="openChatThread(${t.id})">Abrir chat</button>`;
    } else if (t.status === "pending") {
      actions = `<span class="badge-stage waiting">Aguardando artista</span>`;
    } else {
      actions = `<span class="badge-stage">${chatStatusLabel(t.status)}</span>`;
    }

    return `
      <tr>
        <td><strong>${escapeHtml(who)}</strong></td>
        <td>${escapeHtml(t.artworkTitle)}</td>
        <td><span class="badge-stage ${t.status === "accepted" ? "done" : "waiting"}">${chatStatusLabel(t.status)}</span></td>
        <td>${actions}</td>
      </tr>
    `;
  }).join("");

  renderWhatsAppChatList(threads, isArtist);
}

function renderWhatsAppChatList(threads, isArtist) {
  const lists = [document.getElementById("chatsList"), document.getElementById("waSidebarList")].filter(Boolean);
  if (!lists.length) return;

  const q = (document.getElementById("waSearchInput")?.value || "").trim().toLowerCase();
  const filtered = threads.filter(t => {
    const who = (isArtist ? t.clientName : t.artistName).toLowerCase();
    return !q || who.includes(q) || t.artworkTitle.toLowerCase().includes(q);
  });

  const html = !AppState.currentUser.isLoggedIn
    ? `<div class="wa-empty-card">Entre como cliente ou artista para ver as conversas.</div>`
    : (!filtered.length
      ? `<div class="wa-empty-card">Nenhuma conversa encontrada.</div>`
      : filtered.map(t => {
        const who = isArtist ? t.clientName : t.artistName;
        const last = t.messages[t.messages.length - 1];
        const preview = t.status === "pending"
          ? (isArtist ? "Solicitação de conversa" : "Aguardando aceite do artista")
          : (last ? last.text : "Conversa iniciada");
        const time = last ? last.at : "";
        const letter = who.charAt(0).toUpperCase();
        const photo = isArtist ? "" : artistPhotoByHandle(t.artistHandle);
        const active = AppState.activeChatId === t.id ? "active" : "";
        const click = t.status === "accepted"
          ? `openChatThread(${t.id})`
          : (isArtist && t.status === "pending" ? `acceptChat(${t.id})` : `showToast('Aguardando o artista aceitar o chat.')`);

        return `
          <button type="button" class="wa-list-item ${active}" onclick="${click}">
            ${avatarMarkup(letter, photo, "wa-list-avatar")}
            <div class="wa-list-copy">
              <div class="wa-list-top">
                <strong>${escapeHtml(who)}</strong>
                <span>${escapeHtml(time)}</span>
              </div>
              <p>${escapeHtml(preview)}</p>
              <small>${escapeHtml(t.artworkTitle)}</small>
            </div>
          </button>
        `;
      }).join(""));

  lists.forEach(list => { list.innerHTML = html; });
}

function renderChatsView() {
  renderChatRows("chatsTableBody");
  renderChatRows("clientChatsBody");
  renderChatRows("artistChatsBody");
}

window.acceptChat = function(id) {
  const thread = CHAT_THREADS.find(t => t.id === id);
  if (!thread) return;
  thread.status = "accepted";
  thread.messages.push({
    from: "artist",
    text: "Aceitei sua solicitação. Podemos conversar sobre a arte.",
    at: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
  });
  renderChatsView();
  showToast("Chat aceito. Vocês já podem conversar.");
  openChatThread(id);
};

window.declineChat = function(id) {
  const thread = CHAT_THREADS.find(t => t.id === id);
  if (!thread) return;
  thread.status = "declined";
  renderChatsView();
  showToast("Solicitação de chat recusada.");
};

function fillChatSidebarUser() {
  const me = AppState.currentUser;
  const meAvatar = document.getElementById("waSideMeAvatar");
  const meName = document.getElementById("waSideMeName");
  if (meAvatar) {
    if (me.photoUrl) meAvatar.innerHTML = `<img class="avatar-photo" src="${me.photoUrl}" alt="">`;
    else meAvatar.textContent = me.avatar || "C";
  }
  if (meName) meName.textContent = me.name || "Conversas";
}

window.openChatApp = function() {
  fillChatSidebarUser();
  document.getElementById("chatModal").style.display = "flex";
  renderChatsView();
  const current = CHAT_THREADS.find(t => t.id === AppState.activeChatId && t.status === "accepted");
  const fallback = threadsForCurrentUser().find(t => t.status === "accepted");
  const pick = current || fallback;
  if (pick) fillChatPanel(pick.id);
};

function fillChatPanel(id) {
  const thread = CHAT_THREADS.find(t => t.id === id);
  if (!thread) return;
  AppState.activeChatId = id;
  const otherName = AppState.currentUser.role === "artist" ? thread.clientName : thread.artistName;
  const otherPhoto = AppState.currentUser.role === "artist" ? "" : artistPhotoByHandle(thread.artistHandle);
  document.getElementById("chatModalTitle").textContent = otherName;
  document.getElementById("chatModalSubtitle").textContent = `online · ${thread.artworkTitle}`;
  const avatar = document.getElementById("chatHeaderAvatar");
  if (avatar) {
    if (otherPhoto) avatar.innerHTML = `<img class="avatar-photo" src="${otherPhoto}" alt="">`;
    else avatar.textContent = otherName.charAt(0);
  }
  const compose = document.getElementById("chatCompose");
  if (compose) compose.style.display = "flex";
  renderChatMessages();
  renderWhatsAppChatList(threadsForCurrentUser(), AppState.currentUser.role === "artist");
}

window.openChatThread = function(id) {
  const thread = CHAT_THREADS.find(t => t.id === id);
  if (!thread) return;
  if (thread.status !== "accepted") {
    showToast("O chat só abre depois que o artista aceitar.");
    return;
  }
  fillChatSidebarUser();
  document.getElementById("chatModal").style.display = "flex";
  fillChatPanel(id);
};

function renderChatMessages() {
  const box = document.getElementById("chatMessages");
  const thread = CHAT_THREADS.find(t => t.id === AppState.activeChatId);
  if (!box || !thread) return;
  const rows = [`<div class="wa-date-chip">Hoje</div>`];
  if (!thread.messages.length) {
    rows.push(`<div class="wa-system">Conversa aceita. Envie a primeira mensagem.</div>`);
  }
  thread.messages.forEach(m => {
    const mine = (m.from === "artist" && AppState.currentUser.role === "artist")
      || (m.from === "client" && AppState.currentUser.role !== "artist");
    const ticks = mine ? `<span class="wa-ticks">✓✓</span>` : "";
    rows.push(`
      <div class="wa-row ${mine ? "mine" : "theirs"}">
        <div class="wa-bubble">
          <p>${escapeHtml(m.text)}</p>
          <span class="wa-meta">${escapeHtml(m.at)} ${ticks}</span>
        </div>
      </div>
    `);
  });
  box.innerHTML = rows.join("");
  box.scrollTop = box.scrollHeight;
}

window.sendChatMessage = function() {
  const input = document.getElementById("chatMessageInput");
  const thread = CHAT_THREADS.find(t => t.id === AppState.activeChatId);
  if (!input || !thread || thread.status !== "accepted") return;
  const text = input.value.trim();
  if (!text) return;
  thread.messages.push({
    from: AppState.currentUser.role === "artist" ? "artist" : "client",
    text,
    at: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
  });
  input.value = "";
  renderChatMessages();
  renderWhatsAppChatList(threadsForCurrentUser(), AppState.currentUser.role === "artist");
};

function renderAdminUsers() {
  const tbody = document.getElementById("adminUsersBody");
  if (!tbody) return;
  tbody.innerHTML = USERS_DATA.map(u => `
    <tr>
      <td><strong>${escapeHtml(u.name)}</strong></td>
      <td>${escapeHtml(u.email)}<br><small class="text-muted">${escapeHtml(u.handle)}</small></td>
      <td>${escapeHtml(u.role)}</td>
      <td><code>${escapeHtml(u.password)}</code></td>
      <td>
        <button class="btn-action-sm" onclick="openAdminUserModal(${u.id})">Alterar</button>
        <button class="btn-action-sm btn-danger" onclick="adminDeleteUser(${u.id})">Excluir</button>
      </td>
    </tr>
  `).join("");
}

function renderAdminArtworks() {
  const tbody = document.getElementById("adminArtworksBody");
  if (!tbody) return;
  if (COMMISSIONS_DATA.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:24px;">Nenhuma arte na vitrine.</td></tr>`;
    return;
  }
  tbody.innerHTML = COMMISSIONS_DATA.map(a => `
    <tr>
      <td><strong>${escapeHtml(a.title)}</strong></td>
      <td>${escapeHtml(a.artistName)} (${escapeHtml(a.artistHandle)})</td>
      <td>${formatBRL(a.price)}</td>
      <td>
        <button class="btn-action-sm btn-danger" onclick="adminDeleteArtwork(${a.id})">Excluir arte</button>
        <button class="btn-action-sm btn-danger" onclick="adminDeleteArtist('${a.artistHandle}')">Excluir artista</button>
      </td>
    </tr>
  `).join("");
}

window.openAdminUserModal = function(id) {
  const modal = document.getElementById("adminUserModal");
  const user = USERS_DATA.find(u => u.id === id);
  document.getElementById("adminUserModalTitle").textContent = user ? "Alterar usuário" : "Adicionar usuário";
  document.getElementById("adminUserEditId").value = user ? String(user.id) : "";
  document.getElementById("adminUserName").value = user ? user.name : "";
  document.getElementById("adminUserEmail").value = user ? user.email : "";
  document.getElementById("adminUserHandle").value = user ? user.handle : "";
  document.getElementById("adminUserPassword").value = user ? user.password : "";
  document.getElementById("adminUserPasswordConfirm").value = user ? user.password : "";
  document.getElementById("adminUserRole").value = user ? user.role : "client";
  modal.style.display = "flex";
};

window.closeAdminUserModal = function() {
  document.getElementById("adminUserModal").style.display = "none";
};

window.openChangePasswordModal = function() {
  if (!AppState.currentUser.isLoggedIn) {
    openAuthModalWithTab("client", "Entre para alterar sua senha.");
    return;
  }
  document.getElementById("currentPassword").value = "";
  document.getElementById("newPassword").value = "";
  document.getElementById("newPasswordConfirm").value = "";
  document.getElementById("changePasswordModal").style.display = "flex";
};

window.closeChangePasswordModal = function() {
  document.getElementById("changePasswordModal").style.display = "none";
};

window.saveChangedPassword = function() {
  const current = document.getElementById("currentPassword").value;
  const next = document.getElementById("newPassword").value;
  const confirm = document.getElementById("newPasswordConfirm").value;
  const user = USERS_DATA.find(u => u.id === AppState.currentUser.userId) || getUserByEmail(AppState.currentUser.email);

  if (!user) {
    showToast("Usuário não encontrado.");
    return;
  }
  if (!current || !next) {
    showToast("Preencha a senha atual e a nova senha.");
    return;
  }
  if (user.password !== current) {
    showToast("A senha atual está incorreta.");
    return;
  }
  if (next !== confirm) {
    showToast("A nova senha e a confirmação não coincidem.");
    return;
  }
  if (next.length < 4) {
    showToast("A nova senha deve ter pelo menos 4 caracteres.");
    return;
  }

  user.password = next;
  showToast("Senha alterada com sucesso.");
  closeChangePasswordModal();
  if (typeof renderAdminUsers === "function") renderAdminUsers();
};

window.saveAdminUser = function() {
  const id = document.getElementById("adminUserEditId").value;
  const name = document.getElementById("adminUserName").value.trim();
  const email = document.getElementById("adminUserEmail").value.trim();
  const handleRaw = document.getElementById("adminUserHandle").value.trim();
  const password = document.getElementById("adminUserPassword").value;
  const passwordConfirm = document.getElementById("adminUserPasswordConfirm").value;
  const role = document.getElementById("adminUserRole").value;
  if (!name || !email || !password) {
    showToast("Nome, e-mail e senha são obrigatórios.");
    return;
  }
  if (password !== passwordConfirm) {
    showToast("A senha e a confirmação não coincidem.");
    return;
  }
  const handle = handleRaw ? (handleRaw.startsWith("@") ? handleRaw : `@${handleRaw}`) : `@${email.split("@")[0]}`;

  if (id) {
    const user = USERS_DATA.find(u => u.id === Number(id));
    if (!user) return;
    user.name = name;
    user.email = email;
    user.handle = handle;
    user.password = password;
    user.role = role;
    user.avatar = name.charAt(0).toUpperCase();
    showToast("Usuário atualizado (incluindo senha).");
  } else {
    if (getUserByEmail(email)) {
      showToast("Já existe um usuário com este e-mail.");
      return;
    }
    USERS_DATA.push({
      id: nextUserId++,
      name,
      email,
      handle,
      password,
      role,
      avatar: name.charAt(0).toUpperCase()
    });
    if (role === "artist") ensureArtistProfile(handle);
    showToast("Usuário adicionado.");
  }
  closeAdminUserModal();
  renderAdminUsers();
};

window.adminDeleteUser = function(id) {
  const user = USERS_DATA.find(u => u.id === id);
  if (!user) return;
  if (user.role === "admin" && USERS_DATA.filter(u => u.role === "admin").length === 1) {
    showToast("Não é possível excluir o último administrador.");
    return;
  }
  if (user.role === "artist") adminDeleteArtist(user.handle, true);
  USERS_DATA = USERS_DATA.filter(u => u.id !== id);
  showToast(`Usuário ${user.name} excluído.`);
  renderAdminUsers();
  renderAdminArtworks();
  renderCommissions();
};

window.adminDeleteArtwork = function(artId) {
  COMMISSIONS_DATA = COMMISSIONS_DATA.filter(a => a.id !== artId);
  showToast("Arte removida da vitrine.");
  renderAdminArtworks();
  renderCommissions();
};

window.adminDeleteArtist = function(handle, skipUser) {
  COMMISSIONS_DATA = COMMISSIONS_DATA.filter(a => a.artistHandle !== handle);
  CHAT_THREADS = CHAT_THREADS.filter(t => t.artistHandle !== handle);
  delete ARTIST_PROFILES[handle];
  if (!skipUser) {
    USERS_DATA = USERS_DATA.filter(u => !(u.handle === handle && u.role === "artist"));
    showToast("Artista, artes e chats relacionados foram excluídos.");
  }
  renderAdminUsers();
  renderAdminArtworks();
  renderCommissions();
};

// ================= RENDERIZADORES DE TABELAS PROTEGIDAS =================

function renderClientOrders() {
  const tbody = document.getElementById("clientOrdersBody");
  const countEl = document.getElementById("clientDynamicOrdersCount");
  const activeCountEl = document.getElementById("clientActiveCount");
  const escrowTotalEl = document.getElementById("clientEscrowTotal");

  if (!tbody) return;

  const activeOrders = CLIENT_ORDERS.filter(o => o.stage !== "done");
  if (countEl) countEl.textContent = activeOrders.length;
  if (activeCountEl) activeCountEl.textContent = activeOrders.length;

  const totalEscrow = activeOrders.reduce((sum, o) => sum + o.totalPix, 0);
  if (escrowTotalEl) escrowTotalEl.textContent = `R$ ${totalEscrow.toFixed(2).replace('.', ',')}`;

  if (CLIENT_ORDERS.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:30px;">Nenhuma encomenda ativa no momento.</td></tr>`;
    return;
  }

  tbody.innerHTML = CLIENT_ORDERS.map((order, index) => {
    let actionBtn = "";
    if (order.actionType === "approve_sketch") {
      actionBtn = `<button class="btn-action-sm btn-success" onclick="clientApproveSketch(${index})">Aprovar Rascunho</button>`;
    } else if (order.actionType === "download") {
      actionBtn = `<button class="btn-action-sm" onclick="showToast('Download do arquivo 4K iniciado.')">Baixar Arte (ZIP)</button>`;
    } else {
      actionBtn = `<span class="badge-stage waiting">Em produção</span>`;
    }

    return `
      <tr>
        <td><strong>${order.code}</strong></td>
        <td>
          <strong>${order.title}</strong><br>
          <small class="text-muted">${order.artistName} (${order.artistHandle})</small>
        </td>
        <td><strong>R$ ${order.totalPix.toFixed(2).replace('.', ',')}</strong></td>
        <td><span class="badge-stage ${order.stage}">${order.stageText}</span></td>
        <td>${order.deadline}</td>
        <td>${actionBtn}</td>
      </tr>
    `;
  }).join('');

  renderChatRows("clientChatsBody");
}

function renderArtistQueue() {
  const tbody = document.getElementById("artistQueueBody");
  const openSlotsCount = document.getElementById("artistOpenSlotsCount");
  const pendingPayoutEl = document.getElementById("artistPendingPayout");

  if (!tbody) return;

  const activeItems = ARTIST_QUEUE.filter(item => item.stage !== "done");
  if (openSlotsCount) openSlotsCount.textContent = Math.max(0, 5 - activeItems.length);

  const totalPayout = activeItems.reduce((acc, cur) => acc + cur.payout, 0);
  if (pendingPayoutEl) pendingPayoutEl.textContent = `R$ ${totalPayout.toFixed(2).replace('.', ',')}`;

  if (ARTIST_QUEUE.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:30px;">Fila vazia. Divulgue seu link para captar pedidos!</td></tr>`;
    return;
  }

  tbody.innerHTML = ARTIST_QUEUE.map((item, index) => {
    let actionBtn = "";
    if (item.stage === "done") {
      actionBtn = `<span class="badge-stage done">Concluído & Repassado</span>`;
    } else {
      actionBtn = `<button class="btn-action-sm" onclick="advanceArtistQueue(${index})">${item.nextStageLabel}</button>`;
    }

    return `
      <tr>
        <td><strong>${item.code}</strong></td>
        <td>${item.clientName}</td>
        <td>${item.spec}</td>
        <td><strong class="text-emerald">R$ ${item.payout.toFixed(2).replace('.', ',')} (100%)</strong></td>
        <td><span class="badge-stage ${item.stage}">${item.stageText}</span></td>
        <td>${actionBtn}</td>
      </tr>
    `;
  }).join('');

  renderChatRows("artistChatsBody");
}

function renderAdminModeration() {
  const tbody = document.getElementById("adminModerationBody");
  const pendingBadge = document.getElementById("pendingAuditsBadge");

  if (!tbody) return;

  const pendingCount = ADMIN_MODERATION.filter(m => m.statusType === "waiting").length;
  if (pendingBadge) pendingBadge.textContent = `${pendingCount} Pendentes`;

  if (ADMIN_MODERATION.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:30px;">Nenhum caso pendente de auditoria.</td></tr>`;
    return;
  }

  tbody.innerHTML = ADMIN_MODERATION.map((item, index) => {
    let actionButtons = "";
    if (item.statusType === "done") {
      actionButtons = `<span class="badge-stage done">Homologado</span>`;
    } else {
      actionButtons = `
        <div style="display:flex; gap:6px;">
          <button class="btn-action-sm btn-success" onclick="adminApproveHumanship(${index})">Homologar Selo</button>
          <button class="btn-action-sm" onclick="adminRequestClarification(${index})">Pedir Defesa</button>
        </div>
      `;
    }

    return `
      <tr>
        <td>
          <strong>${item.artworkTitle}</strong><br>
          <small class="text-muted">${item.artistName}</small>
        </td>
        <td>${item.declaredTechnique}</td>
        <td><code>${item.fileProof}</code></td>
        <td><span class="badge-stage ${item.statusType}">${item.status}</span></td>
        <td>${actionButtons}</td>
      </tr>
    `;
  }).join('');
}

// Ações Interativas
window.clientApproveSketch = function(index) {
  CLIENT_ORDERS[index].stage = "production";
  CLIENT_ORDERS[index].stageText = "Pintura em Andamento";
  CLIENT_ORDERS[index].actionType = "none";
  renderClientOrders();
  showToast("Rascunho aprovado! O artista foi notificado para finalização.");
};

window.advanceArtistQueue = function(index) {
  const current = ARTIST_QUEUE[index];
  if (current.stage === "waiting") {
    current.stage = "review";
    current.stageText = "Rascunho Enviado ao Cliente";
    current.nextStageLabel = "Avançar para Pintura Final";
    showToast(`Rascunho de ${current.code} enviado para validação.`);
  } else if (current.stage === "review") {
    current.stage = "production";
    current.stageText = "Pintura e Finalização";
    current.nextStageLabel = "Concluir e Liberar Repasse";
    showToast(`Pedido ${current.code} movido para etapa de acabamento.`);
  } else if (current.stage === "production") {
    current.stage = "done";
    current.stageText = "Entregue & Concluído";
    showToast(`Obra ${current.code} entregue! Repasse de R$ ${current.payout.toFixed(2)} liberado via Pix.`);
  }
  renderArtistQueue();
};

window.adminApproveHumanship = function(index) {
  ADMIN_MODERATION[index].status = "Homologado (Autoria Humana Confirmada)";
  ADMIN_MODERATION[index].statusType = "done";
  renderAdminModeration();
  showToast("Selo de Autoria Humana concedido com sucesso após auditoria de camadas.");
};

window.adminRequestClarification = function(index) {
  showToast(`Notificação enviada ao artista conforme o Marco Civil: prazo de 48h para manifestação técnica.`);
};

// ================= FILTROS DE CATEGORIA (ESTILO VGEN) =================

window.selectCategoryTile = function(style) {
  AppState.currentStyleFilter = style;
  renderCommissions();

  const pillCat = document.getElementById("pillCategory");
  if (pillCat) {
    pillCat.textContent = style === "all" ? "Todas as Categorias" : `Estilo: ${style}`;
    pillCat.classList.add("active");
  }

  showToast(`Filtrado por: ${style === 'all' ? 'Todas' : style}`);
};

window.resetCategories = function() {
  AppState.currentStyleFilter = "all";
  AppState.currentSlotsFilter = "all";
  AppState.searchQuery = "";
  
  const searchInput = document.getElementById("navbarSearchInput");
  if (searchInput) searchInput.value = "";

  const pillCat = document.getElementById("pillCategory");
  if (pillCat) {
    pillCat.textContent = "Todas as Categorias";
    pillCat.classList.add("active");
  }

  document.querySelectorAll(".vgen-pill").forEach(p => p.classList.remove("active"));
  if (pillCat) pillCat.classList.add("active");

  renderCommissions();
};

window.toggleOpenSlotsFilter = function() {
  const pill = document.getElementById("pillOpenSlots");
  if (AppState.currentSlotsFilter === "open") {
    AppState.currentSlotsFilter = "all";
    if (pill) pill.classList.remove("active");
  } else {
    AppState.currentSlotsFilter = "open";
    if (pill) pill.classList.add("active");
  }
  renderCommissions();
};

window.toggleHumanOnlyFilter = function() {
  const pill = document.getElementById("pillHumanOnly");
  if (AppState.currentStyleFilter === "Anti-IA") {
    AppState.currentStyleFilter = "all";
    if (pill) pill.classList.remove("active");
  } else {
    AppState.currentStyleFilter = "Anti-IA";
    if (pill) pill.classList.add("active");
  }
  renderCommissions();
};

window.toggleReadyItemsFilter = function() {
  const pill = document.getElementById("pillReadyToShip");
  if (AppState.currentStyleFilter === "Pronta-Entrega") {
    AppState.currentStyleFilter = "all";
    if (pill) pill.classList.remove("active");
  } else {
    AppState.currentStyleFilter = "Pronta-Entrega";
    if (pill) pill.classList.add("active");
  }
  renderCommissions();
};

window.filterByReadyItems = function() {
  switchView("marketplace");
  selectCategoryTile("Pronta-Entrega");
};

window.scrollToHowItWorks = function() {
  showToast("O Agilify protege o pagamento em custódia Pix e verifica a autoria humana sem cobrar taxas do artista.");
};

window.onSortChange = function(val) {
  AppState.currentSortOrder = val;
  renderCommissions();
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function showToast(message) {
  const toastNotification = document.getElementById("toastNotification");
  const toastMessage = document.getElementById("toastMessage");
  if (!toastNotification || !toastMessage) return;

  toastMessage.textContent = message;
  toastNotification.style.display = "block";
  setTimeout(() => {
    toastNotification.style.display = "none";
  }, 3500);
}

// ================= INICIALIZAÇÃO =================

document.addEventListener("DOMContentLoaded", () => {
  renderCommissions();
  updateSessionUI();

  // Search input in Navbar
  const navbarSearchInput = document.getElementById("navbarSearchInput");
  if (navbarSearchInput) {
    navbarSearchInput.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value;
      renderCommissions();
    });
  }

  // Open Auth Modal Triggers
  const btnOpenAuth = document.getElementById("btnOpenAuthModal");
  if (btnOpenAuth) btnOpenAuth.addEventListener("click", () => openAuthModalWithTab("client"));

  const btnUserMenu = document.getElementById("btnUserMenu");
  const userDropdown = document.getElementById("userDropdown");
  const userMenuWrap = document.getElementById("userMenuWrap");
  const menuViewProfile = document.getElementById("menuViewProfile");
  const menuEditProfile = document.getElementById("menuEditProfile");
  const menuSettings = document.getElementById("menuSettings");
  const menuLogout = document.getElementById("menuLogout");

  if (btnUserMenu) {
    btnUserMenu.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleUserMenu();
    });
  }
  if (menuViewProfile) {
    menuViewProfile.addEventListener("click", () => {
      closeUserMenu();
      openMyArtistProfile();
    });
  }
  if (menuEditProfile) {
    menuEditProfile.addEventListener("click", () => {
      closeUserMenu();
      openEditProfileModal();
    });
  }
  const menuAddArt = document.getElementById("menuAddArt");
  if (menuAddArt) {
    menuAddArt.addEventListener("click", () => {
      closeUserMenu();
      openNewArtworkModal();
    });
  }
  if (menuSettings) {
    menuSettings.addEventListener("click", () => {
      closeUserMenu();
      openChangePasswordModal();
    });
  }
  if (menuLogout) {
    menuLogout.addEventListener("click", () => {
      closeUserMenu();
      logout();
    });
  }
  document.addEventListener("click", (e) => {
    if (userMenuWrap && !userMenuWrap.contains(e.target)) closeUserMenu();
  });

  // Auth Tabs in Modal
  const tabAuthClient = document.getElementById("tabAuthClient");
  const tabAuthArtist = document.getElementById("tabAuthArtist");
  const tabAuthAdmin = document.getElementById("tabAuthAdmin");
  const tabAuthLogin = document.getElementById("tabAuthLogin");
  const tabAuthRegister = document.getElementById("tabAuthRegister");

  if (tabAuthClient) tabAuthClient.addEventListener("click", () => openAuthModalWithTab("client"));
  if (tabAuthArtist) tabAuthArtist.addEventListener("click", () => openAuthModalWithTab("artist"));
  if (tabAuthAdmin) tabAuthAdmin.addEventListener("click", () => openAuthModalWithTab("admin"));
  if (tabAuthLogin) tabAuthLogin.addEventListener("click", () => setAuthMode("login"));
  if (tabAuthRegister) tabAuthRegister.addEventListener("click", () => setAuthMode("register"));

  // Quick Demo Login Button
  const btnQuickDemoLogin = document.getElementById("btnQuickDemoLogin");
  if (btnQuickDemoLogin) {
    btnQuickDemoLogin.addEventListener("click", () => {
      const authModal = document.getElementById("authModal");
      if (authModal) authModal.style.display = "none";
      loginAs(AppState.authModalRole);
    });
  }

  const btnConfirmManualLogin = document.getElementById("btnConfirmManualLogin");
  if (btnConfirmManualLogin) {
    btnConfirmManualLogin.addEventListener("click", submitAuthForm);
  }

  const closeAuthModal = document.getElementById("closeAuthModal");
  const btnCancelAuth = document.getElementById("btnCancelAuth");
  if (closeAuthModal) closeAuthModal.addEventListener("click", () => { document.getElementById("authModal").style.display = "none"; });
  if (btnCancelAuth) btnCancelAuth.addEventListener("click", () => { document.getElementById("authModal").style.display = "none"; });

  const registerArtistPhoto = document.getElementById("registerArtistPhoto");
  if (registerArtistPhoto) {
    registerArtistPhoto.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      readImageAsDataUrl(file, (dataUrl) => {
        AppState.registerPhotoData = dataUrl;
        const preview = document.getElementById("registerPhotoPreview");
        if (preview) preview.innerHTML = `<img src="${dataUrl}" alt="Foto do artista">`;
      });
    });
  }

  const newArtPhoto = document.getElementById("newArtPhoto");
  if (newArtPhoto) {
    newArtPhoto.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      readImageAsDataUrl(file, (dataUrl) => {
        AppState.newArtPhotoData = dataUrl;
        const preview = document.getElementById("newArtPhotoPreview");
        if (preview) preview.innerHTML = `<img src="${dataUrl}" alt="Foto da arte">`;
      });
    });
  }

  // New Artwork Modal (Artist)
  const newArtworkModal = document.getElementById("newArtworkModal");
  const closeNewArtworkModal = document.getElementById("closeNewArtworkModal");
  const btnCancelNewArtwork = document.getElementById("btnCancelNewArtwork");
  const btnSaveNewArtwork = document.getElementById("btnSaveNewArtwork");

  window.openNewArtworkModal = function() {
    if (!AppState.currentUser.isLoggedIn || AppState.currentUser.role !== "artist") {
      showToast("Entre como artista para adicionar artes.");
      openAuthModalWithTab("artist", "Entre como artista para adicionar artes à vitrine.");
      return;
    }
    AppState.newArtPhotoData = "";
    const preview = document.getElementById("newArtPhotoPreview");
    if (preview) preview.textContent = "Arte";
    if (newArtPhoto) newArtPhoto.value = "";
    const titleEl = document.getElementById("newArtTitle");
    const descEl = document.getElementById("newArtDesc");
    const matEl = document.getElementById("newArtMaterials");
    if (titleEl) titleEl.value = "";
    if (descEl) descEl.value = "";
    if (matEl) matEl.value = "";
    if (newArtworkModal) newArtworkModal.style.display = "flex";
  };

  if (closeNewArtworkModal) closeNewArtworkModal.addEventListener("click", () => { newArtworkModal.style.display = "none"; });
  if (btnCancelNewArtwork) btnCancelNewArtwork.addEventListener("click", () => { newArtworkModal.style.display = "none"; });

  if (btnSaveNewArtwork) {
    btnSaveNewArtwork.addEventListener("click", () => {
      const title = document.getElementById("newArtTitle").value.trim();
      if (!title) {
        showToast("Informe o título da arte.");
        return;
      }
      const style = document.getElementById("newArtStyle").value;
      const price = parseFloat(document.getElementById("newArtPrice").value) || 120;
      const technique = document.getElementById("newArtTechnique").value || "Digital";
      const turnaround = document.getElementById("newArtTurnaround").value || "7 dias";
      const materials = document.getElementById("newArtMaterials")?.value.trim() || "";
      const descRaw = document.getElementById("newArtDesc").value.trim();
      if (!descRaw) {
        showToast("Escreva a descrição da arte.");
        return;
      }
      const desc = materials ? `${descRaw} Entrega: ${materials}.` : descRaw;

      const newId = nextArtworkId++;
      const newArtwork = {
        id: newId,
        title: title,
        artistName: AppState.currentUser.name,
        artistHandle: AppState.currentUser.handle,
        avatar: AppState.currentUser.avatar,
        style: style,
        technique: technique,
        price: price,
        slotsStatus: "open",
        slotsText: "OPEN",
        rating: 5.0,
        reviewsCount: 1,
        isHumanVerified: true,
        turnaround: turnaround,
        description: desc,
        materials: materials,
        bgPattern: "#F8FAFC",
        artTheme: "anime",
        isReadyItem: style === "Pronta-Entrega",
        imageUrl: AppState.newArtPhotoData || ""
      };
      AppState.newArtPhotoData = "";

      COMMISSIONS_DATA.unshift(newArtwork);
      renderCommissions();

      newArtworkModal.style.display = "none";
      showToast(`Arte "${title}" adicionada à vitrine.`);
      if (AppState.currentView === "artistProfile") {
        renderArtistProfile(AppState.currentUser.handle);
      } else if (AppState.currentView === "artist") {
        switchView("artist");
      } else {
        switchView("marketplace");
      }
    });
  }

  const termsModal = document.getElementById("termsModal");
  const btnOpenTermsFromRegister = document.getElementById("btnOpenTermsFromRegister");
  const closeTermsModal = document.getElementById("closeTermsModal");
  const btnAcceptTerms = document.getElementById("btnAcceptTerms");
  window.openTermsModal = function() {
    if (termsModal) termsModal.style.display = "flex";
  };
  if (btnOpenTermsFromRegister) {
    btnOpenTermsFromRegister.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openTermsModal();
    });
  }
  if (closeTermsModal) closeTermsModal.addEventListener("click", () => { termsModal.style.display = "none"; });
  if (btnAcceptTerms) {
    btnAcceptTerms.addEventListener("click", () => {
      const box = document.getElementById("registerAgreeTerms");
      if (box) box.checked = true;
      if (termsModal) termsModal.style.display = "none";
      showToast("Termos de Uso aceitos.");
    });
  }
  if (termsModal) {
    termsModal.addEventListener("click", (e) => {
      if (e.target === termsModal) termsModal.style.display = "none";
    });
  }

  const artworkDetailModal = document.getElementById("artworkDetailModal");
  const closeArtworkDetailModal = document.getElementById("closeArtworkDetailModal");
  const btnCloseArtworkDetail = document.getElementById("btnCloseArtworkDetail");

  if (closeArtworkDetailModal) closeArtworkDetailModal.addEventListener("click", closeArtworkDetail);
  if (btnCloseArtworkDetail) btnCloseArtworkDetail.addEventListener("click", closeArtworkDetail);
  if (artworkDetailModal) {
    artworkDetailModal.addEventListener("click", (e) => {
      if (e.target === artworkDetailModal) closeArtworkDetail();
    });
  }

  const btnViewArtistFromArt = document.getElementById("btnViewArtistFromArt");
  if (btnViewArtistFromArt) {
    btnViewArtistFromArt.addEventListener("click", () => {
      const item = AppState.selectedArtist;
      if (!item) return;
      closeArtworkDetail();
      openArtistProfile(null, item.artistHandle);
    });
  }

  const btnRequestChatFromArt = document.getElementById("btnRequestChatFromArt");
  if (btnRequestChatFromArt) {
    btnRequestChatFromArt.addEventListener("click", () => {
      const item = AppState.selectedArtist;
      if (!item) return;
      requestChatWithArtist(item.artistHandle, item.id);
    });
  }

  const chatModal = document.getElementById("chatModal");
  const closeChatModal = document.getElementById("closeChatModal");
  const btnCloseChatModal = document.getElementById("btnCloseChatModal");
  const btnSendChatMessage = document.getElementById("btnSendChatMessage");
  const chatMessageInput = document.getElementById("chatMessageInput");
  const hideChat = () => { if (chatModal) chatModal.style.display = "none"; };
  if (closeChatModal) closeChatModal.addEventListener("click", hideChat);
  if (btnCloseChatModal) btnCloseChatModal.addEventListener("click", hideChat);
  if (btnSendChatMessage) btnSendChatMessage.addEventListener("click", sendChatMessage);
  if (chatMessageInput) {
    chatMessageInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendChatMessage();
    });
  }
  const waSearchInput = document.getElementById("waSearchInput");
  if (waSearchInput) {
    waSearchInput.addEventListener("input", () => {
      renderWhatsAppChatList(threadsForCurrentUser(), AppState.currentUser.role === "artist");
    });
  }

  const btnOpenAddUser = document.getElementById("btnOpenAddUser");
  if (btnOpenAddUser) btnOpenAddUser.addEventListener("click", () => openAdminUserModal(null));
  const closeAdminUserModalBtn = document.getElementById("closeAdminUserModal");
  const btnCancelAdminUser = document.getElementById("btnCancelAdminUser");
  const btnSaveAdminUser = document.getElementById("btnSaveAdminUser");
  if (closeAdminUserModalBtn) closeAdminUserModalBtn.addEventListener("click", closeAdminUserModal);
  if (btnCancelAdminUser) btnCancelAdminUser.addEventListener("click", closeAdminUserModal);
  if (btnSaveAdminUser) btnSaveAdminUser.addEventListener("click", saveAdminUser);

  const changePasswordModal = document.getElementById("changePasswordModal");
  const closeChangePasswordModalBtn = document.getElementById("closeChangePasswordModal");
  const btnCancelChangePassword = document.getElementById("btnCancelChangePassword");
  const btnSaveChangePassword = document.getElementById("btnSaveChangePassword");
  if (closeChangePasswordModalBtn) closeChangePasswordModalBtn.addEventListener("click", closeChangePasswordModal);
  if (btnCancelChangePassword) btnCancelChangePassword.addEventListener("click", closeChangePasswordModal);
  if (btnSaveChangePassword) btnSaveChangePassword.addEventListener("click", saveChangedPassword);

  const closeEditProfileModalBtn = document.getElementById("closeEditProfileModal");
  const btnCancelEditProfile = document.getElementById("btnCancelEditProfile");
  const btnSaveEditProfile = document.getElementById("btnSaveEditProfile");
  if (closeEditProfileModalBtn) closeEditProfileModalBtn.addEventListener("click", closeEditProfileModal);
  if (btnCancelEditProfile) btnCancelEditProfile.addEventListener("click", closeEditProfileModal);
  if (btnSaveEditProfile) btnSaveEditProfile.addEventListener("click", saveEditedProfile);
  const editProfilePhoto = document.getElementById("editProfilePhoto");
  if (editProfilePhoto) {
    editProfilePhoto.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      readImageAsDataUrl(file, (dataUrl) => {
        AppState.editProfilePhotoData = dataUrl;
        const preview = document.getElementById("editProfilePhotoPreview");
        if (preview) preview.innerHTML = `<img src="${dataUrl}" alt="Foto">`;
      });
    });
  }
  if (changePasswordModal) {
    changePasswordModal.addEventListener("click", (e) => {
      if (e.target === changePasswordModal) closeChangePasswordModal();
    });
  }

  // Copy Bio in Studio
  const btnCopyStudioBio = document.getElementById("btnCopyStudioBio");
  if (btnCopyStudioBio) {
    btnCopyStudioBio.addEventListener("click", () => {
      const bioInput = document.getElementById("studioBioInput");
      if (bioInput) {
        bioInput.select();
        navigator.clipboard.writeText(bioInput.value);
        showToast("Link copiado! Cole na bio do seu perfil.");
      }
    });
  }

  // Figma Modal
  const figmaModal = document.getElementById("figmaModal");
  const openFigmaModalBtn = document.getElementById("openFigmaModalBtn");
  const closeFigmaModal = document.getElementById("closeFigmaModal");
  const btnCloseFigmaModal2 = document.getElementById("btnCloseFigmaModal2");

  if (openFigmaModalBtn) openFigmaModalBtn.addEventListener("click", () => { figmaModal.style.display = "flex"; });
  if (closeFigmaModal) closeFigmaModal.addEventListener("click", () => { figmaModal.style.display = "none"; });
  if (btnCloseFigmaModal2) btnCloseFigmaModal2.addEventListener("click", () => { figmaModal.style.display = "none"; });
});
