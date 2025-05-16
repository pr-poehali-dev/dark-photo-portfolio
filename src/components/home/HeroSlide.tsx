
import { SlideItem } from "../../types/slideTypes";

interface HeroSlideProps {
  slide: SlideItem;
  isActive: boolean;
}

const HeroSlide = ({ slide, isActive }: HeroSlideProps) => {
  return (
    <div 
      className={`hero-slide absolute inset-0 transition-opacity duration-1000 ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={slide.image}
        alt={slide.title}
        className="object-cover w-full h-full"
      />
      
      <div className="absolute inset-0 flex flex-col justify-end z-10 p-12 md:p-24">
        <h1 
          className={`text-4xl md:text-6xl font-playfair mb-4 transform transition-transform duration-1000 ${
            isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {slide.title}
        </h1>
        
        <p 
          className={`text-xl md:text-2xl max-w-xl text-white/80 transform transition-transform duration-1000 delay-300 ${
            isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {slide.description}
        </p>
      </div>
    </div>
  );
};

export default HeroSlide;
