'use strict'

const bluebird = require('bluebird');
const request = require('request');

exports.getWeather = bluebird.coroutine(function *() {
  // these will be changed to be gotten from a server
  // rather than being hardcoded like this
  const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather';
  const lat = 43.7;
  const lon = -79.4;
  const id = process.env.WEATHER_API_KEY;

  console.log(`${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${id}`);

  const weather = bluebird.promisify(request);

  return weather(`${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${id}`).catch((err) => {
    throw new Error(err);
  });
})
