import { createSelector } from 'reselect';

export const main = state => state.main;

export const tweetsSelector = createSelector(
  main,
  ({ tweets }) => {
    if (tweets.length === 0) {
      return tweets;
    }
    return tweets.map((tweet) => {
      return {
        id: tweet.id,
        createdAt: tweet.created_at,
        text: tweet.text,
        favoriteCount: tweet.favorite_count,
        retweetCount: tweet.retweet_count,
      }
    })
  },
);
