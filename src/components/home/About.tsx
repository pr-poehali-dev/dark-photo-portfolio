import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0c0c0c]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 max-w-lg">
              <div className="flex items-center">
                <div className="h-[1px] w-12 bg-gold"></div>
                <span className="text-gold ml-4 tracking-widest text-sm">
                  ОБО МНЕ
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-playfair text-white leading-tight">
                Алексей Фотограф
              </h2>

              <div className="h-[2px] w-16 bg-gold"></div>

              <p className="text-white/80 leading-relaxed">
                Я профессиональный фотограф с более чем 10-летним опытом работы
                в различных жанрах. Моя страсть — запечатлеть моменты, эмоции и
                истории, которые становятся вечными благодаря фотографии.
              </p>

              <p className="text-white/70 leading-relaxed">
                Мой подход к фотографии сочетает в себе классические техники и
                современные тенденции. В каждом проекте я стремлюсь найти баланс
                между естественностью момента и художественным видением.
              </p>

              <div className="pt-4">
                <div className="flex space-x-8">
                  <div>
                    <div className="text-3xl font-playfair text-gold mb-2">
                      10+
                    </div>
                    <div className="text-white/60 text-sm">Лет опыта</div>
                  </div>
                  <div>
                    <div className="text-3xl font-playfair text-gold mb-2">
                      350+
                    </div>
                    <div className="text-white/60 text-sm">Проектов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-playfair text-gold mb-2">
                      50+
                    </div>
                    <div className="text-white/60 text-sm">
                      Постоянных клиентов
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-gold/40"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-gold/40"></div>

            <AspectRatio
              ratio={3 / 4}
              className="rounded-lg overflow-hidden relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Алексей Фотограф"
                className="w-full h-full object-cover grayscale"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
