import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from '@testing-library/react';
import reducers from '../reducers';
import { RenderWithRedux, RenderWithReduxOptions } from '../types';
import { TestRouter } from './renderWithRouter';

export const renderWithRedux = (
  comp: React.ReactNode,
  {
    initialState = {},
    location = '/',
    store = createStore(reducers, initialState),
  }: RenderWithReduxOptions = {}
): RenderWithRedux => {
  return {
    ...render(
      <Provider store={store}>
        <TestRouter location={location}>{comp}</TestRouter>
      </Provider>
    ),
    location,
    store,
  };
};
