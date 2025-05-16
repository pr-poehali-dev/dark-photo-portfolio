
// Индексный файл для экспорта всех галерей

import { portraitGallery } from './portrait';
import { natureGallery } from './nature';
import { architectureGallery } from './architecture';
import { weddingGallery } from './wedding';
import { Gallery, GalleryItem } from './types';

// Экспорт типов
export type { Gallery, GalleryItem };

// Экспорт всех галерей в массиве
export const galleries: Gallery[] = [
  portraitGallery,
  natureGallery,
  architectureGallery,
  weddingGallery
];

// Экспорт отдельных галерей для прямого доступа по имени
export {
  portraitGallery,
  natureGallery,
  architectureGallery,
  weddingGallery
};
