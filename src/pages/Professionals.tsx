import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Professionals() {
  const { t } = useLanguage();

  return (
    <div className="pt-40 pb-32 lining-nums">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-serif tracking-tight mb-12 text-center">{t('Partnerships')}</h1>
        </div>

        <section className="mb-24 w-full h-[50svh] md:h-[70svh] min-h-[400px] relative overflow-hidden group">
            <img
              src="/assets/Home.jpg"
              alt="Professional Partnership"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-12 pointer-events-none">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white drop-shadow-lg tracking-tight mb-4">
                {t('Architects')} {t('& Designers.')}
              </h2>
              <p className="text-white/90 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold drop-shadow">
                {t('Partnerships')}
              </p>
            </div>
        </section>

        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-24 items-start mb-32 max-w-4xl mx-auto">
          <div className="space-y-12 text-center md:text-left">
            <p className="text-2xl text-luxury-gray dark:text-gray-300 font-light leading-relaxed font-serif">
              {t('We collaborate with the world\'s leading architects and landscape designers to integrate our systems into the most prestigious projects.')}
            </p>

            <div className="space-y-6 text-lg text-luxury-gray dark:text-gray-300 font-light leading-relaxed">
              <p className="text-luxury-gray dark:text-gray-300 font-light leading-relaxed text-lg">
                {t('As we’ve grown, our professional relationships have grown as well. Given the flood of inquiries we receive on our “info” email, we’ve decided to add a dedicated email address for all professional requests.')}
              </p>
              <p>
                {t('Welcome to the team! Mr. Pergola, where craftsmanship meets innovation. As experts in the art of outdoor living, we understand the importance of seamless communication and support for our valued partners.')}
              </p>
              
              <div className="p-8 border-l-2 border-luxury-gold bg-luxury-black/5 dark:bg-white/5 my-8">
                <p className="text-luxury-black dark:text-gray-100 italic text-xl">
                  {t('If you have an emergency or a specific question that needs to be addressed quickly, please contact us at ')}
                  <a href="tel:+18336773746" className="font-semibold text-luxury-gold hover:underline">+ 1833-MR PERGO</a>
                  {t(' . Someone will pick up any time, including weekends.')}
                </p>
              </div>
              
              <p>
                {t('Whether you’re an architect seeking to integrate our stunning structures seamlessly into your blueprints, a landscaper envisioning the perfect outdoor oasis, or a designer looking to elevate your outdoor space, we’re here to streamline your experience and provide tailored solutions to meet your project needs. And we will NEVER MISS a deadline. Whether you have an emergency need or an extremely complex project, we can handle more than any other competitor.')}
              </p>
              <p>
                {t('From our versatile 3 and 4 season pergolas designed to enhance any outdoor space to our industry-leading feature of the longest span between posts, reaching an impressive 20 feet (longer on rare occasions), we’re committed to delivering excellence at every step. Join us in creating outdoor havens that inspire and endure.')}
              </p>
              <p className="font-semibold text-luxury-black dark:text-white mt-8">
                {t('Remember, we’re here to help make your project successful in the most timely manner possible.')}
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-luxury-black/10 dark:border-white/10">
              <div className="p-10 border border-luxury-black/5 dark:border-white/5 bg-white/50 dark:bg-black/20 backdrop-blur-sm group hover:border-luxury-gold/30 transition-all duration-700">
                <h4 className="font-serif text-2xl mb-4 dark:text-white uppercase tracking-wide">{t('CAD & BIM Support')}</h4>
                <p className="text-base text-luxury-gray dark:text-gray-400 font-light leading-relaxed">{t('Access our comprehensive library of technical drawings and 3D models for seamless architectural integration.')}</p>
              </div>
              <div className="p-10 border border-luxury-black/5 dark:border-white/5 bg-white/50 dark:bg-black/20 backdrop-blur-sm group hover:border-luxury-gold/30 transition-all duration-700">
                <h4 className="font-serif text-2xl mb-4 dark:text-white uppercase tracking-wide">{t('Bespoke Engineering')}</h4>
                <p className="text-base text-luxury-gray dark:text-gray-400 font-light leading-relaxed">{t('Our in-house engineering team provides dedicated assistance for complex structural requirements and site-specific adaptations.')}</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
