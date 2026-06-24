import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const testimonials = [
  {
    name: 'Robert M.',
    location: 'Montreal, QC',
    text: 'The 4-Season Classic Pergola is exactly what we needed. We use our BBQ even in the middle of a Canadian winter now. Highly recommended!'
  },
  {
    name: 'Sarah L.',
    location: 'Toronto, ON',
    text: 'We chose the Modern Design for our rooftop patio. The engineering is incredible, and the internal drainage system works perfectly even in heavy downpours.'
  },
  {
    name: 'David K.',
    location: 'Vancouver, BC',
    text: 'Installation was professional and the final product is stunning. It’s not just a pergola; it’s an architectural statement that added real value to our home.'
  }
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-luxury-black transition-colors duration-500 lining-nums">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-luxury-gold text-xs md:text-sm uppercase tracking-[0.5em] mb-4 block font-medium">
            {t('Testimonials')}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif dark:text-white">
            {t('What Our')} <span className="italic">{t('Customers')}</span> {t('Say')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="relative group h-full flex flex-col"
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 border-l-2 border-t-2 border-luxury-gold/30 group-hover:border-luxury-gold transition-colors duration-500" />
              
              <div className="flex-1 flex flex-col pt-8">
                <Quote className="text-luxury-gold mb-8 opacity-20 group-hover:opacity-100 transition-opacity duration-700" size={40} strokeWidth={1} />
                <p className="text-luxury-gray dark:text-gray-300 font-serif text-2xl leading-relaxed mb-10 italic font-light relative z-10">
                  “{t(testimonial.text)}”
                </p>
              <div className="mt-auto pt-8 border-t border-luxury-black/5 dark:border-white/5">
                <p className="text-luxury-black dark:text-white font-bold text-xs tracking-[0.3em] uppercase">
                    {t(testimonial.name)}
                  </p>
                  <p className="text-luxury-gold text-[9px] uppercase tracking-[0.4em] mt-2 font-bold opacity-60">
                    {t(testimonial.location)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
