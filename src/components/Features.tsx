import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Shield, Wind, Sun, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const features = [
  {
    icon: <Shield size={32} strokeWidth={1} />,
    title: '6061-T6 Aluminum',
    description: 'Structural grade aluminum columns and beams recognized for exceptional load-bearing capacity.'
  },
  {
    icon: <Wind size={32} strokeWidth={1} />,
    title: '160 MPH Rated',
    description: 'Engineered to meet ASCE 7-16 standards, withstanding extreme hurricane-force winds.'
  },
  {
    icon: <Sun size={32} strokeWidth={1} />,
    title: '6063-T6 Louvers',
    description: 'Extruded aluminum louvers optimized for precision fit, durability, and corrosion resistance.'
  },
  {
    icon: <Zap size={32} strokeWidth={1} />,
    title: '10 Year Warranty',
    description: 'Backed by a decade of protection, ensuring long-term performance and peace of mind.'
  }
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 md:py-32 px-6 md:px-12 bg-luxury-black transition-colors duration-500 relative overflow-hidden">
       {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-6 mb-10">
              <span className="text-luxury-gold text-xs uppercase tracking-[0.8em] font-bold">{t('Standard 04')}</span>
              <div className="h-px flex-1 bg-luxury-cream/10" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-[5rem] mb-12 leading-[0.9] text-luxury-cream font-serif">
              {t('Uncompromising')} <br />
              <span className="italic font-light opacity-60">{t('Quality.')}</span>
            </h2>
            
            <p className="text-luxury-cream/85 text-lg md:text-2xl font-light leading-relaxed mb-16 max-w-2xl italic">
              {t('We believe that luxury is found in the details. From the hidden fasteners to the whisper-quiet motors, every element of a Mr. Pergola system is refined to perfection.')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-6 group"
                >
                  <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-black transition-all duration-500">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-4 text-luxury-cream uppercase tracking-wide">{t(feature.title)}</h4>
                    <p className="text-luxury-cream/80 text-base md:text-lg font-light leading-relaxed max-w-[240px]">
                      {t(feature.description)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/4] lg:aspect-square"
          >
             {/* Architectural Frame */}
            <div className="absolute -inset-8 border border-luxury-gold/10 -z-10" />
            <div className="absolute -inset-4 border border-luxury-gold/20 -z-10" />
            
            <div className="w-full h-full overflow-hidden relative group">
              <img
                src="/assets/Mr-Pergola-Gallery-Image-Jun-02.jpg"
                alt="Engineering Detail"
                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-transparent transition-colors duration-1000" />
              
              {/* Image Label */}
              <div className="absolute bottom-8 left-8">
                <div className="bg-luxury-black/80 backdrop-blur-md border border-luxury-cream/10 px-6 py-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold">{t('Detail 042')}</span>
                  <p className="text-luxury-cream text-xs font-light mt-1">{t('Structural Reinforcement Detail')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  );
}
