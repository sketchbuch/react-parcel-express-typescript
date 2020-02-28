import server from '../../server';
import { ROUTE_ALL } from '../../../common/constants';
import { rootPath } from './root';

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
    expect(rootPath).toBe(ROUTE_ALL);
  });
});
