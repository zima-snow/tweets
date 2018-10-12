import { createReducer } from 'redux-create-reducer';

import actionTypes from '../../constants/action-types';
import {
  filterConditions,
  filterOperators,
  filterConditionsByType,
  filterOperatorsByType,
} from '../../constants/filter';
import {
  changeFilterCurrentCondition,
} from './utils';

const initialState = {
	conditions: filterConditions,
	operators: filterOperators,
  currentCondition: Object.keys(filterConditions)[0],
  currentOperator: Object.keys(filterOperators)[2],
  currentValue: '',
  filterConditionsByType,
  filterOperatorsByType
};

export default createReducer(initialState, {
	[actionTypes.CHANGE_FILTER_CURRENT_CONDITION]: changeFilterCurrentCondition,
	[actionTypes.CHANGE_FILTER_CURRENT_OPERATOR]: (state, action) => ({
    ...state,
    currentOperator: action.payload,
  }),
  [actionTypes.CHANGE_FILTER_CURRENT_VALUE]: (state, action) => ({
    ...state,
    currentValue: action.payload,
  }),
});
