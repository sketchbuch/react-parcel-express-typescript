import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { APP_LOADED, APP_TITLE, availableLanguages, ROUTE_HOME, ROUTE_PAGE2 } from '../../constants';
import { ErrorMessage, LoadingMessage, Para, StyledApp } from './App.styles';
import { Props, Store, LangBtnProps } from './App.interface';
import packageJson from '../../../../package.json';
import { Langs } from '../../types';
import { i18n } from '../../translations';

/* All components in one file to make starting your project easier */

export const Home: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Helmet>
        <title>{t('home.title', {APP_TITLE})}</title>
      </Helmet>
      <Para data-testid="app-home-description">{t('home.message')}</Para>
      <Para data-testid="app-home">
        <strong>
          <Link data-testid="app-home-link" to={ROUTE_PAGE2}>
            {t('home.page2')}
          </Link>
        </strong>
      </Para>
    </React.Fragment>
  )
}

export const NotFound: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Helmet>
        <title>{t('notFound.title', {APP_TITLE})}</title>
      </Helmet>
      <ErrorMessage data-testid="app-404-errmsg">
        <strong>404</strong>
      </ErrorMessage>
      <Para data-testid="app-404-description">{t('notFound.message')}</Para>
      <Para data-testid="app-404">
        <strong>
          <Link data-testid="app-404-link" to={ROUTE_HOME}>
            {t('app.home')}
          </Link>
        </strong>
      </Para>
    </React.Fragment>
  )
}

export const Page2: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Helmet>
        <title>{t('page2.title', {APP_TITLE})}</title>
      </Helmet>
      <Para data-testid="app-page2-description">{t('page2.message')}</Para>
      <Para data-testid="app-page2">
        <strong>
          <Link data-testid="app-page2-link" to={ROUTE_HOME}>
            {t('app.home')}
          </Link>
        </strong>
      </Para>
    </React.Fragment>
  )
}

export const LangBtn: React.FC<LangBtnProps> = ({ label, onClick }) => (
  <li onClick={onClick(label)}>{label}</li>
);

const App: React.FC<Props> = ({ isSsr }) => {
  const loaded: boolean = useSelector<Store, boolean>(state => state.app);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    const timer: number = window.setTimeout(() => dispatch({ type: APP_LOADED }), 1000);

    return (): void => clearTimeout(timer);
  }, []);

  const handleClick = (lang: Langs) => (): void => {
    if (lang !== i18n.language && availableLanguages.includes(lang)) {
      i18n.changeLanguage(lang)
    }
  }

  return (
    <StyledApp>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <h1 data-testid="app-title">{t(isSsr ? 'app.title-ssr' : 'app.title')}</h1>
      <Para data-testid="app-description">{t('app.description', {VERSION: packageJson.version})}</Para>

      <ul>
        {availableLanguages.map((lang: Langs) => {
          return (
            <LangBtn key={lang} onClick={handleClick} label={lang} />
          );
        })}
      </ul>

      {loaded === true ? (
        <LoadingMessage data-testid="app-loaded">{t('app.loaded')}</LoadingMessage>
      ) : (
        <LoadingMessage data-testid="app-loading">{t('app.loading')}</LoadingMessage>
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
