
// Категории галерей для отображения на главной странице

interface GalleryCategory {
  id: string;
  title: string;
  description: string;
  coverImage: string;
}

export const galleryCategories: GalleryCategory[] = [
  {
    id: "portrait",
    title: "Портреты",
    description: "Индивидуальные и групповые портретные фотосессии",
    coverImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: "nature",
    title: "Природа",
    description: "Пейзажи и природные явления во всем великолепии",
    coverImage: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "architecture",
    title: "Архитектура",
    description: "Современные здания и исторические сооружения",
    coverImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "wedding",
    title: "Свадьбы",
    description: "Запечатление самых важных моментов торжества",
    coverImage: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=1973&auto=format&fit=crop"
  }
];
