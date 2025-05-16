
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

interface NavigationProps {
  isTransparent?: boolean;
}

const Navigation = ({ isTransparent = true }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`absolute top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 ${isTransparent ? 'bg-transparent' : 'bg-[#121212]/95'}`}>
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
          onClick={toggleMenu}
        >
          <Menu />
        </Button>
      </nav>

      {isMenuOpen && <MobileMenu isOpen={isMenuOpen} />}
    </>
  );
};

export default Navigation;
