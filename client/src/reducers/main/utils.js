import { orderBy } from 'lodash-es';
import moment from 'moment';

import {
  filterByEquals,
  filterByNotEquals,
  filterByGreaterThan,
  filterByLessThan,
  filterByIncludes,
  filterByNotIncludes,
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

export const filterTweets = (state, action) => {
  const {
    condition,
    operator,
    value,
  } = action.payload;
  let filteredTweets;
  
  switch (operator) {
    case 'equals': {
      filteredTweets = filterByEquals(state.tweets, condition, value);
      break;
    }
    case 'notEquals': {
      filteredTweets = filterByNotEquals(state.tweets, condition, value);
      break;
    }
    case 'greaterThan': {
      filteredTweets = filterByGreaterThan(state.tweets, condition, value);
      break;
    }
    case 'lessThan': {
      filteredTweets = filterByLessThan(state.tweets, condition, value);
      break;
    }
    case 'includes': {
      filteredTweets = filterByIncludes(state.tweets, condition, value);
      break;
    }
    case 'notIncludes': {
      filteredTweets = filterByNotIncludes(state.tweets, condition, value);
      break;
    }
    default: break;
  }

  return {
    ...state,
    tweets: filteredTweets,
  }
}
