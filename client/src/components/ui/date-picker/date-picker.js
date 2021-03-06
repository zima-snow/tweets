import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import DatePicker from 'react-datepicker';
import {
  FormGroup,
  ControlLabel,
} from 'react-bootstrap';

import 'react-datepicker/dist/react-datepicker.css';
import './date-picker.css';

class DatePickerComponent extends Component {

  changeValueHandler = (value) => {
    const { changeValue } = this.props;
    changeValue(value);
  }

  render() {
    const {
      id,
      label,
      value,
    } = this.props;
    return (
      <FormGroup
        controlId={id}
      >
        <ControlLabel>{label}</ControlLabel>
        <DatePicker
          className="date-picker"
          todayButton={"Today"}
          dateFormat="MMMM Do YYYY"
          selected={value}
          onChange={this.changeValueHandler}
          withPortal
        />
      </FormGroup>
    );
  }
}

DatePickerComponent.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.shape({}),
  changeValue: PropTypes.func,
};

export default DatePickerComponent;
