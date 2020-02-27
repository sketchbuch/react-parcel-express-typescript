import { SERVER_INFO_SEP } from '../../common/constants/server';
import { getMaxLength } from '.';

const serverInfo = (messages: string[]): void => {
  const maxLen: number = getMaxLength(messages);

  console.log(SERVER_INFO_SEP.repeat(maxLen));
  console.log('');

  messages.forEach((msg: string) => {
    console.log(msg);
  });

  console.log('');
  console.log(SERVER_INFO_SEP.repeat(maxLen));
};

export default serverInfo;
