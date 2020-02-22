const express = require('express')
const app = express()

app.use(express.static('dist', {index: 'client.html'}))

app.listen(3001, () => console.log('Listening on port 3001!'))