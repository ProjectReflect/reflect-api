'use strict';

module.exports = function *(next) {
  try {
    yield next;
  } catch (err) {
    // if there is error status, just give it status 500
    const defaultErrorCode = 500;
    this.status = err.status || defaultErrorCode;
    // if there is no message just say internal server error
    this.body = err.message || 'Internal server error';

    // log the error
    console.log(`${this.status} error: ${this.body}`);

    // send the error upwards yo
    if (this.status === defaultErrorCode) {
      this.app.emit('error', err, this);
    }
  }
}
