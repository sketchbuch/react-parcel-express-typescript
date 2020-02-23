import express from 'express';
import config from '../../config/convict';

const SERVER_PORT = config.get('server.port');
const SERVER_URL = config.get('server.url');
const app = express();

app.use(express.static('dist', { index: 'client.html' }));

app.listen(3001, () => {
  console.log('######################################');
  console.log('');
  console.log('Server started:');
  console.log(` - ${SERVER_URL}:${SERVER_PORT}`);
  console.log('');
  console.log('######################################');
});
