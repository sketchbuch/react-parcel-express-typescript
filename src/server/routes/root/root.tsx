import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import express from 'express';
import { getTemplate } from '../../utils';
import { ROUTE_ALL as rootPath } from '../../../common/constants';
import getTemplateState from '../../utils/getTemplateState';
import Root, { store } from '../../../common/components/Root/Root';

export const rootRoute = (bundleName: string) => (
  req: express.Request,
  res: express.Response
): void => {
  const sheet: ServerStyleSheet = new ServerStyleSheet();
  const content: string = renderToString(
    sheet.collectStyles(<Root isSsr location={req.originalUrl} />)
  );
  const styles: string = sheet.getStyleTags();
  const contentState: string = getTemplateState(store.getState());

  res.send(getTemplate({ bundleName, content, contentState, styles }));
};

export { rootPath };
