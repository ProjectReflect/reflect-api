'use strict';

const weather = require('../../services/weather');

exports.getWeather = function *() {
  const parameters = this.request.body;

  // this will be replaced with the request from the frontend
  const testParameters = {
    'lat': 33,
    'long': 100,
    'units': celcius
  };

  this.body = yield weather.getWeather(testParameters);
}
