import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Technicals', href: '/technicals' },
  { name: 'Accessories', href: '/accessories' },
  { name: 'Professionals', href: '/professionals' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'FAQs', href: '/faqs' },
];

export default function Footer() {
  const { language, t } = useLanguage();
  const logoSrc = language === 'FR' ? '/assets/logo/french-transparent.png' : '/assets/logo/eng-transparent.png';

  return (
    <footer className="bg-luxury-black text-luxury-cream border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <img 
              src={logoSrc} 
              alt="Mr Pergola Logo" 
              className="h-12 w-auto object-contain invert mb-8"
              referrerPolicy="no-referrer"
            />
            <p className="text-luxury-cream/60 font-light leading-relaxed mb-8 max-w-md">
              {t('Designed for backyards... Built for real life! \n              Precision engineered architectural solutions for \n              Sun, Rain, and Snow.')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-6">
              {t('Company')}
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm font-light text-luxury-cream/70 hover:text-luxury-gold transition-colors">
                    {t(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-6">
              {t('Contact')}
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+18336773746" className="flex items-center gap-3 text-sm font-light text-luxury-cream/70 hover:text-luxury-gold transition-colors">
                  <Phone size={16} strokeWidth={1.5} />
                  <span>+1 833-MR PERGO</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm font-light text-luxury-cream/70">
                <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  3628 Poirier<br />
                  Montreal, QC<br />
                  H4R 2J5
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-luxury-cream/10 flex flex-col items-center justify-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-cream/40">
            {t('© 2026 Mr. Pergola. All Rights Reserved.')}
          </p>
        </div>
      </div>
    </footer>
  );
}
