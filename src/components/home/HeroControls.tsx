
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
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-6 bg-gold" : "w-2 bg-white/50"
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
            disabled={isTransitioning}
          />
        ))}
      </div>
      
      <div className="flex space-x-4">
        <button
          onClick={onPrev}
          className="h-10 w-10 flex items-center justify-center hover:bg-white/10 text-white border border-white/20 rounded-full transition-colors"
          disabled={isTransitioning}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <button
          onClick={onNext}
          className="h-10 w-10 flex items-center justify-center hover:bg-white/10 text-white border border-white/20 rounded-full transition-colors"
          disabled={isTransitioning}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroControls;
