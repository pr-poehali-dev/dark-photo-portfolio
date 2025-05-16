
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <section id="contacts" className="py-24 bg-[#0c0c0c]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4 text-white">Связаться со мной</h2>
          <div className="h-[2px] w-16 bg-gold mx-auto my-4"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Если вы хотите заказать фотосессию или у вас есть вопросы, свяжитесь со мной удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Форма обратной связи */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg">
            <h3 className="text-2xl font-playfair text-white mb-6">Записаться на съемку</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white/80 text-sm mb-2">Имя</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-[#252525] border border-gold/20 rounded-sm px-4 py-2 text-white focus:border-gold/50 focus:outline-none"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 text-sm mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[#252525] border border-gold/20 rounded-sm px-4 py-2 text-white focus:border-gold/50 focus:outline-none"
                    placeholder="example@mail.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-white/80 text-sm mb-2">Телефон</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-[#252525] border border-gold/20 rounded-sm px-4 py-2 text-white focus:border-gold/50 focus:outline-none"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-white/80 text-sm mb-2">Тип съемки</label>
                <select 
                  id="service" 
                  className="w-full bg-[#252525] border border-gold/20 rounded-sm px-4 py-2 text-white focus:border-gold/50 focus:outline-none"
                >
                  <option value="" disabled selected>Выберите тип съемки</option>
                  <option value="portrait">Портретная съемка</option>
                  <option value="wedding">Свадебная фотография</option>
                  <option value="commercial">Коммерческая фотография</option>
                  <option value="travel">Тревел-фотография</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/80 text-sm mb-2">Комментарий</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full bg-[#252525] border border-gold/20 rounded-sm px-4 py-2 text-white focus:border-gold/50 focus:outline-none resize-none"
                  placeholder="Расскажите подробнее о вашей задумке или задайте вопрос"
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                className="bg-gold hover:bg-gold/90 text-black font-medium px-6 py-2 rounded-sm"
              >
                Отправить заявку
              </Button>
            </form>
          </div>
          
          {/* Контактная информация */}
          <div className="space-y-8">
            {/* Контактные данные */}
            <div className="bg-[#1a1a1a] p-8 rounded-lg">
              <h3 className="text-2xl font-playfair text-white mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Icon name="MapPin" className="text-gold mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="text-white font-medium mb-1">Адрес</h4>
                    <p className="text-white/70">г. Москва, ул. Фотографов, 123</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon name="Phone" className="text-gold mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="text-white font-medium mb-1">Телефон</h4>
                    <p className="text-white/70">+7 (999) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon name="Mail" className="text-gold mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-white/70">info@photographer.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon name="Clock" className="text-gold mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="text-white font-medium mb-1">Часы работы</h4>
                    <p className="text-white/70">Пн-Пт: 10:00 - 19:00</p>
                    <p className="text-white/70">Сб: 11:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Социальные сети */}
            <div className="bg-[#1a1a1a] p-8 rounded-lg">
              <h3 className="text-2xl font-playfair text-white mb-6">Мои социальные сети</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="#" 
                  className="flex items-center p-4 bg-[#252525] rounded-md hover:bg-gold/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center mr-4 text-white group-hover:bg-gold group-hover:text-black transition-colors">
                    <Icon name="Instagram" size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Instagram</h4>
                    <p className="text-white/60 text-sm">@photographer</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center p-4 bg-[#252525] rounded-md hover:bg-gold/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center mr-4 text-white group-hover:bg-gold group-hover:text-black transition-colors">
                    <Icon name="Facebook" size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Facebook</h4>
                    <p className="text-white/60 text-sm">@photographer.page</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center p-4 bg-[#252525] rounded-md hover:bg-gold/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center mr-4 text-white group-hover:bg-gold group-hover:text-black transition-colors">
                    <Icon name="Twitter" size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Twitter</h4>
                    <p className="text-white/60 text-sm">@photographer</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center p-4 bg-[#252525] rounded-md hover:bg-gold/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center mr-4 text-white group-hover:bg-gold group-hover:text-black transition-colors">
                    <Icon name="Youtube" size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">YouTube</h4>
                    <p className="text-white/60 text-sm">Фотограф Channel</p>
                  </div>
                </a>
              </div>
              
              <div className="mt-6 p-4 bg-gold/10 rounded-md">
                <p className="text-gold flex items-center">
                  <Icon name="Info" size={16} className="mr-2" />
                  Подписывайтесь на меня в социальных сетях для получения скидок и акций!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
