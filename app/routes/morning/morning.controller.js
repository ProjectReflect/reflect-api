'use strict';

const weather = require('../../services/weather');
const news = require('../../services/news');

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

exports.getNews = function *() {
  // TODO: have different modules for different news
  // depending on what is set in the database
  const result = yield news.getRedditNews();

  this.body = result.slice(0,3);
}
