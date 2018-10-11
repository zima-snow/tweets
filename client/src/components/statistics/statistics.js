import React, { Component } from 'react';
import {
  Row,
  Col,
  Modal,
  ButtonToolbar,
  Button,
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

  render() {
    const {
      isShow,
    } = this.state;
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
              Statistics
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

export default Statistics;
