
export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  desc?: string;
}

export interface Gallery {
  id: string;
  title: string;
  description: string;
  items: GalleryItem[];
}

export interface GalleryCategory {
  id: string;
  title: string;
  description: string;
  coverImage: string;
}
