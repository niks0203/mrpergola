﻿import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

type FAQItem = {
  question: string;
  answer: string[];
};

const primaryFaqs: FAQItem[] = [
  {
    question: 'WHAT ARE THE AVAILABLE SIZES?',
    answer: [
      "Every size is possible, we haven't encountered a project we can't handle. For custom size, larger projects, we have engineering resources that validate the build before we even collect a deposit. We can even cover your entire pool if you chose to use it in winter.",
    ],
  },
  {
    question: 'WHAT ARE THE TECHNICAL DESIGN FEATURES OF MR PERGOLA?',
    answer: ['Please see Technicals Page for a complete guide.'],
  },
  {
    question: 'WHAT ARE THE AVAILABLE COLORS?',
    answer: [
      'Standard colors are: Black, White, Grey and then almost any color scheme you can think of. Other colors might take an extra 2-4 weeks for delivery.',
    ],
  },
  {
    question: 'WHAT KIND OF PAINT IS USED?',
    answer: [
      'All our components are covered with high grade Powder Coating. Powder-Coats are known for keeping their color for at least 10 years before even the slightest discoloration, if any.',
    ],
  },
  {
    question: 'HOW LONG DOES IT TAKE TO GET OUR PERGOLA?',
    answer: ['Expect to have Mr. Pergola installed in 2-4 weeks. Slight variation during peak season. The sooner you reserve, the better.'],
  },
  {
    question: 'CAN WE INSTALL MOSQUITO NETS?',
    answer: [
      'Mr. Pergola is ready to accept roller based hooking system that can hang curtains. You can buy your own mosquito curtains, or we can have a custom sized one made for you. Delivery is an additional three weeks if not ordered at the same time as pergola.',
    ],
  },
  {
    question: 'CAN WE INSTALL A HEATER?',
    answer: [
      'Yes, Mr. Pergola was specially built to handle an array of accessories. Including heater, hammock, mosquito netting, corner tables and more coming soon!',
    ],
  },
  {
    question: 'CAN THE PERGOLA BE ATTACHED TO THE HOUSE (OR RESTAURANT) INSTEAD OF 4 POSTS?',
    answer: [
      'Unfortunately not. The weight requirements are so high that we must have it on 4 posts. The pergola will be very close/almost touching the house where it will look as one. Nevertheless, the 4 post are mandatory since our updated design where the snow load is up to 15000lbs per 250 sq feet. Previous versions were available attached to the house.',
    ],
  },
  {
    question: 'WHAT WARRANTY DO YOU OFFER?',
    answer: [
      'We offer a 10 year limited warranty. Built strong to handle North American climate. From blazing sun to blistering cold and snow. Commercial grade powder coating and Grade:6063 Canadian Aluminum will make your outdoor pristine for years!',
    ],
  },
];

const advancedFaqs: FAQItem[] = [
  {
    question: 'WHERE IS Mr.PERGOLA MADE?',
    answer: [
      'Mr.Pergola is entirely made in North American and assembled in Montreal Canada following the highest standards of North American production using American and Canadian Aluminum and Steel.',
      'It was designed and validated by American and Canadian engineers and Industrial Designers. All parts are from North American suppliers. We pay the extra for Midwest Aluminum Premium to ensure highest quality. Though Quebec has the best aluminum in North America, Pittsburgh has the best steel.',
    ],
  },
  {
    question: 'WHY ARE YOUR PRICES SO MUCH BETTER THAN YOUR COMPETITORS, WHILE OFFERING THIS TYPE OF HEAVY GRADE ALUMINUM AND STEEL?',
    answer: [
      'We are the manufacturer. We sell the strongest pergola in the world direct to consumers and cut out the middleman. Whether you want a Classic Pergola for a timeless solution or a Modern Pergola to fit your backyard\'s upgrades and modern finishes, we have a solution at unbeatable prices.',
    ],
  },
  {
    question: 'WHY DO YOU HAVE 3 TYPES OF PERGOLAS?',
    answer: [
      'When this journey began 9 years ago, the founder had bought a pergola for his patio and wished it could serve him in winter (as did everyone who visited). He soon found out there are no real 4-season Pergolas out there. Sure there were some who claimed to be 4-Season/Winter Pergolas but his needs had to fit their design instead of their Pergola fitting his needs.',
      'All the manufacturers he found, who offer a pergola with a any real snow load capacity, can only go to a span of 12ft between columns, and his patio was 14ft deep. So as you can read in the About Us page, he got to work and created a product with clear unique capabilities loved by so many across North America from Calgary to NYC.',
      'Note: Our products are designed and built according to the American Society of Civil Engineers 7-16 standards (ASCE 7-16 not 7-10) and the Canadian Building Code. We offer the only Pergola that can fit larger patios and terraces with up to 20ft spans between columns. We can go to 20ft DEEP and 20ft WIDE with only 4 posts.',
      "Ex: our 16'x16' 4-season pergola can handle 88lbs of snow/ice per square foot. The smaller sizes can handle even more, while a 4-season 20'x20' can handle 50lbs/sqft. That's 2ft and 3ft of wet snow respectively.",
      "All 3 (Classic 3-season / Classic 4-season / Modern) can handle the mandated wind ratings of the entire United States and Canada, 160mph (but for very few exceptions in Southern Florida, the Keys). Remember, you are not limited to just 12ft in projection/depth. We've done our work and offer you the best materials and designs so you can cover the entire area. Should you require us to combine the pergolas together (ex: if your patio is 32ft wide and 18ft deep, we would make you a pergola with 6 posts, not 8 or more, to cover the entire area in 2 sections of 16'x18').",
    ],
  },
  {
    question: 'WHAT SIZES DO YOU OFFER? WHAT ARE YOUR STANDARD SIZES AND CAN WE CREATE OUR OWN?',
    answer: [
      "First the Standard Sizes. Our standard size pergolas start at 10'x10' and move up to 20'x20' in 2' increments in both width and projection, while still using only 4 posts. You can order a 14'x10' as easily as a 20'x16' pergola in all three variants.",
      'If you are placing your pergola further from the house, away from the home or patio (what we call a Freestanding Pergola), then most likely a Standard Size will do just fine. Should you wish to size it down by removing a few inches in any direction to make it fit, we will do so for free.',
      "Ex: You have the perfect spot to place a 16' wide by 15' pergola, but we sell them in 2' increments. You would order a 16x16 then ask to have the depth/projection cut down by a foot, or even to the 1/32nd of an inch if that's what it's going to take to make it fit just right.",
      'Standard Size pergolas can be customized by removing material. If you require to add length or depth, then we would charge one size up.',
    ],
  },
];

const customPergolas = [
  "We can make L-shape pergolas without any issue. We can also work with you or your design team/landscaper to find a solution for your oddly shaped patio. We would collaborate on Canva.com via our account (no need to sign up) and come up with a solution to cover all or part of the deck/patio. If you have an eavestrough, we can work with that. If you have stairs in the way, we can work with that. If you have a bay window, we can work with that. If you have a patio that is 12' deep and have a BBQ placed right after on the ground floor, we can work with that by placing extended louvres, so that you can get out of your house, all the way down to the BBQ and back without a single drop hitting your steak!",
  "We've done simple projects that are 60' wide by 22' deep perfect rectangles as easily as an L-shape pergola that has 40' one way and another 18' on the small side, all while being 12ft high.",
  'The secret is in the materials. Nobody, I mean nobody has louvres that weigh 2lbs a linear foot or a beam that weighs 5lbs a foot, not square foot, linear foot. That is serious strength. You can see images on the technical page.',
  'Throw us a challenge!!',
];

const certificationAndEngineering = [
  'As mentioned elsewhere on our site, we are proudly certified to be ASCE 7-16 and CNB-2020. You can install our pergolas in any state and feel confident that it will not have any permitting issues.',
  'Our wind rating is 170 miles an hour (MPH) and snow load capacity, though slightly different by size, all exceed the required norms for almost the entire country (few cities with extreme snow will need some sizing changes, ex: going from 20ft between posts/columns down to 16ft).',
  "Should your city or State require any viewing of our documentation, feel free to reach out to make it happen. We will gladly help with the permitting process by giving you your pergola's spec sheet and any other municipality/city requirements. Again, getting engineers to approve and sign off for ASCE 7-16 standards was no easy task, but we did it.",
  'Some key points in this section are:',
  'Key Point 1: If you are placing the pergola away from your home, on pavers near the pool or anywhere not on the deck, then you can choose and will usually be fine with our standard sizes. No customization is usually required for these orders.',
  'However, if you are placing the pergola on your deck, or would like to cover an area that has a funky shape, please give us a call. We can customize your pergola down to the 32nd of an inch, so that it can be integrated into your deck railings.',
  'Key Point 2: Our louvres are so strong, they can pass the pergola frame by up to 48 inches.',
  'Key Point 3: The specs on our standard size pergolas are available in the series of images at the bottom when you choose your size. Height, center-center etc. can be seen when you choose the size.',
  "Key Point 4: The standard height columns of our Classic Pergolas are 90in / 7ft 6in. The standard height of the columns of our Modern Pergolas are 96in / 8ft. That is the clearance below the perimeter frame beams. There is another 18in of clearance underneath.",
  "Should you require any height adjustment, we can adjust to your preference or need. There is no cost to lower the column, but there is a cost for the next bracket up. The extended columns go up to 126in / 10ft 6in and cost a little more. You can choose any height between 91in and 126in. We will cut them according to your needs.",
  'Again, remember the roof of the pergola, inside the Classic Pergola is higher by 18in (3 and 4 Season) and 12in for the Modern Pergola.',
  'We can work on the specs together to make things fit perfectly. You have the basic measurements in the gallery as you choose each size.',
];

function FAQSection({ title, items }: { title: string; items: FAQItem[] }) {
  const { t } = useLanguage();
  return (
    <section className="mb-16">
      <h2 className="text-xl md:text-2xl font-serif tracking-wide mb-8 dark:text-white">{t(title)}</h2>
      <div className="space-y-5">
        {items.map((item, index) => (
          <details
            key={item.question}
            className="group border border-luxury-black/10 dark:border-white/10 rounded-xl bg-white/70 dark:bg-luxury-black/30 p-5"
            open={index === 0}
          >
            <summary className="cursor-pointer list-none text-sm md:text-base font-semibold tracking-wide dark:text-white">
              {t(item.question)}
            </summary>
            <div className="mt-4 space-y-3 text-luxury-gray dark:text-gray-300 leading-relaxed">
              {item.answer.map((paragraph) => (
                <p key={paragraph}>{t(paragraph)}</p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export default function FAQs() {
  const { t } = useLanguage();

  return (
    <div className="pt-40 pb-32 lining-nums">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-serif tracking-tight mb-12 text-center">{t('FAQs')}</h1>
        </div>

        <section className="mb-24 w-full h-[50svh] md:h-[70svh] min-h-[400px] relative overflow-hidden group">
            <img
              src="/assets/PG_26-10-24.jpg"
              alt="FAQs banner"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-12 pointer-events-none">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white drop-shadow-lg tracking-tight mb-4">
                {t('Some important questions')}
              </h2>
              <p className="text-white/90 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold drop-shadow">
                {t('FAQs')}
              </p>
            </div>
        </section>

        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <FAQSection title={'HERE IS EVERYTHING YOU WANT TO KNOW'} items={advancedFaqs} />
          <FAQSection title={'Some important questions'} items={primaryFaqs} />

          <section className="space-y-8">
            <article className="p-6 rounded-xl border border-luxury-black/10 dark:border-white/10 bg-white/70 dark:bg-luxury-black/30">
              <h3 className="text-xl md:text-2xl font-serif mb-4 dark:text-white">{t('CUSTOM PERGOLAS: THIS IS WHERE WE SHINE!')}</h3>
            <div className="space-y-3 text-luxury-gray dark:text-gray-300 leading-relaxed">
              {customPergolas.map((paragraph) => (
                <p key={paragraph}>{t(paragraph)}</p>
              ))}
            </div>
          </article>

          <article className="p-6 rounded-xl border border-luxury-black/10 dark:border-white/10 bg-white/70 dark:bg-luxury-black/30">
            <h3 className="text-xl md:text-2xl font-serif mb-4 dark:text-white">{t('COLORS')}</h3>
            <p className="text-luxury-gray dark:text-gray-300 leading-relaxed">
              {t('Though black and white are our standard colors (90% are sold in black), we can make your pergola the color of your choice for a small difference. We charge what the powder coating company charges, no surcharges! Give us a RAL code and we will get it done for you.')}
            </p>
          </article>

          <article className="p-6 rounded-xl border border-luxury-black/10 dark:border-white/10 bg-white/70 dark:bg-luxury-black/30">
            <h3 className="text-xl md:text-2xl font-serif mb-4 dark:text-white">{t('INSTALLATION / ASSEMBLY')}</h3>
            <p className="text-luxury-gray dark:text-gray-300 leading-relaxed">
              {t('We handle everything. Measurements, Delivery and Installations.')}
            </p>
          </article>

          <article className="p-6 rounded-xl border border-luxury-black/10 dark:border-white/10 bg-white/70 dark:bg-luxury-black/30">
            <h3 className="text-xl md:text-2xl font-serif mb-4 dark:text-white">{t('CERTIFICATION AND ENGINEERING')}</h3>
            <div className="space-y-3 text-luxury-gray dark:text-gray-300 leading-relaxed">
              {certificationAndEngineering.map((paragraph) => (
                <p key={paragraph}>{t(paragraph)}</p>
              ))}
              </div>
            </article>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
