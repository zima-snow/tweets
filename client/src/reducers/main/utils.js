import { orderBy } from 'lodash-es';
import moment from 'moment';

import {
  filterByConditionAsDate,
  filterByConditionAsNumber,
  filterByConditionAsString,
  filterByConditionAsArray,
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
    typeOfCondition,
  } = action.payload;

  let filteredTweets;
  switch (typeOfCondition) {
    case 'asDate': {
      filteredTweets = filterByConditionAsDate(state.tweets, condition, operator, value);
      break;
    }
    case 'asNumber': {
      filteredTweets = filterByConditionAsNumber(state.tweets, condition, operator, value);
      break;
    }
    case 'asString': {
      filteredTweets = filterByConditionAsString(state.tweets, condition, operator, value);
      break;
    }
    case 'asArray': {
      filteredTweets = filterByConditionAsArray(state.tweets, condition, operator, value);
      break;
    }
    default: break;
  }

  return {
    ...state,
    tweets: filteredTweets,
  }
}
