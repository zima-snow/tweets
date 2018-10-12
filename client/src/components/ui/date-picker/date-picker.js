import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import {
  FormGroup,
  ControlLabel,
} from 'react-bootstrap';

import 'react-datepicker/dist/react-datepicker.css';

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
          todayButton={"Today"}
          dateFormat="MMMM Do YYYY"
          selected={value}
          onChange={this.changeValueHandler}
        />
      </FormGroup>
    );
  }
}

export default DatePickerComponent;
