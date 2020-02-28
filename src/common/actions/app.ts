import { APP_LOADED } from '../constants';
import { ReduxActionCreator } from '../types';

export const loaded = (): ReduxActionCreator => {
  return { type: APP_LOADED };
};
