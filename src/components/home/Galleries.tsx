import { useState } from "react";
import { galleryCategories } from "@/data/galleries/categories";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Galleries = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section id="galleries" className="py-20 bg-darkbg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4 text-white">
            Портфолио
          </h2>
          <div className="h-[2px] w-16 bg-gold mx-auto my-4"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Просмотрите мои работы по категориям, чтобы увидеть разнообразие
            моего стиля и подхода к фотографии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryCategories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-lg transition-all duration-500 hover:shadow-lg hover:shadow-gold/10"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <AspectRatio ratio={3 / 4}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img
                  src={category.coverImage}
                  alt={category.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredCategory === category.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <h3 className="text-2xl font-playfair text-white mb-2">
                    {category.title}
                  </h3>
                  <div
                    className={`h-[2px] bg-gold transition-all duration-500 ${
                      hoveredCategory === category.id ? "w-16" : "w-8"
                    }`}
                  ></div>
                  <p className="text-white/80 mt-2 text-sm">
                    {category.description}
                  </p>

                  <div
                    className={`mt-4 overflow-hidden transition-all duration-500 ${
                      hoveredCategory === category.id
                        ? "max-h-12 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <button className="text-sm text-gold border border-gold/30 py-2 px-4 rounded-sm hover:bg-gold/10 transition-colors">
                      Смотреть все
                    </button>
                  </div>
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galleries;
