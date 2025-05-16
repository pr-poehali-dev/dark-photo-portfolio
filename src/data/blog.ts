
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "best-portrait-lighting",
    title: "5 схем освещения для идеальных портретов",
    excerpt: "Изучите различные схемы освещения, которые помогут вам создавать профессиональные портреты в любых условиях.",
    image: "https://images.unsplash.com/photo-1620315808304-66597517f188?q=80&w=1974&auto=format&fit=crop",
    date: "15.05.2025",
    author: "Алексей Фотографов",
    category: "Техники освещения"
  },
  {
    id: "composition-tips",
    title: "Основы композиции в фотографии",
    excerpt: "Правило третей, золотое сечение и другие принципы композиции, которые сделают ваши фотографии более выразительными.",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1974&auto=format&fit=crop",
    date: "03.05.2025",
    author: "Алексей Фотографов",
    category: "Композиция"
  },
  {
    id: "camera-settings",
    title: "Оптимальные настройки камеры для разных условий съемки",
    excerpt: "Гид по настройкам ISO, выдержки и диафрагмы для различных сценариев фотосъемки.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1938&auto=format&fit=crop",
    date: "27.04.2025",
    author: "Алексей Фотографов",
    category: "Техника съемки"
  },
  {
    id: "photo-editing",
    title: "Базовые принципы обработки фотографий",
    excerpt: "Узнайте, как правильно обрабатывать фотографии, сохраняя естественность и подчеркивая их сильные стороны.",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=2070&auto=format&fit=crop",
    date: "15.04.2025",
    author: "Алексей Фотографов",
    category: "Постобработка"
  }
];
