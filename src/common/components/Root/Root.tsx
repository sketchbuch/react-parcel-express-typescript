import * as React from 'react';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Props, RouterProps } from './Root.interface';
import App from '../App/App';
import store from '../../store/redux';

const Root: React.FC<Props> = ({ isSsr = false, location = '' }) => {
  const Router: React.ReactType = isSsr ? StaticRouter : BrowserRouter;
  const routerProps: RouterProps = isSsr ? { location } : {};

  return (
    <Provider store={store}>
      <Router {...routerProps}>
        <App isSsr={isSsr} />
      </Router>
    </Provider>
  );
};

export { store };
export default Root;
