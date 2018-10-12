import { createReducer } from 'redux-create-reducer';

import {
	sortTweets,
	filterTweets,
} from './utils';

import actionTypes from '../../constants/action-types';

const initialState = {
	isLoaded: true,
	cuttent: [],
	tweets: [],
};

export default createReducer(initialState, {
	[actionTypes.START_LOADING]: state => ({ ...state, isLoaded: false }),
	[actionTypes.COMPLETE_LOADING]: state => ({ ...state, isLoaded: true }),
	[actionTypes.RECEIVED_TWEETS]: (state, action) => ({
		...state,
		tweets: action.payload.data,
		current: action.payload.data,
	}),
	[actionTypes.SORTED_TWEETS]: sortTweets,
	[actionTypes.FILTER_TWEETS]: filterTweets,
});
