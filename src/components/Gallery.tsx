import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

type GalleryCategory = 'all' | 'residential' | 'commercial';

type GalleryItem = {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, 'all'>;
};

const residentialGalleryFiles = [
  'WhatsApp Image 2026-06-12 at 7.06.46 PM.jpeg',
  'WhatsApp Image 2026-06-12 at 7.06.47 PM (1).jpeg',
  'WhatsApp Image 2026-06-12 at 7.06.47 PM (2).jpeg',
  'WhatsApp Image 2026-06-12 at 7.06.47 PM.jpeg',
  'WhatsApp Image 2026-06-12 at 7.06.48 PM (10).jpeg',
  'WhatsApp Image 2026-06-12 at 7.06.48 PM (2).jpeg',
  'WhatsApp Image 2026-06-12 at 7.06.48 PM (3).jpeg',
  'WhatsApp Image 2026-06-12 at 7.06.48 PM (4).jpeg',
  'WhatsApp Image 2026-06-12 at 7.06.48 PM (6).jpeg',
  'WhatsApp Image 2026-06-12 at 7.06.48 PM (7).jpeg',
  'WhatsApp Image 2026-06-12 at 7.06.48 PM (8).jpeg',
  'WhatsApp Image 2026-06-12 at 7.06.48 PM (9).jpeg',
  'WhatsApp Image 2026-06-12 at 7.06.48 PM.jpeg',
  'WhatsApp Image 2026-06-12 at 7.06.49 PM (1).jpeg',
  'WhatsApp Image 2026-06-12 at 7.06.49 PM (2).jpeg',
  'WhatsApp Image 2026-06-12 at 7.06.49 PM (3).jpeg',
  'WhatsApp Image 2026-06-12 at 7.06.49 PM (4).jpeg',
  'WhatsApp Image 2026-06-18 at 8.26.44 AM.jpeg',
  'WhatsApp Image 2026-06-18 at 8.26.45 AM (2).jpeg',
  'WhatsApp Image 2026-06-18 at 8.26.46 AM (2).jpeg',
  'WhatsApp Image 2026-06-18 at 8.26.46 AM (3).jpeg',
  'WhatsApp Image 2026-06-18 at 8.26.46 AM (4).jpeg',
  'WhatsApp Image 2026-06-18 at 8.26.46 AM (5).jpeg',
  'WhatsApp Image 2026-06-20 at 1.47.55 AM.jpeg',
] as const;

const commercialGalleryFiles = [
  'WhatsApp Image 2026-06-12 at 7.06.48 PM (1).jpeg',
  'WhatsApp Image 2026-06-12 at 7.06.48 PM.jpeg',
  'WhatsApp Image 2026-06-18 at 8.26.46 AM.jpeg',
  'WhatsApp Image 2026-06-18 at 8.26.46 AM (1).jpeg',
  'WhatsApp Image 2026-06-18 at 8.26.45 AM.jpeg',
  'WhatsApp Image 2026-06-18 at 8.26.45 AM (1).jpeg',
] as const;

const toGalleryAssetPath = (folder: 'res' | 'commercial', fileName: string) =>
  `/assets/gallery/${folder}/${encodeURIComponent(fileName)}`;

const galleryItems: GalleryItem[] = [
  { src: '/assets/PG_26-10-24.jpg', alt: 'Pergola installation 1', category: 'residential' },
  { src: '/assets/gallery-image-nov-4th.jpg', alt: 'Pergola installation 2', category: 'residential' },
  { src: '/assets/Mr-Pergola-Gallery-Image-Jun-02.jpg', alt: 'Pergola installation 3', category: 'residential' },
  { src: '/assets/Mr-Pergola-Gallery-Image-Jun-03.jpg', alt: 'Pergola installation 4', category: 'commercial' },
  { src: '/assets/Double_Residential_V1_LR.jpg', alt: 'Pergola installation 5', category: 'residential' },
  { src: '/assets/Pergola-Res-K_V3_LR-updated.jpg', alt: 'Pergola installation 6', category: 'residential' },
  { src: '/assets/16x16-slat.jpg', alt: 'Pergola installation 7', category: 'commercial' },
  { src: '/assets/Gallery-Image-4-Saisons.jpg', alt: 'Pergola installation 8', category: 'residential' },
  { src: '/assets/Gallery-6.jpg', alt: 'Pergola installation 9', category: 'commercial' },
  { src: '/assets/Classic-Pergola-Carousal.jpg', alt: 'Pergola installation 10', category: 'residential' },
  { src: '/assets/Modern-Pergola.jpg', alt: 'Pergola installation 11', category: 'commercial' },
  { src: '/assets/Custom-Structure.jpg', alt: 'Pergola installation 12', category: 'commercial' },
  { src: '/assets/privacy-slat-homepage.jpg', alt: 'Pergola installation 13', category: 'residential' },
  { src: '/assets/White-roof.jpg', alt: 'Pergola installation 14', category: 'commercial' },
  { src: '/assets/What-We-Offer.jpg', alt: 'Pergola installation 15', category: 'residential' },
  { src: '/assets/What-is-Mr-Pergola.jpg', alt: 'Pergola installation 16', category: 'commercial' },
  ...residentialGalleryFiles.map((fileName, index) => ({
    src: toGalleryAssetPath('res', fileName),
    alt: `Residential pergola installation ${index + 1}`,
    category: 'residential' as const,
  })),
  ...commercialGalleryFiles.map((fileName, index) => ({
    src: toGalleryAssetPath('commercial', fileName),
    alt: `Commercial pergola installation ${index + 1}`,
    category: 'commercial' as const,
  })),
];

const tabs: { label: string; value: GalleryCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Residential', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });

  const [activeTab, setActiveTab] = useState<GalleryCategory>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeTab === 'all') {
      return galleryItems;
    }
    return galleryItems.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <section id="gallery" className="py-2">
      <div className="w-full">
        <div className="mb-8" ref={ref}>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveTab(tab.value)}
                className={
                  activeTab === tab.value
                    ? 'px-4 py-2 text-sm font-medium rounded-md bg-luxury-black text-luxury-cream dark:bg-luxury-cream dark:text-luxury-black transition-colors'
                    : 'px-4 py-2 text-sm font-medium rounded-md border border-luxury-black/15 dark:border-luxury-cream/20 text-luxury-gray dark:text-luxury-cream/75 hover:border-luxury-gold hover:text-luxury-gold transition-colors'
                }
              >
                {t(tab.label)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px]">
          {filteredItems.map((item, index) => (
            <motion.button
              key={`${item.src}-${activeTab}`}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.03 }}
              onClick={() => setLightboxImage(item)}
              className="relative aspect-[3/2] overflow-hidden group text-left"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>

      {lightboxImage ? (
        <button
          type="button"
          className="fixed inset-0 z-[80] bg-black/90 p-6 md:p-10 flex items-center justify-center"
          onClick={() => setLightboxImage(null)}
          aria-label={t('Close image preview')}
        >
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="max-w-full max-h-full object-contain"
            referrerPolicy="no-referrer"
            loading="eager"
            decoding="async"
          />
        </button>
      ) : null}
    </section>
  );
}
