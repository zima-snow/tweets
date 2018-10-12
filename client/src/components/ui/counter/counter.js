import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
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
          min={min}
          max={max}
          onChange={this.changeValueHandler}
        />
      </FormGroup>
    );
  }
}

Counter.defaultProps = {
  min: 0,
  max: Infinity,
};

Counter.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  changeValue: PropTypes.func,
};

export default Counter;
