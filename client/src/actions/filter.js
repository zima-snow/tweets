import actionTypes from '../constants/action-types';
import {
  currentFilterConditionSelector,
  currentFilterOperatorSelector,
  currentFilterValueSelector,
  filterTypeOfConditionSelector,
} from '../selectors/filter';

export const changeFilterCurrentCondition = (condition) => ({
  type: actionTypes.CHANGE_FILTER_CURRENT_CONDITION,
  payload: condition,
});

export const changeFilterCurrentOperator = (operator) => ({
  type: actionTypes.CHANGE_FILTER_CURRENT_OPERATOR,
  payload: operator,
});

export const changeFilterCurrentValue = (value) => ({
  type: actionTypes.CHANGE_FILTER_CURRENT_VALUE,
  payload: value,
});

export const filterTweets = (condition, operator, value, typeOfCondition) => ({
  type: actionTypes.FILTER_TWEETS,
  payload: { condition, operator, value, typeOfCondition },
});

export const updateFilterCondition = (value) => dispatch => {
  dispatch(changeFilterCurrentCondition(value));
};

export const updateFilterOperator = (value) => dispatch => {
  dispatch(changeFilterCurrentOperator(value));
};

export const updateFilterValue = (value) => dispatch => {
  dispatch(changeFilterCurrentValue(value));
};

export const updateTweetsByFilter = () => (dispatch, getState) => {
  const state = getState();
  const condition = currentFilterConditionSelector(state);
  const operator = currentFilterOperatorSelector(state);
  const value = currentFilterValueSelector(state);
  const typeOfCondition = filterTypeOfConditionSelector(state);
  dispatch(filterTweets(condition, operator, value, typeOfCondition));
};
