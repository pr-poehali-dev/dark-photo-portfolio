
import { useState } from 'react';
import { services } from '@/data/services';
import { ServiceItem } from '@/types/galleryTypes';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const handleCardHover = (id: string) => {
    setActiveService(id);
  };

  const handleCardLeave = () => {
    setActiveService(null);
  };

  return (
    <section id="services" className="py-24 bg-darkbg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4 text-white">Услуги и цены</h2>
          <div className="h-[2px] w-16 bg-gold mx-auto my-4"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Выберите подходящий пакет услуг или свяжитесь со мной для создания индивидуального предложения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service: ServiceItem) => (
            <Card 
              key={service.id}
              className={`bg-[#1a1a1a] border-0 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-gold/20 ${
                activeService === service.id ? 'transform -translate-y-2' : ''
              }`}
              onMouseEnter={() => handleCardHover(service.id)}
              onMouseLeave={handleCardLeave}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent z-10"></div>
                <img 
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    activeService === service.id ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair text-white mb-2">{service.title}</h3>
                <div className={`h-[2px] bg-gold mb-4 transition-all duration-300 ${
                  activeService === service.id ? 'w-16' : 'w-10'
                }`}></div>
                
                <p className="text-white/70 text-sm mb-6 line-clamp-3">{service.description}</p>
                
                <div className="flex flex-col space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Icon name="Check" size={16} className="text-gold mt-1 mr-2" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-gold font-playfair text-xl">{service.price}</div>
                  <button className="text-white text-sm border border-gold/30 py-1.5 px-3 rounded-sm hover:bg-gold/10 transition-colors">
                    Забронировать
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
