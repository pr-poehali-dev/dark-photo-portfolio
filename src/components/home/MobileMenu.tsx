
import { useEffect, useRef } from "react";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Добавляем класс для анимации появления
    if (menuRef.current) {
      menuRef.current.classList.add("animate-fade-in");
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="absolute top-20 left-0 w-full bg-[#121212]/95 z-40 py-4 px-8 border-t border-[#D4AF37]/20 transform-gpu"
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
    </div>
  );
};

export default MobileMenu;
