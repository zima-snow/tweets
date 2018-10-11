import { createReducer } from 'redux-create-reducer';

import actionTypes from '../constants/action-types';

const initialState = {
	isLoaded: true,
	tweets: [],
};

export default createReducer(initialState, {
	[actionTypes.START_LOADING]: state => ({ ...state, isLoaded: false }),
	[actionTypes.COMPLETE_LOADING]: state => ({ ...state, isLoaded: true }),
	[actionTypes.RECEIVED_TWEETS]: (state, action) => ({
		...state,
		tweets: action.payload.data,
	}),
});
