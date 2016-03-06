'use strict';

const bluebird = require('bluebird');
const reddit = require('redwrap');

exports.getRedditNews = bluebird.coroutine(function *() {
  const redditNews = bluebird.promisify(reddit.r);

  return redditNews('news').get('data').get('children').map(content => {
    return { 'source': content.data.domain,
             'title': content.data.title,
           };
  });
})
