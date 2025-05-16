
import { Gallery } from './types';
import { portraitGallery } from './portrait';
import { natureGallery } from './nature';
import { architectureGallery } from './architecture';
import { weddingGallery } from './wedding';

export * from './types';
export * from './categories';
export * from './portrait';
export * from './nature';
export * from './architecture';
export * from './wedding';

export const galleries: Gallery[] = [
  portraitGallery,
  natureGallery,
  architectureGallery,
  weddingGallery
];
