import { heroSlides } from "@/data/slides";
import Navigation from "@/components/home/Navigation";
import Hero from "@/components/home/Hero";
import ScrollIndicator from "@/components/home/ScrollIndicator";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white relative overflow-hidden">
      {/* Навигация */}
      <Navigation />

      {/* Полноэкранный слайдер */}
      <Hero slides={heroSlides} />

      {/* Индикатор скролла */}
      <ScrollIndicator />
    </div>
  );
};

export default Index;
