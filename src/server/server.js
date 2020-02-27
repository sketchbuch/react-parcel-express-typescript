const express = require('express');
//const config = require('../../config/convict');

const SERVER_PORT = 3001;
const SERVER_URL = 'http://localhost';
const app = express();

app.use(express.static('dist/client', {index: 'client.html'}));

app.listen(3001, () => {
  console.log('######################################');
  console.log('');
  console.log('Server started:');
  console.log(` - ${SERVER_URL}:${SERVER_PORT}`);
  console.log('');
  console.log('######################################');
});
