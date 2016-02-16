'use strict'

const koa = require('koa');
const mount = require('koa-mount');
const bodyParser = require('koa-bodyparser');

const PORT = process.env.PORT || 4000;

const app = koa();
const api = require('./app/api');

app.use(bodyParser());
app.use(mount('/api', api));

// log errors
app.on('error', (err) => {
  const errStr = JSON.stringify(err, null, 2);
  console.log(`Unhandled server error! ${err.message}: ${errStr}`);
});

// start listening yo
if (require.main === module) {
  app.listen(PORT);
  console.log(`listening on port ${PORT}`);
}

module.export = app;
