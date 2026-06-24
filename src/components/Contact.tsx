import { motion } from 'motion/react';
import { useState, type FormEvent } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type ContactProps = {
  pageMode?: boolean;
};

type PartnerCard = {
  logo: string;
  logoAlt: string;
  name: string;
  lines: string[];
  phone?: { label: string; value: string; href: string };
  extraPhone?: { label: string; value: string; href: string };
  fax?: { label: string; value: string; href: string };
  email?: { label: string; value: string; href: string };
  website?: { label: string; value: string; href: string };
};

const gtaPartners: PartnerCard[] = [
  {
    logo: '/assets/contact/Hictory-decks-logo.png',
    logoAlt: 'Hickory Decks logo',
    name: 'Hickory Decks',
    lines: [
      'Head Office & Showroom',
      '115 Dundas St. W.',
      'Highway #5, Clappison Corners',
      'Dundas, Ontario, Canada',
      'L9H 7L6',
    ],
    phone: { label: 'Head Office', value: '905.689.4774', href: 'tel:9056894774' },
    extraPhone: { label: 'Toll Free', value: '1.800.263.4774', href: 'tel:18002634774' },
    fax: { label: 'Fax', value: '905.689.9753', href: 'fax:9056899753' },
    email: { label: 'E-mail', value: 'office@decks.ca', href: 'mailto:office@decks.ca' },
  },
  {
    logo: '/assets/contact/Logo-skyscapes-1-1.webp',
    logoAlt: 'Urban Balcony Flooring logo',
    name: 'Urban Balcony Flooring',
    lines: [
      'Skyscapes Outdoor Flooring & Decor - Balcony & Patio Flooring in Toronto',
      'Address: 25 Shaft Road, Etobicoke, Ontario, Canada',
    ],
    phone: { label: 'Tel', value: '+1 (647) 948 1270', href: 'tel:+16479481270' },
    email: { label: 'E-mail', value: 'info@urbanbalconyflooring.com', href: 'mailto:info@urbanbalconyflooring.com' },
  },
  {
    logo: '/assets/contact/Background-removed-green-logo.webp',
    logoAlt: 'Gerry Crepin Cartage logo',
    name: 'Gerry Crepin Cartage',
    lines: [
      'Downtown landscape depot at 437 Catherine Street',
      'Address: 437 Catherine St, Ottawa, ON Canada K1R 5T7',
    ],
    phone: { label: 'Tel', value: '(613) 822-3244', href: 'tel:6138223244' },
    email: { label: 'E-mail', value: 'depot@crepincartage.com', href: 'mailto:depot@crepincartage.com' },
  },
];

const albertaPartner: PartnerCard = {
  logo: '/assets/contact/Summit-outdoor-living-logo.png',
  logoAlt: 'Summit Outdoor logo',
  name: 'Summit Outdoor',
  lines: [],
  website: { label: 'Website', value: 'www.summitoutdoor.ca', href: 'https://www.summitoutdoor.ca' },
  email: { label: 'E-mail', value: 'info@summitoutdoor.ca', href: 'mailto:info@summitoutdoor.ca' },
  phone: { label: 'Tel', value: '403-333-1783', href: 'tel:4033331783' },
};

const countryOptions = ['Canada', 'United States', 'Mexico'];

const budgetOptions = ['12,500$-14,999$', '15,000$-20,000$', '20,000$-25,000$', '25,000$+'];

const web3FormsAccessKey = '0dbcc7c5-53dc-4944-9496-a618f0b8d160';

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact({ pageMode = false }: ContactProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });
  const { t } = useLanguage();
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get('botcheck')) {
      return;
    }

    formData.set('access_key', web3FormsAccessKey);
    formData.set('from_name', 'Mr. Pergola Contact Form');
    formData.set('subject', 'New quote request from Mr. Pergola website');

    setSubmissionStatus('submitting');
    setSubmissionMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
        body?: { message?: string };
      };

      if (!response.ok || !result.success) {
        throw new Error(result.message || result.body?.message || 'Unable to submit the form.');
      }

      setSubmissionStatus('success');
      setSubmissionMessage(t('Thank you. Your quote request has been sent successfully.'));
      form.reset();
    } catch (error) {
      setSubmissionStatus('error');
      setSubmissionMessage(
        error instanceof Error
          ? error.message
          : t('Something went wrong. Please try again or email us directly.'),
      );
    }
  };

  return (
    <section
      id="contact"
      className={
        pageMode
          ? 'pt-36 pb-24 px-6 md:px-12 bg-white dark:bg-luxury-black transition-colors duration-500 lining-nums'
          : 'py-24 px-6 md:px-12 bg-white dark:bg-luxury-black transition-colors duration-500 lining-nums'
      }
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-14"
        >
          <div className="md:col-span-7 rounded-2xl overflow-hidden border border-luxury-black/10 dark:border-luxury-cream/10">
            <img
              src="/assets/About-ATF-1024x601.jpg"
              alt="Contact banner"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-5">
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-serif tracking-tight dark:text-luxury-cream">{t('Contact Us')}</h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10"
        >
          <article className="rounded-xl border border-luxury-black/10 dark:border-luxury-cream/10 bg-white/70 dark:bg-luxury-black/30 p-6">
            <div className="w-11 h-11 border border-luxury-black/10 dark:border-luxury-cream/10 rounded-full flex items-center justify-center text-luxury-gold mb-4">
              <Phone size={18} strokeWidth={1.5} />
            </div>
            <h2 className="text-sm uppercase tracking-[0.2em] font-semibold mb-3 dark:text-luxury-cream">{t('Call')}</h2>
            <p className="text-luxury-gray dark:text-luxury-cream/80"><strong>{t('CALL:')}</strong> <a href="tel:+18336773746" className="hover:text-luxury-gold">+ 1833-MR PERGO</a></p>
            <p className="text-luxury-gray dark:text-luxury-cream/80"><strong>{t('TOLL FREE:')}</strong> <a href="tel:6773746" className="hover:text-luxury-gold">(677-3746)</a></p>
            <p className="text-luxury-gray dark:text-luxury-cream/80"><strong>{t('TEXT ONLY:')}</strong> <a href="tel:5149754909" className="hover:text-luxury-gold">514-975-4909</a></p>
          </article>

          <article className="rounded-xl border border-luxury-black/10 dark:border-luxury-cream/10 bg-white/70 dark:bg-luxury-black/30 p-6">
            <div className="w-11 h-11 border border-luxury-black/10 dark:border-luxury-cream/10 rounded-full flex items-center justify-center text-luxury-gold mb-4">
              <Mail size={18} strokeWidth={1.5} />
            </div>
            <h2 className="text-sm uppercase tracking-[0.2em] font-semibold mb-3 dark:text-luxury-cream">{t('Email')}</h2>
            <p className="text-luxury-gray dark:text-luxury-cream/80">
              <a href="mailto:info@mrpergola.com" className="hover:text-luxury-gold">info@mrpergola.com</a>
            </p>
            <p className="text-luxury-gray dark:text-luxury-cream/80">
              {t('For Service:')} <a href="mailto:service@MrPergola.com" className="hover:text-luxury-gold">service@MrPergola.com</a>
            </p>
          </article>

          <article className="rounded-xl border border-luxury-black/10 dark:border-luxury-cream/10 bg-white/70 dark:bg-luxury-black/30 p-6">
            <div className="w-11 h-11 border border-luxury-black/10 dark:border-luxury-cream/10 rounded-full flex items-center justify-center text-luxury-gold mb-4">
              <MapPin size={18} strokeWidth={1.5} />
            </div>
            <h2 className="text-sm uppercase tracking-[0.2em] font-semibold mb-3 dark:text-luxury-cream">{t('Address & Hours')}</h2>
            <p className="text-luxury-gray dark:text-luxury-cream/80 mb-3">3628 POIRIER, MONTREAL, QC, H4R 2J5</p>
            <p className="text-luxury-gray dark:text-luxury-cream/80"><strong>{t('Monday to Friday:')}</strong> 9:00 AM - 4:30 PM</p>
            <p className="text-luxury-gray dark:text-luxury-cream/80"><strong>{t('Saturday & Sunday:')}</strong> {t('By appointment only (available with one-hour advance notice).')}</p>
          </article>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="overflow-hidden rounded-xl border border-luxury-black/10 dark:border-luxury-cream/10 mb-12"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.560867741258!2d-73.72051218489133!3d45.49878703915658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc93d552aeaaaab%3A0x3c95494cae6ff6e0!2s3628%20Poirier%20Blvd%2C%20Saint-Laurent%2C%20QC%20H4R%202J5%2C%20Canada!5e0!3m2!1sen!2s!4v1633367206044!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mr Pergola Montreal Location"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-xl border border-luxury-black/10 dark:border-luxury-cream/10 bg-white/70 dark:bg-luxury-black/30 p-6 md:p-8 mb-14"
        >
          <h2 className="text-2xl md:text-3xl font-serif tracking-tight mb-6 dark:text-luxury-cream">{t('Get a Quote')}</h2>
          <form
            className="space-y-6"
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="access_key" value={web3FormsAccessKey} />
            <input type="hidden" name="from_name" value="Mr. Pergola Contact Form" />
            <input type="hidden" name="subject" value="New quote request from Mr. Pergola website" />
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-xs uppercase tracking-wide text-luxury-gray dark:text-luxury-cream/70">{t('First Name *')}</label>
                <input id="firstName" name="firstName" type="text" placeholder={t('First Name')} required className="w-full rounded-md bg-transparent border border-luxury-black/15 dark:border-luxury-cream/20 py-2.5 px-3 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 outline-none transition-all dark:text-luxury-cream" />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-xs uppercase tracking-wide text-luxury-gray dark:text-luxury-cream/70">{t('Last Name *')}</label>
                <input id="lastName" name="lastName" type="text" placeholder={t('Last Name')} required className="w-full rounded-md bg-transparent border border-luxury-black/15 dark:border-luxury-cream/20 py-2.5 px-3 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 outline-none transition-all dark:text-luxury-cream" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-wide text-luxury-gray dark:text-luxury-cream/70">{t('Email *')}</label>
                <input id="email" name="email" type="email" placeholder={t('Email')} required className="w-full rounded-md bg-transparent border border-luxury-black/15 dark:border-luxury-cream/20 py-2.5 px-3 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 outline-none transition-all dark:text-luxury-cream" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs uppercase tracking-wide text-luxury-gray dark:text-luxury-cream/70">{t('Phone/Mobile *')}</label>
                <input id="phone" name="phone" type="tel" placeholder={t('Phone/Mobile')} required className="w-full rounded-md bg-transparent border border-luxury-black/15 dark:border-luxury-cream/20 py-2.5 px-3 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 outline-none transition-all dark:text-luxury-cream" />
              </div>
              <div className="space-y-2">
                <label htmlFor="address1" className="text-xs uppercase tracking-wide text-luxury-gray dark:text-luxury-cream/70">{t('Address Line 1 *')}</label>
                <input id="address1" name="address1" type="text" placeholder={t('Address Line 1')} required className="w-full rounded-md bg-transparent border border-luxury-black/15 dark:border-luxury-cream/20 py-2.5 px-3 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 outline-none transition-all dark:text-luxury-cream" />
              </div>
              <div className="space-y-2">
                <label htmlFor="address2" className="text-xs uppercase tracking-wide text-luxury-gray dark:text-luxury-cream/70">{t('Address Line 2')}</label>
                <input id="address2" name="address2" type="text" placeholder={t('Address Line 2')} className="w-full rounded-md bg-transparent border border-luxury-black/15 dark:border-luxury-cream/20 py-2.5 px-3 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 outline-none transition-all dark:text-luxury-cream" />
              </div>
              <div className="space-y-2">
                <label htmlFor="city" className="text-xs uppercase tracking-wide text-luxury-gray dark:text-luxury-cream/70">{t('City *')}</label>
                <input id="city" name="city" type="text" placeholder={t('City')} required className="w-full rounded-md bg-transparent border border-luxury-black/15 dark:border-luxury-cream/20 py-2.5 px-3 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 outline-none transition-all dark:text-luxury-cream" />
              </div>
              <div className="space-y-2">
                <label htmlFor="state" className="text-xs uppercase tracking-wide text-luxury-gray dark:text-luxury-cream/70">{t('State/Province *')}</label>
                <input id="state" name="state" type="text" placeholder={t('State/Province')} required className="w-full rounded-md bg-transparent border border-luxury-black/15 dark:border-luxury-cream/20 py-2.5 px-3 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 outline-none transition-all dark:text-luxury-cream" />
              </div>
              <div className="space-y-2">
                <label htmlFor="zip" className="text-xs uppercase tracking-wide text-luxury-gray dark:text-luxury-cream/70">{t('Zip Code/Postal Code *')}</label>
                <input id="zip" name="zip" type="text" placeholder={t('Zip Code/Postal Code')} required className="w-full rounded-md bg-transparent border border-luxury-black/15 dark:border-luxury-cream/20 py-2.5 px-3 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 outline-none transition-all dark:text-luxury-cream" />
              </div>
              <div className="space-y-2">
                <label htmlFor="country" className="text-xs uppercase tracking-wide text-luxury-gray dark:text-luxury-cream/70">{t('Country *')}</label>
                <select id="country" name="country" required className="w-full rounded-md bg-transparent border border-luxury-black/15 dark:border-luxury-cream/20 py-2.5 px-3 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 outline-none transition-all dark:text-luxury-cream">
                  {countryOptions.map((country) => (
                    <option key={country} value={country} className="text-luxury-black">{t(country)}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="project-type" className="text-xs uppercase tracking-wide text-luxury-gray dark:text-luxury-cream/70">{t('Project Type')}</label>
                <select id="project-type" name="project-type" className="w-full rounded-md bg-transparent border border-luxury-black/15 dark:border-luxury-cream/20 py-2.5 px-3 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 outline-none transition-all dark:text-luxury-cream">
                  <option className="text-luxury-black">{t('Residential')}</option>
                  <option className="text-luxury-black">{t('Commercial')}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="surface-type" className="text-xs uppercase tracking-wide text-luxury-gray dark:text-luxury-cream/70">{t('Type of surface on which the pergola will be installed')}</label>
                <select id="surface-type" name="surface-type" className="w-full rounded-md bg-transparent border border-luxury-black/15 dark:border-luxury-cream/20 py-2.5 px-3 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 outline-none transition-all dark:text-luxury-cream">
                  <option className="text-luxury-black">{t('Grass')}</option>
                  <option className="text-luxury-black">{t('Concrete')}</option>
                  <option className="text-luxury-black">{t('Wood')}</option>
                  <option className="text-luxury-black">{t('Other')}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <fieldset className="space-y-2 md:col-span-2">
                <legend className="text-xs uppercase tracking-wide text-luxury-gray dark:text-luxury-cream/70 mb-1">{t('Location')}</legend>
                <div className="flex flex-wrap gap-5 text-sm text-luxury-gray dark:text-luxury-cream/85">
                  <label htmlFor="location-ground" className="inline-flex items-center gap-2 cursor-pointer">
                    <input id="location-ground" type="radio" name="location" value="ground" defaultChecked className="accent-luxury-gold" />
                    {t('Ground Level')}
                  </label>
                  <label htmlFor="location-raised" className="inline-flex items-center gap-2 cursor-pointer">
                    <input id="location-raised" type="radio" name="location" value="raised" className="accent-luxury-gold" />
                    {t('Raised (Patio/Rooftop)')}
                  </label>
                </div>
              </fieldset>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="desired-size" className="text-xs uppercase tracking-wide text-luxury-gray dark:text-luxury-cream/70">{t('Desired Size of Pergola (Length determines the length of each louvre / Width determines the amount of louvres left to right)')}</label>
                <input id="desired-size" name="desired-size" type="text" placeholder={t('Please fill the length and width below')} className="w-full rounded-md bg-transparent border border-luxury-black/15 dark:border-luxury-cream/20 py-2.5 px-3 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 outline-none transition-all dark:text-luxury-cream" />
              </div>

              <div className="space-y-2">
                <label htmlFor="length" className="text-xs uppercase tracking-wide text-luxury-gray dark:text-luxury-cream/70">{t('Length')}</label>
                <input id="length" name="length" type="text" placeholder={t('Length')} className="w-full rounded-md bg-transparent border border-luxury-black/15 dark:border-luxury-cream/20 py-2.5 px-3 focus:border-luxury-gold outline-none dark:text-luxury-cream" />
              </div>
              <div className="space-y-2">
                <label htmlFor="width" className="text-xs uppercase tracking-wide text-luxury-gray dark:text-luxury-cream/70">{t('Width')}</label>
                <input id="width" name="width" type="text" placeholder={t('Width')} className="w-full rounded-md bg-transparent border border-luxury-black/15 dark:border-luxury-cream/20 py-2.5 px-3 focus:border-luxury-gold outline-none dark:text-luxury-cream" />
              </div>

              <fieldset className="space-y-2">
                <legend className="text-xs uppercase tracking-wide text-luxury-gray dark:text-luxury-cream/70 mb-1">{t('Color *')}</legend>
                <div className="flex flex-wrap gap-5 text-sm text-luxury-gray dark:text-luxury-cream/85">
                  <label htmlFor="color-black" className="inline-flex items-center gap-2 cursor-pointer">
                    <input id="color-black" type="radio" name="color" value="black" defaultChecked className="accent-luxury-gold" />
                    {t('Black')}
                  </label>
                  <label htmlFor="color-white" className="inline-flex items-center gap-2 cursor-pointer">
                    <input id="color-white" type="radio" name="color" value="white" className="accent-luxury-gold" />
                    {t('White')}
                  </label>
                  <label htmlFor="color-other" className="inline-flex items-center gap-2 cursor-pointer">
                    <input id="color-other" type="radio" name="color" value="other" className="accent-luxury-gold" />
                    {t('Other')}
                  </label>
                </div>
              </fieldset>

              <div className="space-y-2">
                <label htmlFor="budget" className="text-xs uppercase tracking-wide text-luxury-gray dark:text-luxury-cream/70">{t('Budget')}</label>
                <select id="budget" name="budget" defaultValue="" className="w-full rounded-md bg-transparent border border-luxury-black/15 dark:border-luxury-cream/20 py-2.5 px-3 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 outline-none transition-all dark:text-luxury-cream">
                  <option value="" className="text-luxury-black"></option>
                  {budgetOptions.map((budget) => (
                    <option key={budget} value={budget} className="text-luxury-black">{t(budget)}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="image-links" className="text-xs uppercase tracking-wide text-luxury-gray dark:text-luxury-cream/70">{t('Share view-only link(s) to images of the installation area')}</label>
                <textarea
                  id="image-links"
                  name="image_links"
                  rows={3}
                  placeholder={t('Paste Google Drive, OneDrive, Dropbox, or other view-only image links here')}
                  className="w-full rounded-md bg-transparent border border-luxury-black/15 dark:border-luxury-cream/20 py-2.5 px-3 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 outline-none resize-y transition-all dark:text-luxury-cream"
                />
                <p className="text-xs text-luxury-gray dark:text-luxury-cream/60">{t('Please upload at least 2 pictures to Google Drive, OneDrive, Dropbox, or similar, set the link to view-only, and paste it above.')}</p>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="message" className="text-xs uppercase tracking-wide text-luxury-gray dark:text-luxury-cream/70">{t('Message')}</label>
                <textarea id="message" name="message" rows={4} placeholder={t('Message')} className="w-full rounded-md bg-transparent border border-luxury-black/15 dark:border-luxury-cream/20 py-2.5 px-3 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 outline-none resize-y transition-all dark:text-luxury-cream" />
              </div>
            </div>

            {submissionMessage ? (
              <p
                className={
                  submissionStatus === 'success'
                    ? 'text-sm text-emerald-700 dark:text-emerald-300'
                    : 'text-sm text-red-700 dark:text-red-300'
                }
                role="status"
              >
                {submissionMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={submissionStatus === 'submitting'}
              className="w-full md:w-auto px-10 py-3 text-xs uppercase tracking-[0.25em] font-semibold bg-luxury-black text-luxury-cream dark:bg-luxury-cream dark:text-luxury-black hover:bg-luxury-gold hover:text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submissionStatus === 'submitting' ? t('Sending...') : t('Get a Quote')}
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-xl md:text-2xl font-serif dark:text-luxury-cream">{t('Ottawa Area Please Contact Mr.Pergola Directly')}</h2>
          <h2 className="text-xl md:text-2xl font-serif dark:text-luxury-cream mt-1">{t('Greater Toronto Area')}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {gtaPartners.map((partner) => (
            <article key={partner.name} className="rounded-xl border border-luxury-black/10 dark:border-luxury-cream/10 bg-white/70 dark:bg-luxury-black/30 p-6">
              <img src={partner.logo} alt={partner.logoAlt} className="h-16 object-contain mb-5" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
              <h3 className="text-xl font-serif mb-3 dark:text-luxury-cream">{partner.name}</h3>
              <div className="space-y-1 text-luxury-gray dark:text-luxury-cream/80">
                {partner.lines.map((line) => (
                  <p key={line}>{t(line)}</p>
                ))}
                {partner.phone ? (
                  <p>
                    <strong>{t(partner.phone.label)}:</strong>{' '}
                    <a href={partner.phone.href} className="hover:text-luxury-gold">{partner.phone.value}</a>
                  </p>
                ) : null}
                {partner.extraPhone ? (
                  <p>
                    <strong>{t(partner.extraPhone.label)}:</strong>{' '}
                    <a href={partner.extraPhone.href} className="hover:text-luxury-gold">{partner.extraPhone.value}</a>
                  </p>
                ) : null}
                {partner.fax ? (
                  <p>
                    <strong>{t(partner.fax.label)}:</strong>{' '}
                    <a href={partner.fax.href} className="hover:text-luxury-gold">{partner.fax.value}</a>
                  </p>
                ) : null}
                {partner.email ? (
                  <p>
                    <strong>{t(partner.email.label)}:</strong>{' '}
                    <a href={partner.email.href} className="hover:text-luxury-gold">{partner.email.value}</a>
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-6"
        >
          <h2 className="text-xl md:text-2xl font-serif dark:text-luxury-cream">{t('Calgary and Alberta')}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <article className="rounded-xl border border-luxury-black/10 dark:border-luxury-cream/10 bg-white/70 dark:bg-luxury-black/30 p-6">
            <img src={albertaPartner.logo} alt={albertaPartner.logoAlt} className="h-16 object-contain mb-5" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
            <h3 className="text-xl font-serif mb-3 dark:text-luxury-cream">{albertaPartner.name}</h3>
            <p className="text-luxury-gray dark:text-luxury-cream/80">
              <strong>{t(albertaPartner.website?.label || '')}:</strong>{' '}
              <a href={albertaPartner.website?.href} target="_blank" rel="noreferrer" className="hover:text-luxury-gold">{albertaPartner.website?.value}</a>
            </p>
            <p className="text-luxury-gray dark:text-luxury-cream/80">
              <strong>{t(albertaPartner.email?.label || '')}:</strong>{' '}
              <a href={albertaPartner.email?.href} className="hover:text-luxury-gold">{albertaPartner.email?.value}</a>
            </p>
            <p className="text-luxury-gray dark:text-luxury-cream/80">
              <strong>{t(albertaPartner.phone?.label || '')}:</strong>{' '}
              <a href={albertaPartner.phone?.href} className="hover:text-luxury-gold">{albertaPartner.phone?.value}</a>
            </p>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
