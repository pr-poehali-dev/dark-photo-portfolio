import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { slides } from "@/data/slides";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Galleries from "@/components/home/Galleries";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className="absolute top-20 left-0 w-full bg-[#121212]/95 z-40 py-4 px-8 border-t border-[#D4AF37]/20 transform transition-all duration-300">
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

      {/* Герой-секция */}
      <Hero slides={slides} autoPlayInterval={6000} />

      {/* Секция "О фотографе" */}
      <About />

      {/* Галереи */}
      <Galleries />

      {/* Услуги */}
      <Services />

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
