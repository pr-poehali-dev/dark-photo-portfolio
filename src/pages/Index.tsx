
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// Временные данные для слайдера
const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1969&auto=format&fit=crop",
    title: "Портрет",
    description: "Эмоции в каждом кадре",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
    title: "Природа",
    description: "Красота окружающего мира",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1965&auto=format&fit=crop",
    title: "Архитектура",
    description: "Геометрия в пространстве",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1970&auto=format&fit=crop",
    title: "Свадьба",
    description: "Незабываемые моменты",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  // Автоматическая смена слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Меняем слайд каждые 6 секунд

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white relative overflow-hidden">
      {/* Навигация */}
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6">
        <div className="text-xl md:text-2xl font-playfair text-[#D4AF37]">
          <h1 className="tracking-wider">ФОТО<span className="text-white">ГРАФ</span></h1>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {["Главная", "Галереи", "Обо мне", "Услуги", "Блог", "Контакты"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-light text-sm tracking-wider"
            >
              {item}
            </a>
          ))}
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-0 w-full bg-[#121212]/95 z-40 py-4 px-8 border-t border-[#D4AF37]/20"
        >
          <div className="flex flex-col space-y-4">
            {["Главная", "Галереи", "Обо мне", "Услуги", "Блог", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-light py-2 border-b border-white/10"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Полноэкранный слайдер */}
      <div className="h-screen w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="h-full w-full absolute inset-0"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </AnimatePresence>

        {/* Контент слайда */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4">
          <motion.h2
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-playfair text-white mb-4 tracking-wider text-center"
          >
            {slides[currentSlide].title}
          </motion.h2>
          <motion.div
            key={`line-${currentSlide}`}
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-[2px] bg-[#D4AF37] my-4"
          />
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl text-white/90 font-light mb-8 text-center"
          >
            {slides[currentSlide].description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button 
              variant="outline" 
              className="border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            >
              Смотреть работы
            </Button>
          </motion.div>
        </div>

        {/* Навигация по слайдеру */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center px-8 z-20">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "w-6 bg-[#D4AF37]" : "bg-white/50"
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
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="hover:bg-white/10 text-white border border-white/20 rounded-full h-10 w-10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Дополнительное содержимое (показывается при скролле) */}
      <div className="h-20 bg-[#121212] flex justify-center items-center">
        <div className="text-[#D4AF37]/50 text-sm tracking-widest">ЛИСТАЙТЕ ВНИЗ</div>
      </div>
    </div>
  );
};

export default Index;
