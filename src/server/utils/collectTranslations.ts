import { availableLanguages } from '../../common/constants';
import { Langs } from '../../common/types';
import { Resource, ResourceKey, ResourceLanguage } from 'i18next';
import * as fs from 'fs';

export const collectTranslations = (pathToLocales: string): Resource => {
  return availableLanguages.reduce((accTranslations: Resource, curLang: Langs): Resource => {
    const langFolder =  `${pathToLocales}/${curLang}/`;

    if (fs.existsSync(langFolder)) {
      const files = fs.readdirSync(langFolder, { encoding: 'utf8'}).filter((fileName: string) => fileName.includes('.json'));
    
      if (files.length > 0) {
        const langNamespaces: ResourceKey = files.reduce((accNs: ResourceLanguage, curNs: string) => {
          try {
            const contents: JSON = JSON.parse(fs.readFileSync(`${langFolder}/${curNs}`, 'utf8'));
            
            if (contents) {
              return { ...accNs, [curNs.replace('.json', '').toString()]: contents};
            }
          } catch(err) {
            // Ignore file and carry on...
          }

          return accNs;
        }, {})

        return { ...accTranslations, [curLang]: langNamespaces }
      }
    }

    return accTranslations
  }, {})
}