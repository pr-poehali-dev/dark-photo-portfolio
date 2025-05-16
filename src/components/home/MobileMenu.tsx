
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  
  const navItems = [
    { name: "Главная", href: "#hero" },
    { name: "Галереи", href: "#galleries" },
    { name: "Обо мне", href: "#about" },
    { name: "Услуги", href: "#services" },
    { name: "Блог", href: "#blog" },
    { name: "Контакты", href: "#contacts" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white">
          <Icon name="Menu" size={24} />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85%] sm:w-[385px] bg-darker border-lighter">
        <div className="flex flex-col h-full pt-12">
          <nav className="flex flex-col space-y-6 mt-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-2xl font-playfair text-white hover:text-gold transition-colors duration-200 px-4 py-2"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="mt-auto mb-8 px-4">
            <a 
              href="#contacts" 
              className="block w-full py-3 px-4 bg-gold text-black text-center font-medium rounded-sm hover:bg-gold/90 transition-colors"
              onClick={() => setOpen(false)}
            >
              Записаться на съемку
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
