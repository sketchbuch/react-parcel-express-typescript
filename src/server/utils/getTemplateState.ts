import { State } from '../../common/types/redux/state.interface';

const getTemplateState = (contentState: State): string => {
  return JSON.stringify(contentState).replace(/</g, '\\u003c');
};

export default getTemplateState;
