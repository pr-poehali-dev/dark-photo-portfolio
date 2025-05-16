
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = [
    { name: "Главная", href: "#hero" },
    { name: "Галереи", href: "#galleries" },
    { name: "Обо мне", href: "#about" },
    { name: "Услуги", href: "#services" },
    { name: "Блог", href: "#blog" },
    { name: "Контакты", href: "#contacts" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-darker/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-playfair text-white">
          <span className="text-gold">Photo</span>Studio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-gold transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Call to Action */}
        <div className="hidden lg:block">
          <a
            href="#contacts"
            className="py-2 px-6 bg-gold text-black font-medium rounded-sm hover:bg-gold/90 transition-colors"
          >
            Записаться на съемку
          </a>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
};

export default Navigation;
