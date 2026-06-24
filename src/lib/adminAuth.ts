const ADMIN_AUTH_STORAGE_KEY = 'mr_pergola_admin_auth';

const FALLBACK_ADMIN_USERNAME = 'admin';
const FALLBACK_ADMIN_PASSWORD = 'admin123';

type AdminSession = {
  username: string;
  loggedInAt: string;
};

function getConfiguredAdminUsername(): string {
  const env = import.meta.env as Record<string, string | undefined>;
  return env.VITE_ADMIN_USERNAME || FALLBACK_ADMIN_USERNAME;
}

function getConfiguredAdminPassword(): string {
  const env = import.meta.env as Record<string, string | undefined>;
  return env.VITE_ADMIN_PASSWORD || FALLBACK_ADMIN_PASSWORD;
}

export function validateAdminCredentials(username: string, password: string): boolean {
  return username === getConfiguredAdminUsername() && password === getConfiguredAdminPassword();
}

export function saveAdminSession(username: string): void {
  const session: AdminSession = {
    username,
    loggedInAt: new Date().toISOString(),
  };
  localStorage.setItem(ADMIN_AUTH_STORAGE_KEY, JSON.stringify(session));
}

export function clearAdminSession(): void {
  localStorage.removeItem(ADMIN_AUTH_STORAGE_KEY);
}

export function getAdminSession(): AdminSession | null {
  const raw = localStorage.getItem(ADMIN_AUTH_STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as AdminSession;
    if (!parsed?.username || !parsed?.loggedInAt) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function isAdminAuthenticated(): boolean {
  return getAdminSession() !== null;
}
