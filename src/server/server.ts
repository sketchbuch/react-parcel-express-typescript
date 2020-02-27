import compress from 'compression';
import express from 'express';
import helmet from 'helmet';
import config from '../../config/convict';
import serverInfo from './utils/serverInfo';

const SERVER_PORT = config.get('server.port');
const SERVER_URL = config.get('server.url');
const app = express();

app.use(helmet());
app.use(compress());
app.use(express.static('public'));
app.use(express.static('dist/client', { index: 'client.html' }));

const server = app.listen(SERVER_PORT, () => {
  serverInfo(['Server started:', ` - ${SERVER_URL}:${SERVER_PORT}`]);
});

export default server;
