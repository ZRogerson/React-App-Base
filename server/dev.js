const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

const config = require('../config/webpack.dev.js');

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: '/static/'
}));

app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

console.log('Please Wait, Compiling...');
app.listen(3000);
