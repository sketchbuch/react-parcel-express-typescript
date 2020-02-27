import React from 'react';
import Router from 'koa-router';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import Root, { store } from '../../../common/components/Root/Root';
import getTemplateState from '../../utils/getTemplateState';
import { ROUTE_ALL as routePath } from '../../../common/constants/routes';
import { ServerContext } from '../../../common/types';
import { getTemplate } from '../../utils';

const router = new Router();

export const routeCallback = async (ctx: ServerContext): Promise<void> => {
  const sheet: ServerStyleSheet = new ServerStyleSheet();
  const content: string = renderToString(
    sheet.collectStyles(<Root isSsr location={ctx.request.URL.pathname} />),
  );
  const styles: string = sheet.getStyleTags();
  const contentState: string = getTemplateState(store.getState());
  ctx.body = getTemplate({ content, contentState, styles });
};

router.get(routePath, routeCallback);

export { routePath };
export default router;
