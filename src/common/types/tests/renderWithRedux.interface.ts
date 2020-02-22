import { RenderResult } from '@testing-library/react';
import { Store as ReduxStore } from 'redux';
import { State } from '../redux/state.interface';
import { RenderWithRouter, RenderWithRouterOptions } from './renderWithRouter.interface';

export interface RenderWithReduxOptions extends RenderWithRouterOptions {
  initialState?: Partial<State>;
  store?: ReduxStore;
}

export interface RenderWithRedux extends RenderResult, RenderWithRouter {
  store: ReduxStore;
}
