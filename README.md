# Promo Estacionamiento — Landing de venta

Sitio de una página (React + Vite) para promocionar el sistema de gestión de
estacionamientos. Bilingüe ES/EN, sin precio, con CTA por WhatsApp.

## Dónde colocar tu contenido

### Capturas del sistema
Copia tus screenshots a `public/images/` con estos nombres exactos (PNG):

- `sistema-1.png` — Mapa de espacios en tiempo real
- `sistema-2.png` — Pagos y estadísticas de ingresos
- `sistema-3.png` — Registro de vehículos y clientes
- `sistema-4.png` — Historial y archivo

Aparecerán automáticamente en la sección "Capturas". Los marcos estilo navegador
ya están armados; solo reemplaza la imagen.

### Video de demostración
Copia tu video (MP4) a `public/videos/demo.mp4`. Aparecerá automáticamente con
controles HTML5 en la sección "Video".

### Número de WhatsApp
Abre `src/content.js` y cambia `WHATSAPP.number` por tu número real con código
de país, sin `+` ni espacios (ej. México: `52155xxxxxxxx`).

## Comandos

- `npm install` — instala dependencias (primera vez)
- `npm run dev` — desarrollo local en http://localhost:5173
- `npm run build` — genera `dist/` listo para publicar
- `npm run preview` — sirve el build localmente

## Publicar

El build en `dist/` es un sitio estático: puedes subirlo a cualquier hosting
(Netlify, Vercel, GitHub Pages, etc.).