import Icon from "@/components/ui/icon";
import SocialLinks from "./contacts/SocialLinks";
import ContactInfo from "./contacts/ContactInfo";

const Contacts = () => {
  return (
    <section id="contacts" className="py-24 bg-[#0c0c0c]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4 text-white">
            Связаться со мной
          </h2>
          <div className="h-[2px] w-16 bg-gold mx-auto my-4"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Найдите меня в социальных сетях или свяжитесь напрямую для
            сотрудничества и заказов фотосессий
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <ContactInfo />

          {/* Социальные сети */}
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
