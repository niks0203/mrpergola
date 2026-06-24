import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <div className="pt-40 pb-32 lining-nums">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-serif tracking-tight mb-12 text-center">{t('About Us')}</h1>
        </div>

        <section className="mb-24 w-full h-[50svh] md:h-[70svh] min-h-[400px] relative overflow-hidden group">
            <img
              src="/assets/Double_Residential_V1_LR.jpg"
              alt="About Us"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-12 pointer-events-none">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white drop-shadow-lg tracking-tight mb-4">
                {t('The')} {t('Story')} {t('Behind It All.')}
              </h2>
              <p className="text-white/90 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold drop-shadow">
                {t('100% CANADIAN PRODUCTION')}
              </p>
            </div>
        </section>

        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-16 items-start mb-32 max-w-4xl mx-auto">
          
          <div className="space-y-8 text-luxury-gray dark:text-gray-300 font-light leading-relaxed text-center md:text-left">
            <p className="text-2xl md:text-3xl font-serif dark:text-gray-100 leading-normal mb-8 text-luxury-black">
              {t('This is the classic story of someone who bought a product, loved the idea but was dissatisfied with the result and thought…')} <span className="italic font-normal">{t('"THIS CAN BE MADE WAY WAY BETTER!"')}</span>
            </p>
            
            <p className="text-lg">
              {t('Friends, family, neighbours and just about everyone who saw the pergola, I had originally bought, loved the idea and the comfort it provided. But unfortunately, they didn’t know how often it broke. I got the run around by the seller for service… getting me very upset.')}
            </p>

            <p className="text-lg">
              {t('There was another factor. When visitors would ask "what do you do in winter?" and I would reply "unfortunately during winter you have to leave the louvres up, it can’t handle any snow", I noticed the disappointment in their faces, often with "too bad, wouldn’t it be perfect if you could use it in winter? BBQ, even storage"…… and with that, Mr.Pergola was born.')}
            </p>

            <p className="text-lg">
              {t('I worked with engineers and designers for over 2 years, spending a small fortune to design something that almost every professional told me was an insane endeavour, "there is a reason nobody has done this Mike!", "snow is heavy, very heavy" was something I heard repeatedly over that time. But I kept remembering the disappointed faces of those at my house and just kept going.')}
            </p>

            <div className="p-8 md:p-10 my-12 bg-white/60 dark:bg-luxury-black/60 backdrop-blur-md border border-luxury-black/5 dark:border-white/10 rounded-2xl shadow-sm">
              <p className="text-lg italic mb-6 text-luxury-black dark:text-gray-100">
                {t('The 4-season pergola came first. The impossible was accomplished with both ASCE 7-16 and Canadian Building Code Standards. Then it was time to make the best damn 3-season pergola anyone can buy. The best is just right, nothing less will do ("The best or nothing"- Carl Benz of Mercedes Benz-1886).')}
              </p>
              <p className="text-lg">
                {t("We use thick aluminum, nothing cheap or thin. With Grade 8, half-inch thick bolts to make our double coated steel corners, not screws. I will gladly mail you samples. Go ahead and shop around, nothing comes close. Most pergolas are made with ‘sheet-metal’, not us. We use heavy duty proprietary extrusions. If a picture is worth a thousand words, how much is a piece in your hand worth? I’ll back everything I’m stating with free samples mailed to your home or business. You can get more technical information on our")} <Link to="/technicals" className="text-luxury-black dark:text-white underline decoration-luxury-gold/60 hover:text-luxury-gold transition-colors">{t('Technicals')}</Link>.
              </p>
            </div>

            <p className="text-lg">
              {t('Now homeowners, restaurants, hotels alike, knock on our door, call or order online their customized project that makes them so happy, making me even happier. It WILL change your outdoor living, no question about it.')}
            </p>

            <p className="text-lg">
              {t("I look forward to making your family or business happy. I hope you, like many others, will share the images of a baby-shower, baptism, bridal-shower, graduation or any other important event that will go on, rain or too much shine. Restaurants book their terraces regardless of the forecast, and families plan their weekend BBQs without worry…Not to mention, you, simply enjoying your outdoor space daily without having the searing sun or rain ruining your day.")}
            </p>

            <div className="pt-12 border-t border-luxury-black/10 dark:border-white/10 mt-12">
              <p className="text-2xl font-serif italic dark:text-gray-100 mb-4 text-luxury-black">{t('From my home to yours,')}</p>
              <p className="text-lg font-bold text-luxury-black dark:text-white uppercase tracking-widest">Michael K.</p>
              <p className="text-xs text-luxury-gold uppercase tracking-[0.3em] mt-2 font-bold">{t('President and founder of Mr.Pergola')}</p>
            </div>
          </div>
        </div>
        
        {/* Workshop Gallery Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <span className="text-luxury-gold text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">{t('Craftsmanship')}</span>
            <h2 className="text-3xl md:text-5xl font-serif dark:text-white">{t('Inside Our Workshop')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-8 aspect-[4/3] rounded-2xl overflow-hidden group border border-luxury-black/10 dark:border-white/10">
              <img src="/assets/about/DSC_5317%201.jpg" alt="Workshop Craftsmanship" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" loading="lazy" decoding="async" />
            </div>
            <div className="md:col-span-4 aspect-square md:aspect-auto rounded-2xl overflow-hidden group border border-luxury-black/10 dark:border-white/10">
              <img src="/assets/about/DSC_5285.jpg" alt="Precision Assembly" className="w-full h-full object-cover object-[62%_center] transition-transform duration-[2000ms] group-hover:scale-105" loading="lazy" decoding="async" />
            </div>
            <div className="md:col-span-5 aspect-square rounded-2xl overflow-hidden group border border-luxury-black/10 dark:border-white/10">
              <img src="/assets/about/DSC_5258.jpg" alt="Aluminum Extrusions" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" loading="lazy" decoding="async" />
            </div>
            <div className="md:col-span-7 aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden group border border-luxury-black/10 dark:border-white/10">
              <img src="/assets/about/DSC_5225.jpg" alt="Pergola Manufacturing" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>

          {/* Call to Action Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-16 border-t border-luxury-black/10 dark:border-white/10">
            <div className="flex flex-col items-center md:items-start flex-1 w-full text-center md:text-left">
               <h3 className="text-3xl font-serif text-luxury-black dark:text-white mb-4">
                  {t('Mr. Pergola')}
               </h3>
               <p className="text-xs uppercase tracking-[0.3em] text-luxury-gray dark:text-gray-400 font-bold mb-8">
                  {t('Contact us for any questions')}
               </p>
               <Link to="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-luxury-black text-white dark:bg-white dark:text-luxury-black rounded-none hover:bg-luxury-gold hover:text-white dark:hover:bg-luxury-gold dark:hover:text-white transition-colors duration-300 group w-full sm:w-auto">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold">{t('Contact Us')}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
            
            <div className="hidden md:block w-px h-32 bg-luxury-black/10 dark:bg-white/10"></div>

            <div className="flex flex-col items-center md:items-end flex-1 w-full text-center md:text-right">
               {/* Empty space matching the height of the left title for layout balance */}
               <div className="h-[36px] mb-4 hidden md:block" aria-hidden="true" />
               <p className="text-xs uppercase tracking-[0.3em] text-luxury-gray dark:text-gray-400 font-bold mb-8">
                  {t('Read more about Mr. Pergola')}
               </p>
               <Link to="/gallery" className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-luxury-black dark:border-white hover:border-luxury-gold dark:hover:border-luxury-gold text-luxury-black dark:text-white hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors duration-300 group w-full sm:w-auto">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold">{t('View Gallery')}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
