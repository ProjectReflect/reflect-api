'use strict';

const koa = require('koa');
const router = require('koa-route');
const morning = require('./morning.controller');

const app = koa();

app.use(router.get('/get-weather', morning.getWeather));

module.exports = app;
