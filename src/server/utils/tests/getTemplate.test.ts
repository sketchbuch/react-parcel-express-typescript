import getTemplateState from '../getTemplateState';
import getTemplate from '../getTemplate';
import { defaultTemplate } from '../../templates';
import { store } from '../../../common/components/Root/Root';

describe('getTemplate()', () => {
  const content = '<p>test content</p>';
  const styles = '';

  test('Renders template with content added', () => {
    const contentState: string = getTemplateState(store.getState());
    const result: string = getTemplate({ content, contentState, styles });
    const expected: string = defaultTemplate
      .replace('{content}', content)
      .replace('{contentState}', contentState)
      .replace('{styles}', '')
      .trim();

    expect(result).toEqual(expected);
  });
});
