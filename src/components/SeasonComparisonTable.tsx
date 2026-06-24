import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '../context/LanguageContext';

const seasonData = [
  { 
    feature: '6063 Aluminum Beams', 
    threeSeason: '3-Season | Louvres open in winter', 
    fourSeason: true 
  },
  { 
    feature: 'Additional Support Beams', 
    threeSeason: 'If necessary or desired for lights/heaters', 
    fourSeason: true 
  },
  { 
    feature: 'Extrusion Profiles', 
    threeSeason: '6"', 
    fourSeason: '6"' 
  },
  { 
    feature: 'Aluminum Post 6061', 
    threeSeason: true, 
    fourSeason: true 
  },
  { 
    feature: 'Support/"Brackets"-Thickness', 
    threeSeason: '1/8"', 
    fourSeason: '1/4"' 
  },
  { 
    feature: 'Compatible Accessories', 
    threeSeason: true, 
    fourSeason: true 
  },
  { 
    feature: 'Internal Reinforcements (TV/Heaters)', 
    threeSeason: '16ft If requested for TV/ Heaters etc', 
    fourSeason: true 
  },
  { 
    feature: 'Dynamic charge (constant wind-closed louvres)', 
    threeSeason: '156mph/HR', 
    fourSeason: '156mph/HR' 
  },
  { 
    feature: 'Snow Load Capacity', 
    threeSeason: 'First snow fall only (2-4")', 
    fourSeason: '36" / 88lbs' 
  },
];

export default function SeasonComparisonTable() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-luxury-black transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
           <span className="text-luxury-gold text-[12px] uppercase tracking-[0.8em] mb-4 block font-bold">
            {t('Season Specifications')}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif dark:text-luxury-cream uppercase tracking-tight">
            {t('Comparison:')} <span className="italic font-light">{t('3-Season vs 4-Season')}</span>
          </h2>
        </div>

        <div className="overflow-x-auto border border-luxury-black/10 dark:border-luxury-cream/10">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-luxury-black text-luxury-cream">
                <th className="py-4 px-2 md:py-8 md:px-6 text-left text-[10px] md:text-sm uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold border-r border-white/20">{t('Features')}</th>
                <th className="py-4 px-2 md:py-8 md:px-6 text-center border-r border-white/20">
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-xs uppercase tracking-wider md:tracking-widest font-bold">{t('Classic Pergola')}</span>
                    <span className="text-luxury-gold text-[8px] md:text-[10px] mt-1 font-light italic">{t('3-Season | Louvres open in winter')}</span>
                  </div>
                </th>
                <th className="py-4 px-2 md:py-8 md:px-6 text-center">
                   <div className="flex flex-col">
                    <span className="text-[10px] md:text-xs uppercase tracking-wider md:tracking-widest font-bold">{t('Classic Pergola')}</span>
                    <span className="text-luxury-gold text-[8px] md:text-[10px] mt-1 font-light italic">{t('4-Season | Louvres closed in winter')}</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {seasonData.map((row, index) => (
                <motion.tr 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    "border-b border-luxury-black/10 dark:border-luxury-cream/10 last:border-b-0",
                    index % 2 === 0 ? 'bg-luxury-cream/10 dark:bg-luxury-cream/5' : 'bg-white dark:bg-luxury-black'
                  )}
                >
                  <td className="py-3 px-2 md:py-5 md:px-8 text-[10px] md:text-sm font-medium text-luxury-black dark:text-luxury-cream/80 border-r border-luxury-black/10 dark:border-luxury-cream/10">
                    {t(row.feature)}
                  </td>
                  <td className="py-3 px-2 md:py-5 md:px-8 text-center border-r border-luxury-black/10 dark:border-luxury-cream/10">
                    <SeasonCellContent value={row.threeSeason} />
                  </td>
                  <td className="py-3 px-2 md:py-5 md:px-8 text-center">
                    <SeasonCellContent value={row.fourSeason} />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mx-auto mt-14 max-w-4xl border border-luxury-gold/20 bg-luxury-gold/5 p-8 text-center backdrop-blur-sm md:p-10">
           <p className="mb-5 text-sm font-bold uppercase tracking-[0.32em] text-luxury-black dark:text-luxury-cream italic">{t('Important Engineering Note —')}</p>
           <p className="mx-auto max-w-3xl text-base leading-8 text-luxury-black dark:text-luxury-cream md:text-lg">
             {t('Our 4-Season Pergolas are specifically engineered for the heavy snow loads of Canadian winters. The reinforced 1/4" bracket system and internal structural supports allow the louvres to remain safely closed during active snowfall, providing true year-round protection.')}
           </p>
        </div>
      </div>
    </section>
  );
}

function SeasonCellContent({ value }: { value: string | boolean }) {
  const { t } = useLanguage();
  
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className="w-8 h-8 rounded-full bg-luxury-gold flex items-center justify-center shadow-lg shadow-luxury-gold/20">
          <Check className="text-white" size={16} strokeWidth={3} />
        </div>
      </div>
    );
  }
  
  return (
    <span className="text-[9px] md:text-xs font-semibold text-luxury-black dark:text-luxury-cream/70 opacity-80 uppercase tracking-wider md:tracking-widest decoration-luxury-gold/20 underline md:underline-offset-8">
      {t(value as string)}
    </span>
  );
}
