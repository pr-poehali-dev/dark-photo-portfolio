
import { useState, useEffect, useCallback } from "react";
import HeroSlide from "./HeroSlide";
import HeroControls from "./HeroControls";
import ScrollIndicator from "./ScrollIndicator";
import { slides } from "../../data/slides";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNextSlide = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  }, [isAnimating]);

  const goToPrevSlide = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  }, [isAnimating]);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  }, [currentSlide, isAnimating]);

  // Автоматическая смена слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [goToNextSlide]);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <HeroSlide
          key={slide.id}
          slide={slide}
          isActive={currentSlide === index}
        />
      ))}

      <HeroControls
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrev={goToPrevSlide}
        onNext={goToNextSlide}
        onDotClick={goToSlide}
      />
      
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
