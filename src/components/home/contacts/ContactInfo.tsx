
import Icon from "@/components/ui/icon";
import { ContactInfoItem } from "./ContactInfoItem";

const ContactInfo = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 rounded-lg">
      <h3 className="text-2xl font-playfair text-white mb-6">Контактная информация</h3>
      
      <div className="space-y-6">
        <ContactInfoItem 
          icon="MapPin" 
          title="Адрес" 
          details={["г. Москва, ул. Фотографов, 123"]} 
        />
        
        <ContactInfoItem 
          icon="Phone" 
          title="Телефон" 
          details={["+7 (999) 123-45-67"]} 
        />
        
        <ContactInfoItem 
          icon="Mail" 
          title="Email" 
          details={["info@photographer.ru"]} 
        />
        
        <ContactInfoItem 
          icon="Clock" 
          title="Часы работы" 
          details={["Пн-Пт: 10:00 - 19:00", "Сб: 11:00 - 16:00"]} 
        />
      </div>
    </div>
  );
};

export default ContactInfo;
