
import { SlideData } from "@/types/slideTypes";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

interface HeroSlideProps {
  slide: SlideData;
  isActive: boolean;
  onAnimationComplete?: () => void;
}

const HeroSlide = ({ slide, isActive, onAnimationComplete }: HeroSlideProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
      // Последовательность анимаций
      const animateElements = async () => {
        if (titleRef.current) {
          titleRef.current.classList.add("opacity-100", "translate-y-0");
        }
        
        setTimeout(() => {
          if (lineRef.current) {
            lineRef.current.style.width = "60px";
          }
        }, 300);
        
        setTimeout(() => {
          if (descRef.current) {
            descRef.current.classList.add("opacity-100");
          }
        }, 600);
        
        setTimeout(() => {
          if (buttonRef.current) {
            buttonRef.current.classList.add("opacity-100");
          }
          if (onAnimationComplete) {
            onAnimationComplete();
          }
        }, 900);
      };
      
      animateElements();
    } else {
      // Сброс анимаций при скрытии слайда
      if (titleRef.current) {
        titleRef.current.classList.remove("opacity-100", "translate-y-0");
      }
      if (lineRef.current) {
        lineRef.current.style.width = "0px";
      }
      if (descRef.current) {
        descRef.current.classList.remove("opacity-100");
      }
      if (buttonRef.current) {
        buttonRef.current.classList.remove("opacity-100");
      }
    }
  }, [isActive, onAnimationComplete]);

  return (
    <div
      className={`h-full w-full absolute inset-0 transition-opacity duration-1000 ${
        isActive ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
      style={{
        backgroundImage: `url(${slide.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Контент слайда */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-playfair text-white mb-4 tracking-wider text-center opacity-0 translate-y-5 transition-all duration-700"
        >
          {slide.title}
        </h2>
        <div
          ref={lineRef}
          className="h-[2px] bg-[#D4AF37] my-4 transition-all duration-700"
          style={{ width: "0px" }}
        />
        <p
          ref={descRef}
          className="text-xl text-white/90 font-light mb-8 text-center opacity-0 transition-opacity duration-700"
        >
          {slide.description}
        </p>
        <div
          ref={buttonRef}
          className="opacity-0 transition-opacity duration-700"
        >
          <Button 
            variant="outline" 
            className="border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
          >
            Смотреть работы
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
