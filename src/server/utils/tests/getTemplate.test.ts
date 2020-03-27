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
      transLang: `'EN'`,
      transStore: JSON.stringify({}),
    });
    const expected: string = defaultTemplate
      .replace('{bundleName}', BUNDLE_NAME)
      .replace('{content}', content)
      .replace('{contentState}', contentState)
      .replace('{styles}', '')
      .replace('{transLang}', `'EN'`)
      .replace('{transStore}', '{}')
      .trim();

    expect(result).toEqual(expected);
  });
});
