import { BUNDLE_NAME } from '../../../common/constants';
import { defaultTemplate } from '../../templates';
import { store } from '../../../common/components/Root/Root';
import getTemplate from '../getTemplate';
import getTemplateState from '../getTemplateState';

describe('getTemplate()', () => {
  const content = '<p>test content</p>';
  const styles = '';

  test('Renders template with content added', () => {
    const contentState: string = getTemplateState(store.getState());
    const result: string = getTemplate({
      bundleName: BUNDLE_NAME,
      content,
      contentState,
      styles,
    });
    const expected: string = defaultTemplate
      .replace('{content}', content)
      .replace('{bundleName}', BUNDLE_NAME)
      .replace('{contentState}', contentState)
      .replace('{styles}', '')
      .trim();

    expect(result).toEqual(expected);
  });
});
