import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  updateTweets,
} from '../../actions/main';
import MainComponent from '../../components/main';

class Main extends Component {

  getTweets = (username, count) => {
    const { getTweetsByUsername } = this.props;
    getTweetsByUsername(username, count);
  }

  render() {
    const {
      tweets,
      isLoading
    } = this.props;
    return (
      <MainComponent
        tweets={tweets}
        isLoading={isLoading}
        getTweets={this.getTweets}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  tweets: state.main.tweets,
  isLoading: state.main.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getTweetsByUsername: (username, count) => dispatch(updateTweets(username, count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
