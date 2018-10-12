import { orderBy } from 'lodash-es';
import moment from 'moment';

import {
  filterByConditionAsDate,
  filterByConditionAsNumber,
  filterByConditionAsString,
  filterByConditionAsArray,
  filterByTextLength,
} from '../../utils/main';

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

export const getFilteredTweetsIfConditionIsKeyOfTweet = (items, payload) => {
  const {
    condition,
    operator,
    value,
    typeOfCondition,
  } = payload;
  switch (typeOfCondition) {
    case 'asDate': return filterByConditionAsDate(items, condition, operator, value);
    case 'asNumber': return filterByConditionAsNumber(items, condition, operator, value);
    case 'asString': return filterByConditionAsString(items, condition, operator, value);
    case 'asArray': return filterByConditionAsArray(items, condition, operator, value);
    default: return filterByConditionAsNumber(items, condition, operator, value);
  }
}

export const getFilteredTweetsIfConditionIsNotKeyOfTweet = (items, payload) => {
  const {
    condition,
    operator,
    value,
  } = payload;
  switch (condition) {
    case 'tweetLength': return filterByTextLength(items, 'text', operator, value);
    // if you have added new special key in filterConditions object ("constants/filter.js" file),
    // also add new case here and new method in "utils/main.js" file if needed.
    default: return filterByTextLength(items, 'text', operator, value);
  }
}

export const filterTweets = (state, action) => {
  const { condition } = action.payload;

  if (state.tweets.length === 0) {
    return { ...state };
  }

  const filteredTweets = state.tweets[0].hasOwnProperty(condition) || state.tweets[0].entities.hasOwnProperty(condition)
    ? getFilteredTweetsIfConditionIsKeyOfTweet(state.tweets, action.payload)
    : getFilteredTweetsIfConditionIsNotKeyOfTweet(state.tweets, action.payload);

  return {
    ...state,
    tweets: filteredTweets,
  }
}
