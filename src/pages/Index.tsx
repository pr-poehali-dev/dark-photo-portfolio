import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { slides } from "@/data/slides";
import About from "@/components/home/About";
import Galleries from "@/components/home/Galleries";
import Services from "@/components/home/Services";
import Contacts from "@/components/home/Contacts";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

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
          {["Главная", "Галереи", "Обо мне", "Услуги", "Контакты"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
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

      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#121212]/95 z-40 py-4 px-8 border-t border-[#D4AF37]/20">
          <div className="flex flex-col space-y-4">
            {["Главная", "Галереи", "Обо мне", "Услуги", "Контакты"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-light py-2 border-b border-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      )}

      <div className="h-screen w-full relative">
        <div
          key={currentSlide}
          className="h-full w-full absolute inset-0 transition-opacity duration-1000 opacity-100"
        >
          <div
            className="h-full w-full absolute inset-0"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "transform 6s ease-in-out",
              transform: "scale(1.05)",
            }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4">
          <h2 className="text-4xl md:text-6xl font-playfair text-white mb-4 tracking-wider text-center">
            {slides[currentSlide].title}
          </h2>

          <div className="h-[2px] bg-[#D4AF37] my-4 w-[60px]" />

          <p className="text-xl text-white/90 font-light mb-8 text-center">
            {slides[currentSlide].description}
          </p>

          <Button
            variant="outline"
            className="border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
          >
            Смотреть работы
          </Button>
        </div>

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

      <div
        className="h-20 bg-[#121212] flex justify-center items-center"
        id="галереи"
      >
        <div className="text-[#D4AF37]/50 text-sm tracking-widest">
          ЛИСТАЙТЕ ВНИЗ
        </div>
      </div>

      <Galleries />
      <About />
      <Services />
      <Contacts />

      <footer className="py-6 bg-[#0a0a0a] text-center text-white/50 text-sm">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Фотограф. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
