# Mendoza 836 — Landing de captación

Proyecto de Propietas Inmobiliaria. Hereda de `../CLAUDE.md`: datos de la firma, manual de marca y reglas generales. Acá solo lo específico.

## El proyecto
- **Qué es:** casa en venta, landing para generar consultas calificadas por WhatsApp.
- **Ubicación:** Mendoza 836, Barrio La Isla, Rawson, Chubut. Zona semi urbana, tranquila. Se muestra la dirección completa (confirmado).
- **Oferta:** venta, USD 140.000. Casa de 5 ambientes, 2 dormitorios, 1 baño, 90 m², antigüedad 14 años (según ficha). Entrada de auto, depósito, patio parquizado con riego automatizado, parcela de 1.800 m².
- **Condiciones:** acepta permutas y financiación, "a consultar". No publicar montos, plazos ni anticipos.
- **Estado:** disponible, en venta.
- **Contacto específico:** usa el WhatsApp de la firma (+54 9 280 450-3151).
- **Fuente de datos:** https://www.ipropietas.com.ar/listing_details_05/15b290aa-75a0-4c15-9223-6ae79742ab24. Ojo: la ficha dice 3 ambientes; vale lo que indicó el usuario (5). La descripción de la ficha está vacía.

## Identidad
- **Marca propia del desarrollo:** no. Usa solo la identidad de Propietas (azul `#2e3092`, celeste `#27aae1`, Montserrat).
- **Rol de Propietas:** comercializadora (logo en header/footer + pie legal completo con datos de la inmobiliaria y del corredor, de `../_shared/inmobiliaria.md`).
- **Redes:** Instagram https://instagram.com/propietasinmobiliaria (dado por el usuario) y Facebook https://www.facebook.com/ipropietas.
- **Paleta / tipografía:** manual de marca; detalle en DESIGN.md cuando exista.

## Técnico
- **Stack:** delegado → Astro estático (`npm run dev`, `npm run build`). Una sola página, `src/pages/index.astro`; datos y textos de la casa en `src/data.ts`; estilos en `src/styles/global.css`. Tipografía Montserrat autoalojada (`@fontsource-variable/montserrat`).
- **Dirección visual:** "Programador de riego" (elegida en shape): la página se organiza en 5 zonas numeradas (casa, patio, parcela, barrio, consultar) con un dial que indica la zona activa. Azul de marca a pantalla completa, celeste solo para estado activo.
- **Dominio:** mendoza836.ipropietas.com.ar (usar en canonical y Open Graph).
- **Assets:** `assets/logos/` (copiados de `_shared`) y `assets/img/foto-01..26.jpg` (originales de la ficha, 10 MB; Astro las optimiza al compilar a AVIF/WebP en 3 anchos, `dist` pesa ~43 MB pero cada visita baja solo lo necesario; 13 verticales 1440×1920 y 13 horizontales 1920×1440). Sin descripción de cada una: revisarlas para el `alt` y el orden.
- **Deploy:** PENDIENTE — publicar solo con confirmación del usuario.

## Contexto de diseño
- `PRODUCT.md` (impeccable init) y `DESIGN.md` (cuando exista) son la fuente de verdad visual y de producto.

## Pendientes
- Croquis de la parcela (dibujo del usuario, IMG_3016): casa abajo a la izquierda, depósito arriba a la derecha, entrada sobre el frente a la derecha. La franja del costado izquierdo era un error del dibujo (confirmado): no va. Sin escala; sin medidas del depósito
- Cochera: solo se confirmó "entrada de auto"; no escribir "cochera"
- Fotos: el orden y la portada (foto 09) los propuse yo; los `alt` de `src/data.ts` los redacté mirando cada foto, revisarlos
- Verificación real en celular (iPhone y Android) y pasada final de impeccable `polish`/`audit`: pendientes
- Cantidad de ambientes: indicó 5 el usuario; la ficha web dice 3 (corregir la ficha)
- Condiciones concretas de permuta y financiación (hoy solo "a consultar")
- Validar el pie legal con el corredor
- Deploy y configuración DNS del dominio
