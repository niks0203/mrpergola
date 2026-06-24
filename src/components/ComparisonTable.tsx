import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '../context/LanguageContext';

const comparisonData = [
  { feature: 'Adjustable Louvres', classic: true, modern: true },
  { feature: 'Louvres Lock at any angle', classic: true, modern: true },
  { feature: 'Manual Mechanism', classic: 'lock', modern: 'lock' },
  { feature: 'Electric Mechanism Option', classic: 'somfy', modern: 'somfy' },
  { feature: 'Built in rails for curtains (left to right)', classic: true, modern: true },
  { feature: 'Electric Curtains (vertical movement)', classic: true, modern: true },
  { feature: 'Heavy Gage Aluminum', classic: true, modern: true },
  { feature: 'Rain Run Off', classic: 'Any direction of louvres', modern: 'Integrated Gutters' },
  { feature: 'Span (distance between posts), both deep and wide', classic: 'up to 20ft', modern: 'up to 20ft' },
  { feature: 'Grade 8 Bolts (McMaster: 90128A714)', classic: true, modern: true },
  { feature: '4 Season Capable', classic: true, modern: false },
];

export default function ComparisonTable() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-luxury-black transition-colors duration-500 overflow-hidden lining-nums">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif dark:text-white uppercase tracking-wider">
            {t("What's the Difference?")}
          </h2>
        </div>

        <div className="overflow-x-auto border border-luxury-black/20 dark:border-white/20">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-luxury-black text-white">
                <th className="py-3 px-2 md:py-6 md:px-4 text-left text-xs md:text-base uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold border-r border-white/30"></th>
                <th className="py-3 px-2 md:py-6 md:px-4 text-center text-xs md:text-base uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold border-r border-white/30">{t('Classic Pergola')}</th>
                <th className="py-3 px-2 md:py-6 md:px-4 text-center text-xs md:text-base uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold">{t('Modern Pergola')}</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    "border-b border-luxury-black/20 dark:border-white/20 last:border-b-0",
                    index % 2 === 0 ? 'bg-black/5 dark:bg-luxury-black/40' : 'bg-white dark:bg-luxury-black'
                  )}
                >
                  <td className="py-3 px-2 md:py-4 md:px-6 text-xs md:text-base font-medium text-luxury-black dark:text-white border-r border-luxury-black/20 dark:border-white/20">
                    {t(row.feature)}
                  </td>
                  <td className="py-3 px-2 md:py-4 md:px-6 text-center border-r border-luxury-black/20 dark:border-white/20">
                    <CellContent value={row.classic} />
                  </td>
                  <td className="py-3 px-2 md:py-4 md:px-6 text-center">
                    <CellContent value={row.modern} />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CellContent({ value }: { value: string | boolean }) {
  const { t } = useLanguage();

  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-luxury-gold/10 flex items-center justify-center border border-luxury-gold/30">
          <Check className="text-luxury-gold" size={14} strokeWidth={3} />
        </div>
      </div>
    );
  }
  if (value === false) {
    return <span className="opacity-10">—</span>;
  }
  if (value === 'lock') {
    return (
      <div className="flex flex-col items-center justify-center scale-90">
        <div className="bg-luxury-black p-1 rounded-sm mb-1">
          <div className="border border-luxury-gold/50 p-0.5 flex items-center justify-center">
             <span className="text-[9px] text-luxury-gold font-bold leading-none tracking-tighter">{t('LOCK')}</span>
          </div>
        </div>
        <span className="text-[9px] font-bold text-luxury-black dark:text-white tracking-widest uppercase">{t('Drives')}</span>
      </div>
    );
  }
  if (value === 'somfy') {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-1">
          <span className="text-lg font-bold text-luxury-black dark:text-white tracking-tighter">somfy</span>
          <span className="text-luxury-gold text-2xl leading-none ml-0.5">.</span>
        </div>
        <span className="text-[9px] font-bold text-luxury-gold tracking-[0.3em] uppercase">{t('Intelligence')}</span>
      </div>
    );
  }
  return (
    <span className="text-xs md:text-sm font-bold text-luxury-black dark:text-white uppercase tracking-wider md:tracking-widest decoration-luxury-gold/50 underline md:underline-offset-4">
      {t(value as string)}
    </span>
  );
}
