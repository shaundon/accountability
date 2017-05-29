// Dependencies.
const Twitter = require('twitter');
const distanceInWordsStrict = require('date-fns/distance_in_words_strict');

const config = require('./config.json');

const client = new Twitter(config.twitter.credentials);
const recipient = config.twitter['user_to_tweet'];

// Get a count of how long this has been going on.
const daysOfPain = distanceInWordsStrict(config['start_date'], new Date(), {'unit': 'd'});

const getRandomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
const phrase1 = getRandomFromArray(config['phrases-one']);
const phrase2 = getRandomFromArray(config['phrases-two']);
const hashtag = getRandomFromArray(config['hashtags']);

// Construct a tweet.
const status = `${recipient} ${daysOfPain} ${phrase1} ${phrase2} #${hashtag}`;

// Post it.
if (status.length <= 140) {
  client.post('statuses/update', {status})
    .then(tweet => console.log(tweet['created_at'], tweet.text))
    .catch(console.error)
  ;
}
