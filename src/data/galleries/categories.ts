
import { GalleryCategory } from './types';
import { portraitGallery } from './portrait';
import { natureGallery } from './nature';
import { architectureGallery } from './architecture';
import { weddingGallery } from './wedding';

export const galleryCategories: GalleryCategory[] = [
  {
    id: portraitGallery.id,
    title: portraitGallery.title,
    description: portraitGallery.description,
    coverImage: portraitGallery.items[0].image
  },
  {
    id: natureGallery.id,
    title: natureGallery.title,
    description: natureGallery.description,
    coverImage: natureGallery.items[0].image
  },
  {
    id: architectureGallery.id,
    title: architectureGallery.title,
    description: architectureGallery.description,
    coverImage: architectureGallery.items[0].image
  },
  {
    id: weddingGallery.id,
    title: weddingGallery.title,
    description: weddingGallery.description,
    coverImage: weddingGallery.items[0].image
  }
];
