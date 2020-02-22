import React from 'react';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App/App';
import store from '../../store/redux';
import { Props, RouterProps } from './Root.interface';

const Root: React.FC<Props> = ({ isSsr = false, location = '' }) => {
  const Router: React.ReactType = isSsr ? StaticRouter : BrowserRouter;
  const routerProps: RouterProps = isSsr ? { location } : {};
  const appTitle: string = isSsr ? 'App (Server)' : 'App';

  return (
    <Provider store={store}>
      <Router {...routerProps}>
        <App title={appTitle} />
      </Router>
    </Provider>
  );
};

export { store };
export default Root;
