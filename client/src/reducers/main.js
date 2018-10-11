import { createReducer } from 'redux-create-reducer';

import actionTypes from '../constants/action-types';

const initialState = {
	isLoading: true,
	tweets: [],
};

export default createReducer(initialState, {
	[actionTypes.START_LOADING]: state => ({ ...state, isLoading: true }),
	[actionTypes.COMPLETE_LOADING]: state => ({ ...state, isLoading: false }),
	[actionTypes.RECEIVED_TWEETS]: (state, action) => ({
		...state,
		tweets: action.payload.data,
	}),
});
