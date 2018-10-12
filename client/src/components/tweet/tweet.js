import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Row,
  Col,
  Panel,
  Glyphicon,
} from 'react-bootstrap';
import moment from 'moment';

import './tweet.css';

class Tweet extends Component {
  render() {
    const {
      tweet,
    } = this.props;
    return (
      <Row>
        <Col lg={8} md={8} sm={10} xs={12} lgOffset={2} mdOffset={2} smOffset={1}>
          <Panel
            className="tweet-panel"
            bsStyle="primary"
          >
            <Panel.Heading>
              <Panel.Title componentClass="h3">
                {moment(tweet.createdAt).format('MMMM Do YYYY')}
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              {tweet.text}
            </Panel.Body>
            <Panel.Footer>
              <Row>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <span>
                    <Glyphicon glyph="heart-empty" />
                  </span>
                  <span>
                    {tweet.favoriteCount}
                  </span>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <span>
                    <Glyphicon glyph="share" />
                  </span>
                  <span>
                    {tweet.retweetCount}
                  </span>
                </Col>
              </Row>
            </Panel.Footer>
          </Panel>
        </Col>
      </Row>
    );
  }
}

Tweet.propTypes = {
  tweet: PropTypes.shape({
    id: PropTypes.number,
    createdAt: PropTypes.string,
    text: PropTypes.string,
    favoriteCount: PropTypes.number,
    retweetCount: PropTypes.number,
  }),
};

export default Tweet;
