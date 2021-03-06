const express = require('express');
const app = express();

const apiCheck = require('./utils/apicheck');

app.use(apiCheck);

app.use(apiCheck);

app.get('/msg/hello', (req, res) => {
	console.log('Hello');
  res.send('Hello World!');
});

app.get('/msg/bye', (req, res) => {
  res.send('Bye World!');
});

app.listen(8080)

