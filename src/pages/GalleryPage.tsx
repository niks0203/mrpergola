import { motion } from 'motion/react';
import Gallery from '../components/Gallery';
import { useLanguage } from '../context/LanguageContext';

export default function GalleryPage() {
  const { t } = useLanguage();
  return (
    <div className="pt-40 pb-32 lining-nums">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-serif tracking-tight mb-12 text-center">{t('Gallery')}</h1>
        </div>

        <section className="mb-24 w-full h-[50svh] md:h-[70svh] min-h-[400px] relative overflow-hidden group">
            <img
              src="/assets/Mr-Pergola-Gallery-Image-Jun-02.jpg"
              alt="Gallery"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-12 pointer-events-none">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white drop-shadow-lg tracking-tight mb-4">
                {t('Gallery')}
              </h2>
              <p className="text-white/90 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold drop-shadow">
                {t('Mr. Pergola')}
              </p>
            </div>
        </section>
      </motion.div>
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <Gallery />
      </div>
    </div>
  );
}
