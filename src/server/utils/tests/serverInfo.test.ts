import serverInfo from '../serverInfo';
import { SERVER_INFO_SEP } from '../../../common/constants/server';

describe('serverInfo()', () => {
  const PORT = 3000;
  const messages: string[] = ['Server started:', ` - http://localhost:${PORT}`];
  let mockLog: jest.Mock;
  const originalConsoleLog = console.log;

  beforeEach(() => {
    mockLog = jest.fn();
    console.log = mockLog;
  });

  afterEach(() => (console.log = originalConsoleLog));

  test('console.log called the correct number of times', () => {
    serverInfo(messages);
    expect(mockLog).toBeCalledTimes(4 + messages.length);
  });

  test('Adds prefix console.logs', () => {
    serverInfo(messages);
    expect(mockLog.mock.calls[0][0].substr(0, 1)).toBe(SERVER_INFO_SEP);
    expect(mockLog.mock.calls[1][0]).toBe('');
  });

  test('Adds suffix console.logs', () => {
    const logCalls = mockLog.mock.calls;
    serverInfo(messages);
    expect(logCalls[logCalls.length - 2][0]).toBe('');
    expect(logCalls[logCalls.length - 1][0].substr(0, 1)).toBe(SERVER_INFO_SEP);
  });

  test('Adds messages console.logs', () => {
    serverInfo(messages);
    expect(mockLog.mock.calls[2][0]).toBe(messages[0]);
    expect(mockLog.mock.calls[3][0]).toBe(messages[1]);
  });
});
