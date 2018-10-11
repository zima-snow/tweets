import { createReducer } from 'redux-create-reducer';

import actionTypes from '../constants/action-types';
import {
  sortingConditions,
  sortingOrders
} from '../constants/sorting';

const initialState = {
	conditions: sortingConditions,
	orders: sortingOrders,
  currentCondition: Object.keys(sortingConditions)[0],
  currentOrder: Object.keys(sortingOrders)[0],
};

export default createReducer(initialState, {
	[actionTypes.CHANGE_SORTING_CURRENT_CONDITION]: (state, action) => ({
    ...state,
    currentCondition: action.payload,
  }),
	[actionTypes.CHANGE_SORTING_CURRENT_ORDER]: (state, action) => ({
    ...state,
    currentOrder: action.payload,
  }),
});
