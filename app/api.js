'use strict'

const koa = require('koa');
const mount = require('koa-mount');
const router = require('koa-route');

const errorResponder = require('./middleware/error-responder');

const morningRoute = require('./routes/morning/morning.router');

const app = koa();

app.use(errorResponder)

app.use(router.get('/', function *pint() {
  this.body = 'Reflect Backend';
}));

app.use(mount('/morning', morningRoute));

module.exports = app;
