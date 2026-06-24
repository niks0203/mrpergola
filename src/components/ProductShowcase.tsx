import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ComparisonTable from './ComparisonTable';
import SeasonComparisonTable from './SeasonComparisonTable';
import { useLanguage } from '../context/LanguageContext';

const products = [
  {
    id: '01',
    title: 'Classic Design',
    subtitle: '3 or 4 Season Options',
    image: '/assets/16x16-slat.jpg',
    description: 'Built to handle 36" of Wet Snow at 20ft span, more when columns are closer.'
  },
  {
    id: '02',
    title: 'Modern Pergola',
    subtitle: 'Sleek Contemporary Look',
    image: '/assets/Modern-Pergola.jpg',
    description: 'Boxed-in design where water flows internally down the columns. Purpose-built for the North American market with a clean, rectangular or square profile.'
  },
  {
    id: '03',
    title: 'Custom Design',
    subtitle: 'Built for you',
    image: '/assets/20x20_Side-privacy-Custom.jpg',
    description: '4-season fixed corrugated roof structure. Roof is fixed.'
  },
  {
    id: '04',
    title: 'Classic Pergola Top on Existing Structure',
    subtitle: 'Retrofit Solution',
    image: '/assets/Classic%20Pergola%20Top%20on%20Existing%20Structure..jpeg',
    description: 'A classic pergola top designed to integrate with an existing structure while preserving shade, airflow, and year-round outdoor comfort.'
  }
];

export default function ProductShowcase() {
  const { t, language } = useLanguage();
  const standardSizesNote =
    language === 'FR'
      ? 'M.Pergola propose TOUTES les tailles et formes personnalisees.'
      : 'ALL custom sizes and shapes possible with Mr.Pergola.';
  const customizationNote =
    language === 'FR'
      ? 'La personnalisation est gratuite.'
      : 'Customization is Free';

  return (
    <section id="collections" className="py-16 md:py-24 px-6 md:px-12 bg-white dark:bg-luxury-black transition-colors duration-500 lining-nums">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-8 md:gap-12">
          <div className="max-w-2xl">
            <span className="text-luxury-gold text-[12px] uppercase tracking-[0.8em] mb-6 block font-bold">
              {t('Collections')}
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-[5.5rem] leading-[0.9] dark:text-white font-serif">
              {t('Architectural')} <br />
              <span className="italic font-light">{t('Solutions.')}</span>
            </h2>
          </div>
          <div className="max-w-md p-8 rounded-2xl bg-luxury-gold/5 dark:bg-luxury-gold/10 backdrop-blur-md border border-luxury-gold/30 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-luxury-gold" />
            <p className="text-luxury-black dark:text-white text-lg md:text-xl font-medium leading-relaxed mb-6">
              {t('Mr. Pergola offers you three distinct choices. A Classic Design in 3 or 4 Season options and a sleek Modern design for those who appreciate contemporary minimalism.')}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-luxury-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold">{t('Precision Crafted')}</span>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12 md:mb-16">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-20 md:mb-40 relative rounded-2xl md:rounded-[2rem] overflow-hidden group border border-luxury-black/10 dark:border-white/10 shadow-xl"
        >
           <div className="aspect-[3/2] relative">
              <img 
                src="/assets/4%20season.png" 
                alt="Certified 4-Season Pergola" 
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                 <h3 className="text-3xl md:text-4xl lg:text-6xl font-serif text-white mb-5 drop-shadow-lg">{t('Certified 4-Season Pergola')}</h3>
                 <div className="w-16 h-[2px] bg-luxury-gold" />
              </div>
           </div>
        </motion.div>

        <div className="mt-20 md:mt-32 space-y-16 md:space-y-24">
          {/* Classic Design Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-6 mb-8">
                <span className="text-luxury-gold text-base md:text-lg font-serif italic">{t('The Classic Choice')}</span>
                <div className="h-[1px] flex-1 bg-luxury-black/10 dark:bg-white/10" />
              </div>
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-12 dark:text-white tracking-tight">{t('Classic Design')}</h3>
              <div className="space-y-8 text-luxury-gray dark:text-gray-300 font-light leading-relaxed text-lg bg-white/60 dark:bg-luxury-black/60 backdrop-blur-md p-8 rounded-2xl border border-luxury-black/5 dark:border-white/10 shadow-sm">
                <p>
                  {t('A timeless aesthetic featuring exposed louvres that direct water runoff in any direction you choose. Available in both ')}<span className="font-semibold text-luxury-black dark:text-white">{t('3 and 4 Season')}</span>{t(' varieties.')}
                </p>
                <div className="bg-luxury-gold/5 border-l-2 border-luxury-gold p-8 my-8">
                  <p className="text-base italic">
                    {t('While the 3-Season model requires open louvres during snowfall, our ')}<span className="text-luxury-black dark:text-white font-bold">{t('4-Season option')}</span>{t(' is engineered for true year-round living. Built to handle up to ')}<span className="font-semibold text-luxury-black dark:text-white">{t('36” of snow')}</span>{t('.')}
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="order-1 lg:order-2 relative aspect-[4/5] lg:aspect-square group">
               <div className="absolute inset-0 border border-luxury-gold/30 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
               <div className="w-full h-full overflow-hidden">
                <img 
                  src="/assets/16x16-slat.jpg" 
                  alt="Classic Pergola Design" 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
               </div>
            </div>
          </div>

          {/* Modern Design Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="aspect-[4/5] lg:aspect-square relative group">
               <div className="absolute inset-0 border border-luxury-gold/30 -translate-x-4 translate-y-4 -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
               <div className="w-full h-full overflow-hidden">
                <img 
                  src="/assets/Modern-Pergola.jpg" 
                  alt="Modern Pergola Design" 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
               </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="h-[1px] flex-1 bg-luxury-black/10 dark:bg-white/10" />
                <span className="text-luxury-gold text-base md:text-lg font-serif italic">{t('Contemporary Elegance')}</span>
              </div>
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-12 dark:text-white tracking-tight">{t('The Modern Choice')}</h3>
              <div className="space-y-8 text-luxury-gray dark:text-gray-300 font-light leading-relaxed text-lg bg-white/60 dark:bg-luxury-black/60 backdrop-blur-md p-8 rounded-2xl border border-luxury-black/5 dark:border-white/10 shadow-sm">
                <p>
                  {t('For those seeking a sleek, minimalist silhouette. The MODERN is purpose-built with high-tensile materials specifically for the North American climate.')}
                </p>
                <div className="border border-luxury-black/5 dark:border-white/5 p-8 bg-luxury-black/5 dark:bg-white/5 backdrop-blur-sm">
                   <p className="text-base font-light">
                    {t('Sophisticated Sleek Contemporary Design where water flows internally through columns. Maintains a strict architectural profile while retaining full control over drainage direction.')}
                   </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Engineering & Warning Section */}
          <div className="relative py-20 md:py-32 px-6 md:px-20 bg-luxury-black text-gray-100 overflow-hidden group">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 items-center">
              <div className="lg:col-span-2">
                <span className="text-luxury-gold text-sm md:text-base uppercase tracking-[0.8em] mb-8 block font-bold">{t('Hardware Selection')}</span>
                <h4 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">{t('German-Engineered')} <br /><span className="italic font-light">{t('Performance')}</span></h4>
                <div className="max-w-3xl">
                  <p className="text-gray-300 font-light leading-relaxed text-2xl md:text-3xl mb-12">
                    {t('Every Mr. Pergola system integrates the world-class ')}<span className="font-semibold text-white">{t('LockDrives 6000n gearbox')}</span>{t('. Engineered in Germany for extreme load conditions, this heavy-duty system is designed for the lifetime of your structure.')}
                  </p>
                  
                  <div className="flex flex-col md:flex-row gap-8 mb-12">
                    <div className="flex-1 p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
                      <span className="text-luxury-gold text-xs md:text-sm uppercase tracking-[0.3em] font-bold block mb-4">{t('Standard')}</span>
                      <h5 className="text-2xl font-serif mb-3">{t('Manual Precision')}</h5>
                      <p className="text-base text-gray-400 font-light">{t('Reliable, heavy-duty mechanical drive system.')}</p>
                    </div>
                    <div className="flex-1 p-6 border border-luxury-gold/30 bg-luxury-gold/5 backdrop-blur-sm">
                      <span className="text-luxury-gold text-xs md:text-sm uppercase tracking-[0.3em] font-bold block mb-4">{t('Available Upgrade')}</span>
                      <h5 className="text-2xl font-serif mb-3">{t('Somfy Electric')}</h5>
                      <p className="text-base opacity-80 font-light">{t('Integrated smart automation for ultimate ease.')}</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-6 border-b border-luxury-gold/35 pb-4">
                    <div className="w-3 h-3 bg-luxury-gold rounded-full animate-pulse" />
                    <p className="text-luxury-gold font-bold tracking-[0.2em] text-sm md:text-base uppercase">
                      {t('Exclusively North American Production')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex justify-center flex-col items-center gap-8">
                <div className="w-64 h-64 border-2 border-luxury-gold/20 rounded-full flex items-center justify-center relative group-hover:scale-105 transition-transform duration-1000">
                  <div className="absolute inset-0 border border-luxury-gold/10 rounded-full animate-[ping_3s_infinite]" />
                  <div className="text-center">
                    <span className="text-luxury-gold font-serif text-7xl italic block">{t('100%')}</span>
                    <span className="text-sm uppercase tracking-[0.4em] opacity-60">{t('Original')}</span>
                  </div>
                </div>
                <p className="text-sm md:text-lg uppercase tracking-[0.2em] text-center max-w-sm leading-relaxed text-luxury-gold font-bold drop-shadow-md">
                  {t('None of our pergolas come in a box from China.')}
                </p>
              </div>
            </div>
            {/* Background Accents */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-luxury-gold/10 blur-[120px] rounded-full" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent" />
          </div>
        </div>
        
        <div className="mt-20 md:mt-32 space-y-20 md:space-y-32">
          <ComparisonTable />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <StandardSizesTable />
          </motion.div>
          <div className="mx-auto max-w-5xl px-4">
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <div className="h-px w-10 md:w-16 bg-luxury-gold/35" />
              <p className="text-center font-serif text-lg md:text-2xl leading-relaxed text-luxury-black dark:text-white">
                <span className="block">{standardSizesNote}</span>
                <span className="block">{customizationNote}</span>
              </p>
              <div className="h-px w-10 md:w-16 bg-luxury-gold/35" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ImageCarousel />
          </motion.div>
          <SeasonComparisonTable />
        </div>
      </div>
    </section>
  );
}

function StandardSizesTable() {
  const { language } = useLanguage();
  const isFrench = language === 'FR';
  const widths = [12, 14, 16, 18, 20];
  const depths = [10, 12, 14, 16, 18, 20];
  const copy = {
    title: isFrench ? 'Dimensions standards' : 'Standard Sizes',
    mount: isFrench ? '4 poteaux ou montage mural' : '4-Post or Wall Mount',
    width: isFrench ? 'Largeur' : 'Wide',
    depth: isFrench ? 'Lames / profondeur' : 'Louvres / Depth',
    unavailable: isFrench ? 'Non disponible' : 'Unavailable'
  };

  return (
    <section className="overflow-hidden rounded-2xl border border-luxury-black/10 dark:border-white/10 bg-white dark:bg-white/[0.03] shadow-xl">
      <div className="bg-luxury-black px-6 py-8 text-center text-white dark:bg-black">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.5em] text-luxury-gold">
          {copy.mount}
        </p>
        <h3 className="font-serif text-3xl md:text-5xl">
          {copy.title}
        </h3>
      </div>

      <div className="grid gap-4 p-4 md:hidden">
        {depths.map((depth, rowIndex) => (
          <div
            key={depth}
            className={`rounded-2xl border border-luxury-black/10 p-5 shadow-sm dark:border-white/10 ${
              rowIndex % 2 === 0 ? 'bg-white dark:bg-white/[0.03]' : 'bg-luxury-black/[0.025] dark:bg-white/[0.06]'
            }`}
          >
            <div className="mb-4 flex items-baseline justify-between gap-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold">
                {copy.depth}
              </p>
              <p className="font-serif text-3xl text-luxury-black dark:text-white">
                {depth}
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {widths.map((width) => {
                const isAvailable = width >= depth;

                return isAvailable ? (
                  <span
                    key={`${width}-${depth}`}
                    className="inline-flex items-center justify-center rounded-full border border-luxury-gold/30 bg-luxury-gold/10 px-4 py-2 text-sm font-semibold text-luxury-black dark:text-luxury-cream"
                  >
                    {width} x {depth}
                  </span>
                ) : (
                  <span
                    key={`${width}-${depth}`}
                    className="inline-flex items-center justify-center rounded-full border border-luxury-black/5 bg-luxury-black/5 px-3 py-2 text-xs uppercase tracking-[0.18em] text-luxury-gray dark:border-white/10 dark:bg-white/10 dark:text-gray-400"
                  >
                    {width}: {copy.unavailable}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[760px] border-collapse text-center">
          <caption className="sr-only">{copy.title}</caption>
          <thead>
            <tr className="bg-luxury-gold/10 text-luxury-black dark:text-white">
              <th className="w-36 px-5 py-5 text-left text-[11px] font-bold uppercase tracking-[0.35em] text-luxury-gold">
                {copy.depth}
              </th>
              <th colSpan={widths.length} className="px-5 py-5 text-[11px] font-bold uppercase tracking-[0.5em] text-luxury-gold">
                {copy.width}
              </th>
            </tr>
            <tr className="border-y border-luxury-black/10 bg-luxury-black/[0.03] dark:border-white/10 dark:bg-white/[0.04]">
              <th className="px-5 py-4" />
              {widths.map((width) => (
                <th key={width} className="px-5 py-4 font-serif text-2xl text-luxury-black dark:text-white">
                  {width}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {depths.map((depth) => (
              <tr key={depth} className="border-b border-luxury-black/5 odd:bg-white even:bg-luxury-black/[0.025] dark:border-white/10 dark:odd:bg-transparent dark:even:bg-white/[0.04]">
                <th className="px-5 py-5 text-left font-serif text-2xl text-luxury-black dark:text-white">
                  {depth}
                </th>
                {widths.map((width) => {
                  const isAvailable = width >= depth;

                  return (
                    <td key={`${width}-${depth}`} className="px-5 py-5">
                      {isAvailable ? (
                        <span className="inline-flex min-w-24 items-center justify-center rounded-full border border-luxury-gold/30 bg-luxury-gold/10 px-4 py-2 text-sm font-semibold text-luxury-black dark:text-luxury-cream">
                          {width} x {depth}
                        </span>
                      ) : (
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-luxury-black/5 text-sm text-luxury-gray dark:bg-white/10 dark:text-gray-400" aria-label={copy.unavailable}>
                          x
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

interface ProductCardProps {
  product: typeof products[0];
  index: number;
  key?: React.Key;
}

function ProductCard({ product, index }: ProductCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useLanguage();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="relative aspect-[4/3] overflow-hidden mb-8 bg-luxury-black/5 dark:bg-white/5">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-0 left-0 w-full h-full p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent">
          <span className="text-luxury-gold font-serif text-6xl italic opacity-40 translate-x-4 group-hover:translate-x-0 transition-transform duration-700 delay-100">
            {product.id}
          </span>
          <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-200">
             <div className="w-12 h-[1px] bg-luxury-gold mb-4" />
             <p className="text-white text-[10px] uppercase tracking-[0.4em] font-bold">{t('Inspiration — ')} {t(product.title)}</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-3">
        <span className="text-luxury-gold text-[10px] uppercase tracking-[0.5em] font-bold opacity-90">
          {t(product.subtitle)}
        </span>
        <h3 className="text-3xl font-serif dark:text-white group-hover:text-luxury-gold transition-colors duration-500">
          {t(product.title)}
        </h3>
        <p className="text-luxury-gray dark:text-gray-300 text-sm leading-relaxed mb-6 max-w-xs">
          {t(product.description)}
        </p>
        <div className="hidden">
          {t('View Detail')}
          <div className="h-[1px] flex-1 bg-luxury-black/10 dark:bg-white/10 relative overflow-hidden">
            <motion.div 
              initial={{ x: '-100%' }}
              whileInView={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 bg-luxury-gold/30"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const images = [
    '/assets/carl/White%20Modern%2020%20x%2016.png',
    '/assets/carl/Modern%2016%20x16.jpg',
    '/assets/carl/Modern%2014%20x%2014.jpg',
    '/assets/carl/2%20moderns%20Rooftop.png',
    '/assets/carl/Classic%209_v3_LR.jpg',
    '/assets/carl/Classic%20Commercial%20Lshape.jpg'
  ];

  const next = React.useCallback(() => setCurrentIndex((prev) => (prev + 1) % images.length), [images.length]);
  const prev = React.useCallback(() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length), [images.length]);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      next();
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [next]);

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-luxury-black/10 dark:border-white/10 shadow-sm group bg-luxury-black/5 dark:bg-white/5">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`Modern pergola ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
          loading="lazy"
          decoding="async"
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-between p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <button onClick={prev} className="pointer-events-auto p-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white transition-colors" aria-label="Previous image">
          <ChevronLeft size={24} />
        </button>
        <button onClick={next} className="pointer-events-auto p-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white transition-colors" aria-label="Next image">
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/80'}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
