import * as React from 'react';
import ReactDOM from 'react-dom';
import Root from '../common/components/Root/Root';
import { commonConfig, i18n } from '../common/translations';

if (!i18n.isInitialized) {
  i18n.init({
    ...commonConfig,
  });
}

ReactDOM.render(<Root />, document.getElementById('root'));
