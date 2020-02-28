import * as fs from 'fs';
import * as path from 'path';
import compress from 'compression';
import express from 'express';
import helmet from 'helmet';
import { rootRoute } from './routes';
import { ROUTE_ALL as rootPath } from '../common/constants';
import config from '../../config/convict';
import serverInfo from './utils/serverInfo';

const ONE_HOUR = 60 * 60;
const SERVER_PORT: number = config.get('server.port');
const SERVER_URL: string = config.get('server.url');
const app = express();

let bundleName = '';

if (!bundleName) {
  fs.readdirSync(path.resolve(__dirname, '../client')).forEach(file => {
    if (!bundleName && file.includes('.js')) {
      bundleName = file;
    }
  });
}

app.use(helmet());
app.use(compress());
app.use(
  express.static('./dist', {
    maxAge: ONE_HOUR,
  })
);

app.use(rootPath, rootRoute(bundleName));

const server = app.listen(SERVER_PORT, () => {
  serverInfo(['Server started:', ` - ${SERVER_URL}:${SERVER_PORT}`]);
});

export default server;
