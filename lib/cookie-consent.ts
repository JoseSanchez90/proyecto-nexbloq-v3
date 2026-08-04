export const COOKIE_CONSENT_STORAGE_KEY = "nexbloq-cookie-consent";
export const COOKIE_CONSENT_COOKIE_NAME = "nexbloq_cookie_consent";
export const OPEN_COOKIE_PREFERENCES_EVENT =
  "nexbloq:open-cookie-preferences";
export const COOKIE_PREFERENCES_UPDATED_EVENT =
  "nexbloq:cookie-preferences-updated";

export interface CookiePreferences {
  necessary: true;
  analytics: boolean;
  preferences: boolean;
  marketing: boolean;
}

interface StoredCookieConsent {
  version: 1;
  preferences: CookiePreferences;
  updatedAt: string;
}

export const necessaryCookiePreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  preferences: false,
  marketing: false,
};

export const allCookiePreferences: CookiePreferences = {
  necessary: true,
  analytics: true,
  preferences: true,
  marketing: true,
};

function isStoredCookieConsent(value: unknown): value is StoredCookieConsent {
  if (!value || typeof value !== "object") return false;

  const consent = value as Partial<StoredCookieConsent>;
  const preferences = consent.preferences as
    | Partial<CookiePreferences>
    | undefined;

  return (
    consent.version === 1 &&
    preferences?.necessary === true &&
    typeof preferences.analytics === "boolean" &&
    typeof preferences.preferences === "boolean" &&
    typeof preferences.marketing === "boolean"
  );
}

export function readCookiePreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;

  try {
    const storedValue = window.localStorage.getItem(
      COOKIE_CONSENT_STORAGE_KEY,
    );
    if (!storedValue) return null;

    const parsedValue: unknown = JSON.parse(storedValue);
    return isStoredCookieConsent(parsedValue)
      ? parsedValue.preferences
      : null;
  } catch {
    return null;
  }
}

export function applyCookiePreferences(preferences: CookiePreferences) {
  if (typeof window === "undefined") return;

  document.documentElement.dataset.cookiesAnalytics = String(
    preferences.analytics,
  );
  document.documentElement.dataset.cookiesPreferences = String(
    preferences.preferences,
  );
  document.documentElement.dataset.cookiesMarketing = String(
    preferences.marketing,
  );

  window.dispatchEvent(
    new CustomEvent<CookiePreferences>(COOKIE_PREFERENCES_UPDATED_EVENT, {
      detail: preferences,
    }),
  );
}

export function saveCookiePreferences(preferences: CookiePreferences) {
  if (typeof window === "undefined") return;

  const normalizedPreferences: CookiePreferences = {
    ...preferences,
    necessary: true,
  };
  const storedConsent: StoredCookieConsent = {
    version: 1,
    preferences: normalizedPreferences,
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(
    COOKIE_CONSENT_STORAGE_KEY,
    JSON.stringify(storedConsent),
  );

  const cookieValue = encodeURIComponent(JSON.stringify(normalizedPreferences));
  const secureAttribute =
    window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_CONSENT_COOKIE_NAME}=${cookieValue}; Path=/; Max-Age=31536000; SameSite=Lax${secureAttribute}`;

  applyCookiePreferences(normalizedPreferences);
}
