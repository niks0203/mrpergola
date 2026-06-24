import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Technicals', href: '/technicals' },
  { name: 'Accessories', href: '/accessories' },
  { name: 'Professionals', href: '/professionals' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'FAQs', href: '/faqs' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isDark = theme === 'dark';
  const isHomePage = location.pathname === '/';
  const shouldShowBg = isScrolled || !isHomePage;
  const logoSrc = language === 'FR' ? '/assets/logo/french-transparent.png' : '/assets/logo/eng-transparent.png';
  const logoToneClass = (!shouldShowBg || isDark) ? 'invert' : '';

  return (
    <>
      <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12',
        shouldShowBg 
          ? isDark 
            ? 'bg-luxury-black/70 backdrop-blur-md py-3 shadow-sm text-luxury-cream border-b border-luxury-cream/10' 
            : 'bg-[#FAF9F6]/80 backdrop-blur-md py-3 shadow-sm text-luxury-black border-b border-luxury-black/10'
          : 'bg-transparent py-4 text-luxury-cream border-b border-transparent'
      )}
    >
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between gap-8">
        <Link to="/" className="flex items-center group shrink-0">
          <img 
            src={logoSrc} 
            alt="Mr Pergola Logo" 
            className={cn(
              "h-16 md:h-20 xl:h-24 w-auto object-contain transition-all duration-500 group-hover:scale-105",
              logoToneClass
            )}
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden 2xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-[11px] uppercase tracking-[0.25em] font-bold whitespace-nowrap hover:text-luxury-gold transition-all duration-300 relative group",
                location.pathname === link.href ? "text-luxury-gold" : "opacity-70 hover:opacity-100"
              )}
            >
              {t(link.name)}
              <span className={cn(
                "absolute -bottom-1 left-0 h-[1px] bg-luxury-gold transition-all duration-300",
                location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
          <div className="flex items-center gap-6 ml-4 pl-6 border-l border-current/10 shrink-0">
            <button
              onClick={() => setLanguage(language === 'EN' ? 'FR' : 'EN')}
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-bold"
            >
              <span className={cn("transition-colors duration-300", language === 'EN' ? "text-luxury-gold opacity-100" : "opacity-50 hover:opacity-100")}>EN</span>
              <span className="opacity-30">/</span>
              <span className={cn("transition-colors duration-300", language === 'FR' ? "text-luxury-gold opacity-100" : "opacity-50 hover:opacity-100")}>FR</span>
            </button>
            <ThemeToggle />
            <Link
              to="/contact"
              className={cn(
                "px-6 xl:px-8 py-3 text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-500 shrink-0",
                shouldShowBg 
                  ? isDark ? "bg-luxury-cream text-luxury-black hover:bg-luxury-gold hover:text-luxury-cream" : "bg-luxury-black text-luxury-cream hover:bg-luxury-gold"
                  : "bg-luxury-gold text-luxury-cream hover:bg-white hover:text-luxury-black shadow-lg shadow-luxury-gold/20"
              )}
            >
              {t('Contact Us')}
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-6 2xl:hidden">
          <ThemeToggle />
          <button
            className={cn(
              "transition-all duration-300 p-2 rounded-full",
              shouldShowBg 
                ? isDark ? "text-luxury-cream hover:bg-white/10" : "text-luxury-black hover:bg-black/5"
                : "text-luxury-cream hover:bg-white/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
          </button>
        </div>
      </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={cn(
              "fixed inset-0 z-[60] 2xl:hidden flex flex-col",
              isDark ? "bg-luxury-black text-luxury-cream" : "bg-[#FAF9F6] text-luxury-black"
            )}
          >
            <div className="flex items-center justify-between px-6 py-6 border-b border-current/5">
              <div className="flex items-center gap-4">
                <img 
                  src={logoSrc} 
                  alt="Mr Pergola Logo" 
                  className={cn(
                    "h-10 w-auto object-contain",
                    isDark ? "invert" : ""
                  )}
                  referrerPolicy="no-referrer"
                />
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
              >
                <X size={32} strokeWidth={1} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-10">
              <div className="flex flex-col gap-10">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        "text-2xl sm:text-3xl uppercase tracking-[0.16em] sm:tracking-[0.2em] font-serif transition-colors duration-200 block",
                          location.pathname === link.href ? "text-luxury-gold" : "opacity-60"
                      )}
                    >
                      {t(link.name)}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-8 border-t border-current/5 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 text-current">{t('Select Language')}</span>
                <button
                  onClick={() => setLanguage(language === 'EN' ? 'FR' : 'EN')}
                  className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-bold py-2 px-4 border border-current text-current"
                >
                  <span className={cn("transition-colors duration-300", language === 'EN' ? "text-luxury-gold" : "opacity-40")}>EN</span>
                  <span className="opacity-20">/</span>
                  <span className={cn("transition-colors duration-300", language === 'FR' ? "text-luxury-gold" : "opacity-40")}>FR</span>
                </button>
              </div>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "p-6 text-center text-[12px] uppercase tracking-[0.4em] font-bold",
                  isDark ? "bg-luxury-gold text-luxury-cream" : "bg-luxury-black text-luxury-cream"
                )}
              >
                {t('Request a Quote')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
