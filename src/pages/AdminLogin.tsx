import { FormEvent, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { LockKeyhole, ShieldCheck, UserRound } from 'lucide-react';
import { isAdminAuthenticated, saveAdminSession, validateAdminCredentials } from '../lib/adminAuth';
import { useLanguage } from '../context/LanguageContext';

type FromLocationState = {
  from?: {
    pathname?: string;
  };
};

export default function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { t } = useLanguage();

  if (isAdminAuthenticated()) {
    return <Navigate to="/admin" replace />;
  }

  const from = (location.state as FromLocationState | null)?.from?.pathname || '/admin';

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!validateAdminCredentials(username.trim(), password)) {
      setError(t('Invalid username or password.'));
      return;
    }

    saveAdminSession(username.trim());
    navigate(from, { replace: true });
  };

  return (
    <section className="min-h-screen bg-luxury-cream dark:bg-luxury-black flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md border border-luxury-black/10 dark:border-luxury-cream/10 bg-white/70 dark:bg-luxury-black/60 backdrop-blur-sm shadow-lg p-8 md:p-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-luxury-gold/40 text-luxury-gold mb-5">
            <ShieldCheck size={26} strokeWidth={1.7} />
          </div>
          <p className="text-luxury-gold text-[11px] uppercase tracking-[0.45em] font-semibold mb-3">
            {t('Admin Access')}
          </p>
          <h1 className="text-3xl md:text-4xl font-serif dark:text-luxury-cream">
            {t('Control Panel Login')}
          </h1>
          <p className="text-luxury-gray dark:text-luxury-cream/60 text-sm mt-4">
            {t('Sign in to manage internal admin operations.')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.28em] text-luxury-gray dark:text-luxury-cream/65 mb-2 block">
              {t('Username')}
            </span>
          <div className="flex items-center gap-3 border border-luxury-black/10 dark:border-luxury-cream/20 px-4 py-3 bg-white/50 dark:bg-luxury-black/30">
            <UserRound size={16} className="text-luxury-gold" />
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder={t('Enter username')}
                className="w-full bg-transparent outline-none text-sm dark:text-luxury-cream"
                autoComplete="username"
                required
              />
            </div>
          </label>

          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.28em] text-luxury-gray dark:text-luxury-cream/65 mb-2 block">
              {t('Password')}
            </span>
          <div className="flex items-center gap-3 border border-luxury-black/10 dark:border-luxury-cream/20 px-4 py-3 bg-white/50 dark:bg-luxury-black/30">
            <LockKeyhole size={16} className="text-luxury-gold" />
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder={t('Enter password')}
                className="w-full bg-transparent outline-none text-sm dark:text-luxury-cream"
                autoComplete="current-password"
                required
              />
            </div>
          </label>

          {error ? (
            <p className="text-luxury-gold text-sm font-medium">{error}</p>
          ) : null}

          <button
            type="submit"
          className="w-full bg-luxury-black dark:bg-luxury-gold text-luxury-cream py-3 text-[11px] uppercase tracking-[0.32em] font-semibold hover:bg-luxury-gold dark:hover:bg-luxury-cream dark:hover:text-luxury-black transition-colors duration-300"
          >
            {t('Sign In')}
          </button>
        </form>
      </div>
    </section>
  );
}
