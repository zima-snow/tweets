import React, { Component } from 'react';
import {
  Row,
  Col,
  Panel,
  ButtonToolbar,
  Button,
} from 'react-bootstrap';

import Select from '../select';
import {
  sortingConditions,
  sortingOrders,
} from '../../constants/sorting';

import './sorting-panel.css';

class SortingPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCondition: sortingConditions.createdAt,
      currentOrder: sortingOrders[0],
      isSortDisable: true,
    };
  }

  changeSortingConditionHandler = (option) => {
    this.setState({ currentCondition: option });
  }

  changeSortingOrderHandler = (option) => {
    this.setState({ currentOrder: option });
  }

  sortButtonClickHandler = () => {
    const { currentCondition, currentOrder } = this.state;
    const { onSortingClickHandler } = this.props;
    onSortingClickHandler(currentCondition, currentOrder);
  }

  render() {
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
                      {sortingConditions}
                    </Select>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <Select
                      id="formSortingOrder"
                      label="Choose order"
                      changeSelectValueHandler={this.changeSortingOrderHandler}
                    >
                      {sortingOrders}
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

export default SortingPanel;
