import actionTypes from '../constants/action-types';
import {
  currentSortingConditionSelector,
  currentSortingOrderSelector,
} from '../selectors/sorting';

export const changeSortingCurrentCondition = (condition) => ({
  type: actionTypes.CHANGE_SORTING_CURRENT_CONDITION,
  payload: condition,
});

export const changeSortingCurrentOrder = (order) => ({
  type: actionTypes.CHANGE_SORTING_CURRENT_ORDER,
  payload: order,
});

export const sortTweets = (condition, order) => ({
  type: actionTypes.SORTED_TWEETS,
  payload: { condition, order },
});

export const updateSortingCondition = (value) => dispatch => {
  dispatch(changeSortingCurrentCondition(value));
};

export const updateSortingOrder = (value) => dispatch => {
  dispatch(changeSortingCurrentOrder(value));
};

export const updateTweetsBySorting = () => (dispatch, getState) => {
  const state = getState();
  const condition = currentSortingConditionSelector(state);
  const order = currentSortingOrderSelector(state);
  dispatch(sortTweets(condition, order));
};
