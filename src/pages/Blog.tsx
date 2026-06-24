import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const posts = [
  {
    id: 'pergola-buyer-checklist',
    title: 'Pergola Buyer Checklist: 5 Questions That Separate Premium Structures from the Rest',
    date: 'May 20, 2024',
    category: 'Guides',
    image: '/assets/Classic-Pergola-Carousal.jpg'
  },
  {
    id: 'built-for-canada-building-code',
    title: 'Built for Canada: How the National Building Code Drives Mr. Pergola’s Engineering',
    date: 'May 12, 2024',
    category: 'Engineering',
    image: '/assets/Gallery-Image-4-Saisons.jpg'
  },
  {
    id: 'boost-home-value-montreal',
    title: 'How Pergolas With Rotating Slats Can Boost Your Home Value by 80%+ (Montreal Homeowner’s Guide)',
    date: 'April 28, 2024',
    category: 'Investment',
    image: '/assets/Custom-Structure.jpg'
  },
  {
    id: 'comprehensive-guide-bioclimatic-pergolas',
    title: 'Transforming Outdoor Living: The Comprehensive Guide to Aluminum Bioclimatic Pergolas',
    date: 'April 15, 2024',
    category: 'Guides',
    image: '/assets/Pergola-Res-K_V3_LR-updated.jpg'
  },
  {
    id: 'beauty-durability-aluminum-pergolas',
    title: 'The Beauty and Durability of Aluminum Pergolas: Transforming Gardens Everywhere',
    date: 'March 22, 2024',
    category: 'Design',
    image: '/assets/PG_26-10-24.jpg'
  },
  {
    id: 'pergola-protectors-superhero',
    title: 'Pergola Protectors: How to Select a Superhero for Your Outdoor Space',
    date: 'March 05, 2024',
    category: 'Lifestyle',
    image: '/assets/gallery-image-nov-4th.jpg'
  },
  {
    id: 'production-perfection-journey',
    title: 'From Production to Perfection: The Journey of High-Quality Aluminum Pergolas',
    date: 'February 18, 2024',
    category: 'Manufacturing',
    image: '/assets/Mr-Pergola-Gallery-Image-Jun-02.jpg'
  },
  {
    id: 'evaluating-weight-quality-aluminum-density',
    title: 'Evaluating the Weight of Quality: The Significance of Aluminum Density in Pergola Construction',
    date: 'February 02, 2024',
    category: 'Engineering',
    image: '/assets/16x16-slat.jpg'
  }
];

export default function Blog() {
  const { t } = useLanguage();
  
  return (
    <div className="pt-40 pb-32 lining-nums">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-serif tracking-tight mb-12 text-center">{t('Blog')}</h1>
        </div>

        <section className="mb-24 w-full h-[50svh] md:h-[70svh] min-h-[400px] relative overflow-hidden group">
            <img
              src="/assets/Gallery-Image-4-Saisons.jpg"
              alt="Blog Insights"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-12 pointer-events-none">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white drop-shadow-lg tracking-tight mb-4">
                {t('Insights &')} {t('Inspiration.')}
              </h2>
              <p className="text-white/90 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold drop-shadow">
                {t('Archives')}
              </p>
            </div>
        </section>

        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            className="h-full"
            >
            <Link to={`/blog/${post.id}`} className="group cursor-pointer flex flex-col h-full">
              <div className="aspect-[4/5] overflow-hidden mb-8 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 border border-luxury-gold/0 group-hover:border-luxury-gold/20 transition-all duration-700 m-4 pointer-events-none" />
                <div className="absolute top-6 left-6">
                   <div className="bg-white dark:bg-luxury-black px-4 py-2 border border-luxury-black/5 dark:border-luxury-cream/5">
                      <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-luxury-gold">{t(post.category)}</span>
                   </div>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gray dark:text-luxury-cream/40 mb-4 block">{t(post.date)}</span>
                <h3 className="text-3xl font-serif group-hover:text-luxury-gold transition-colors duration-500 dark:text-luxury-cream leading-tight mb-8">
                  {t(post.title)}
                </h3>
                <div className="mt-auto flex items-center gap-4 group/btn">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">{t('Read More')}</span>
                  <div className="h-[1px] w-12 bg-luxury-gold group-hover/btn:w-20 transition-all duration-500" />
                </div>
              </div>
            </Link>
            </motion.div>
          ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
