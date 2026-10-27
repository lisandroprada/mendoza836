export const casa = {
  nombre: 'Mendoza 836',
  direccion: 'Mendoza 836, Barrio La Isla, Rawson, Chubut',
  precio: 'USD 140.000',
  url: 'https://mendoza836.ipropietas.com.ar',
};

const mensaje = 'Hola, vi Mendoza 836 (Barrio La Isla, Rawson) y quiero consultar.';
export const whatsapp = `https://wa.me/5492804503151?text=${encodeURIComponent(mensaje)}`;
export const mapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Mendoza 836, Rawson, Chubut')}`;

export const firma = {
  nombre: 'Propietas Inmobiliaria',
  corredor: 'Lisandro E. Prada Toledo',
  matricula: 'M.P. Nº 117 COCICH',
  razonSocial: 'Netra S.R.L.',
  cuit: '33-71094361-9',
  oficina: 'Gregorio Mayo 106, Rawson, Chubut',
  telefono: '+54 9 280 450-3151',
  email: 'info@ipropietas.com.ar',
  web: 'https://ipropietas.com.ar',
  facebook: 'https://www.facebook.com/ipropietas',
  instagram: 'https://instagram.com/propietasinmobiliaria',
};

// Zonas del "programador": ángulo del indicador sobre el dial (0° = arriba).
export const zonas = [
  { n: 1, id: 'casa', nombre: 'La casa', angulo: -100 },
  { n: 2, id: 'patio', nombre: 'El patio', angulo: -50 },
  { n: 3, id: 'parcela', nombre: 'La parcela', angulo: 0 },
  { n: 4, id: 'barrio', nombre: 'El barrio', angulo: 50 },
  { n: 5, id: 'consultar', nombre: 'Consultar', angulo: 100 },
];

export const alts: Record<number, string> = {
  1: 'Cerco vivo verde junto al césped, con una manguera de riego en el piso',
  2: 'Césped y árboles al fondo de la parcela',
  3: 'Cerco vivo verde y frondoso junto al césped',
  4: 'Camino de entrada junto a un cerco vivo con flores',
  5: 'Cerco vivo con flores rosadas',
  6: 'Césped y cerco vivo al costado de la casa',
  7: 'Cerquita de madera junto al cerco vivo y la vereda',
  8: 'Césped, árboles y camino de ripio',
  9: 'Parque amplio de césped cortado, con árboles al fondo',
  10: 'Césped y camino de ripio bajo los árboles',
  11: 'Árbol y césped en un rincón del jardín',
  12: 'Ambiente con biblioteca y piso cerámico',
  13: 'Frente de la casa con cerquita de madera',
  14: 'Costado de la casa con césped y cerquita de madera',
  15: 'Ambiente con futón y escritorio',
  16: 'Entrada de ripio al sol, con el parque de fondo',
  17: 'Cocina con alacenas de madera',
  18: 'Ambiente luminoso con piso cerámico',
  19: 'Baño revestido en gris, con ducha y bidet',
  20: 'Living comedor con techo de vigas de madera',
  21: 'Comedor y estar con techo de madera',
  22: 'Dormitorio con cama y placard',
  23: 'Baño con vanitory y ducha',
  24: 'Pasillo con calefactor',
  25: 'Dormitorio con techo de madera y ventana',
  26: 'Pasillo hacia los ambientes',
};
