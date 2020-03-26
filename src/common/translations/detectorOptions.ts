import { DetectorOptions } from "i18next-browser-languagedetector";

export const detection: DetectorOptions = {
  caches: ['localStorage', 'cookie'],
  cookieDomain: 'localhost',
  excludeCacheFor: ['cimode'],
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupQuerystring: 'lng',
  order: ['navigator', 'htmlTag', 'path', 'subdomain'],
};