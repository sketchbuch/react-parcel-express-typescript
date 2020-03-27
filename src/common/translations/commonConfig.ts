import { InitOptions } from 'i18next';
import { availableLanguages, defaultLangKey } from '../constants';
import { detection } from './detectorOptions';

export const commonConfig: InitOptions = {
  debug: false,
  detection,
  fallbackLng: [defaultLangKey],
  initImmediate: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
    wait: true,
  },
  whitelist: [...availableLanguages],
};
