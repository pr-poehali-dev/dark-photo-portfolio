
import Icon from "@/components/ui/icon";

interface SocialLinkItemProps {
  name: string;
  icon: string;
  username: string;
  link: string;
}

export const SocialLinkItem = ({ name, icon, username, link }: SocialLinkItemProps) => {
  return (
    <a 
      href={link} 
      className="flex items-center p-4 bg-[#252525] rounded-md hover:bg-gold/10 transition-colors group"
    >
      <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center mr-4 text-white group-hover:bg-gold group-hover:text-black transition-colors">
        <Icon name={icon} size={22} />
      </div>
      <div>
        <h4 className="text-white font-medium">{name}</h4>
        <p className="text-white/60 text-sm">{username}</p>
      </div>
    </a>
  );
};
