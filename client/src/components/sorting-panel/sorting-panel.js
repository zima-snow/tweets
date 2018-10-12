import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Row,
  Col,
  Panel,
  ButtonToolbar,
  Button,
} from 'react-bootstrap';

import Select from '../ui/select';

import './sorting-panel.css';

class SortingPanel extends Component {

  changeSortingConditionHandler = (option) => {
    const { changeSortingCondition } = this.props;
    changeSortingCondition(option);
  }

  changeSortingOrderHandler = (option) => {
    const { changeSortingOrder } = this.props;
    changeSortingOrder(option);
  }

  sortButtonClickHandler = () => {
    const { sortTweets } = this.props;
    sortTweets();
  }

  render() {
    const {
      conditions,
      orders,
    } = this.props;
    return (
      <Row>
        <Col lg={10} md={10} sm={10} xs={10} lgOffset={1} mdOffset={1} smOffset={1} xsOffset={1}>
          <Panel
            id="sorting-panel-collapsible"
            defaultExpanded={false}
            bsStyle="info"
          >
            <Panel.Heading>
              <Panel.Title toggle>
                Sorting
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
                <Row>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <Select
                      id="formSortingCondition"
                      label="Choose condition"
                      changeSelectValueHandler={this.changeSortingConditionHandler}
                    >
                      {conditions}
                    </Select>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <Select
                      id="formSortingOrder"
                      label="Choose order"
                      changeSelectValueHandler={this.changeSortingOrderHandler}
                    >
                      {orders}
                    </Select>
                  </Col>
                  <Col lg={8} md={8} sm={12} xs={12} lgOffset={2} mdOffset={2}>
                    <ButtonToolbar>
                      <Button
                        className="sorting-button"
                        bsStyle="primary"
                        onClick={this.sortButtonClickHandler}
                        disabled={false}
                      >
                        Sort
                      </Button>
                    </ButtonToolbar>
                  </Col>
                </Row>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </Col>
      </Row>
    );
  }
}

SortingPanel.propTypes = {
  conditions: PropTypes.shape({}),
  orders: PropTypes.shape({}),
  changeSortingCondition: PropTypes.func,
  changeSortingOrder: PropTypes.func,
  sortTweets: PropTypes.func,
};

export default SortingPanel;
