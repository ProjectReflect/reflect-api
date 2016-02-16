'use strict';

const weather = require('../../services/weather');

exports.getWeather = function *() {
  const result = yield weather.getWeather();
  const jsonResult = JSON.parse(result.body);
  // if needed in the future, we can return more information
  this.body = {
    curTemp: Math.round( (jsonResult.main.temp - 273.15) * 10 ) / 10,
    condition: jsonResult.weather[0].main,
    loc: jsonResult.name,
    degreeType: 'C'
  };
}
