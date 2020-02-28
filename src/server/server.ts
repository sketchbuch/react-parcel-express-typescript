import compress from 'compression';
import express from 'express';
import helmet from 'helmet';
import { defaultRoute } from './routes';
import { ROUTE_ALL } from '../common/constants/routes';
import config from '../../config/convict';
import serverInfo from './utils/serverInfo';

const ONE_HOUR = 60 * 60;
const SERVER_PORT = config.get('server.port');
const SERVER_URL = config.get('server.url');

const app = express();

app.use(helmet());
app.use(compress());
app.use(
  express.static('./dist', {
    maxAge: ONE_HOUR,
  })
);

app.use(ROUTE_ALL, defaultRoute);

const server = app.listen(SERVER_PORT, () => {
  serverInfo(['Server started:', ` - ${SERVER_URL}:${SERVER_PORT}`]);
});

export default server;
