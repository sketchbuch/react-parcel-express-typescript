import * as fs from 'fs';
import * as path from 'path';
import compress from 'compression';
import express from 'express';
import helmet from 'helmet';
import i18next from 'i18next';
import middleware from 'i18next-express-middleware';
import { collectTranslations, serverInfo } from './utils';
import { commonConfig } from '../common/translations';
import { rootRoute } from './routes';
import { ROUTE_ALL as rootPath, availableLanguages } from '../common/constants';
import config from '../../config/convict';

const ONE_HOUR = 60 * 60;
const SERVER_PORT: number = config.get('server.port');
const SERVER_URL: string = config.get('server.url');
const app = express();
const preload = [...availableLanguages];
const resources = collectTranslations(`${__dirname}/../../public/locales`);

i18next.use(middleware.LanguageDetector).init({
  ...commonConfig,
  preload,
  resources,
});

let bundleName = '';

if (!bundleName) {
  fs.readdirSync(path.resolve(__dirname, '../client')).forEach((file) => {
    if (!bundleName && file.includes('.js')) {
      bundleName = file;
    }
  });
}

app.use(helmet());
app.use(compress());

app.use(
  middleware.handle(i18next, {
    // ignoreRoutes: ["/foo"],
    removeLngFromUrl: false,
  })
);

app.use(
  express.static('./public', {
    maxAge: ONE_HOUR,
  })
);
app.use(
  express.static('./dist', {
    maxAge: ONE_HOUR,
  })
);

app.use(rootPath, rootRoute(bundleName));

const server = app.listen(SERVER_PORT, () => {
  serverInfo([
    'Server started:',
    ` - URL: ${SERVER_URL}:${SERVER_PORT}`,
    ` - Env: ${config.get('env')}`,
    ` - Bundle: ${bundleName}`,
  ]);
});

export default server;
