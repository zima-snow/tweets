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
import Input from '../ui/input';
import DatePicker from '../ui/date-picker';
import Counter from '../ui/counter';

import './filter-panel.css';

class FilterPanel extends Component {

  getFieldForValue = () => {
    const { value, typeOfCondition } = this.props;
    switch (typeOfCondition) {
      case 'asDate': {
        return (
          <DatePicker
            id="formFilterValue"
            label="Choose date"
            value={value}
            changeValue={this.changeFilterValueHandler}
          />
        );
      }
      case 'asNumber': {
        return (
          <Counter
            id="formFilterValue"
            label="Enter value"
            value={value}
            changeValue={this.changeFilterValueHandler}
          />
        );
      }
      default: {
        return (
          <Input
            id="formFilterValue"
            label="Enter value"
            value={value}
            changeValue={this.changeFilterValueHandler}
          />
        );
      }
    }
  }

  getNote = () => {
    const { typeOfCondition } = this.props;
    if (typeOfCondition === 'asArray') {
      return (
        <div className="note-container">
          <div className="note">
            NOTE: You can enter multiple values. Separate them with a space.
          </div>
        </div>
      );
    }
    return '';
  }

  changeFilterConditionHandler = (option) => {
    const { changeFilterCondition } = this.props;
    changeFilterCondition(option);
  }

  changeFilterOperatorHandler = (option) => {
    const { changeFilterOperator } = this.props;
    changeFilterOperator(option);
  }

  changeFilterValueHandler = (value) => {
    const { changeFilterValue } = this.props;
    changeFilterValue(value);
  }

  filterButtonClickHandler = () => {
    const { filterTweets } = this.props;
    filterTweets();
  }

  render() {
    const {
      conditions,
      operators,
      operator,
      condition,
      value,
    } = this.props;

    return (
      <Row>
        <Col lg={10} md={10} sm={10} xs={10} lgOffset={1} mdOffset={1} smOffset={1} xsOffset={1}>
          <Panel
            id="filter-panel-collapsible"
            defaultExpanded={false}
            bsStyle="info"
          >
            <Panel.Heading>
              <Panel.Title toggle>
                Filter
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
                <Row>
                  <Col lg={4} md={4} sm={4} xs={12}>
                    <Select
                      id="formFilterCondition"
                      label="Choose condition"
                      value={condition}
                      changeSelectValueHandler={this.changeFilterConditionHandler}
                    >
                      {conditions}
                    </Select>
                  </Col>
                  <Col lg={4} md={4} sm={4} xs={12}>
                    <Select
                      id="formFilterOperator"
                      label="Choose operator"
                      value={operator}
                      changeSelectValueHandler={this.changeFilterOperatorHandler}
                    >
                      {operators}
                    </Select>
                  </Col>
                  <Col lg={4} md={4} sm={4} xs={12}>
                    {this.getFieldForValue()}
                  </Col>
                  <Col lg={8} md={8} sm={12} xs={12} lgOffset={2} mdOffset={2}>
                    {this.getNote()}
                  </Col>
                  <Col lg={8} md={8} sm={12} xs={12} lgOffset={2} mdOffset={2}>
                    <ButtonToolbar>
                      <Button
                        className="filter-button"
                        bsStyle="primary"
                        onClick={this.filterButtonClickHandler}
                        disabled={value.length === 0}
                      >
                        Filter
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

FilterPanel.propTypes = {
  conditions: PropTypes.shape({}),
  operators: PropTypes.shape({}),
  condition: PropTypes.string,
  operator: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({}),
  ]),
  typeOfCondition: PropTypes.string,
  changeFilterCondition: PropTypes.func,
  changeFilterOperator: PropTypes.func,
  changeFilterValue: PropTypes.func,
  filterTweets: PropTypes.func,
};

export default FilterPanel;
