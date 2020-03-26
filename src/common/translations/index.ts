export * from './commonConfig';
export * from './detectorOptions';

import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const i18n = i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next);
