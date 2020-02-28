import React from 'react';
import express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import Root, { store } from '../../../common/components/Root/Root';
import getTemplateState from '../../utils/getTemplateState';
import { getTemplate } from '../../utils';

let bundleName = '';

export const defaultRoute = (req: express.Request, res: express.Response): void => {
  if (!bundleName) {
    fs.readdirSync(path.resolve(__dirname, '../../dist/client')).forEach(file => {
      if (!bundleName && file.includes('.js')) {
        bundleName = file;
      }
    });
  }

  const sheet: ServerStyleSheet = new ServerStyleSheet();
  const content: string = renderToString(
    sheet.collectStyles(<Root isSsr location={req.originalUrl} />)
  );
  const styles: string = sheet.getStyleTags();
  const contentState: string = getTemplateState(store.getState());

  res.send(getTemplate({ bundleName, content, contentState, styles }));
};
