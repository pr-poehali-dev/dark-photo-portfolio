import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";

// Временные данные для слайдера
const slides = [
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

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + slides.length) % slides.length,
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || currentSlide === index) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  // Автоматическая смена слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Меняем слайд каждые 6 секунд

    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <div className="min-h-screen bg-[#121212] text-white relative overflow-hidden">
      {/* Навигация */}
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6">
        <div className="text-xl md:text-2xl font-playfair text-[#D4AF37]">
          <h1 className="tracking-wider">
            ФОТО<span className="text-white">ГРАФ</span>
          </h1>
        </div>

        <div className="hidden md:flex space-x-8">
          {["Главная", "Галереи", "Обо мне", "Услуги", "Блог", "Контакты"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-light text-sm tracking-wider"
              >
                {item}
              </a>
            ),
          )}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-[#D4AF37] hover:bg-transparent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </Button>
      </nav>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div
          className={`absolute top-20 left-0 w-full bg-[#121212]/95 z-40 py-4 px-8 border-t border-[#D4AF37]/20 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="flex flex-col space-y-4">
            {[
              "Главная",
              "Галереи",
              "Обо мне",
              "Услуги",
              "Блог",
              "Контакты",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-light py-2 border-b border-white/10"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Полноэкранный слайдер */}
      <div className="h-screen w-full relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={`h-full w-full absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}

        {/* Контент слайда */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4">
          <h2
            className={`text-4xl md:text-6xl font-playfair text-white mb-4 tracking-wider text-center transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-y-8"
                : "opacity-100 translate-y-0"
            }`}
          >
            {slides[currentSlide].title}
          </h2>
          <div
            className={`h-[2px] bg-[#D4AF37] my-4 transition-all duration-700 delay-100 ${
              isTransitioning ? "w-0" : "w-[60px]"
            }`}
          />
          <p
            className={`text-xl text-white/90 font-light mb-8 text-center transition-all duration-500 delay-200 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {slides[currentSlide].description}
          </p>
          <div
            className={`transition-all duration-500 delay-300 ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            <Button
              variant="outline"
              className="border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            >
              Смотреть работы
            </Button>
          </div>
        </div>

        {/* Навигация по слайдеру */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center px-8 z-20">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-6 bg-[#D4AF37]"
                    : "w-2 bg-white/50"
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="hover:bg-white/10 text-white border border-white/20 rounded-full h-10 w-10"
              disabled={isTransitioning}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="hover:bg-white/10 text-white border border-white/20 rounded-full h-10 w-10"
              disabled={isTransitioning}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Дополнительное содержимое (показывается при скролле) */}
      <div className="h-20 bg-[#121212] flex justify-center items-center">
        <div className="text-[#D4AF37]/50 text-sm tracking-widest">
          ЛИСТАЙТЕ ВНИЗ
        </div>
      </div>
    </div>
  );
};

export default Index;
