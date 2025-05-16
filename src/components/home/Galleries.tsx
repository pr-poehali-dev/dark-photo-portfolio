import { useState } from "react";
import { galleries } from "@/data/galleries";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Galleries = () => {
  const [activeCategory, setActiveCategory] = useState<string>("portrait");

  const activeGallery = galleries.find(
    (gallery) => gallery.id === activeCategory,
  );

  return (
    <section id="galleries" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4 text-white">
            Галереи
          </h2>
          <div className="h-[2px] w-16 bg-gold mx-auto my-4"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Исследуйте мои работы в различных жанрах фотографии
          </p>
        </div>

        {/* Категории */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {galleries.map((gallery) => (
            <button
              key={gallery.id}
              onClick={() => setActiveCategory(gallery.id)}
              className={`px-4 py-2 rounded-sm text-sm transition-colors ${
                activeCategory === gallery.id
                  ? "bg-gold text-black font-medium"
                  : "bg-transparent text-white/70 border border-white/20 hover:border-gold/30"
              }`}
            >
              {gallery.title}
            </button>
          ))}
        </div>

        {/* Описание активной галереи */}
        {activeGallery && (
          <div className="text-center mb-12">
            <h3 className="text-2xl font-playfair text-white mb-3">
              {activeGallery.title}
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              {activeGallery.description}
            </p>
          </div>
        )}

        {/* Фотографии */}
        {activeGallery && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeGallery.items.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg"
              >
                <AspectRatio ratio={1 / 1} className="bg-[#1a1a1a]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white font-medium">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Galleries;
