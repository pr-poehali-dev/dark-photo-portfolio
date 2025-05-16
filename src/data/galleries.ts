
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

export const galleries: Gallery[] = [
  {
    id: "portrait",
    title: "Портреты",
    description: "Индивидуальные и групповые портреты с фокусом на эмоции и характер",
    items: [
      {
        id: "portrait-1",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
        title: "Женский портрет"
      },
      {
        id: "portrait-2",
        image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1974&auto=format&fit=crop",
        title: "Мужской портрет"
      },
      {
        id: "portrait-3",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
        title: "Черно-белый портрет"
      },
      {
        id: "portrait-4",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        title: "Бизнес-портрет"
      },
      {
        id: "portrait-5",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
        title: "Творческий портрет"
      },
      {
        id: "portrait-6",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop",
        title: "Стильный портрет"
      },
      {
        id: "portrait-7",
        image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop",
        title: "Женский портрет в городе"
      },
      {
        id: "portrait-8",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
        title: "Портрет с макияжем"
      },
    ]
  },
  {
    id: "nature",
    title: "Природа",
    description: "Впечатляющие пейзажи и удивительные моменты дикой природы",
    items: [
      {
        id: "nature-1",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1974&auto=format&fit=crop",
        title: "Горный пейзаж"
      },
      {
        id: "nature-2",
        image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1970&auto=format&fit=crop",
        title: "Озеро на закате"
      },
      {
        id: "nature-3",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1975&auto=format&fit=crop",
        title: "Долина в тумане"
      },
      {
        id: "nature-4",
        image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop",
        title: "Лесная тропа"
      },
      {
        id: "nature-5",
        image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop",
        title: "Звездное небо"
      },
      {
        id: "nature-6",
        image: "https://images.unsplash.com/photo-1682686581556-a3f0ee0ed556?q=80&w=1970&auto=format&fit=crop",
        title: "Волны на рассвете"
      },
      {
        id: "nature-7",
        image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2076&auto=format&fit=crop",
        title: "Цветущее поле"
      },
      {
        id: "nature-8",
        image: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=2070&auto=format&fit=crop",
        title: "Рассвет в горах"
      },
    ]
  },
  {
    id: "architecture",
    title: "Архитектура",
    description: "Линии, формы и перспективы современной и исторической архитектуры",
    items: [
      {
        id: "architecture-1",
        image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1965&auto=format&fit=crop",
        title: "Современный город"
      },
      {
        id: "architecture-2",
        image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1954&auto=format&fit=crop",
        title: "Исторический собор"
      },
      {
        id: "architecture-3",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop",
        title: "Мост на закате"
      },
      {
        id: "architecture-4",
        image: "https://images.unsplash.com/photo-1509200831682-29e5339d3ffa?q=80&w=1974&auto=format&fit=crop",
        title: "Геометрические формы"
      },
      {
        id: "architecture-5",
        image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1974&auto=format&fit=crop",
        title: "Спиральная лестница"
      },
      {
        id: "architecture-6",
        image: "https://images.unsplash.com/photo-1618840739221-e3adb12c9bf1?q=80&w=1974&auto=format&fit=crop",
        title: "Футуристический дизайн"
      },
      {
        id: "architecture-7",
        image: "https://images.unsplash.com/photo-1517276300840-788a177da8bf?q=80&w=1974&auto=format&fit=crop",
        title: "Городские линии"
      },
      {
        id: "architecture-8",
        image: "https://images.unsplash.com/photo-1560711247-a0e2ba4bde25?q=80&w=1965&auto=format&fit=crop",
        title: "Минимализм"
      },
    ]
  },
  {
    id: "wedding",
    title: "Свадьба",
    description: "Особые моменты любви и счастья в день свадьбы",
    items: [
      {
        id: "wedding-1",
        image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1970&auto=format&fit=crop",
        title: "Свадебная церемония"
      },
      {
        id: "wedding-2",
        image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop",
        title: "Свадебная арка"
      },
      {
        id: "wedding-3",
        image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop",
        title: "Первый танец"
      },
      {
        id: "wedding-4",
        image: "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?q=80&w=1972&auto=format&fit=crop",
        title: "Подготовка невесты"
      },
      {
        id: "wedding-5",
        image: "https://images.unsplash.com/photo-1509610973147-232dfea52a97?q=80&w=2070&auto=format&fit=crop",
        title: "Свадебные кольца"
      },
      {
        id: "wedding-6",
        image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
        title: "Свадебный букет"
      },
      {
        id: "wedding-7",
        image: "https://images.unsplash.com/photo-1548503091-6190b4038c92?q=80&w=2070&auto=format&fit=crop",
        title: "Торт и бокалы"
      },
      {
        id: "wedding-8",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
        title: "Портрет молодоженов"
      },
    ]
  }
];
