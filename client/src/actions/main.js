import actionTypes from '../constants/action-types';
import * as api from '../api/main';

export const startLoad = () => ({
  type: actionTypes.START_LOADING,
});

export const completeLoad = () => ({
  type: actionTypes.COMPLETE_LOADING,
});

export const receiveTweets = (data) => ({
  type: actionTypes.RECEIVED_TWEETS,
  payload: { data },
});

export const updateTweets = (username, count) => dispatch => {
    dispatch(startLoad());
    api.getTweetsByUsername(username, count)
        .then((res) => {
            dispatch(receiveTweets(res.data));
        })
        .catch((error) => {
            console.log(error);
        })
        .then(() => dispatch(completeLoad()));
};
