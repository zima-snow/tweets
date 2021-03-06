import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Grid,
  Row,
  Col,
  ButtonToolbar,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Panel,
} from 'react-bootstrap';

import Tweet from '../tweet';
import SortingPanel from '../../containers/sorting-panel';
import FilterPanel from '../../containers/filter-panel';
import Statistics from '../../containers/statistics';
import { COUNT_TWEETS } from '../../constants';

import './main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsername: '',
      isGetTweetsButtonDisable: true,
      isListShow: false,
      isStatShow: false,
    }
  }

  getValidationState = () => {
    const { currentUsername } = this.state;
    const length = currentUsername.length;
    return length > 0 ? 'success' : 'error';
  }

  getMainButtonText = () => {
    const { isGetTweetsButtonDisable } = this.state;
    const { isLoaded } = this.props;
    if (isGetTweetsButtonDisable) {
      return 'Enter username';
    } else if (!isLoaded) {
      return 'Loading...';
    }
    return 'Get tweets';
  }

  changeUsernameHandler = (e) => {
    this.setState({
      currentUsername: e.target.value,
      isGetTweetsButtonDisable: e.target.value.length === 0,
    });
  }

  getTweetsClickHandler = () => {
    const { getTweets } = this.props;
    const { currentUsername } = this.state;
    getTweets(currentUsername, COUNT_TWEETS);
  }

  resetTweetsClickHandler = () => {
    const { resetTweets } = this.props;
    resetTweets();
  }

  renderTweets = () => {
    const { tweets } = this.props;
    return tweets.map((tweet) => {
      return (
        <Tweet
          key={tweet.id}
          tweet={tweet}
        />
      );
    })
  }

  render() {
    const {
      currentUsername,
      isGetTweetsButtonDisable,
    } = this.state;

    const {
      currentTweetsLength,
      isLoaded,
    } = this.props;
    return (
      <div>
        <Grid>
          <Row>
            <Col lg={8} md={8} sm={10} xs={12} lgOffset={2} mdOffset={2} smOffset={1}>
              <FormGroup
                controlId="formUsername"
                validationState={this.getValidationState()}
              >
                <ControlLabel>Please, enter Twitter's username without '@'</ControlLabel>
                <FormControl
                  type="text"
                  value={currentUsername}
                  placeholder="Enter username"
                  onChange={this.changeUsernameHandler}
                />
              </FormGroup>
            </Col>
            <Col lg={8} md={8} sm={10} xs={12} lgOffset={2} mdOffset={2} smOffset={1}>
              <ButtonToolbar>
                <Button
                  className="main-button"
                  bsStyle="primary"
                  onClick={this.getTweetsClickHandler}
                  disabled={isGetTweetsButtonDisable || !isLoaded}
                >
                  {this.getMainButtonText()}
                </Button>
              </ButtonToolbar>
            </Col>
          </Row>
          {
            currentTweetsLength !== 0 && isLoaded &&
              <Row>
                <Col lg={8} md={8} sm={10} xs={12} lgOffset={2} mdOffset={2} smOffset={1}>
                  <Panel id="tools-panel">
                    <SortingPanel />
                    <FilterPanel />
                    <Statistics />
                    <Row>
                      <Col lg={10} md={10} sm={10} xs={10} lgOffset={1} mdOffset={1} smOffset={1} xsOffset={1}>
                        <ButtonToolbar>
                          <Button
                            className="reset-button"
                            bsStyle="danger"
                            bsSize="large"
                            onClick={this.resetTweetsClickHandler}
                          >
                            Reset tweets
                          </Button>
                        </ButtonToolbar>
                      </Col>
                    </Row>
                  </Panel>
                </Col>
              </Row>
          }
          {isLoaded && this.renderTweets()}
        </Grid>
      </div>
    );
  }
}

Main.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    createdAt: PropTypes.string,
    text: PropTypes.string,
    favoriteCount: PropTypes.number,
    retweetCount: PropTypes.number,
  })),
  currentTweetsLength: PropTypes.number,
  isLoaded: PropTypes.bool,
  getTweets: PropTypes.func,
  resetTweets: PropTypes.func,
};

export default Main;
