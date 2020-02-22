import { createStore, Store } from 'redux';
import reducers from '../reducers';

export const initialState = {};

const store: Store = createStore(reducers, initialState);

export default store;
