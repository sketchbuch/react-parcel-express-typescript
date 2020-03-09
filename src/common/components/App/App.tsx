import React, { useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { APP_LOADED, APP_TITLE, ROUTE_HOME, ROUTE_PAGE2 } from '../../constants';
import { ErrorMessage, LoadingMessage, Para, StyledApp } from './App.styles';
import { Props, Store } from './App.interface';
import packageJson from '../../../../package.json';

export const Home: React.FC<{}> = () => (
  <React.Fragment>
    <Helmet>
      <title>{APP_TITLE}</title>
    </Helmet>
    <Para data-testid="app-home">
      <strong>
        <Link data-testid="app-home-link" to={ROUTE_PAGE2}>
          Go to page 2
        </Link>
      </strong>
    </Para>
  </React.Fragment>
);

export const NotFound: React.FC<{}> = () => (
  <React.Fragment>
    <Helmet>
      <title>NotFound - {APP_TITLE}</title>
    </Helmet>
    <ErrorMessage data-testid="app-404-errmsg">
      <strong>404</strong>
    </ErrorMessage>
    <Para data-testid="app-404-description">
      Sorry but the page you requested could not be found
    </Para>
    <Para data-testid="app-404">
      <strong>
        <Link data-testid="app-404-link" to={ROUTE_HOME}>
          Back to home
        </Link>
      </strong>
    </Para>
  </React.Fragment>
);

export const Page2: React.FC<{}> = () => (
  <React.Fragment>
    <Helmet>
      <title>Page 2 - {APP_TITLE}</title>
    </Helmet>
    <Para data-testid="app-page2">
      <strong>
        <Link data-testid="app-page2-link" to={ROUTE_HOME}>
          Back to home
        </Link>
      </strong>
    </Para>
  </React.Fragment>
);

const App: React.FC<Props> = ({ title }) => {
  const loaded: boolean = useSelector<Store, boolean>(state => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer: number = window.setTimeout(() => dispatch({ type: APP_LOADED }), 1000);

    return (): void => clearTimeout(timer);
  }, []);

  return (
    <StyledApp>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <h1 data-testid="app-title">{title}</h1>
      <Para data-testid="app-description">
        v{packageJson.version} - Boilerplate for a webpack / koa based universal react app using
        babel, react-router, redux, and typescript
      </Para>

      {loaded === true ? (
        <LoadingMessage data-testid="app-loaded">Loaded!</LoadingMessage>
      ) : (
        <LoadingMessage data-testid="app-loading">Loading...</LoadingMessage>
      )}

      <Switch>
        <Route path={ROUTE_PAGE2} component={Page2} />
        <Route exact path={ROUTE_HOME} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </StyledApp>
  );
};

export default App;
