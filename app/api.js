'use strict'

const koa = require('koa');
const router = require('koa-route');

const app = koa();

app.use(router.get('/', function *pint() {
  this.body = 'Reflect Backend';
}));

//mount future routes here

module.exports = app;
