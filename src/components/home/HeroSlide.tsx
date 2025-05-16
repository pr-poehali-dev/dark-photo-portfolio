
import { motion } from "framer-motion";
import { SlideData } from "@/types/slideTypes";

interface HeroSlideProps {
  slide: SlideData;
  isActive: boolean;
  onAnimationComplete: () => void;
}

const HeroSlide = ({ slide, isActive, onAnimationComplete }: HeroSlideProps) => {
  return (
    <motion.div
      key={slide.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      onAnimationComplete={() => {
        if (isActive) onAnimationComplete();
      }}
      className={`absolute inset-0 ${isActive ? "z-10" : "z-0"}`}
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-playfair text-white mb-4 tracking-wider text-center"
          >
            {slide.title}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-[2px] bg-gold my-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl text-white/90 font-light mb-8 text-center"
          >
            {slide.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <button 
              className="border border-gold text-white hover:bg-gold hover:text-black transition-all duration-300 px-6 py-2 rounded-sm"
            >
              Смотреть работы
            </button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default HeroSlide;
