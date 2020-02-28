import { defaultTemplate } from '../templates';
import { Placeholders } from '../../common/types';

const getTemplate = (placeholders: Placeholders): string => {
  const replacedTemplate = Object.keys(placeholders).reduce(
    (replacedTemplate: string, placeholder: string) => {
      return replacedTemplate.replace(`{${placeholder}}`, placeholders[placeholder].trim());
    },
    defaultTemplate
  );

  return replacedTemplate.trim();
};

export default getTemplate;
