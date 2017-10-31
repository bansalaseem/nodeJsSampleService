'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello DockerHub - updated - 5\n');
});

app.listen(PORT, HOST);
console.log('Running on http://' + HOST + ':' + PORT);
