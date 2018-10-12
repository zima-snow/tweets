import React, { Component } from 'react';
import CounterInput from 'react-bootstrap-counter';
import {
  FormGroup,
  ControlLabel,
} from 'react-bootstrap';

class Counter extends Component {

  changeValueHandler = (value) => {
    const { changeValue } = this.props;
    changeValue(value);
  }

  render() {
    const {
      id,
      label,
      value,
      min,
      max,
    } = this.props;
    return (
      <FormGroup
        controlId={id}
      >
        <ControlLabel>{label}</ControlLabel>
        <CounterInput
          value={value}
          min={min || 0}
          max={max || Infinity}
          onChange={this.changeValueHandler}
        />
      </FormGroup>
    );
  }
}

export default Counter;
