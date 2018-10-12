import React from 'react';
import { connect } from 'react-redux';

import {
  updateTweets,
  resetTweets,
} from '../../actions/main';
import {
  tweetsSelector,
} from '../../selectors/main';
import MainComponent from '../../components/main';

const Main = ({...rest}) => <MainComponent {...rest} />;

const mapStateToProps = (state) => ({
  tweets: tweetsSelector(state),
  currentTweets: state.main.current,
  isLoaded: state.main.isLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getTweets: (username, count) => dispatch(updateTweets(username, count)),
  resetTweets: () => dispatch(resetTweets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
