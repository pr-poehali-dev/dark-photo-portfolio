
import Icon from "@/components/ui/icon";

interface HeroControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}

const HeroControls = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onDotClick,
}: HeroControlsProps) => {
  return (
    <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-between items-center px-8 md:px-16">
      <div className="flex items-center space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? "w-6 bg-gold" 
                : "bg-white/40 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="flex items-center space-x-4">
        <button
          onClick={onPrev}
          className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          aria-label="Previous slide"
        >
          <Icon name="ChevronLeft" size={24} />
        </button>
        
        <button
          onClick={onNext}
          className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          aria-label="Next slide"
        >
          <Icon name="ChevronRight" size={24} />
        </button>
      </div>
    </div>
  );
};

export default HeroControls;
