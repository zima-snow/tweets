import React, { Component } from 'react';
import {
  Row,
  Col,
  Panel,
  FormGroup,
  FormControl,
  ControlLabel,
  ButtonToolbar,
  Button,
} from 'react-bootstrap';

import Select from '../select';

import './filter-panel.css';

class FilterPanel extends Component {

  getValidationState = () => {
    const { value } = this.props;
    const length = value.length;
    return length > 0 ? 'success' : 'error';
  }

  changeFilterConditionHandler = (option) => {
    const { changeFilterCondition } = this.props;
    changeFilterCondition(option);
  }

  changeFilterOperatorHandler = (option) => {
    const { changeFilterOperator } = this.props;
    changeFilterOperator(option);
  }

  changeFilterValueHandler = (e) => {
    const { changeFilterValue } = this.props;
    changeFilterValue(e.target.value);
  }

  filterButtonClickHandler = () => {
    const { filterTweets } = this.props;
    filterTweets();
  }

  render() {
    const {
      conditions,
      operators,
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
                      changeSelectValueHandler={this.changeFilterConditionHandler}
                    >
                      {conditions}
                    </Select>
                  </Col>
                  <Col lg={4} md={4} sm={4} xs={12}>
                    <Select
                      id="formFilterOperator"
                      label="Choose operator"
                      changeSelectValueHandler={this.changeFilterOperatorHandler}
                    >
                      {operators}
                    </Select>
                  </Col>
                  <Col lg={4} md={4} sm={4} xs={12}>
                    <FormGroup
                      controlId="formFilterValue"
                      validationState={this.getValidationState()}
                    >
                      <ControlLabel>Enter value</ControlLabel>
                      <FormControl
                        type="text"
                        value={value}
                        placeholder="Enter value"
                        onChange={this.changeFilterValueHandler}
                      />
                    </FormGroup>
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

export default FilterPanel;
