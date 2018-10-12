import { createReducer } from 'redux-create-reducer';

import actionTypes from '../constants/action-types';
import {
  filterConditions,
  filterOperators,
} from '../constants/filter';

const initialState = {
	conditions: filterConditions,
	operators: filterOperators,
  currentCondition: Object.keys(filterConditions)[0],
  currentOperator: Object.keys(filterOperators)[0],
  currentValue: '',
};

export default createReducer(initialState, {
	[actionTypes.CHANGE_FILTER_CURRENT_CONDITION]: (state, action) => ({
    ...state,
    currentCondition: action.payload,
  }),
	[actionTypes.CHANGE_FILTER_CURRENT_OPERATOR]: (state, action) => ({
    ...state,
    currentOperator: action.payload,
  }),
  [actionTypes.CHANGE_FILTER_CURRENT_VALUE]: (state, action) => ({
    ...state,
    currentValue: action.payload,
  }),
});
