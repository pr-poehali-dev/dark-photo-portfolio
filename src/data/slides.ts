import { SlideItem } from "../types/slideTypes";

export const slides: SlideItem[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1969&auto=format&fit=crop",
    title: "Портрет",
    description: "Эмоции в каждом кадре",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
    title: "Природа",
    description: "Красота окружающего мира",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1965&auto=format&fit=crop",
    title: "Архитектура",
    description: "Геометрия в пространстве",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1970&auto=format&fit=crop",
    title: "Свадьба",
    description: "Незабываемые моменты",
  },
];

// Добавляем альтернативный экспорт для совместимости
export const heroSlides = slides;
