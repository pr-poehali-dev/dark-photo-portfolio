
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0a0a0a] text-white/70 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="text-xl md:text-2xl font-playfair text-gold mb-6">
              <h1 className="tracking-wider">ФОТО<span className="text-white">ГРАФ</span></h1>
            </div>
            <p className="text-sm mb-6">
              Профессиональная фотография с индивидуальным подходом. Запечатлею ваши особенные моменты с вниманием к деталям и эмоциям.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <Icon name="Instagram" size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <Icon name="Facebook" size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <Icon name="Twitter" size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <Icon name="Youtube" size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Разделы сайта</h4>
            <ul className="space-y-2">
              {["Главная", "О фотографе", "Галереи", "Услуги", "Блог", "Контакты"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase() === "главная" ? "" : item.toLowerCase()}`} 
                    className="text-white/70 hover:text-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Категории фото</h4>
            <ul className="space-y-2">
              {["Портреты", "Природа", "Архитектура", "Свадьба", "Семейная", "Репортаж"].map((item) => (
                <li key={item}>
                  <a href="#galleries" className="text-white/70 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex">
                <Icon name="MapPin" className="text-gold mr-3 flex-shrink-0" size={18} />
                <span>г. Москва, ул. Фотографов, 123</span>
              </li>
              <li className="flex">
                <Icon name="Phone" className="text-gold mr-3 flex-shrink-0" size={18} />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex">
                <Icon name="Mail" className="text-gold mr-3 flex-shrink-0" size={18} />
                <span>info@photographer.ru</span>
              </li>
              <li className="flex">
                <Icon name="Clock" className="text-gold mr-3 flex-shrink-0" size={18} />
                <span>Пн-Пт: 10:00 - 19:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            © {currentYear} Алексей Фотографов. Все права защищены.
          </div>
          <div className="text-sm">
            <a href="#" className="text-white/70 hover:text-gold transition-colors mr-6">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-white/70 hover:text-gold transition-colors">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
