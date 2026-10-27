import type { ImageMetadata } from 'astro';
import { alts } from './data';

const mods = import.meta.glob<{ default: ImageMetadata }>('../assets/img/*.jpg', { eager: true });

export function photo(n: number) {
  const key = Object.keys(mods).find((k) => k.endsWith(`foto-${String(n).padStart(2, '0')}.jpg`));
  if (!key) throw new Error(`Falta la foto ${n}`);
  return { src: mods[key].default, alt: alts[n] ?? '' };
}
