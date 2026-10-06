/* =========================================================
   TechStore — lógica de la tienda
   ========================================================= */

const CONFIG = {
  brandName: "TechStore",

  /* ====== AQUÍ LLEGAN TUS PEDIDOS ======
     Número de WhatsApp con lada de país, solo números.
     México = 52. Ejemplo: 52 + 33 1234 5678 -> "523312345678" */
  whatsapp: "521234567890",

  orderPrefix: "TS",
  storageKey: "techstore-cart-v1",
};

/* ---------------------------------------------------------
   Iconos (trazos estilo Lucide, sin emojis)
   --------------------------------------------------------- */
const ICONS = {
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  bank: '<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
  card: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
  cardStack: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"/><path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  minus: '<path d="M5 12h14"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  checkCircle: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  alert: '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  headset: '<path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/>',
  headphones: '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
  pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  phone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
  gamepad: '<line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/>',
  joystick: '<path d="M21 17a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1Z"/><path d="M6 15v-2"/><path d="M12 15V9"/><circle cx="12" cy="6" r="3"/>',
  mouse: '<rect x="5" y="2" width="14" height="20" rx="7"/><path d="M12 6v4"/>',
  keyboard: '<path d="M10 8h.01"/><path d="M12 12h.01"/><path d="M14 8h.01"/><path d="M16 12h.01"/><path d="M18 8h.01"/><path d="M6 8h.01"/><path d="M7 16h10"/><path d="M8 12h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/>',
  grid: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
  eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
  bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  fileText: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  badgeCheck: '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
  help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
};
const FILLED_ICONS = {
  star: '<path d="M11.48 3.5a.56.56 0 0 1 1.04 0l2.12 5.11a.56.56 0 0 0 .48.35l5.52.44c.5.04.7.66.32.99l-4.2 3.6a.56.56 0 0 0-.19.56l1.29 5.38a.56.56 0 0 1-.84.61l-4.73-2.88a.56.56 0 0 0-.58 0l-4.73 2.88a.56.56 0 0 1-.84-.61l1.29-5.38a.56.56 0 0 0-.18-.56l-4.21-3.6a.56.56 0 0 1 .32-.99l5.52-.44a.56.56 0 0 0 .47-.35z"/>',
  quote: '<path d="M7.2 6C4.9 7.2 3 9.6 3 13v5h6v-6H6c0-2 1-3.5 2.6-4.4zm10 0C14.9 7.2 13 9.6 13 13v5h6v-6h-3c0-2 1-3.5 2.6-4.4z"/>',
  whatsapp:
    '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>',
};

function svgIcon(name) {
  if (FILLED_ICONS[name]) return `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${FILLED_ICONS[name]}</svg>`;
  const body = ICONS[name] || ICONS.info;
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}
const ic = (name) => `<i data-i="${name}">${svgIcon(name)}</i>`;
function hydrateIcons(root = document) {
  root.querySelectorAll("i[data-i]:empty").forEach((el) => (el.innerHTML = svgIcon(el.dataset.i)));
}

/* ---------------------------------------------------------
   Utilidades
   --------------------------------------------------------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const cents = (n) => Math.round(Number(n) * 100);
const money = (n) => "$" + Number(n).toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const moneyShort = (n) => {
  const hasCents = cents(n) % 100 !== 0;
  return "$" + Number(n).toLocaleString("es-MX", { minimumFractionDigits: hasCents ? 2 : 0, maximumFractionDigits: 2 });
};
const priceHTML = (n) => {
  const [int, dec] = Number(n).toFixed(2).split(".");
  return `$${Number(int).toLocaleString("es-MX")}${dec !== "00" ? `<sup>.${dec}</sup>` : ""}`;
};
const norm = (s) => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const pctOff = (price, old) => (old && old > price ? Math.round((1 - price / old) * 100) : 0);

const byId = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));
const catById = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));

/* ---------------------------------------------------------
   Variantes
   --------------------------------------------------------- */
function defaultSel(p) {
  const sel = {};
  (p.options || []).forEach((o) => {
    const v = o.values.find((x) => x.available !== false) || o.values[0];
    sel[o.key] = v.label;
  });
  return sel;
}
function resolve(p, sel = {}) {
  let price = p.price;
  let old = p.old ?? null;
  let img = p.img;
  let available = !p.soldOut;
  const parts = [];
  (p.options || []).forEach((o) => {
    const v = o.values.find((x) => x.label === sel[o.key]) || o.values[0];
    if (v.price != null) price = v.price;
    if ("old" in v) old = v.old;
    if (v.img) img = v.img;
    if (v.available === false) available = false;
    parts.push(v.label);
  });
  return { price, old, img, available, label: parts.join(" · ") };
}
function priceRange(p) {
  const prices = new Set([p.price]);
  (p.options || []).forEach((o) => o.values.forEach((v) => v.price != null && prices.add(v.price)));
  const arr = [...prices];
  return { min: Math.min(...arr), max: Math.max(...arr) };
}
function galleryOf(p) {
  const imgs = [p.img];
  (p.options || []).forEach((o) => o.values.forEach((v) => v.img && imgs.push(v.img)));
  return [...new Set(imgs)];
}
const colorOption = (p) => (p.options || []).find((o) => o.type === "swatch");

/* ---------------------------------------------------------
   Estado
   --------------------------------------------------------- */
const state = { cat: "all", brand: "", sort: "featured", q: "" };

function loadCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(CONFIG.storageKey) || "[]");
    return Array.isArray(raw) ? raw.filter((l) => byId[l.id] && l.qty > 0) : [];
  } catch {
    return [];
  }
}
let cart = loadCart();
function saveCart() {
  try {
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(cart));
  } catch {}
}
const lineKey = (id, sel) => id + "|" + JSON.stringify(sel || {});

function totalsFor(lines) {
  let total = 0, full = 0, units = 0;
  lines.forEach((l) => {
    const r = resolve(byId[l.id], l.sel);
    total += cents(r.price) * l.qty;
    full += cents(r.old && r.old > r.price ? r.old : r.price) * l.qty;
    units += l.qty;
  });
  return { total: total / 100, savings: (full - total) / 100, units };
}

/* ---------------------------------------------------------
   WhatsApp
   --------------------------------------------------------- */
const WA_PLACEHOLDER = "521234567890";
const waNumber = String(CONFIG.whatsapp || "").replace(/\D/g, "");
const waReady = waNumber.length >= 10 && waNumber !== WA_PLACEHOLDER;
const waUrl = (text) => (waReady ? `https://wa.me/${waNumber}` : "https://wa.me/") + (text ? `?text=${encodeURIComponent(text)}` : "");
if (!waReady) console.warn("[TechStore] Escribe tu número en CONFIG.whatsapp (app.js) para recibir los pedidos.");

function openWa(text) {
  const url = waUrl(text);
  const win = window.open(url, "_blank", "noopener");
  if (!win) location.href = url;
  if (!waReady) toast({ icon: "alert", title: "Modo de prueba", text: "Falta tu número en CONFIG.whatsapp (app.js)." });
  return url;
}
const askText = (p, label) =>
  `Hola, me interesa *${p.name}*${label ? ` (${label})` : ""}. ¿Me confirman disponibilidad y precio?`;

/* ---------------------------------------------------------
   Toasts
   --------------------------------------------------------- */
function toast({ img, icon = "checkCircle", title, text = "", action, duration = 3600 }) {
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `${img ? `<img src="${img}" alt="" />` : `<span class="toast__icon">${ic(icon)}</span>`}
    <div><strong>${esc(title)}</strong><span>${esc(text)}</span></div>
    ${action ? `<button type="button">${esc(action.label)}</button>` : ""}`;
  if (action) el.querySelector("button").addEventListener("click", () => { action.fn(); dismiss(); });
  $("#toasts").appendChild(el);
  const t = setTimeout(dismiss, duration);
  function dismiss() {
    clearTimeout(t);
    el.classList.add("out");
    setTimeout(() => el.remove(), 350);
  }
}

/* ---------------------------------------------------------
   Tarjeta de producto
   --------------------------------------------------------- */
function cardHTML(p, i = 0) {
  const sel = defaultSel(p);
  const r = resolve(p, sel);
  const range = priceRange(p);
  const hasRange = range.min !== range.max;
  const off = pctOff(r.price, r.old);
  const color = colorOption(p);
  const badges = [];
  if (p.soldOut) badges.push(`<span class="badge badge--sold">Agotado</span>`);
  if (off) badges.push(`<span class="badge badge--off">-${off}%</span>`);
  if (p.badge && !p.soldOut) badges.push(`<span class="badge ${p.badge === "Oferta" ? "badge--accent" : ""}">${esc(p.badge)}</span>`);

  const swatches = color
    ? `<div class="card__swatches" aria-label="${color.values.length} colores">${color.values
        .slice(0, 6)
        .map((v) => `<span style="background:${v.hex}" title="${esc(v.label)}"></span>`)
        .join("")}<small>${color.values.length} ${color.values.length === 1 ? "color" : "colores"}</small></div>`
    : "";
  const extraOpts = (p.options || []).filter((o) => o.type !== "swatch");
  const variants = extraOpts.length
    ? `<p class="card__variants">${extraOpts.map((o) => `${o.values.length} ${o.label.toLowerCase() === "capacidad" ? "capacidades" : o.label.toLowerCase() === "estado" ? "estados" : "opciones"}`).join(" · ")}</p>`
    : "";

  const action = p.soldOut
    ? `<button class="add-btn add-btn--ask" data-ask="${p.id}" aria-label="Preguntar disponibilidad de ${esc(p.name)}">${ic("bell")}</button>`
    : p.options
    ? `<button class="add-btn" data-open="${p.id}" aria-label="Elegir opciones de ${esc(p.name)}">${ic("plus")}</button>`
    : `<button class="add-btn" data-add="${p.id}" aria-label="Agregar ${esc(p.name)} al carrito">${ic("plus")}</button>`;

  return `<article class="card${p.soldOut ? " card--sold" : ""}" style="animation-delay:${Math.min(i, 12) * 40}ms">
    <div class="card__media" data-open="${p.id}">
      <div class="card__badges">${badges.join("")}</div>
      <img src="${r.img}" alt="${esc(p.name)}" loading="lazy" decoding="async" />
      <span class="card__quick">${ic("eye")}Vista rápida</span>
    </div>
    <div class="card__body">
      <span class="card__brand">${esc(p.brand)}</span>
      <h3 class="card__name" data-open="${p.id}">${esc(p.name)}</h3>
      ${swatches}${variants}
      <div class="card__foot">
        <div class="price">
          ${hasRange ? `<span class="price__from">Desde</span>` : ""}
          <span class="price__now">${priceHTML(hasRange ? range.min : r.price)}</span>
          ${!hasRange && r.old && r.old > r.price ? `<span class="price__old">${moneyShort(r.old)}</span>` : ""}
        </div>
        ${action}
      </div>
    </div>
  </article>`;
}

/* ---------------------------------------------------------
   Secciones estáticas: hero, categorías, marcas, destacados
   --------------------------------------------------------- */
function renderStatic() {
  const brands = [...new Set(PRODUCTS.map((p) => p.brand))];


  // Marcas
  const brandSpans = brands.map((b) => `<span>${esc(b)}</span>`).join("");
  $("#brandsTrack").innerHTML = brandSpans + brandSpans.replace(/<span>/g, '<span aria-hidden="true">');

  // Categorías
  const catImg = { celulares: "img/p74.jpg", consolas: "img/p2.jpg", retro: "img/p24.jpg", mouse: "img/p93.jpg", teclados: "img/p123.jpg", audio: "img/p157.jpg" };
  $("#catsGrid").innerHTML = CATEGORIES.map((c, i) => {
    const n = PRODUCTS.filter((p) => p.cat === c.id).length;
    return `<button class="cat reveal" style="transition-delay:${i * 60}ms" data-go="${c.id}">
      <span class="cat__icon">${ic(c.icon)}</span>
      <span class="cat__count">${n}</span>
      <h3>${esc(c.label)}</h3>
      <p>${esc(c.blurb)}</p>
      <span class="cat__img"><img src="${catImg[c.id]}" alt="" loading="lazy" /></span>
    </button>`;
  }).join("");

  // Footer + menú móvil
  $("#footerCats").innerHTML = CATEGORIES.map((c) => `<li><button data-go="${c.id}">${esc(c.label)}</button></li>`).join("");
  $("#mobileLinks").innerHTML =
    CATEGORIES.map((c) => `<button data-go="${c.id}">${ic(c.icon)}${esc(c.label)}<span>${PRODUCTS.filter((p) => p.cat === c.id).length}</span></button>`).join("") +
    `<button data-href="#como-comprar">${ic("whatsapp")}Cómo comprar</button><button data-href="#resenas">${ic("star")}Reseñas</button><button data-href="#politicas">${ic("fileText")}Políticas</button><button data-href="#faq">${ic("help")}Preguntas frecuentes</button>`;

  // Destacados
  const deals = PRODUCTS.filter((p) => p.featured && !p.soldOut);
  $("#dealsRail").innerHTML = deals.map((p, i) => cardHTML(p, i)).join("");

  // Promo celulares
  const promo = [
    ["galaxy-s24-ultra", "img/p194.jpg"],
    ["iphone-air", "img/p74.jpg"],
    ["galaxy-a56", "img/p261.jpg"],
  ];
  $("#promoVisual").innerHTML = promo
    .map(([id, img]) => `<button class="promo__phone" data-open="${id}" aria-label="Ver ${esc(byId[id].name)}"><img src="${img}" alt="" loading="lazy" /></button>`)
    .join("");

  // Enlaces de WhatsApp genéricos
  const hello = `Hola ${CONFIG.brandName}, tengo una pregunta.`;
  ["#waFloat", "#faqWa", "#footerWa"].forEach((s) => ($(s).href = waUrl(hello)));
  $("#year").textContent = new Date().getFullYear();

  renderHeroStage();
  renderReviews();
  renderPolicies();
}

/* Reseñas en movimiento */
const starsHTML = (n) =>
  Array.from({ length: 5 }, (_, i) => `<span class="star${i < Math.round(n) ? "" : " star--off"}">${svgIcon("star")}</span>`).join("");

function renderReviews() {
  if (typeof REVIEWS === "undefined" || !REVIEWS.length) return ($("#resenas").hidden = true);
  const avg = REVIEWS.reduce((s, r) => s + r.stars, 0) / REVIEWS.length;
  $("#avgStars").innerHTML = starsHTML(avg);
  $("#avgRating").textContent = avg.toFixed(1);
  $("#reviewCount").textContent = `· ${REVIEWS.length} reseñas`;

  const card = (r) => `<figure class="review">
      <div class="review__top"><span class="stars">${starsHTML(r.stars)}</span><span class="review__quote">${svgIcon("quote")}</span></div>
      <blockquote>${esc(r.text)}</blockquote>
      <figcaption>
        <span class="review__avatar">${esc(r.name.charAt(0))}</span>
        <span><strong>${esc(r.name)}</strong><small>${esc(r.city)}</small></span>
        ${r.product ? `<span class="review__product">${ic("badgeCheck")}${esc(r.product)}</span>` : ""}
      </figcaption>
    </figure>`;
  const half = Math.ceil(REVIEWS.length / 2);
  const rowA = REVIEWS.slice(0, half);
  const rowB = REVIEWS.length > 1 ? REVIEWS.slice(half) : rowA;
  // Se duplica cada fila para un desplazamiento continuo
  $("#reviewsA").innerHTML = [...rowA, ...rowA].map(card).join("");
  $("#reviewsB").innerHTML = [...rowB, ...rowB].map(card).join("");
}

/* Políticas */
function renderPolicies() {
  if (typeof POLICIES === "undefined") return;
  $("#policiesGrid").innerHTML = POLICIES.map(
    (p, i) => `<button class="policy reveal" style="transition-delay:${i * 50}ms" data-policy="${p.id}">
      <span class="policy__icon">${ic(p.icon)}</span>
      <span class="policy__txt"><strong>${esc(p.title)}</strong><small>${esc(p.summary)}</small></span>
      ${ic("chevronRight")}
    </button>`
  ).join("");
  $("#footerPolicies").innerHTML = POLICIES.map((p) => `<li><button data-policy="${p.id}">${esc(p.title)}</button></li>`).join("");
}
function openPolicy(id) {
  const p = POLICIES.find((x) => x.id === id) || POLICIES[0];
  $("#polNav").innerHTML = POLICIES.map(
    (x) => `<button class="${x.id === p.id ? "on" : ""}" data-policy="${x.id}">${ic(x.icon)}<span>${esc(x.title)}</span></button>`
  ).join("");
  $("#polBody").innerHTML = `
    <span class="policy__icon policy__icon--lg">${ic(p.icon)}</span>
    <h3 id="polTitle">${esc(p.title)}</h3>
    <p class="pol__lead">${esc(p.summary)}</p>
    ${p.sections.map(([h, t]) => `<section><h4>${esc(h)}</h4><p>${esc(t)}</p></section>`).join("")}
    <a class="btn btn--wa" href="${waUrl(`Hola, tengo una pregunta sobre la política de ${p.title.toLowerCase()}.`)}" target="_blank" rel="noopener">${ic("whatsapp")}¿Dudas? Escríbenos</a>`;
  $("#polBody").scrollTop = 0;
  const modal = $("#policyModal");
  if (!modal.classList.contains("open")) {
    closeMobileNav();
    openLayer(modal);
  }
  $("#policyModal .modal__box").scrollTop = 0;
}

/* Efecto de escritura en el título principal */
const TYPED_PHRASES = ["se siente distinta.", "llega a tu puerta.", "se paga fácil.", "cabe en tu bolsillo.", "te hace jugar más."];
function startTyping() {
  const el = $("#typed");
  if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const box = el.parentElement;
  let i = 0, len = el.textContent.length, deleting = true;
  const tick = () => {
    const word = TYPED_PHRASES[i];
    if (deleting) {
      len--;
      if (len <= 0) { deleting = false; i = (i + 1) % TYPED_PHRASES.length; }
    } else {
      len++;
    }
    const current = TYPED_PHRASES[i];
    el.textContent = current.slice(0, Math.max(0, len));
    box.classList.toggle("is-typing", len > 0 && len < current.length);
    let delay = deleting ? 40 : 85 + Math.random() * 60;
    if (!deleting && len >= current.length) { deleting = true; delay = 2600; }
    else if (!deleting && len === 0) delay = 300;
    setTimeout(tick, delay);
  };
  setTimeout(tick, 2200);
}

/* Pantalla de carga: avanza con las imágenes principales y las fuentes */
function runLoader() {
  const loader = $("#loader");
  if (!loader) return startTyping();
  const bar = $("#loaderBar");
  const pct = $("#loaderPct");
  const MIN_MS = 1600, MAX_MS = 6000;
  const t0 = performance.now();
  const imgs = $$("img").filter((img) => img.loading !== "lazy");
  const tasks = imgs.map((img) =>
    img.complete ? Promise.resolve() : new Promise((res) => { img.addEventListener("load", res, { once: true }); img.addEventListener("error", res, { once: true }); })
  );
  if (document.fonts?.ready) tasks.push(document.fonts.ready);
  let doneCount = 0;
  tasks.forEach((t) => t.then(() => doneCount++));

  let shown = 0, finished = false;
  const frame = () => {
    const elapsed = performance.now() - t0;
    const real = tasks.length ? doneCount / tasks.length : 1;
    // El avance visual nunca supera lo cargado ni el tiempo mínimo
    const target = Math.min(real, elapsed / MIN_MS) * 100;
    shown += (target - shown) * 0.12;
    if (target >= 100 && shown > 99.4) shown = 100;
    bar.style.width = shown + "%";
    pct.textContent = Math.round(shown);
    if (shown >= 100 || elapsed > MAX_MS) return finish();
    setTimeout(frame, 16);
  };
  const finish = () => {
    if (finished) return;
    finished = true;
    bar.style.width = "100%";
    pct.textContent = "100";
    setTimeout(() => {
      loader.classList.add("done");
      document.body.classList.remove("is-loading");
      startTyping();
      setTimeout(() => loader.remove(), 1000);
    }, 250);
  };
  frame();
}

function countUp(el, to, suffix) {
  const start = performance.now();
  const dur = 1400;
  const step = (t) => {
    const k = Math.min(1, (t - start) / dur);
    el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + (k === 1 ? suffix : "");
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* Vitrina del hero: un producto destacado con reflector, etiquetas flotantes y miniaturas */
const HERO_IDS = ["iphone-16-pro-max", "switch2-mkw-fisico", "galaxy-s24-ultra", "ps5-fortnite", "kraken-v3x", "g915-x-tkl"];
const HERO_MS = 5000;
let heroIdx = 0;
let heroTimer;

function renderHeroStage() {
  const stage = $("#heroStage");
  const items = HERO_IDS.filter((id) => byId[id]).map((id) => {
    const p = byId[id];
    return { p, r: resolve(p, defaultSel(p)) };
  });
  stage.innerHTML = `
    <div class="show" id="show">
      <span class="show__ring" aria-hidden="true"></span>
      <div class="show__card" data-depth="1">
        <div class="show__imgs">
          ${items.map(({ p, r }) => `<img src="${r.img}" alt="${esc(p.name)}" data-open="${p.id}" />`).join("")}
        </div>
        <span class="show__floor" aria-hidden="true"></span>
        <div class="show__meta">
          <span><small id="showBrand"></small><strong id="showName"></strong></span>
          <button class="show__go" id="showGo" aria-label="Ver producto">${ic("arrowRight")}</button>
        </div>
      </div>
      <div class="chip-float chip-float--price" data-depth="2.2">
        <small id="showOff"></small>
        <b id="showPrice"></b>
        <s id="showOld"></s>
      </div>
      <div class="chip-float chip-float--tag" data-depth="1.8">
        <span class="chip-float__icon" id="showCatIcon"></span>
        <span><small>Categoría</small><strong id="showCat"></strong></span>
      </div>
      <div class="chip-float chip-float--colors" data-depth="2.6" id="showColors"></div>
      <div class="chip-float chip-float--ship" data-depth="1.4">
        <span class="chip-float__icon chip-float__icon--ok">${ic("truck")}</span>
        <span><small>Envío</small><strong>A todo México</strong></span>
      </div>
    </div>
    <div class="show-thumbs" role="tablist" aria-label="Productos destacados">
      ${items.map(({ p, r }, i) => `<button data-hero="${i}" role="tab" aria-label="${esc(p.name)}"><img src="${r.img}" alt="" /><svg viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="18" r="16.5"/></svg></button>`).join("")}
    </div>`;
  stage._items = items;
  showHero(0);
  startHeroTimer();
  heroParallax();
}

function showHero(i) {
  const items = $("#heroStage")._items;
  heroIdx = (i + items.length) % items.length;
  const { p, r } = items[heroIdx];
  $$(".show__imgs img").forEach((img, k) => img.classList.toggle("on", k === heroIdx));
  $$(".show-thumbs button").forEach((b, k) => {
    b.classList.toggle("on", k === heroIdx);
    b.setAttribute("aria-selected", k === heroIdx);
    // reinicia la animación de progreso
    const c = b.querySelector("circle");
    c.style.animation = "none";
    void c.getBoundingClientRect();
    c.style.animation = "";
  });
  const off = pctOff(r.price, r.old);
  const swap = (el, html) => {
    el.classList.remove("swap-in");
    void el.offsetWidth;
    el.innerHTML = html;
    el.classList.add("swap-in");
  };
  swap($("#showBrand"), esc(p.brand));
  swap($("#showName"), esc(p.name));
  swap($("#showPrice"), moneyShort(r.price));
  $("#showOld").textContent = r.old && r.old > r.price ? moneyShort(r.old) : "";
  $("#showOff").textContent = off ? `-${off}% de descuento` : "Precio especial";
  swap($("#showCat"), esc(catById[p.cat].label));
  $("#showCatIcon").innerHTML = ic(catById[p.cat].icon);
  $("#showGo").dataset.open = p.id;

  const color = colorOption(p);
  const colorsEl = $("#showColors");
  if (color) {
    colorsEl.innerHTML = `<span class="chip-float__dots">${color.values.slice(0, 5).map((v) => `<i style="background:${v.hex}"></i>`).join("")}</span><span><small>Disponible en</small><strong>${color.values.length} colores</strong></span>`;
  } else {
    colorsEl.innerHTML = `<span class="chip-float__icon">${ic("shield")}</span><span><small>Incluye</small><strong>Garantía</strong></span>`;
  }
  colorsEl.classList.remove("swap-in");
  void colorsEl.offsetWidth;
  colorsEl.classList.add("swap-in");
}

function startHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => showHero(heroIdx + 1), HERO_MS);
}

function heroParallax() {
  const hero = $(".hero");
  const show = $("#show");
  if (!hero || !show || matchMedia("(prefers-reduced-motion: reduce)").matches || matchMedia("(hover: none)").matches) return;
  const layers = $$("[data-depth]", show);
  let raf = 0;
  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    hero.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    hero.style.setProperty("--my", `${(y + 0.5) * 100}%`);
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      show.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 8}deg)`;
      layers.forEach((l) => {
        const d = Number(l.dataset.depth);
        l.style.translate = `${x * d * 14}px ${y * d * 14}px`;
      });
    });
  });
  hero.addEventListener("pointerleave", () => {
    show.style.transform = "";
    layers.forEach((l) => (l.style.translate = ""));
  });
}

/* ---------------------------------------------------------
   Catálogo con filtros
   --------------------------------------------------------- */
function filtered() {
  const q = norm(state.q.trim());
  let list = PRODUCTS.filter((p) => {
    if (state.cat !== "all" && p.cat !== state.cat) return false;
    if (state.brand && p.brand !== state.brand) return false;
    if (q) {
      const hay = norm([p.name, p.brand, p.title, catById[p.cat].label, (p.hl || []).join(" ")].join(" "));
      return q.split(/\s+/).every((w) => hay.includes(w));
    }
    return true;
  });
  const price = (p) => resolve(p, defaultSel(p)).price;
  const sorters = {
    featured: (a, b) => (!!a.soldOut - !!b.soldOut) || ((b.featured ? 1 : 0) - (a.featured ? 1 : 0)),
    "price-asc": (a, b) => price(a) - price(b),
    "price-desc": (a, b) => price(b) - price(a),
    discount: (a, b) => pctOff(price(b), resolve(b, defaultSel(b)).old) - pctOff(price(a), resolve(a, defaultSel(a)).old),
    name: (a, b) => a.name.localeCompare(b.name, "es"),
  };
  return list.slice().sort(sorters[state.sort] || sorters.featured);
}

function renderChips() {
  const inCat = (id) => PRODUCTS.filter((p) => id === "all" || p.cat === id).length;
  const chips = [{ id: "all", label: "Todo", icon: "grid" }, ...CATEGORIES]
    .map(
      (c) => `<button class="chip${state.cat === c.id ? " active" : ""}" role="tab" aria-selected="${state.cat === c.id}" data-cat="${c.id}">${ic(c.icon)}${esc(c.label)}<small>${inCat(c.id)}</small></button>`
    )
    .join("");
  const qChip = state.q ? `<button class="chip active" data-clear-q>${ic("search")}"${esc(state.q)}"${ic("x")}</button>` : "";
  $("#catChips").innerHTML = chips + qChip;

  // Marcas disponibles para la categoría actual
  const brands = [...new Set(PRODUCTS.filter((p) => state.cat === "all" || p.cat === state.cat).map((p) => p.brand))].sort((a, b) => a.localeCompare(b));
  if (state.brand && !brands.includes(state.brand)) state.brand = "";
  $("#brandSelect").innerHTML = `<option value="">Todas las marcas</option>` + brands.map((b) => `<option ${b === state.brand ? "selected" : ""}>${esc(b)}</option>`).join("");
}

/* Se muestran pocos productos al inicio y el botón "Ver más" carga el resto */
const pageSize = () => (matchMedia("(max-width: 680px)").matches ? 12 : 16);
let gridLimit = pageSize();
let gridKey = "";

function renderGrid(more = false) {
  renderChips();
  const list = filtered();
  const key = [state.cat, state.brand, state.sort, state.q].join("|");
  if (key !== gridKey) { gridKey = key; gridLimit = pageSize(); }
  const grid = $("#productGrid");
  const shown = list.slice(0, gridLimit);
  if (more) {
    // agrega solo las tarjetas nuevas para no recargar las anteriores
    const from = grid.children.length;
    grid.insertAdjacentHTML("beforeend", shown.slice(from).map((p, i) => cardHTML(p, i)).join(""));
  } else {
    grid.innerHTML = shown.map((p, i) => cardHTML(p, i)).join("");
  }
  markLoaded(grid);
  const rest = list.length - shown.length;
  const moreBtn = $("#loadMore");
  moreBtn.hidden = rest <= 0;
  moreBtn.innerHTML = `Ver más productos <span>${rest}</span>${ic("chevronDown")}`;
  $("#emptyState").hidden = list.length > 0;
  $("#resultCount").textContent = `${list.length} ${list.length === 1 ? "producto" : "productos"}`;
}

function goCategory(id) {
  state.cat = id;
  state.brand = "";
  renderGrid();
  closeMobileNav();
  $("#catalogo").scrollIntoView({ behavior: "smooth" });
}

/* ---------------------------------------------------------
   Búsqueda
   --------------------------------------------------------- */
function openSearch() {
  $("#searchbar").classList.add("open");
  setTimeout(() => $("#searchInput").focus(), 50);
}
function closeSearch() {
  $("#searchbar").classList.remove("open");
  $("#searchResults").innerHTML = "";
}
function renderSearch() {
  const q = norm($("#searchInput").value.trim());
  const box = $("#searchResults");
  if (!q) return (box.innerHTML = "");
  const hits = PRODUCTS.filter((p) => q.split(/\s+/).every((w) => norm([p.name, p.brand, catById[p.cat].label].join(" ")).includes(w))).slice(0, 7);
  box.innerHTML = hits.length
    ? hits
        .map((p) => {
          const r = resolve(p, defaultSel(p));
          return `<button class="sr-item" data-open="${p.id}"><img src="${r.img}" alt="" /><span><strong>${esc(p.name)}</strong><span>${esc(p.brand)} · ${esc(catById[p.cat].label)}</span></span><b>${moneyShort(r.price)}</b></button>`;
        })
        .join("")
    : `<p class="sr-empty">Sin resultados para "${esc($("#searchInput").value)}". Prueba con otra palabra.</p>`;
}

/* ---------------------------------------------------------
   Capas (modales, carrito, menú)
   --------------------------------------------------------- */
let lastFocus = null;
function openLayer(el) {
  lastFocus = document.activeElement;
  $("#overlay").classList.add("show");
  el.classList.add("open");
  el.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
  setTimeout(() => el.querySelector("[data-close]")?.focus({ preventScroll: true }), 60);
}
function closeLayer(el) {
  el.classList.remove("open");
  el.setAttribute("aria-hidden", "true");
  if (!$$(".modal.open, .drawer.open, .mobile-nav.open").length) {
    $("#overlay").classList.remove("show");
    document.body.classList.remove("locked");
    lastFocus?.focus?.({ preventScroll: true });
  }
}
function closeAll() {
  $$(".modal.open, .drawer.open").forEach(closeLayer);
  closeMobileNav();
}
function openMobileNav() {
  $("#mobileNav").classList.add("open");
  $("#mobileNav").setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
}
function closeMobileNav() {
  const m = $("#mobileNav");
  if (!m.classList.contains("open")) return;
  m.classList.remove("open");
  m.setAttribute("aria-hidden", "true");
  if (!$$(".modal.open, .drawer.open").length) document.body.classList.remove("locked");
}

/* ---------------------------------------------------------
   Detalle de producto
   --------------------------------------------------------- */
const pm = { p: null, sel: {}, qty: 1, img: "", tab: "hl" };

function openProduct(id) {
  const p = byId[id];
  if (!p) return;
  closeSearch();
  $("#cartDrawer").classList.remove("open");
  pm.p = p;
  pm.sel = defaultSel(p);
  pm.qty = 1;
  pm.tab = "hl";
  pm.img = resolve(p, pm.sel).img;
  const gallery = galleryOf(p);

  $("#pmBody").innerHTML = `
    <div class="pm__gallery">
      <div class="pm__main" id="pmMain"><img src="${pm.img}" alt="${esc(p.name)}" /></div>
      ${gallery.length > 1 ? `<div class="pm__thumbs" id="pmThumbs">${gallery.map((g) => `<button data-thumb="${g}" aria-label="Ver foto"><img src="${g}" alt="" loading="lazy" /></button>`).join("")}</div>` : ""}
    </div>
    <div class="pm__info">
      <div>
        <span class="pm__brand">${esc(p.brand)} · ${esc(catById[p.cat].label)}</span>
        <h2 class="pm__title" id="pmTitle">${esc(p.name)}</h2>
      </div>
      <div class="pm__price" id="pmPrice"></div>
      <p class="pm__desc">${esc(p.desc || "")}</p>
      <div id="pmOptions" class="opt-wrap" style="display:grid;gap:18px"></div>
      <span id="pmStock"></span>
      <div class="pm__buy" id="pmBuy"></div>
      <div class="pm__assure">
        <div>${ic("shield")}Garantía incluida</div>
        <div>${ic("bank")}SPEI o tarjeta</div>
        <div>${ic("truck")}Envío a todo México</div>
        <div>${ic("whatsapp")}Atención por WhatsApp</div>
      </div>
      <div class="pm__tabs">
        <div class="tabs__nav" role="tablist">
          <button data-tab="hl" role="tab">Características</button>
          ${p.specs?.length ? `<button data-tab="specs" role="tab">Especificaciones</button>` : ""}
        </div>
        <div class="tabs__panel" id="pmTab"></div>
      </div>
    </div>
    <div class="pm__sticky" id="pmSticky"></div>`;
  updatePM();
  renderPMTab();
  openLayer($("#productModal"));
  $("#productModal .modal__box").scrollTop = 0;
}

function updatePM() {
  const p = pm.p;
  const r = resolve(p, pm.sel);
  const off = pctOff(r.price, r.old);

  $("#pmPrice").innerHTML = `<span class="price__now">${priceHTML(r.price)}</span>
    ${r.old && r.old > r.price ? `<span class="price__old">${moneyShort(r.old)}</span><span class="pm__save">Ahorras ${moneyShort(r.old - r.price)} (-${off}%)</span>` : ""}`;

  $("#pmOptions").innerHTML = (p.options || [])
    .map(
      (o) => `<div class="opt">
        <span class="opt__label">${esc(o.label)}: <span>${esc(pm.sel[o.key])}</span></span>
        <div class="opt__vals" role="radiogroup" aria-label="${esc(o.label)}">
          ${o.values
            .map((v) => {
              const on = pm.sel[o.key] === v.label;
              const na = v.available === false;
              const t = na ? `${v.label} (agotado)` : v.label;
              return o.type === "swatch"
                ? `<button class="swatch${on ? " on" : ""}${na ? " na" : ""}" role="radio" aria-checked="${on}" title="${esc(t)}" aria-label="${esc(t)}" data-opt="${o.key}" data-val="${esc(v.label)}"><span style="background:${v.hex}"></span></button>`
                : `<button class="opt-pill${on ? " on" : ""}${na ? " na" : ""}" role="radio" aria-checked="${on}" title="${esc(t)}" data-opt="${o.key}" data-val="${esc(v.label)}">${esc(v.label)}</button>`;
            })
            .join("")}
        </div>
      </div>`
    )
    .join("");

  $("#pmStock").className = "pm__stock " + (r.available ? "pm__stock--ok" : "pm__stock--no");
  $("#pmStock").textContent = r.available ? "Disponible" : p.soldOut ? "Agotado por el momento" : "Esta combinación está agotada";

  $("#pmBuy").innerHTML = r.available
    ? `<div class="qty">
         <button data-qty="-1" aria-label="Menos">${ic("minus")}</button>
         <input id="pmQty" type="number" min="1" max="99" value="${pm.qty}" aria-label="Cantidad" />
         <button data-qty="1" aria-label="Más">${ic("plus")}</button>
       </div>
       <button class="btn btn--dark btn--lg" id="pmAdd">${ic("bag")}Agregar al carrito</button>
       <button class="btn btn--wa btn--lg" id="pmBuyNow">${ic("whatsapp")}Comprar ahora por WhatsApp</button>`
    : `<button class="btn btn--wa btn--lg" style="grid-column:1/-1" data-ask-variant>${ic("bell")}Preguntar disponibilidad</button>`;

  // Barra fija de compra (solo visible en celular)
  $("#pmSticky").innerHTML = r.available
    ? `<div class="pm__sticky-price"><small>${esc(r.label || p.brand)}</small><b>${moneyShort(r.price)}</b></div>
       <button class="btn btn--dark" data-sticky-add aria-label="Agregar al carrito">${ic("bag")}</button>
       <button class="btn btn--wa" data-sticky-buy>${ic("whatsapp")}Comprar</button>`
    : `<button class="btn btn--wa btn--block" data-ask-variant>${ic("bell")}Preguntar disponibilidad</button>`;

  if (r.img !== pm.img) setMainImage(r.img);
  syncThumbs();
}

function setMainImage(src) {
  pm.img = src;
  const img = $("#pmMain img");
  if (!img) return;
  $("#pmMain").classList.remove("zoom");
  img.classList.add("swap");
  setTimeout(() => {
    img.src = src;
    img.onload = () => img.classList.remove("swap");
    if (img.complete) img.classList.remove("swap");
  }, 160);
  syncThumbs();
}
function syncThumbs() {
  $$("#pmThumbs button").forEach((b) => b.classList.toggle("on", b.dataset.thumb === pm.img));
}
function renderPMTab() {
  const p = pm.p;
  $$(".tabs__nav button").forEach((b) => b.classList.toggle("on", b.dataset.tab === pm.tab));
  $("#pmTab").innerHTML =
    pm.tab === "specs"
      ? `<table class="spec-table"><tbody>${p.specs.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}</tbody></table>`
      : `<ul class="hl-list">${(p.hl || []).map((h) => `<li>${ic("checkCircle")}<span>${esc(h)}</span></li>`).join("")}</ul>`;
}
const pmQty = () => Math.max(1, Math.min(99, parseInt($("#pmQty")?.value, 10) || 1));

/* ---------------------------------------------------------
   Carrito
   --------------------------------------------------------- */
function addToCart(id, sel, qty = 1, sourceImg) {
  const p = byId[id];
  const r = resolve(p, sel);
  if (!r.available) return;
  const key = lineKey(id, sel);
  const line = cart.find((l) => lineKey(l.id, l.sel) === key);
  if (line) line.qty = Math.min(99, line.qty + qty);
  else cart.push({ id, sel: { ...sel }, qty });
  saveCart();
  renderCart();
  if (sourceImg) flyToCart(sourceImg, r.img);
  const btn = $("#cartOpen");
  btn.classList.remove("bump");
  void btn.offsetWidth;
  btn.classList.add("bump");
  toast({
    img: r.img,
    title: "Agregado al carrito",
    text: `${qty > 1 ? qty + " x " : ""}${p.name}${r.label ? " · " + r.label : ""}`,
    action: { label: "Ver carrito", fn: openCart },
  });
}

function flyToCart(fromEl, src) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const a = fromEl.getBoundingClientRect();
  const b = $("#cartOpen").getBoundingClientRect();
  const f = document.createElement("div");
  f.className = "fly";
  f.innerHTML = `<img src="${src}" alt="" />`;
  const size = 70;
  f.style.left = a.left + a.width / 2 - size / 2 + "px";
  f.style.top = a.top + a.height / 2 - size / 2 + "px";
  document.body.appendChild(f);
  const dx = b.left + b.width / 2 - (a.left + a.width / 2);
  const dy = b.top + b.height / 2 - (a.top + a.height / 2);
  f.animate(
    [
      { transform: "translate(0,0) scale(1)", opacity: 1 },
      { transform: `translate(${dx * 0.55}px, ${dy * 0.55 - 70}px) scale(0.7)`, opacity: 1, offset: 0.6 },
      { transform: `translate(${dx}px, ${dy}px) scale(0.18)`, opacity: 0.4 },
    ],
    { duration: 800, easing: "cubic-bezier(.5,0,.3,1)" }
  ).onfinish = () => f.remove();
}

function renderCart() {
  const t = totalsFor(cart);
  const count = $("#cartCount");
  count.textContent = t.units;
  count.classList.toggle("show", t.units > 0);
  $("#cartHeadCount").textContent = t.units ? `(${t.units})` : "";
  $("#cartFoot").hidden = !cart.length;

  $("#cartBody").innerHTML = cart.length
    ? cart
        .map((l, i) => {
          const p = byId[l.id];
          const r = resolve(p, l.sel);
          return `<div class="line">
            <button class="line__img" data-open="${p.id}" aria-label="Ver ${esc(p.name)}"><img src="${r.img}" alt="" /></button>
            <div>
              <div class="line__top">
                <div><p class="line__name">${esc(p.name)}</p>${r.label ? `<p class="line__var">${esc(r.label)}</p>` : ""}</div>
                <button class="icon-btn line__rm" data-rm="${i}" aria-label="Quitar ${esc(p.name)}">${ic("trash")}</button>
              </div>
              <div class="line__bottom">
                <div class="qty qty--sm">
                  <button data-line-qty="${i}" data-d="-1" aria-label="Menos">${ic("minus")}</button>
                  <input type="number" value="${l.qty}" min="1" max="99" data-line-input="${i}" aria-label="Cantidad" />
                  <button data-line-qty="${i}" data-d="1" aria-label="Más">${ic("plus")}</button>
                </div>
                <div class="line__price"><b>${money((cents(r.price) * l.qty) / 100)}</b>${l.qty > 1 ? `<small>${money(r.price)} c/u</small>` : ""}</div>
              </div>
            </div>
          </div>`;
        })
        .join("")
    : `<div class="cart-empty">${ic("bag")}<h4>Tu carrito está vacío</h4><p>Explora el catálogo y agrega lo que te guste.</p><button class="btn btn--dark" data-close-go>Ver productos</button></div>`;

  $("#cartUnits").textContent = t.units;
  $("#cartSavings").textContent = "-" + money(t.savings);
  $("#cartSavings").parentElement.hidden = t.savings <= 0;
  $("#cartTotal").textContent = money(t.total);
}
function openCart() {
  $$(".modal.open").forEach(closeLayer);
  openLayer($("#cartDrawer"));
}
function setLineQty(i, q) {
  if (!cart[i]) return;
  if (q < 1) cart.splice(i, 1);
  else cart[i].qty = Math.min(99, q);
  saveCart();
  renderCart();
}

/* ---------------------------------------------------------
   Checkout por WhatsApp
   --------------------------------------------------------- */
const co = { lines: [], fromCart: true, url: "" };

function openCheckout(lines, fromCart) {
  co.lines = lines.map((l) => ({ id: l.id, sel: { ...l.sel }, qty: l.qty }));
  co.fromCart = fromCart;
  $("#coForm").hidden = false;
  $("#coDone").hidden = true;
  $("#coError").textContent = "";
  renderCheckout();
  $$(".modal.open, .drawer.open").forEach((el) => el.classList.remove("open"));
  openLayer($("#checkoutModal"));
}
function renderCheckout() {
  const t = totalsFor(co.lines);
  $("#coItems").innerHTML = co.lines
    .map((l) => {
      const p = byId[l.id];
      const r = resolve(p, l.sel);
      return `<div class="co-item"><img src="${r.img}" alt="" /><div><strong>${esc(p.name)}</strong><span>${r.label ? esc(r.label) + " · " : ""}${l.qty} x ${money(r.price)}</span></div><b>${money((cents(r.price) * l.qty) / 100)}</b></div>`;
    })
    .join("");
  $("#coTotals").innerHTML = `
    <div class="sum-row"><span>Artículos</span><span>${t.units}</span></div>
    ${t.savings > 0 ? `<div class="sum-row"><span>Ahorro</span><span class="text-ok">-${money(t.savings)}</span></div>` : ""}
    <div class="sum-row"><span>Envío</span><span>Por confirmar</span></div>
    <div class="sum-row sum-row--total"><span>Total</span><span>${money(t.total)}</span></div>`;
  $("#coBtnTotal").textContent = money(t.total);
}
const makeRef = () => CONFIG.orderPrefix + "-" + Date.now().toString(36).slice(-5).toUpperCase();

function buildMessage(ref, data) {
  const t = totalsFor(co.lines);
  const sep = "--------------------------------";
  const items = co.lines.map((l, i) => {
    const p = byId[l.id];
    const r = resolve(p, l.sel);
    return [
      `*${i + 1}. ${p.name}*`,
      r.label ? `   ${r.label}` : null,
      `   Cantidad: ${l.qty} x ${money(r.price)} = *${money((cents(r.price) * l.qty) / 100)}*`,
    ]
      .filter(Boolean)
      .join("\n");
  });
  return [
    `*NUEVO PEDIDO · ${CONFIG.brandName}*`,
    `Folio: ${ref}`,
    sep,
    items.join("\n\n"),
    sep,
    `Artículos: ${t.units}`,
    t.savings > 0 ? `Ahorro: -${money(t.savings)}` : null,
    `*TOTAL: ${money(t.total)} MXN*`,
    `Envío: por confirmar`,
    "",
    `*Método de pago:* ${data.pay}`,
    `*Entrega:* Envío a domicilio`,
    `*Nombre:* ${data.name}`,
    `*Teléfono:* ${data.phone}`,
    "",
    `*DIRECCIÓN DE ENVÍO*`,
    `Calle: ${data.addr.street} ${data.addr.number}`,
    `Colonia: ${data.addr.colonia}`,
    `C.P.: ${data.addr.zip}`,
    `Ciudad: ${data.addr.city}`,
    `Referencias: ${data.addr.ref}`,
    data.notes ? `*Notas:* ${data.notes}` : null,
    "",
    `Hola, quiero confirmar este pedido. ¿Me comparten los datos para realizar el pago?`,
  ]
    .filter((x) => x !== null)
    .join("\n");
}

/* ---------------------------------------------------------
   Eventos
   --------------------------------------------------------- */
document.addEventListener("click", (e) => {
  const t = e.target;
  const el = (sel) => t.closest(sel);
  let m;

  if ((m = el("[data-close]"))) return closeLayer(m.closest(".modal, .drawer"));
  if (el("[data-close-mobile]")) return closeMobileNav();
  if ((m = el("[data-thumb]"))) return setMainImage(m.dataset.thumb);
  if ((m = el("[data-policy]"))) return openPolicy(m.dataset.policy);
  if ((m = el("[data-opt]"))) {
    pm.sel[m.dataset.opt] = m.dataset.val;
    pm.qty = pmQty();
    return updatePM();
  }
  if ((m = el("[data-tab]"))) { pm.tab = m.dataset.tab; return renderPMTab(); }
  if ((m = el("[data-qty]"))) {
    const input = $("#pmQty");
    input.value = Math.max(1, Math.min(99, pmQty() + Number(m.dataset.qty)));
    return;
  }
  if (el("#pmMain")) return $("#pmMain").classList.toggle("zoom");
  if (el("#pmAdd")) {
    addToCart(pm.p.id, pm.sel, pmQty(), $("#pmMain"));
    return;
  }
  if (el("[data-sticky-add]")) return addToCart(pm.p.id, pm.sel, pmQty(), $("#pmMain"));
  if (el("[data-sticky-buy]")) return openCheckout([{ id: pm.p.id, sel: pm.sel, qty: pmQty() }], false);
  if (el("#pmBuyNow")) return openCheckout([{ id: pm.p.id, sel: pm.sel, qty: pmQty() }], false);
  if (el("[data-ask-variant]")) return openWa(askText(pm.p, resolve(pm.p, pm.sel).label));

  if ((m = el("[data-hero]"))) {
    showHero(Number(m.dataset.hero));
    return startHeroTimer();
  }
  if ((m = el("[data-open]"))) {
    e.preventDefault();
    closeMobileNav();
    return openProduct(m.dataset.open);
  }
  if ((m = el("[data-add]"))) {
    const p = byId[m.dataset.add];
    return addToCart(p.id, defaultSel(p), 1, m.closest(".card")?.querySelector(".card__media") || m);
  }
  if ((m = el("[data-ask]"))) return openWa(askText(byId[m.dataset.ask]));
  if ((m = el("[data-go]"))) {
    e.preventDefault();
    return goCategory(m.dataset.go);
  }
  if ((m = el("[data-href]"))) {
    closeMobileNav();
    return $(m.dataset.href).scrollIntoView({ behavior: "smooth" });
  }
  if ((m = el("[data-cat]"))) {
    state.cat = m.dataset.cat;
    return renderGrid();
  }
  if (el("[data-clear-q]")) {
    state.q = "";
    $("#searchInput").value = "";
    return renderGrid();
  }
  if ((m = el("[data-rail]"))) {
    const rail = $("#dealsRail");
    rail.scrollBy({ left: (m.dataset.rail === "next" ? 1 : -1) * rail.clientWidth * 0.8, behavior: "smooth" });
    return;
  }
  if ((m = el("[data-rm]"))) return setLineQty(Number(m.dataset.rm), 0);
  if ((m = el("[data-line-qty]"))) {
    const i = Number(m.dataset.lineQty);
    return setLineQty(i, cart[i].qty + Number(m.dataset.d));
  }
  if (el("[data-close-go]")) {
    closeLayer($("#cartDrawer"));
    return $("#catalogo").scrollIntoView({ behavior: "smooth" });
  }
});

document.addEventListener("change", (e) => {
  if (e.target.name === "pay") $("#debitNote").hidden = !e.target.value.startsWith("Tarjeta");
  const m = e.target.closest("[data-line-input]");
  if (m) setLineQty(Number(m.dataset.lineInput), parseInt(m.value, 10) || 0);
});

$("#overlay").addEventListener("click", closeAll);
$("#mobileNav").addEventListener("click", (e) => { if (e.target === e.currentTarget) closeMobileNav(); });
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if ($("#searchbar").classList.contains("open")) return closeSearch();
  const open = $$(".modal.open, .drawer.open");
  if (open.length) closeLayer(open[open.length - 1]);
  else closeMobileNav();
});

$("#cartOpen").addEventListener("click", openCart);
$("#menuOpen").addEventListener("click", openMobileNav);
$("#searchOpen").addEventListener("click", () => ($("#searchbar").classList.contains("open") ? closeSearch() : openSearch()));
$("#searchClose").addEventListener("click", closeSearch);
$("#searchInput").addEventListener("input", renderSearch);
$("#searchInput").addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  state.q = e.target.value.trim();
  state.cat = "all";
  state.brand = "";
  closeSearch();
  renderGrid();
  $("#catalogo").scrollIntoView({ behavior: "smooth" });
});
$("#loadMore").addEventListener("click", () => {
  gridLimit += pageSize();
  renderGrid(true);
});

/* Las fotos aparecen suavemente cuando terminan de cargar (con efecto de brillo mientras tanto) */
const imgReady = (e) => {
  const img = e.target;
  if (img.tagName === "IMG") img.closest(".card__media")?.classList.add("ready");
};
document.addEventListener("load", imgReady, true);
document.addEventListener("error", imgReady, true);
function markLoaded(root = document) {
  $$(".card__media img", root).forEach((img) => img.complete && img.closest(".card__media").classList.add("ready"));
}

$("#brandSelect").addEventListener("change", (e) => { state.brand = e.target.value; renderGrid(); });
$("#sortSelect").addEventListener("change", (e) => { state.sort = e.target.value; renderGrid(); });
$("#resetFilters").addEventListener("click", () => {
  Object.assign(state, { cat: "all", brand: "", sort: "featured", q: "" });
  $("#sortSelect").value = "featured";
  $("#searchInput").value = "";
  renderGrid();
});

$("#cartCheckout").addEventListener("click", () => cart.length && openCheckout(cart, true));
$("#cartClear").addEventListener("click", () => {
  const backup = cart.slice();
  cart = [];
  saveCart();
  renderCart();
  toast({ icon: "trash", title: "Carrito vacío", text: "Se quitaron todos los productos.", action: { label: "Deshacer", fn: () => { cart = backup; saveCart(); renderCart(); } } });
});

$("#coForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("#coName").value.trim();
  const val = (s) => $(s).value.trim().replace(/\s+/g, " ");
  const phone = $("#coPhone").value.replace(/\D/g, "");
  const addr = {
    street: val("#coStreet"),
    number: val("#coNumber"),
    zip: $("#coZip").value.replace(/\D/g, ""),
    colonia: val("#coColonia"),
    city: val("#coCity"),
    ref: val("#coRef2"),
  };
  const checks = [
    ["#coName", !!name, "Escribe tu nombre para continuar."],
    ["#coPhone", phone.length >= 10 && phone.length <= 13, "Escribe un teléfono válido de 10 dígitos."],
    ["#coStreet", !!addr.street, "Escribe la calle de entrega."],
    ["#coNumber", !!addr.number, "Escribe el número exterior (e interior si aplica)."],
    ["#coZip", addr.zip.length === 5, "El código postal debe tener 5 dígitos."],
    ["#coColonia", !!addr.colonia, "Escribe la colonia."],
    ["#coCity", !!addr.city, "Escribe la ciudad y el estado."],
    ["#coRef2", !!addr.ref, "Agrega una referencia de la vivienda para facilitar la entrega."],
  ];
  checks.forEach(([s, ok]) => $(s).classList.toggle("err", !ok));
  const firstErr = checks.find(([, ok]) => !ok);
  if (firstErr) {
    $("#coError").textContent = firstErr[2];
    $(firstErr[0]).focus();
    return;
  }
  $("#coError").textContent = "";
  const ref = makeRef();
  const msg = buildMessage(ref, {
    name,
    phone: phone.length === 10 ? phone.replace(/(\d{2})(\d{4})(\d{4})/, "$1 $2 $3") : phone,
    addr,
    pay: $('input[name="pay"]:checked').value,
    notes: $("#coNotes").value.trim(),
  });
  co.url = openWa(msg);
  $("#coReopen").href = co.url;
  $("#coRef").textContent = "Folio " + ref + " · " + money(totalsFor(co.lines).total);
  $("#coClearCart").hidden = !co.fromCart;
  $("#coForm").hidden = true;
  $("#coDone").hidden = false;
});
$("#coClearCart").addEventListener("click", () => {
  cart = [];
  saveCart();
  renderCart();
  closeLayer($("#checkoutModal"));
});

/* Encabezado con sombra al hacer scroll */
const header = $("#header");
addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 10), { passive: true });

/* Revelado al hacer scroll */
const io = "IntersectionObserver" in window
  ? new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )
  : null;
function observeReveals() {
  $$(".reveal:not(.in)").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
}

/* ---------------------------------------------------------
   Inicio
   --------------------------------------------------------- */
renderStatic();
renderGrid();
renderCart();
hydrateIcons();
observeReveals();
markLoaded();
runLoader();
