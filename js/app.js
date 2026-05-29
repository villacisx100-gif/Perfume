/* ═══════════════════════════════════════════════════
   LITTLE ESSENCES — app.js
   Contiene toda la lógica e interactividad:
   · Navegación entre secciones
   · CRUD de productos
   · Galería de imágenes
   · Edición de contacto
   · Formulario de mensajes
═══════════════════════════════════════════════════ */

/* ───────────────────────────────────────
   DATOS INICIALES
─────────────────────────────────────── */

// Emojis decorativos para las tarjetas sin imagen
const EMOJIS = ['🌸', '🌺', '🌹', '✨', '💜', '🍓', '🌿', '🍊', '🌊', '🫧'];

// Productos de ejemplo cargados al inicio
let products = [
  {
    id: 1,
    name: 'Rosa Salvaje',
    price: 8.50,
    desc: 'Notas de rosa, jazmín y almizcle suave. Ideal para el día a día.',
    cat: 'Floral',
    stock: 'Disponible',
    img: ''
  },
  {
    id: 2,
    name: 'Bosque Mágico',
    price: 9.00,
    desc: 'Cedro, sándalo y notas verdes frescas. Perfecto para la noche.',
    cat: 'Amaderado',
    stock: 'Disponible',
    img: ''
  },
  {
    id: 3,
    name: 'Fresas del Valle',
    price: 7.50,
    desc: 'Fresa, frambuesa y vainilla tierna. Dulce y juvenil.',
    cat: 'Frutal',
    stock: 'Pocas unidades',
    img: ''
  }
];

// Imágenes de la galería
let gallery = [];

// Información de contacto editable
let contact = {
  whatsapp:  '+593 99 000 0000',
  email:     'littleessences@gmail.com',
  instagram: '@littleessences',
  city:      'Riobamba, Ecuador'
};

// Contador para IDs únicos
let nextId = 4;


/* ───────────────────────────────────────
   NAVEGACIÓN ENTRE SECCIONES
─────────────────────────────────────── */

/**
 * Muestra la sección indicada y oculta las demás.
 * También dispara el renderizado correspondiente.
 * @param {string} id - Nombre de la sección ('home', 'products', etc.)
 */
function showSection(id) {
  // Ocultar todas las secciones
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

  // Mostrar la sección solicitada
  document.getElementById('section-' + id).classList.add('active');

  // Renderizar contenido según la sección
  switch (id) {
    case 'home':     renderFeatured();   break;
    case 'products': renderProducts();   break;
    case 'gallery':  renderGallery();    break;
    case 'admin':
      renderAdminList();
      fillContactForm();
      break;
  }
}


/* ───────────────────────────────────────
   FORMULARIOS DESPLEGABLES (accordion)
─────────────────────────────────────── */

/**
 * Muestra u oculta el cuerpo de un formulario acordeón.
 * @param {string} key - Prefijo del formulario ('pf', 'gf', 'cf')
 */
function toggleForm(key) {
  const body = document.getElementById(key + '-body');
  const icon = document.getElementById(key + '-icon');
  const isHidden = body.classList.toggle('hidden');

  // Rotar el ícono ▾ cuando está abierto
  icon.style.transform = isHidden ? '' : 'rotate(180deg)';
}


/* ───────────────────────────────────────
   HELPERS
─────────────────────────────────────── */

/**
 * Devuelve la clase CSS del badge según disponibilidad.
 * @param {string} stock - 'Disponible' | 'Pocas unidades' | 'Agotado'
 * @returns {string} clase CSS
 */
function stockClass(stock) {
  if (stock === 'Disponible')     return 'stock-available';
  if (stock === 'Pocas unidades') return 'stock-low';
  return 'stock-out';
}

/**
 * Muestra un mensaje de éxito por 3.5 segundos.
 * @param {string} id - ID del elemento .alert-success
 */
function showAlert(id) {
  const el = document.getElementById(id);
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 3500);
}

/**
 * Genera el HTML de una tarjeta de producto.
 * @param {Object}  p         - Objeto producto
 * @param {boolean} adminMode - Si es true, muestra botón de eliminar
 * @returns {string} HTML de la tarjeta
 */
function productCardHTML(p, adminMode) {
  const emoji  = EMOJIS[p.id % EMOJIS.length];
  const imgTag = p.img
    ? `<img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'">`
    : '';

  const deleteBtn = adminMode
    ? `<div style="margin-top:10px;">
         <button class="btn-danger" onclick="deleteProduct(${p.id})">✕ Eliminar</button>
       </div>`
    : '';

  return `
    <div class="product-card">
      <div class="product-thumb">
        ${imgTag}
        <span class="emoji">${emoji}</span>
      </div>
      <div class="product-body">
        <div class="product-cat">${p.cat}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">$${Number(p.price).toFixed(2)}</div>
          <span class="stock-badge ${stockClass(p.stock)}">${p.stock}</span>
        </div>
        ${deleteBtn}
      </div>
    </div>`;
}


/* ───────────────────────────────────────
   RENDERIZADO DE SECCIONES
─────────────────────────────────────── */

/**
 * Renderiza los productos destacados en la página de inicio.
 * Solo muestra los que tienen stock 'Disponible' (máx 3).
 */
function renderFeatured() {
  const grid = document.getElementById('featured-grid');
  const featured = products
    .filter(p => p.stock === 'Disponible')
    .slice(0, 3);

  grid.innerHTML = featured.length
    ? featured.map(p => productCardHTML(p, false)).join('')
    : `<div class="empty-state">
         <span class="empty-icon">🌸</span>
         Agrega productos desde el panel Admin
       </div>`;
}

/**
 * Renderiza todos los productos en la sección Productos.
 */
function renderProducts() {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = products.length
    ? products.map(p => productCardHTML(p, false)).join('')
    : `<div class="empty-state">
         <span class="empty-icon">🌸</span>
         Aún no hay productos. ¡Agrega desde Admin!
       </div>`;
}

/**
 * Renderiza las imágenes de la galería.
 */
function renderGallery() {
  const container = document.getElementById('gallery-display');

  if (!gallery.length) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">📷</span>
        Sube tus primeras fotos desde el panel Admin
      </div>`;
    return;
  }

  container.innerHTML = gallery.map((src, i) => `
    <div class="gallery-item">
      <img src="${src}" alt="Galería ${i + 1}"
           onerror="this.parentNode.innerHTML='<div style=\\'font-size:36px\\'>🌸</div>'">
      <div class="del-overlay" onclick="deleteGallery(${i})">✕ Eliminar</div>
    </div>`).join('');
}

/**
 * Renderiza la lista de productos en el panel Admin (con botón eliminar).
 */
function renderAdminList() {
  const container = document.getElementById('admin-product-list');
  container.innerHTML = products.length
    ? `<div class="product-grid">${products.map(p => productCardHTML(p, true)).join('')}</div>`
    : `<div class="empty-state">
         <span class="empty-icon">🌸</span>
         No hay productos aún
       </div>`;
}


/* ───────────────────────────────────────
   GESTIÓN DE PRODUCTOS (CRUD)
─────────────────────────────────────── */

/**
 * Lee el formulario y agrega un nuevo producto al array.
 * Valida nombre y precio antes de guardar.
 */
function addProduct() {
  const name  = document.getElementById('p-name').value.trim();
  const price = parseFloat(document.getElementById('p-price').value);
  const desc  = document.getElementById('p-desc').value.trim();
  const img   = document.getElementById('p-img').value.trim();
  const cat   = document.getElementById('p-cat').value;
  const stock = document.getElementById('p-stock').value;

  // Validación básica
  if (!name || isNaN(price) || price <= 0) {
    alert('Por favor ingresa un nombre y un precio válido.');
    return;
  }

  // Agregar al array
  products.push({ id: nextId++, name, price, desc, cat, stock, img });

  // Limpiar campos del formulario
  ['p-name', 'p-price', 'p-desc', 'p-img'].forEach(id => {
    document.getElementById(id).value = '';
  });

  // Feedback visual y re-render
  showAlert('product-success');
  renderAdminList();
}

/**
 * Elimina un producto por su ID tras confirmar.
 * @param {number} id - ID del producto a eliminar
 */
function deleteProduct(id) {
  if (!confirm('¿Eliminar este producto?')) return;
  products = products.filter(p => p.id !== id);
  renderAdminList();
}


/* ───────────────────────────────────────
   GALERÍA DE IMÁGENES
─────────────────────────────────────── */

/**
 * Carga una imagen desde el sistema de archivos del usuario
 * usando FileReader y la convierte a Base64.
 * @param {Event} event - Evento change del input[type=file]
 */
function uploadGalleryImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Verificar tamaño (máx 5 MB)
  if (file.size > 5 * 1024 * 1024) {
    alert('La imagen es demasiado grande. El máximo es 5 MB.');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    gallery.push(e.target.result);
    renderGallery();
  };
  reader.readAsDataURL(file);

  // Limpiar el input para permitir subir la misma imagen otra vez
  event.target.value = '';
}

/**
 * Agrega una imagen a la galería a partir de una URL externa.
 */
function addGalleryUrl() {
  const url = document.getElementById('gallery-url').value.trim();
  if (!url) {
    alert('Por favor ingresa una URL válida.');
    return;
  }
  gallery.push(url);
  document.getElementById('gallery-url').value = '';
  renderGallery();
}

/**
 * Elimina una imagen de la galería por su índice.
 * @param {number} index - Índice en el array gallery
 */
function deleteGallery(index) {
  if (!confirm('¿Eliminar esta foto?')) return;
  gallery.splice(index, 1);
  renderGallery();
}


/* ───────────────────────────────────────
   INFORMACIÓN DE CONTACTO
─────────────────────────────────────── */

/**
 * Rellena el formulario de contacto con los valores actuales
 * cada vez que se abre el panel Admin.
 */
function fillContactForm() {
  document.getElementById('c-whatsapp').value  = contact.whatsapp;
  document.getElementById('c-email').value     = contact.email;
  document.getElementById('c-instagram').value = contact.instagram;
  document.getElementById('c-city').value      = contact.city;
}

/**
 * Lee el formulario, actualiza el objeto contact y
 * refleja los cambios en la sección pública de Contacto.
 */
function saveContact() {
  const whatsapp  = document.getElementById('c-whatsapp').value.trim();
  const email     = document.getElementById('c-email').value.trim();
  const instagram = document.getElementById('c-instagram').value.trim();
  const city      = document.getElementById('c-city').value.trim();

  // Solo actualizar si el campo no está vacío
  if (whatsapp)  contact.whatsapp  = whatsapp;
  if (email)     contact.email     = email;
  if (instagram) contact.instagram = instagram;
  if (city)      contact.city      = city;

  // Reflejar cambios en la vista pública
  document.getElementById('disp-whatsapp').textContent  = contact.whatsapp;
  document.getElementById('disp-email').textContent     = contact.email;
  document.getElementById('disp-instagram').textContent = contact.instagram;
  document.getElementById('disp-city').textContent      = contact.city;

  showAlert('contact-success');
}


/* ───────────────────────────────────────
   FORMULARIO DE MENSAJE (Contacto)
─────────────────────────────────────── */

/**
 * Simula el envío de un mensaje de contacto.
 * Valida nombre y mensaje, luego muestra confirmación.
 */
function sendMessage() {
  const name = document.getElementById('msg-name').value.trim();
  const text = document.getElementById('msg-text').value.trim();

  if (!name || !text) {
    alert('Por favor completa tu nombre y el mensaje.');
    return;
  }

  // Limpiar campos tras el envío
  document.getElementById('msg-name').value    = '';
  document.getElementById('msg-contact').value = '';
  document.getElementById('msg-text').value    = '';

  showAlert('msg-success');
}


/* ───────────────────────────────────────
   INICIALIZACIÓN AL CARGAR LA PÁGINA
─────────────────────────────────────── */

// Renderizar productos destacados en la pantalla de inicio
renderFeatured();
