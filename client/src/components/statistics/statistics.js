import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Row,
  Col,
  Modal,
  ButtonToolbar,
  Button,
  ControlLabel,
} from 'react-bootstrap';

import './statistics.css';

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }

  showStatisticsHandler = () => {
    this.setState({ isShow: true });
  }

  hideStatisticsHandler = () => {
    this.setState({ isShow: false });
  }

  renderUserMentionsBlock = () => {
    const { userMentions } = this.props;
    return Object.keys(userMentions).map((key) => {
      return (
        <Row key={key}>
          <Col lg={6} md={6} sm={6} xs={6}>
            <ControlLabel>{`@${key}`}</ControlLabel>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6} className="special-text">
            {`${userMentions[key]}x`}
          </Col>
        </Row>
      );
    });
  }

  renderHashtagsBlock = () => {
    const { hashtags } = this.props;
    return Object.keys(hashtags).map((key) => {
      return (
        <Row key={key}>
          <Col lg={6} md={6} sm={6} xs={6}>
            <ControlLabel>{`#${key}`}</ControlLabel>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6} className="special-text">
            {`${hashtags[key]}x`}
          </Col>
        </Row>
      );
    });
  };

  render() {
    const {
      isShow,
    } = this.state;

    const {
      allLikes,
      averageLikes,
    } = this.props;

    return (
      <Row>
        <Col lg={10} md={10} sm={10} xs={10} lgOffset={1} mdOffset={1} smOffset={1} xsOffset={1}>
          <ButtonToolbar>
            <Button
              className="statistics-button"
              bsStyle="info"
              bsSize="large"
              onClick={this.showStatisticsHandler}
            >
              Show statistics
            </Button>
          </ButtonToolbar>
          <Modal show={isShow} onHide={this.hideStatisticsHandler}>
            <Modal.Header closeButton>
              <Modal.Title>Statistics</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Likes</h4>
              <Row>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <ControlLabel>All likes:</ControlLabel>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className="special-text">
                  {allLikes}
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <ControlLabel>Average likes per tweet:</ControlLabel>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className="special-text">
                  {averageLikes}
                </Col>
              </Row>
              <hr />
              <h4>Mentions</h4>
              {this.renderUserMentionsBlock()}
              <hr />
              <h4>Hashtags</h4>
              {this.renderHashtagsBlock()}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.hideStatisticsHandler}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    );
  }
}

Statistics.propTypes = {
  allLikes: PropTypes.number,
  averageLikes: PropTypes.number,
  userMentions: PropTypes.shape({}),
  hashtags: PropTypes.shape({}),
};

export default Statistics;
