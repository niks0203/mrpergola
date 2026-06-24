import { BarChart3, FileText, MessageSquare, Settings, ShieldCheck, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { clearAdminSession, getAdminSession } from '../lib/adminAuth';
import { useLanguage } from '../context/LanguageContext';

const dashboardCards = [
  {
    title: 'New Inquiries',
    value: '24',
    subtitle: 'Last 30 days',
    icon: <MessageSquare size={20} strokeWidth={1.8} />,
  },
  {
    title: 'Active Leads',
    value: '13',
    subtitle: 'Sales pipeline',
    icon: <Users size={20} strokeWidth={1.8} />,
  },
  {
    title: 'Published Posts',
    value: '08',
    subtitle: 'Blog + updates',
    icon: <FileText size={20} strokeWidth={1.8} />,
  },
  {
    title: 'System Health',
    value: '99.9%',
    subtitle: 'Uptime status',
    icon: <BarChart3 size={20} strokeWidth={1.8} />,
  },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const session = getAdminSession();
  const displayName = session?.username || 'Admin';
  const { t } = useLanguage();

  const handleLogout = () => {
    clearAdminSession();
    navigate('/admin/login', { replace: true });
  };

  return (
    <section className="min-h-screen bg-luxury-cream dark:bg-luxury-black px-6 md:px-10 py-10 md:py-12">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-luxury-gold mb-4">
              <ShieldCheck size={16} />
              <span className="text-[10px] uppercase tracking-[0.32em] font-semibold">{t('Admin Console')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif dark:text-luxury-cream">
              {t('Welcome back, ')}{displayName}
            </h1>
            <p className="text-luxury-gray dark:text-luxury-cream/60 mt-3">
              {t('Monitor activity, review leads, and manage website operations.')}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-5 py-3 border border-luxury-black/10 dark:border-luxury-cream/20 text-[11px] uppercase tracking-[0.24em] hover:border-luxury-gold transition-colors dark:text-luxury-cream"
            >
              <Settings size={16} />
              {t('Settings')}
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="px-5 py-3 bg-luxury-black dark:bg-luxury-gold text-luxury-cream text-[11px] uppercase tracking-[0.24em] hover:bg-luxury-gold dark:hover:bg-luxury-cream dark:hover:text-luxury-black transition-colors"
            >
              {t('Log Out')}
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          {dashboardCards.map((card) => (
            <article
              key={card.title}
              className="border border-luxury-black/10 dark:border-luxury-cream/15 bg-white/70 dark:bg-luxury-black/55 backdrop-blur-sm p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] uppercase tracking-[0.22em] text-luxury-gray dark:text-luxury-cream/55">
                  {t(card.title)}
                </span>
                <span className="text-luxury-gold">{card.icon}</span>
              </div>
              <p className="text-4xl font-serif dark:text-luxury-cream">{card.value}</p>
              <p className="text-sm text-luxury-gray dark:text-luxury-cream/60 mt-2">{t(card.subtitle)}</p>
            </article>
          ))}
        </div>

        <section className="border border-luxury-black/10 dark:border-luxury-cream/15 bg-white/70 dark:bg-luxury-black/55 backdrop-blur-sm p-7 md:p-8">
          <h2 className="text-2xl font-serif dark:text-luxury-cream mb-4">{t('Admin Notes')}</h2>
          <p className="text-luxury-gray dark:text-luxury-cream/65 leading-relaxed">
            {t('This dashboard is ready for integration with real backend data such as contact submissions, lead tracking, and content moderation workflows.')}
          </p>
        </section>
      </div>
    </section>
  );
}
