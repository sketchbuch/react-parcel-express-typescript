import { StringObject } from '..';

export type ReduxAction = {
  error?: boolean;
  meta?: StringObject;
  payload?: StringObject;
  type: string;
};

export type ReduxActionCreator = ReduxAction;
