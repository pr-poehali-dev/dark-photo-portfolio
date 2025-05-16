
import { Button } from "@/components/ui/button";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";
import { TextareaField } from "./TextareaField";

const ContactForm = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 rounded-lg">
      <h3 className="text-2xl font-playfair text-white mb-6">Записаться на съемку</h3>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            id="name"
            label="Имя"
            type="text"
            placeholder="Ваше имя"
          />
          <InputField
            id="email"
            label="Email"
            type="email"
            placeholder="example@mail.com"
          />
        </div>
        
        <InputField
          id="phone"
          label="Телефон"
          type="tel"
          placeholder="+7 (___) ___-__-__"
        />
        
        <SelectField
          id="service"
          label="Тип съемки"
          placeholder="Выберите тип съемки"
          options={[
            { value: "portrait", label: "Портретная съемка" },
            { value: "wedding", label: "Свадебная фотография" },
            { value: "commercial", label: "Коммерческая фотография" },
            { value: "travel", label: "Тревел-фотография" },
            { value: "other", label: "Другое" }
          ]}
        />
        
        <TextareaField
          id="message"
          label="Комментарий"
          placeholder="Расскажите подробнее о вашей задумке или задайте вопрос"
          rows={4}
        />
        
        <Button 
          type="submit"
          className="bg-gold hover:bg-gold/90 text-black font-medium px-6 py-2 rounded-sm"
        >
          Отправить заявку
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
