'use strict'

const bluebird = require('bluebird');
const Forecast = require('forecast');

exports.getWeather = bluebird.coroutine(function *(parameters) {
  // set up the forecast
  const forecast = new Forecast({
    service: 'forecast.io',
    // there is no real key yet, but there will be eventually
    key: process.env.WEATHER_API_KEY,
    units: parameters.units,
    cache: true,
    ttl: {
      minutes: 27,
      seconds: 45
      }
  });

  // weather is a promise
  const weather = bluebird.promisify(forecast.get);

  // return back to the service that wanted this, unless there is an error
  return weather([parameters.lat, parameters.long]).catch((err) => {
    throw new Error(err);
  })
})
