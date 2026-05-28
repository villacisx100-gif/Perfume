/* ═══════════════════════════════════════════════════
   AURA PARFUM — styles.css
   Contiene: variables, reset, navegación, hero,
   productos, galería, contacto, admin y footer.
═══════════════════════════════════════════════════ */

/* ─── VARIABLES GLOBALES ─── */
:root {
  --rose:        #c8607a;
  --rose-light:  #f7e8ec;
  --rose-mid:    #e8b4c0;
  --rose-dark:   #9e3d55;
  --cream:       #fdf8f5;
  --white:       #ffffff;
  --text:        #2a1f22;
  --text-muted:  #8a7077;
  --border:      rgba(200, 96, 122, 0.15);

  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'DM Sans', sans-serif;

  --radius:    14px;
  --radius-sm:  8px;
}

/* ─── RESET Y BASE ─── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  background: var(--cream);
  color: var(--text);
  line-height: 1.6;
  min-height: 100vh;
}

/* ─── SECCIONES ─── */
.section {
  display: none;
}
.section.active {
  display: block;
}

/* ═══════════════════════════════════════════════════
   NAVEGACIÓN
═══════════════════════════════════════════════════ */
nav {
  position: sticky;
  top: 0;
  z-index: 200;
  background: rgba(253, 248, 245, 0.93);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.nav-brand {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 4px;
  color: var(--rose-dark);
  cursor: pointer;
  transition: color 0.2s;
}
.nav-brand:hover {
  color: var(--rose);
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}
.nav-links a {
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: var(--text-muted);
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s;
}
.nav-links a:hover {
  color: var(--rose);
}
.nav-links a.admin-link {
  background: var(--rose-light);
  color: var(--rose);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
}
.nav-links a.admin-link:hover {
  background: var(--rose-mid);
  color: var(--rose-dark);
}

/* ═══════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════ */
.hero {
  min-height: 520px;
  background: linear-gradient(160deg, #fdf0f3 0%, #fff8f9 50%, #f8f0ea 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 50% at 50% 0%,
    rgba(200, 96, 122, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 600px;
}

.hero-tag {
  display: inline-block;
  font-size: 11px;
  letter-spacing: 3px;
  color: var(--rose);
  background: var(--rose-light);
  padding: 5px 16px;
  border-radius: 20px;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.hero h1 {
  font-family: var(--font-display);
  font-size: clamp(48px, 8vw, 80px);
  font-weight: 300;
  line-height: 1.05;
  letter-spacing: 6px;
  color: var(--rose-dark);
  margin-bottom: 1rem;
}
.hero h1 em {
  font-style: italic;
  color: var(--rose);
}

.hero p {
  font-size: 15px;
  color: var(--text-muted);
  margin-bottom: 2rem;
  line-height: 1.8;
}

.hero-btn {
  display: inline-block;
  background: var(--rose);
  color: white;
  padding: 13px 36px;
  border-radius: 30px;
  font-size: 13px;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  font-family: var(--font-body);
}
.hero-btn:hover {
  background: var(--rose-dark);
  transform: translateY(-2px);
}

/* ─── PILARES / VALORES ─── */
.pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: var(--white);
}
.pillar {
  padding: 2.5rem 2rem;
  text-align: center;
  border-right: 1px solid var(--border);
}
.pillar:last-child {
  border-right: none;
}
.pillar-icon {
  font-size: 28px;
  margin-bottom: 12px;
  display: block;
}
.pillar-title {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
}
.pillar-desc {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
}

/* ─── SECCIÓN DESTACADOS (HOME) ─── */
.home-featured {
  max-width: 960px;
  margin: 0 auto;
  padding: 3rem 2rem;
}
.home-section-title {
  font-family: var(--font-display);
  font-size: 30px;
  font-weight: 300;
  letter-spacing: 2px;
  color: var(--rose-dark);
  margin-bottom: 6px;
}
.home-section-sub {
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

/* ═══════════════════════════════════════════════════
   PÁGINA GENÉRICA (wrapper)
═══════════════════════════════════════════════════ */
.page {
  max-width: 960px;
  margin: 0 auto;
  padding: 3.5rem 2rem;
}
.page-title {
  font-family: var(--font-display);
  font-size: 38px;
  font-weight: 300;
  letter-spacing: 2px;
  color: var(--rose-dark);
  margin-bottom: 6px;
}
.page-sub {
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
}

/* ═══════════════════════════════════════════════════
   TARJETAS DE PRODUCTOS
═══════════════════════════════════════════════════ */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.product-card {
  background: var(--white);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(200, 96, 122, 0.1);
}

.product-thumb {
  height: 180px;
  background: var(--rose-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 52px;
  position: relative;
  overflow: hidden;
}
.product-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
}
.product-thumb .emoji {
  position: relative;
  z-index: 1;
}

.product-body {
  padding: 1.25rem;
}
.product-cat {
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--rose);
  margin-bottom: 6px;
}
.product-name {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 6px;
}
.product-desc {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 12px;
}
.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 6px;
}
.product-price {
  font-size: 18px;
  font-weight: 500;
  color: var(--rose-dark);
}

/* Badges de stock */
.stock-badge {
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 12px;
}
.stock-available { background: #edf7f1; color: #2d8a4e; }
.stock-low       { background: #fef9ec; color: #b8860b; }
.stock-out       { background: #fef0ee; color: #c0392b; }

/* Botón eliminar dentro de tarjeta */
.btn-danger {
  margin-top: 10px;
  background: none;
  color: #c0392b;
  padding: 6px 14px;
  border: 1px solid rgba(192, 57, 43, 0.3);
  border-radius: 20px;
  font-family: var(--font-body);
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-danger:hover {
  background: #fef0ee;
}

/* ═══════════════════════════════════════════════════
   GALERÍA
═══════════════════════════════════════════════════ */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
}
.gallery-item {
  aspect-ratio: 1;
  border-radius: var(--radius-sm);
  overflow: hidden;
  position: relative;
  background: var(--rose-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  cursor: pointer;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.gallery-item .del-overlay {
  position: absolute;
  inset: 0;
  background: rgba(158, 61, 85, 0.72);
  display: none;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 13px;
  font-weight: 500;
}
.gallery-item:hover .del-overlay {
  display: flex;
}

/* ═══════════════════════════════════════════════════
   CONTACTO
═══════════════════════════════════════════════════ */
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.contact-card {
  background: var(--white);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 2rem;
}
.contact-card h3 {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 1.25rem;
}
.contact-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  font-size: 14px;
}
.contact-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--rose-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}
.msg-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* ═══════════════════════════════════════════════════
   FORMULARIOS (Admin)
═══════════════════════════════════════════════════ */
.form-section {
  background: var(--white);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.form-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
}
.form-header-left {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 500;
}
.form-header-icon {
  font-size: 20px;
}
.toggle-icon {
  font-size: 18px;
  color: var(--text-muted);
  transition: transform 0.25s;
}
.form-body {
  margin-top: 1.25rem;
}
.form-body.hidden {
  display: none;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.form-group.full {
  grid-column: 1 / -1;
}

label {
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: 0.3px;
}

/* Inputs, textareas, selects */
input,
textarea,
select {
  width: 100%;
  padding: 9px 13px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--text);
  background: var(--cream);
  transition: border-color 0.2s, background 0.2s;
  outline: none;
}
input:focus,
textarea:focus,
select:focus {
  border-color: var(--rose);
  background: var(--white);
}
textarea {
  resize: vertical;
  min-height: 80px;
}

/* Botón principal */
.btn-primary {
  background: var(--rose);
  color: white;
  padding: 10px 24px;
  border: none;
  border-radius: 24px;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.3px;
  transition: background 0.2s, transform 0.15s;
}
.btn-primary:hover {
  background: var(--rose-dark);
  transform: translateY(-1px);
}

/* Acciones del formulario */
.form-actions {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

/* Alerta de éxito */
.alert-success {
  background: #edf7f1;
  color: #2d8a4e;
  border-radius: var(--radius-sm);
  padding: 9px 14px;
  font-size: 13px;
  display: none;
}
.alert-success.inline {
  margin-top: 0;
}

/* Zona de carga de archivos */
.upload-zone {
  border: 2px dashed var(--rose-mid);
  border-radius: var(--radius-sm);
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  color: var(--text-muted);
  font-size: 14px;
  background: #fff9fb;
  transition: all 0.2s;
}
.upload-zone:hover {
  border-color: var(--rose);
  color: var(--rose);
  background: var(--rose-light);
}
.upload-icon {
  font-size: 28px;
  margin-bottom: 8px;
  display: block;
}
.upload-hint {
  font-size: 12px;
  margin-top: 4px;
  color: var(--text-muted);
}
#gallery-file-input {
  display: none;
}

/* URL upload */
.url-upload {
  margin-top: 14px;
}
.url-upload-label {
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 8px;
}
.url-upload-row {
  display: flex;
  gap: 8px;
}
.url-upload-row input {
  flex: 1;
}

/* Título lista admin */
.admin-list-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 1rem;
}

/* ═══════════════════════════════════════════════════
   ESTADO VACÍO
═══════════════════════════════════════════════════ */
.empty-state {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--text-muted);
  font-size: 14px;
  grid-column: 1 / -1;
}
.empty-icon {
  font-size: 36px;
  margin-bottom: 12px;
  display: block;
}

/* ═══════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════ */
footer {
  border-top: 1px solid var(--border);
  text-align: center;
  padding: 2rem;
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: 0.5px;
  font-family: var(--font-display);
  font-style: italic;
}

/* ═══════════════════════════════════════════════════
   RESPONSIVE — Móvil
═══════════════════════════════════════════════════ */
@media (max-width: 640px) {
  .pillars {
    grid-template-columns: 1fr;
  }
  .pillar {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
  .form-grid {
    grid-template-columns: 1fr;
  }
  .contact-layout {
    grid-template-columns: 1fr;
  }
  .nav-links a:not(.admin-link):not(:last-of-type) {
    display: none;
  }
}
