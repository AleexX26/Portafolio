# CLAUDE.md — Portafolio Alejandro Sobrino

Web de portafolio de una sola página para enseñar mis webs a clientes potenciales y conseguir que me escriban (email, WhatsApp, redes).

## Stack

- Un único `index.html`: HTML + CSS + JS sin frameworks ni build
- Tipografía Inter Tight variable (Google Fonts, `wght@100..900`), única familia
- Capturas de los proyectos en `img/*.webp` (1200×900)
- Hosting estático: Netlify, Vercel o GitHub Pages (subir la carpeta tal cual, con `img/`)

## Arquitectura

```
index.html   Todo: <style> (tokens en :root), secciones, <script> con DATOS y PROYECTOS arriba
img/         Capturas 4:3 de los proyectos (atelier-barber, casa-ferro, estanco-275)
```

Bloques de color por sección: portada negra (titular de grosor variable) → cinta lima inclinada en
movimiento → proyectos en claro (oscuro con el sistema) → sobre mí en negro con servicios en grande →
contacto a todo color lima → pie negro con el nombre en lima a ancho completo. La barra superior es
fija y toma el color de la sección que tiene debajo (`data-tema` = oscuro | claro | acento).

Flujo del script: `DATOS` rellena nombre, email, WhatsApp y redes → `PROYECTOS` genera la lista, los
filtros (con su número) y los botones "¿Qué necesitas?" de contacto → al elegir uno se reescriben el
asunto y el cuerpo del `mailto:` y el texto de WhatsApp.

## Proyectos mostrados

| Proyecto | Tipo | URL | Carpeta local |
| --- | --- | --- | --- |
| Atelier Barber | Aplicación web | https://reservas-demo.onrender.com | `Crear Paginas/` |
| Casa Ferro | Landing | https://aleexx26.github.io/demo-barberia/ | `peluqueria/` |
| Estanco 275 | Web de negocio | https://estanco275.e275.workers.dev | `Estanco/` |
| Mis Finanzas | Aplicación web | https://finanzas-23de8.web.app/ | `Economia/` (sin captura: lámina rosa) |

## Comandos

- Ver en local: doble clic en `index.html` (funciona desde el disco).
- Deploy: arrastrar la carpeta a Netlify Drop, `vercel` en la carpeta, o subirla a un repo con GitHub Pages activado.
- Rehacer una captura (Edge sin ventana; el comando no termina solo, por eso el `timeout`):
  `timeout 45 "/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --hide-scrollbars --user-data-dir="C:/Users/minis/AppData/Local/Temp/edge-shot" --window-size=1440,1080 --virtual-time-budget=30000 --run-all-compositor-stages-before-draw --screenshot="C:/…/img/x.png" URL`
  y pasarla a WebP 1200×900 con `sharp` (está instalado en `Crear_pagina2/node_modules`).

## Cómo editar

- Proyecto nuevo: copiar un bloque `{ nombre, tipo, anio, descripcion, url, imagen, color }` en `PROYECTOS`.
  `imagen: ""` muestra una lámina con el color y el nombre (el texto se pone blanco o negro solo).
  El mismo `tipo` escrito igual agrupa en el mismo filtro.
- Datos de contacto: objeto `DATOS`. Para SEO, cambiar también `<title>` y metas del `<head>`.
- Colores: `--acento` (lima), `--negro`, `--blanco` y el bloque claro en `:root`. El acento debe ser claro (lleva texto negro encima).
- Palabras de la cinta: en el HTML, dos copias idénticas dentro de `.cinta__pista`.

## Decisiones

- 2026-10-15: proyectos de ejemplo sustituidos por los 4 reales. Mis Finanzas va sin captura porque sin sesión solo enseña "Entrar con Google".
- 2026-10-15: rediseño más llamativo a petición del usuario: deja el rojo y pasa a negro + blanco roto + lima eléctrico (#D4FF3A) por bloques. Añade el titular con grosor que sigue al ratón (más una ola al cargar), la cinta, la fila que se llena de lima al pasar el ratón, el sello "Ver web", los botones imán y el pie letra a letra.
- 2026-10-15: un único HTML sin Astro/React; las animaciones (líneas, scroll, cursor, filtros) se hacen bien con CSS + WAAPI.
- 2026-10-15: dirección de las skills design-taste-frontend + impeccable: sin eyebrows, tarjetas, líneas finas, sombras en reposo ni monoespaciada; botones planos de esquina recta.
- 2026-10-15: el filtro usa un `setTimeout` de respaldo además de `animation.finished`, porque si el navegador pausa las animaciones (pestaña en segundo plano) la lista no llegaba a cambiar.
- 2026-10-15: el contenido que aparece al hacer scroll solo se oculta con la clase `.js` en `<html>`, para que nunca se quede invisible si falla el script.
- 2026-10-15: la cinta va dentro de `.cinta-caja` con `overflow-x: clip`; con `overflow-x: clip` solo en `body`, la cinta girada seguía provocando scroll horizontal.

## Patrones reutilizables

- **Titular de grosor variable**: `partirLetras()` + `pintarLetras()` — cada letra toma `--w` según la distancia al cursor (radio 300px, 400→860); al cargar, una ola recorre el titular.
- **Vista previa que sigue al cursor**: `#previa` fija + bucle rAF con interpolación (k=.13), giro según la velocidad y entrada con `clip-path`; solo con `(hover:hover) and (pointer:fine)`; en móvil, `.proyecto__previa` dentro de la lista.
- **Barra que cambia de color**: `alHacerScroll()` busca la sección con `data-tema` bajo la barra.
- **Filtro con FLIP**: `filtrar()` — salen los que sobran, los que quedan se recolocan con FLIP y entran los nuevos escalonados.
- **Lámina de color**: `lamina()` + `colorTexto()` (luminancia WCAG) para proyectos sin captura; `protegerCapturas()` la usa si una imagen no carga.
- **mailto con mensaje base**: `actualizarContacto(tipo)` crea el asunto y el cuerpo, y el texto de wa.me.
- **Nombre a ancho completo**: `ajustarPie()` mide a 100px y escala al ancho del contenedor.

## Pendiente antes de publicar

- Poner las URLs reales de LinkedIn e Instagram en `DATOS` (ahora apuntan a la portada de cada red).
- Captura de Mis Finanzas con datos de ejemplo (iniciar sesión y guardarla en `img/mis-finanzas.webp`).
- Confirmar los textos de "Sobre mí" y la frase "te respondo con una propuesta clara, sin compromiso".
- Atelier Barber está en Render gratis: la primera visita tras un rato parado tarda en cargar (más de un minuto).

## Última actualización

2026-10-15
