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

export const allLikesSelector = createSelector(
  tweetsSelector,
  (tweets) => tweets.reduce((current, tweet) => current + tweet.favoriteCount, 0),
);

export const averageLikesSelector = createSelector(
  tweetsSelector,
  allLikesSelector,
  (tweets, likes) => likes / tweets.length,
);

export const userMentionsSelector = createSelector(
  main,
  ({ tweets }) => {
    const mentionsObj = {};
    tweets.forEach((tweet) => {
      let mentions = tweet.entities.user_mentions;
      mentions.forEach((mention) => {
        if (mentionsObj[mention.screen_name]) {
          mentionsObj[mention.screen_name] += 1;
        } else {
          mentionsObj[mention.screen_name] = 1;
        }
      })
    });
    return mentionsObj;
  },
);

export const hashtagsSelector = createSelector(
  main,
  ({ tweets }) => {
    const hashtagObj = {};
    tweets.forEach((tweet) => {
      let hashtags = tweet.entities.hashtags;
      hashtags.forEach((hashtag) => {
        if (hashtagObj[hashtag.text]) {
          hashtagObj[hashtag.text] += 1;
        } else {
          hashtagObj[hashtag.text] = 1;
        }
      })
    });
    return hashtagObj;
  },
);
