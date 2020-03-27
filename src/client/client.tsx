import { I18nextProvider, useSSR } from 'react-i18next';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { commonConfig, i18n } from '../common/translations';
import { InitSSRProps } from './client.inteface';
import Root from '../common/components/Root/Root';

declare global {
  interface Window {
    __initialI18nStore__: string;
    __initialLanguage__: string;
  }
}

if (!i18n.isInitialized) {
  console.log('### setting init')
  i18n.init({
    ...commonConfig,
  });
}

const InitSSR: React.FC<InitSSRProps> = ({ initialI18nStore, initialLanguage }) => {
  useSSR(JSON.parse(initialI18nStore), initialLanguage);
  return <Root />
}

ReactDOM.render(
  <I18nextProvider i18n={i18n}><InitSSR initialI18nStore={JSON.stringify(window.__initialI18nStore__)} initialLanguage={window.__initialLanguage__} /></I18nextProvider>, document.getElementById('root'));
