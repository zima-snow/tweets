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
import {
  filterConditions,
  filterOperators,
} from '../../constants/filter';

import './filter-panel.css';

class FilterPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCondition: filterConditions.userMentions,
      currentOperator: filterOperators.equals,
      currentValue: '',
      isFilterDisable: true,
    };
  }

  getValidationState = () => {
    const { currentValue } = this.state;
    const length = currentValue.length;
    return length > 0 ? 'success' : 'error';
  }

  changeFilterConditionHandler = (option) => {
    this.setState({ currentCondition: option });
  }

  changeFilterOperatorHandler = (option) => {
    this.setState({ currentOperator: option });
  }

  changeFilterValueHandler = (e) => {
    this.setState({
      currentValue: e.target.value,
      isFilterDisable: e.target.value.length === 0,
    });
  }

  filterButtonClickHandler = () => {
    const {
      currentCondition,
      currentOperator,
      currentValue,
    } = this.state;
    const { onFilterClickHandler } = this.props;
    onFilterClickHandler(currentCondition, currentOperator, currentValue);
  }

  render() {
    const {
      currentValue,
      isFilterDisable,
    } = this.state;
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
                      {filterConditions}
                    </Select>
                  </Col>
                  <Col lg={4} md={4} sm={4} xs={12}>
                    <Select
                      id="formFilterOperator"
                      label="Choose operator"
                      changeSelectValueHandler={this.changeFilterOperatorHandler}
                    >
                      {filterOperators}
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
                        value={currentValue}
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
                        disabled={isFilterDisable}
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
