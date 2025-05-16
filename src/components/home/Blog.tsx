
import { blogPosts } from '@/data/blog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Icon from '@/components/ui/icon';

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-[#0c0c0c]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4 text-white">Блог</h2>
          <div className="h-[2px] w-16 bg-gold mx-auto my-4"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Делюсь опытом, техниками съемки и историями из мира фотографии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="group bg-[#1a1a1a] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-gold/10 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute top-3 left-3 bg-gold/90 text-black text-xs py-1 px-2 rounded-sm font-medium">
                  {post.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-playfair text-white mb-3 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="text-white/60 text-xs">{post.author}</div>
                  <button className="flex items-center text-gold text-sm group-hover:translate-x-1 transition-transform">
                    Читать 
                    <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border border-gold/30 text-white hover:bg-gold hover:text-black transition-colors px-6 py-3 rounded-sm">
            Все статьи
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
