
import { useState, useEffect } from "react";
import { SlideData } from "@/types/slideTypes";
import HeroSlide from "./HeroSlide";
import HeroControls from "./HeroControls";

interface HeroProps {
  slides: SlideData[];
  autoPlayInterval?: number;
}

const Hero = ({ slides, autoPlayInterval = 6000 }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSlideChange = (newIndex: number) => {
    if (isTransitioning || newIndex === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleAnimationComplete = () => {
    setIsTransitioning(false);
  };

  // Автоматическая смена слайдов
  useEffect(() => {
    if (isTransitioning) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning, autoPlayInterval]);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Слайды */}
      {slides.map((slide, index) => (
        <HeroSlide 
          key={slide.id}
          slide={slide}
          isActive={index === currentSlide}
          onAnimationComplete={handleAnimationComplete}
        />
      ))}

      {/* Контролы слайдера */}
      <HeroControls
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrev={prevSlide}
        onNext={nextSlide}
        onSelect={handleSlideChange}
        isTransitioning={isTransitioning}
      />
    </div>
  );
};

export default Hero;
