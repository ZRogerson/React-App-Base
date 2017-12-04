const express = require('express');
const path = require('path');
const app = express();

const ServerRendererPath = path.join(__dirname, '../static/server.js');
const ServerRenderer = require(ServerRendererPath).default;

app.use('/static', express.static(path.join(__dirname, '../static')))

app.use(ServerRenderer());

app.listen(3000);