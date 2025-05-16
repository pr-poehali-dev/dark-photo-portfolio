
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  isTransitioning: boolean;
}

const HeroControls = ({ 
  currentSlide, 
  totalSlides,
  onPrev,
  onNext,
  onSelect,
  isTransitioning 
}: HeroControlsProps) => {
  return (
    <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center px-8 z-20">
      <div className="flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => !isTransitioning && onSelect(index)}
            className={`transition-all duration-300 ${
              currentSlide === index 
                ? "w-6 h-2 bg-gold" 
                : "w-2 h-2 bg-white/50"
            } rounded-full`}
            aria-label={`Перейти к слайду ${index + 1}`}
            disabled={isTransitioning}
          />
        ))}
      </div>
      
      <div className="flex space-x-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrev}
          disabled={isTransitioning}
          className="hover:bg-white/10 text-white border border-white/20 rounded-full h-10 w-10"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          disabled={isTransitioning}
          className="hover:bg-white/10 text-white border border-white/20 rounded-full h-10 w-10"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default HeroControls;
