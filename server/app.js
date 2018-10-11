const express = require('express');
const path = require('path');
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: 'ObiOc4CMNgTuNSI7NrRWODWYe',
  consumer_secret: 'zUiBtptkIXkTGsgtZTEh4sSEtwEfMBt5WJbKvxZSzDYT8VZFAw',
  access_token_key: '912938041232297984-kWNc75XuL9qTg6J1XwU8ncFtPDRhVS3',
  access_token_secret: 'pu85xnQMjgtjEr3lPL13porKJYG2f6ir5YBnPxcQFN0YD',
});

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api', function (req, res) {
  res.json('{"message":"API server works!');
});

app.get('/api/tweets', function (req, res) {
  var params = {
    screen_name: req.query.username,
    count: req.query.count,
  };
  client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
      res.json(tweets);
    }
  });
});

app.listen(PORT, function () {
  console.error(`Node server: listening on port ${PORT}`);
});