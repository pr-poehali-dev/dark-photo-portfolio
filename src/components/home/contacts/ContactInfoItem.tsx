
import Icon from "@/components/ui/icon";

interface ContactInfoItemProps {
  icon: string;
  title: string;
  details: string[];
}

export const ContactInfoItem = ({ icon, title, details }: ContactInfoItemProps) => {
  return (
    <div className="flex items-start">
      <Icon name={icon} className="text-gold mt-1 mr-4" size={20} />
      <div>
        <h4 className="text-white font-medium mb-1">{title}</h4>
        {details.map((detail, index) => (
          <p key={index} className="text-white/70">{detail}</p>
        ))}
      </div>
    </div>
  );
};
