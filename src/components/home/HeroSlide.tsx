
import { useState, useEffect } from "react";
import { SlideData } from "@/types/slideTypes";

interface HeroSlideProps {
  slide: SlideData;
  isActive: boolean;
  onAnimationComplete: () => void;
}

const HeroSlide = ({ slide, isActive, onAnimationComplete }: HeroSlideProps) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  // Сброс состояния анимации при изменении активного слайда
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
        onAnimationComplete();
      }, 1000); // Таймаут соответствует длительности анимации появления
      
      return () => clearTimeout(timer);
    } else {
      setAnimationComplete(false);
    }
  }, [isActive, onAnimationComplete]);

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isActive ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      <div 
        className="h-full w-full absolute inset-0"
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Контент слайда */}
      {isActive && (
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4">
          <h2
            className={`text-4xl md:text-6xl font-playfair text-white mb-4 tracking-wider text-center transition-all duration-800 transform ${
              isActive ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {slide.title}
          </h2>
          
          <div
            className={`h-[2px] bg-gold my-4 transition-all duration-800 ${
              isActive ? "w-[60px] opacity-100" : "w-0 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          />
          
          <p
            className={`text-xl text-white/90 font-light mb-8 text-center transition-opacity duration-800 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            {slide.description}
          </p>
          
          <div
            className={`transition-opacity duration-800 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <button 
              className="border border-gold text-white hover:bg-gold hover:text-black transition-all duration-300 px-6 py-2 rounded-sm"
            >
              Смотреть работы
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSlide;
