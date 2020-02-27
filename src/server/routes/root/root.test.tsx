import React from 'react';
import request from 'supertest';
import { renderToString } from 'react-dom/server';
import Root, { store } from '../../../common/components/Root/Root';
import getTemplateState from '../../utils/getTemplateState';
import server from '../../server';
import { ROUTE_ALL, ROUTE_TYPE_HTML } from '../../../common/constants/routes';
import { ServerContext } from '../../../common/types';
import { getTemplate } from '../../utils';
import { routeCallback, routePath } from './root';

describe('Route: root', () => {
  const originalConsoleError = console.error;
  const originalConsoleLog = console.log;

  beforeEach(() => {
    console.error = jest.fn((msg: string) => {
      if (msg.includes('Warning: useLayoutEffect does nothing on the server')) {
        return null;
      } else {
        originalConsoleError(msg);
      }
    });
    console.log = jest.fn();
  });

  afterEach(() => {
    server.close();
    console.error = originalConsoleError;
    console.log = originalConsoleLog;
  });

  test('Uses correct route', async () => {
    expect(routePath).toBe(ROUTE_ALL);
  });

  test.skip('Renders correct content', async () => {
    const ctx = {} as ServerContext;
    await routeCallback(ctx);

    const content: string = renderToString(<Root isSsr location="/" />);
    expect(ctx.body).toBe(
      getTemplate({
        content,
        contentState: getTemplateState(store.getState()),
        styles: '',
      }),
    );
  });

  test.skip('Responds as expected', async () => {
    const { status, type, text } = await request(server).get('/');

    expect(status).toEqual(200);
    expect(type).toEqual(ROUTE_TYPE_HTML);
    expect(text).toEqual(expect.any(String));
  });
});
