import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function QuickHighlights() {
  const { t } = useLanguage();

  return (
    <section className="pt-12 pb-20 md:pt-20 md:pb-32 px-6 md:px-12 bg-white dark:bg-luxury-black transition-colors duration-500 overflow-hidden relative lining-nums">
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-luxury-black/5 dark:bg-white/5 border border-luxury-black/5 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col gap-6 p-8 md:p-20 bg-white dark:bg-luxury-black group"
          >
            <span className="text-luxury-gold text-xs md:text-sm uppercase tracking-[0.6em] font-bold opacity-85">{t('01 — Durability')}</span>
            <h3 className="text-luxury-black dark:text-white text-4xl sm:text-5xl md:text-7xl font-serif">{t('100% ALUMINIUM')}</h3>
            <p className="text-luxury-gray dark:text-gray-300 leading-relaxed text-lg max-w-md">
              {t('6061-T6 & 6063-T6 Canadian Aluminum offering strength and elegance where it matters most, at your home!')}
            </p>
            <div className="w-12 h-[1px] bg-luxury-gold group-hover:w-24 transition-all duration-700" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col gap-6 p-8 md:p-20 bg-white dark:bg-luxury-black group"
          >
            <span className="text-luxury-gold text-xs md:text-sm uppercase tracking-[0.6em] font-bold opacity-85">{t('02 — Versatility')}</span>
            <h3 className="text-luxury-black dark:text-white text-4xl sm:text-5xl md:text-7xl font-serif">{t('ADJUSTABLE LOUVRE')}</h3>
            <p className="text-luxury-gray dark:text-gray-300 leading-relaxed text-lg max-w-md">
              {t('Full 6061 and 6063 T6 Aluminum Extrusions, Load Tested for Canadian Climate. Completely Waterproof and Customizable.')}
            </p>
            <div className="w-12 h-[1px] bg-luxury-gold group-hover:w-24 transition-all duration-700" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col gap-6 p-8 md:p-20 md:col-span-2 bg-black/5 dark:bg-white/5 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none hidden md:block">
              <span className="text-[20rem] font-serif leading-none select-none">20</span>
            </div>
            
            <span className="text-luxury-gold text-xs md:text-sm uppercase tracking-[0.6em] font-bold opacity-85">{t('03 — Engineering')}</span>
            <h3 className="text-luxury-black dark:text-white text-3xl sm:text-4xl md:text-7xl font-serif">{t('UNMATCHED SPAN')}</h3>
            <p className="text-luxury-gray dark:text-gray-200 leading-relaxed text-xl max-w-2xl italic">
              {t('The only company offering a pergola that can go to ')} <span className="font-semibold text-luxury-black dark:text-white">{t('20’ x 20’ span')}</span> {t(' (width and projection) with only ')} <span className="font-semibold text-luxury-black dark:text-white">{t('4 columns')}</span>{t('.')}
            </p>
            <div className="w-12 h-[1px] bg-luxury-gold group-hover:w-24 transition-all duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
