import { APP_LOADED } from '../constants/actions';
import { ReduxAction } from '../types';

export type State = boolean;
export const initialState: State = false;

const reducer = (state: State = initialState, action: ReduxAction): State => {
  switch (action.type) {
  case APP_LOADED:
    return true;

  default:
    return state;
  }
};

export default reducer;
