﻿import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

type OptionCard = {
  title: string;
  image: string;
  showSomfy?: boolean;
};

type AccessoryGroup = {
  title: string;
  images: string[];
};

const optionCards: OptionCard[] = [
  {
    title: 'Mosquito Netting',
    image: '/assets/accessories/mosqito-neting-updated-1024x576.jpg',
    showSomfy: true,
  },
  {
    title: 'Privacy Slats',
    image: '/assets/accessories/Privacy-Slat-1024x576.jpg',
  },
  {
    title: 'Option Solarium (OPEN)',
    image: '/assets/accessories/Sliding-Glass-doors-open-1024x576.jpg',
  },
  {
    title: 'Option Solarium (CLOSED)',
    image: '/assets/accessories/Sliding-Glass-doors-Closed-1024x576.jpg',
  },
];

const accessoryGroups: AccessoryGroup[] = [
  {
    title: 'Flowerpot',
    images: ['/assets/accessories/flowerpot-1-1.jpg', '/assets/accessories/flowerpot-2.jpg'],
  },
  {
    title: 'Flowerpot Hanger',
    images: ['/assets/accessories/flowerpot-3.jpg', '/assets/accessories/flowerpot-4.jpg'],
  },
  {
    title: 'Clip On Table',
    images: ['/assets/accessories/clip-on-table-1.jpg', '/assets/accessories/clip-on-table-2.jpg'],
  },
  {
    title: 'Light Object Hangar System',
    images: ['/assets/accessories/light-object-hanger.png'],
  },
];

export default function Accessories() {
  const { t } = useLanguage();

  return (
    <div className="pt-40 pb-32 lining-nums">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-serif tracking-tight mb-12 text-center">{t('Accessories')}</h1>
        </div>

        <section className="mb-24 w-full h-[50svh] md:h-[70svh] min-h-[400px] relative overflow-hidden group">
            <img
              src="/assets/accessories/Accessories-Page-Picture.jpg"
              alt="Accessories Collection"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-12 pointer-events-none">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white drop-shadow-lg tracking-tight mb-4">
                {t('Elevate Your Experience.')}
              </h2>
              <p className="text-white/90 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold drop-shadow">
                {t('Discover Our Premium Additions')}
              </p>
            </div>
        </section>

        <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <section className="mb-32">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight dark:text-luxury-cream mb-4">{t('Now Available')}</h2>
            <p className="text-luxury-gray dark:text-luxury-cream/60 text-xs uppercase tracking-widest font-bold">{t('Featured Highlights')}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {optionCards.map((card, index) => (
              <article
                key={card.title}
                className="w-full md:w-[calc(50%-1.5rem)] max-w-lg group relative flex flex-col bg-white/80 dark:bg-luxury-black/40 rounded-[2.5rem] overflow-hidden border border-luxury-black/5 dark:border-luxury-cream/5 hover:shadow-2xl hover:shadow-luxury-black/10 dark:hover:shadow-luxury-cream/5 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-luxury-black/5 dark:bg-luxury-cream/5">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-8 md:p-10 text-center bg-white/80 dark:bg-luxury-black/60 relative z-10 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-serif dark:text-luxury-cream">{t(card.title)}</h3>
                  {card.showSomfy && (
                    <p className="text-[10px] uppercase tracking-widest text-luxury-gold mt-4 font-bold">
                      {t('Somfy Compatible')}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight dark:text-luxury-cream mb-4">{t('All Accessories')}</h2>
            <p className="text-luxury-gray dark:text-luxury-cream/60 text-xs uppercase tracking-widest font-bold">{t('The Complete Collection')}</p>
          </div>
        <div className="space-y-20">
          {accessoryGroups.map((group, groupIndex) => (
            <div key={group.title} className="border-t border-luxury-black/5 dark:border-luxury-cream/5 pt-12 first:border-0 first:pt-0">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-serif dark:text-luxury-cream">{t(group.title)}</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {group.images.map((image, imageIndex) => (
                  <article
                    key={image}
                    className="w-full max-w-md group flex flex-col items-center justify-between p-6 md:p-8 bg-white/80 dark:bg-luxury-black/40 hover:bg-white dark:hover:bg-luxury-black/60 rounded-[2.5rem] border border-luxury-black/5 dark:border-luxury-cream/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-luxury-black/5 dark:hover:shadow-luxury-cream/5"
                  >
                    <div className="w-full aspect-square mb-8 relative flex items-center justify-center">
                      <img
                        src={image}
                        alt={`${group.title} ${imageIndex + 1}`}
                        className="w-full h-full scale-[1.15] object-contain mix-blend-darken dark:mix-blend-normal transition-transform duration-700 ease-out"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="text-center mt-auto w-full">
                      <h4 className="text-lg font-medium text-luxury-black dark:text-luxury-cream tracking-wide">
                        {group.images.length > 1 ? `${t(group.title)} ${imageIndex + 1}` : t(group.title)}
                      </h4>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
          </div>
        </section>
        </div>
      </motion.div>
    </div>
  );
}
