import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  APP_LOADED,
  APP_TITLE,
  availableLanguages,
  ROUTE_HOME,
  ROUTE_PAGE2,
} from '../../constants';
import { i18n } from '../../translations';
import { Langs } from '../../types';
import { Props, Store, LangBtnProps } from './App.interface';
import {
  StyledApp,
  StyledErrorMessage,
  StyledLi,
  StyledLoadingMessage,
  StyledPara,
  StyledUl,
} from './App.styles';
import packageJson from '../../../../package.json';

/* All components in one file to make starting your project easier */

export const Home: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Helmet>
        <title>{t('home.title', { APP_TITLE })}</title>
      </Helmet>
      <StyledPara data-testid="app-home-description">{t('home.message')}</StyledPara>
      <StyledPara data-testid="app-home">
        <strong>
          <Link data-testid="app-home-link" to={ROUTE_PAGE2}>
            {t('home.page2')}
          </Link>
        </strong>
      </StyledPara>
    </React.Fragment>
  );
};

export const NotFound: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Helmet>
        <title>{t('notFound.title', { APP_TITLE })}</title>
      </Helmet>
      <StyledErrorMessage data-testid="app-404-errmsg">
        <strong>404</strong>
      </StyledErrorMessage>
      <StyledPara data-testid="app-404-description">{t('notFound.message')}</StyledPara>
      <StyledPara data-testid="app-404">
        <strong>
          <Link data-testid="app-404-link" to={ROUTE_HOME}>
            {t('app.home')}
          </Link>
        </strong>
      </StyledPara>
    </React.Fragment>
  );
};

export const Page2: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Helmet>
        <title>{t('page2.title', { APP_TITLE })}</title>
      </Helmet>
      <StyledPara data-testid="app-page2-description">{t('page2.message')}</StyledPara>
      <StyledPara data-testid="app-page2">
        <strong>
          <Link data-testid="app-page2-link" to={ROUTE_HOME}>
            {t('app.home')}
          </Link>
        </strong>
      </StyledPara>
    </React.Fragment>
  );
};

export const LangBtn: React.FC<LangBtnProps> = ({ label, onClick, t }) => (
  <StyledLi onClick={onClick(label)} title={t('app.langTooltip', { LANG: label })}>
    {label}
  </StyledLi>
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
      i18n.changeLanguage(lang);
    }
  };

  return (
    <StyledApp>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <h1 data-testid="app-title">{t(isSsr ? 'app.title-ssr' : 'app.title')}</h1>
      <StyledPara data-testid="app-description">
        {t('app.description', {
          VERSION: packageJson.version,
          DESCRIPTION: packageJson.description,
        })}
      </StyledPara>

      <StyledUl>
        {availableLanguages.map((lang: Langs) => {
          return <LangBtn key={lang} onClick={handleClick} label={lang} t={t} />;
        })}
      </StyledUl>

      {loaded === true ? (
        <StyledLoadingMessage data-testid="app-loaded">{t('app.loaded')}</StyledLoadingMessage>
      ) : (
        <StyledLoadingMessage data-testid="app-loading">{t('app.loading')}</StyledLoadingMessage>
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
