﻿﻿﻿﻿﻿import { motion, useScroll, useTransform } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const { t } = useLanguage();

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-black lining-nums">
      {/* Background Video with Parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <video
          src="/assets/MrPergola_30Sec-Spot_Export-NO%20VOICE.mp4"
          className="w-full h-full object-cover sepia-[25%] saturate-[75%] contrast-105"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/assets/Home.jpg"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-0 left-12 w-[1px] h-full bg-luxury-cream/10 hidden md:block" />
        <div className="absolute top-0 right-12 w-[1px] h-full bg-luxury-cream/10 hidden md:block" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-6xl pt-28 sm:pt-32 md:pt-36 pb-12"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
          className="text-luxury-cream text-[clamp(3rem,7.5vw,7.75rem)] mb-8 sm:mb-10 leading-[0.9] font-serif tracking-tight"
          >
          {t('Distinctive')} <br />
          <span className="italic font-extralight opacity-90">{t('Outdoor.')}</span> <br />
            <span className="text-luxury-gold relative inline-block">
            {t('Living.')}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.5, duration: 1.5, ease: 'easeInOut' }}
                className="absolute -bottom-4 left-0 h-[2px] bg-luxury-gold/30"
              />
            </span>
          </motion.h1>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="max-w-4xl mx-auto mb-10 md:mb-14"
          >
        <div className="relative overflow-hidden rounded-3xl border border-white/20 dark:border-luxury-cream/20 bg-white/10 dark:bg-black/40 backdrop-blur-md px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
              <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent" />
              <p className="text-white text-sm sm:text-base md:text-xl font-medium tracking-[0.06em] sm:tracking-[0.1em] md:tracking-[0.14em] leading-relaxed mb-6 sm:mb-8 drop-shadow-md">
                {t('MrPergola.com | 100% Aluminum | Adjustable Louvres')}
                <br />
                <span className="mt-2 inline-block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/95 sm:text-[11px] sm:tracking-[0.22em] md:text-xs md:tracking-[0.28em]">
                  {t('Crafted to Canadian Building Code 2020 and ASCE 7-16 Standard | 272km/hr-170mph')}
                </span>
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5">
                <div className="flex items-center gap-2 sm:gap-3 group rounded-2xl border border-white/20 dark:border-luxury-cream/20 bg-white/5 dark:bg-luxury-cream/10 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-3 shadow-sm">
                  <ShieldCheck className="text-luxury-gold group-hover:scale-110 transition-transform" size={18} />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white sm:text-[10px] sm:tracking-[0.3em]">{t('Made In Canada with North American Materials')}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 group rounded-2xl border border-white/20 dark:border-luxury-cream/20 bg-white/5 dark:bg-luxury-cream/10 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-3 shadow-sm">
                  <ShieldCheck className="text-luxury-gold group-hover:scale-110 transition-transform" size={18} />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white sm:text-[10px] sm:tracking-[0.3em]">{t('6061-6063-T6 Extrusions')}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 group rounded-2xl border border-white/20 dark:border-luxury-cream/20 bg-white/5 dark:bg-luxury-cream/10 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-3 shadow-sm">
                  <ShieldCheck className="text-luxury-gold group-hover:scale-110 transition-transform" size={18} />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white sm:text-[10px] sm:tracking-[0.3em]">{t('10 Year Warranty')}</span>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* Side Label */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 rotate-90 origin-right hidden xl:block">
        <span className="text-[9px] uppercase tracking-[0.6em] text-luxury-cream/35 whitespace-nowrap">
          {t('Premium Architectural Systems - Est. 2024')}
        </span>
      </div>
    </section>
  );
}
