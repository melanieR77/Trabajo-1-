# 🐾 Venta de Perritos - Sitio Web

Sitio web profesional para venta de cachorros de raza en Honduras, construido con **Next.js 14**.

---

## 🚀 Cómo correr localmente

### 1. Requisitos
- [Node.js](https://nodejs.org/) v18 o superior
- npm (viene incluido con Node.js)

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar servidor de desarrollo
```bash
npm run dev
```

### 4. Abrir en el navegador
Ve a: **http://localhost:3000**

---

## 📁 Estructura del proyecto

```
venta-perritos/
├── app/
│   ├── layout.js        # Layout raíz con metadatos SEO
│   ├── page.js          # Página principal
│   └── globals.css      # Estilos globales y variables CSS
├── components/
│   ├── Navbar.js        # Barra de navegación fija con scroll
│   ├── Hero.js          # Sección principal / portada
│   ├── Breeds.js        # Catálogo de cachorros con filtros
│   ├── About.js         # Sección "¿Por qué elegirnos?"
│   ├── Gallery.js       # Galería de fotos
│   ├── Testimonials.js  # Reseñas de clientes
│   ├── Contact.js       # Formulario + info de contacto
│   ├── Footer.js        # Pie de página
│   └── WhatsAppButton.js # Botón flotante de WhatsApp
├── next.config.js       # Config de Next.js
└── package.json
```

---

## ✨ Características

- ✅ Diseño responsivo (móvil, tablet, desktop)
- ✅ Animaciones suaves y modernas
- ✅ Catálogo de cachorros con filtros por tamaño
- ✅ Botón flotante de WhatsApp
- ✅ Formulario que abre WhatsApp automáticamente
- ✅ Galería de imágenes interactiva
- ✅ SEO optimizado
- ✅ Navbar fija con efecto de scroll

---

## 🛠 Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo en localhost:3000 |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción |

---

## 📞 Personalización

Para cambiar el número de WhatsApp, busca `50498765432` en los archivos y reemplázalo con tu número real (incluye código de país sin el +).

---

Hecho con ❤️ en San Pedro Sula, Honduras 🇭🇳
