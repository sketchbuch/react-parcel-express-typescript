import * as React from 'react';
import 'jest-styled-components';
import { wait } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { StyledErrorMessage, StyledLoadingMessage, StyledPara, StyledApp } from './App.styles';
import { Props } from './App.interface';
import { renderWithRedux, renderWithRouter } from '../../tests';
import { ROUTE_HOME, ROUTE_PAGE2 } from '../../constants';
import App, { Home, NotFound, Page2 } from './App';

describe('<App />', () => {
  const props: Props = {
    isSsr: false,
  };
  const LOADING_TXT = 'app.loading';
  const LOADED_TXT = 'app.loaded';

  test('Renders the title', () => {
    const { getByTestId, getByText } = renderWithRedux(<App {...props} />);
    expect(getByTestId('app-title')).toBeInTheDocument();
    expect(getByText('app.title')).toBeInTheDocument();
  });

  test('Renders the title for SSR', () => {
    const { getByTestId, getByText } = renderWithRedux(<App {...props} isSsr />);
    expect(getByTestId('app-title')).toBeInTheDocument();
    expect(getByText('app.title-ssr')).toBeInTheDocument();
  });

  test('Renders loading message', () => {
    const { getByTestId, getByText, queryByTestId, queryByText } = renderWithRedux(
      <App {...props} />
    );

    expect(getByTestId('app-loading')).toBeInTheDocument();
    expect(queryByTestId('app-loaded')).toBeNull();
    expect(getByText(LOADING_TXT)).toBeInTheDocument();
    expect(queryByText(LOADED_TXT)).not.toBeInTheDocument();
  });

  test('Renders loaded message after 1 second', async () => {
    const { getByTestId, getByText, queryByTestId, queryByText } = renderWithRedux(
      <App {...props} />
    );
    await wait(
      () => {
        expect(queryByTestId('app-loading')).toBeNull();
        expect(getByTestId('app-loaded')).toBeInTheDocument();
        expect(queryByText(LOADING_TXT)).not.toBeInTheDocument();
        expect(getByText(LOADED_TXT)).toBeInTheDocument();
      },
      {
        timeout: 1000,
      }
    );
  });

  describe('Styled Components:', () => {
    test('<ErrorMessage />', () => {
      const tree = renderer.create(<StyledErrorMessage />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    test('<LoadingMessage />', () => {
      const tree = renderer.create(<StyledLoadingMessage />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    test('<Para />', () => {
      const tree = renderer.create(<StyledPara />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    test('<StyledApp />', () => {
      const tree = renderer.create(<StyledApp />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Routes:', () => {
    test('<Home /> renders correctly', () => {
      const { getByTestId } = renderWithRouter(<Home />);
      expect(getByTestId('app-home')).toBeInTheDocument();

      const linkChild = getByTestId('app-home-link');
      expect(linkChild).toBeInTheDocument();
      expect(linkChild).toHaveAttribute('href', ROUTE_PAGE2);
    });

    test('<NotFound /> renders correctly', () => {
      const { getByTestId } = renderWithRouter(<NotFound />);
      expect(getByTestId('app-404')).toBeInTheDocument();
      expect(getByTestId('app-404-description')).toBeInTheDocument();
      expect(getByTestId('app-404-errmsg')).toBeInTheDocument();

      const linkChild = getByTestId('app-404-link');
      expect(linkChild).toBeInTheDocument();
      expect(linkChild).toHaveAttribute('href', ROUTE_HOME);
    });

    test('<Page2 /> renders correctly', () => {
      const { getByTestId } = renderWithRouter(<Page2 />);
      expect(getByTestId('app-page2')).toBeInTheDocument();

      const linkChild = getByTestId('app-page2-link');
      expect(linkChild).toBeInTheDocument();
      expect(linkChild).toHaveAttribute('href', ROUTE_HOME);
    });
  });
});
