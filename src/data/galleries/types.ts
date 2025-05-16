
// Типы для галерей

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  description?: string;
}

export interface Gallery {
  id: string;
  title: string;
  description: string;
  items: GalleryItem[];
  coverImage: string;
}
