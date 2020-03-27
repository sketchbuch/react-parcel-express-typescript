import { I18nextProvider } from 'react-i18next';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import * as React from 'react';
import express from 'express';
import { collectTranslations, getTemplate } from '../../utils';
import { ROUTE_ALL as rootPath } from '../../../common/constants';
import getTemplateState from '../../utils/getTemplateState';
import Root, { store } from '../../../common/components/Root/Root';

const resources = collectTranslations(`${__dirname}/../../public/locales`);

export const rootRoute = (bundleName: string) => (
  req: express.Request,
  res: express.Response
): void => {
  const sheet: ServerStyleSheet = new ServerStyleSheet();
  const content: string = renderToString(
    sheet.collectStyles(
      <I18nextProvider i18n={req.i18n}>
        <Root isSsr location={req.originalUrl} />
      </I18nextProvider>
    )
  );
  const styles: string = sheet.getStyleTags();
  const contentState: string = getTemplateState(store.getState());

  res.send(
    getTemplate({
      bundleName,
      content,
      contentState,
      styles,
      transLang: `'${req.language}'`,
      transStore: JSON.stringify(resources),
    })
  );
};

export { rootPath };
