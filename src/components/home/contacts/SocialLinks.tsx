
import Icon from "@/components/ui/icon";
import { SocialLinkItem } from "./SocialLinkItem";

const SocialLinks = () => {
  const socialNetworks = [
    { 
      name: "Instagram", 
      icon: "Instagram", 
      username: "@photographer", 
      link: "#" 
    },
    { 
      name: "Facebook", 
      icon: "Facebook", 
      username: "@photographer.page", 
      link: "#" 
    },
    { 
      name: "Twitter", 
      icon: "Twitter", 
      username: "@photographer", 
      link: "#" 
    },
    { 
      name: "YouTube", 
      icon: "Youtube", 
      username: "Фотограф Channel", 
      link: "#" 
    },
  ];

  return (
    <div className="bg-[#1a1a1a] p-8 rounded-lg">
      <h3 className="text-2xl font-playfair text-white mb-6">Мои социальные сети</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {socialNetworks.map(network => (
          <SocialLinkItem 
            key={network.name}
            name={network.name}
            icon={network.icon}
            username={network.username}
            link={network.link}
          />
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gold/10 rounded-md">
        <p className="text-gold flex items-center">
          <Icon name="Info" size={16} className="mr-2" />
          Подписывайтесь на меня в социальных сетях для получения скидок и акций!
        </p>
      </div>
    </div>
  );
};

export default SocialLinks;
