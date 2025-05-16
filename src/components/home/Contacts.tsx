
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
            <h3 className="text-2xl font-playfair text-white mb-6">Отправить сообщение</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white/80 text-sm mb-2">Имя</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-[#252525] border border-gold/20 rounded-sm px-4 py-2 text-white focus:border-gold/50 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 text-sm mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[#252525] border border-gold/20 rounded-sm px-4 py-2 text-white focus:border-gold/50 focus:outline-none"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white/80 text-sm mb-2">Тема</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-[#252525] border border-gold/20 rounded-sm px-4 py-2 text-white focus:border-gold/50 focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/80 text-sm mb-2">Сообщение</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full bg-[#252525] border border-gold/20 rounded-sm px-4 py-2 text-white focus:border-gold/50 focus:outline-none resize-none"
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                className="bg-gold hover:bg-gold/90 text-black font-medium px-6 py-2 rounded-sm"
              >
                Отправить
              </Button>
            </form>
          </div>
          
          {/* Контактная информация */}
          <div className="space-y-8">
            {/* Google карта (заглушка) */}
            <div className="w-full h-64 bg-[#1a1a1a] rounded-lg relative overflow-hidden">
              {/* Здесь должна быть карта Google Maps */}
              <div className="absolute inset-0 flex items-center justify-center text-white/50">
                <p>Карта Google Maps будет здесь</p>
              </div>
            </div>
            
            {/* Контактные данные */}
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
              
              <div className="pt-4">
                <h4 className="text-white font-medium mb-3">Социальные сети</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors">
                    <Icon name="Instagram" size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors">
                    <Icon name="Facebook" size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors">
                    <Icon name="Twitter" size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors">
                    <Icon name="Youtube" size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
