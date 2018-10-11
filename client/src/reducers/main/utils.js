import { orderBy } from 'lodash-es';
import moment from 'moment';

export const sortTweets = (state, action) => {
  const {
    condition,
    order,
  } = action.payload;
  let sortedTweets;
  if (condition === 'created_at') {
    sortedTweets = orderBy(state.tweets, function(o) { return new moment(o.created_at); }, [order]);
  } else {
    sortedTweets = orderBy(state.tweets, [condition], [order]);
  }
  return {
    ...state,
    tweets: sortedTweets,
  }
}
