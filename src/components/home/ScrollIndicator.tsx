
import { useEffect, useState } from 'react';
import Icon from "@/components/ui/icon";

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <span className="text-white/70 text-sm mb-2">Узнать больше</span>
      <button 
        onClick={scrollDown}
        className="animate-bounce bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
        aria-label="Scroll down"
      >
        <Icon name="ChevronDown" size={24} />
      </button>
    </div>
  );
};

export default ScrollIndicator;
