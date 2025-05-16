
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
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}
