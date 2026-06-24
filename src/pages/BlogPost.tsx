import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { posts } from './Blog';
import { useLanguage } from '../context/LanguageContext';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(p => p.id === id);
  const { t } = useLanguage();

  if (!post) {
    return (
      <div className="pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-serif mb-8">{t('Article Not Found')}</h1>
        <Link to="/blog" className="text-luxury-gold hover:underline">
          {t('Return to Blog')}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Link to="/blog" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gray hover:text-luxury-gold dark:text-luxury-cream/60 dark:hover:text-luxury-gold transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          {t('Back to Blog')}
        </Link>

        <div className="mb-12">
          <span className="text-luxury-gold text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">{t(post.category)}</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
            {t(post.title)}
          </h1>
          <span className="text-xs uppercase tracking-[0.2em] text-luxury-gray dark:text-luxury-cream/60">{t(post.date)}</span>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-xl mb-16 relative">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-luxury-gray dark:text-luxury-cream/80 font-light leading-relaxed mb-24">
          <p className="text-xl mb-8">
            {t('Welcome to the detailed article for ')}"{t(post.title)}". {t('This is placeholder content for the blog post. As a premium aluminum bioclimatic pergola manufacturer, we pride ourselves on engineering, design, and durability.')}
          </p>
          <p className="mb-8">
            {t('Our pergolas are built to withstand the harsh Canadian winters while providing an elegant, comfortable outdoor sanctuary during the summer months. The rotating louvers offer complete control over sun and shade, and our heavy-duty extrusions ensure your investment lasts for decades.')}
          </p>
          <p>
            {t('Whether you are a homeowner looking to increase your property value or a commercial entity wanting to extend your patio season, Mr. Pergola delivers uncompromised quality and aesthetic brilliance. Stay tuned for more insights and detailed guides.')}
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-16 border-t border-luxury-black/10 dark:border-luxury-cream/10">
          <div className="flex flex-col items-center md:items-start flex-1 w-full text-center md:text-left">
             <h3 className="text-3xl font-serif text-luxury-black dark:text-luxury-cream mb-4">
                MrPergola
             </h3>
             <p className="text-xs uppercase tracking-[0.3em] text-luxury-gray dark:text-luxury-cream/60 font-bold mb-8">
                {t('Contact us for any questions')}
             </p>
             <Link to="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-luxury-black text-white dark:bg-luxury-cream dark:text-luxury-black rounded-none hover:bg-luxury-gold hover:text-white dark:hover:bg-luxury-gold dark:hover:text-white transition-colors duration-300 group w-full sm:w-auto">
                <span className="text-xs uppercase tracking-[0.2em] font-bold">{t('Contact Us')}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
          
          <div className="hidden md:block w-px h-32 bg-luxury-black/10 dark:bg-luxury-cream/10"></div>

          <div className="flex flex-col items-center md:items-end flex-1 w-full text-center md:text-right">
             <h3 className="text-3xl font-serif text-luxury-black dark:text-luxury-cream mb-4 opacity-0">
                Spacing
             </h3>
             <p className="text-xs uppercase tracking-[0.3em] text-luxury-gray dark:text-luxury-cream/60 font-bold mb-8">
                {t('Read more about Mr. Pergola')}
             </p>
             <Link to="/about" className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-luxury-black dark:border-luxury-cream hover:border-luxury-gold dark:hover:border-luxury-gold text-luxury-black dark:text-luxury-cream hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors duration-300 group w-full sm:w-auto">
                <span className="text-xs uppercase tracking-[0.2em] font-bold">{t('About Us')}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
