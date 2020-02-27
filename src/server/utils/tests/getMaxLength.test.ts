import getMaxLength from '../getMaxLength';

describe('getMaxLen()', () => {
  test('Returns the highest length', () => {
    const messages: string[] = ['12345', '1234567890', '123'];
    const result: number = getMaxLength(messages);
    expect(result).toBe(messages[1].length);
  });
});
