import { DetectorOptions } from "i18next-browser-languagedetector";
import { lookupCookie,lookupLocalStorage, lookupQuerystring } from '../constants';

export const detection: DetectorOptions = {
  caches: ['cookie'],
  cookieDomain: 'localhost',
  excludeCacheFor: ['cimode'],
  lookupCookie,
  lookupLocalStorage,
  lookupQuerystring,
};