import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  updateTweets,
} from '../../actions/main';
import {
  tweetsSelector,
} from '../../selectors/main';
import MainComponent from '../../components/main';

class Main extends Component {

  getTweets = (username, count) => {
    const { getTweetsByUsername } = this.props;
    getTweetsByUsername(username, count);
  }

  render() {
    const {
      tweets,
      isLoaded
    } = this.props;
    return (
      <MainComponent
        tweets={tweets}
        isLoaded={isLoaded}
        getTweets={this.getTweets}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  tweets: tweetsSelector(state),
  isLoaded: state.main.isLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getTweetsByUsername: (username, count) => dispatch(updateTweets(username, count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
