const express = require('express');
const path = require('path');
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: '',
});

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api', function (req, res) {
  res.json('{"message":"API server works!');
});

app.get('/api/tweets', function (req, res) {
  var params = {
    screen_name: req.query.username,
    count: 50,
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