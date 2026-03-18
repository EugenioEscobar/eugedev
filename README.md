# EugeDev — Sitio Web Personal

Proyecto construido con **Vite + React + Tailwind CSS v3**.

Todo el contenido del sitio está centralizado en un único archivo:
```
src/data/content.js
```

## 🚀 Instalación y uso

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo → http://localhost:5173
npm run build    # build para producción → /dist
npm run preview  # preview del build
```

## 📁 Estructura del proyecto

```
eugedev/
├── public/
│   └── favicon.svg
├── src/
│   ├── data/
│   │   └── content.js          ← ✅ EDITA AQUÍ todo el contenido
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── FloatingWhatsApp.jsx
│   │   └── Icons.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Valor.jsx
│   │   ├── Servicios.jsx
│   │   ├── Dental.jsx
│   │   ├── Proyectos.jsx
│   │   ├── Sobre.jsx
│   │   └── Contacto.jsx
│   ├── hooks/
│   │   └── useReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## ✏️ Personalización del contenido

**Todo se edita en `src/data/content.js`** sin tocar ningún componente.

### Tu foto real
Pon tu imagen en `/public/` y actualiza las URLs en `content.js`:
```js
hero: {
  photo: { src: '/foto-hero.png', alt: 'Tu nombre' }
}
sobre: {
  photo: { src: '/foto-sobre.png', alt: 'Tu nombre' }
}
```

### Datos de contacto
```js
contacto: {
  items: [
    { href: 'https://wa.me/56911111111', value: '+56 9 1111 1111', ... },
    { href: 'mailto:tucorreo@dominio.cl', value: 'tucorreo@dominio.cl', ... },
  ]
}
```

### Imágenes (Pexels)
Las imágenes de ejemplo usan URLs de Pexels (gratuitas).
Para reemplazarlas, actualiza los campos `image.src` en `content.js`.

Formato URL de Pexels:
```
https://images.pexels.com/photos/{ID}/pexels-photo-{ID}.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1
```

## 🎨 Colores (tailwind.config.js)

| Token           | Valor     | Uso                  |
|-----------------|-----------|----------------------|
| `gold`          | `#C9A227` | Dorado principal     |
| `gold-light`    | `#E5C76B` | Hover / acentos      |
| `gold-dim`      | `#8B6E1A` | Badges / subtexto    |
| `black`         | `#0A0A0A` | Fondo principal      |
| `black-2`       | `#111111` | Secciones alternas   |
| `black-3`       | `#161616` | Cards                |
| `cream`         | `#F5F0E8` | Texto principal      |
| `muted`         | `#8A8A8A` | Texto secundario     |
| `muted-light`   | `#C0BAB0` | Texto párrafos       |

## 🛠 Stack
- **Vite 5** — bundler ultrarrápido
- **React 18** — UI declarativa
- **Tailwind CSS 3** — estilos utility-first
- **Google Fonts** — Playfair Display · Cormorant Garamond · DM Sans
- **Pexels** — imágenes de stock gratuitas (se cargan directo por URL)
