import React, { Component } from 'react';
import {
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';

class Input extends Component {

  getValidationState = () => {
    const { value } = this.props;
    const length = value.length;
    return length > 0 ? 'success' : 'error';
  }

  changeValueHandler = (e) => {
    const { changeValue } = this.props;
    changeValue(e.target.value);
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
        validationState={this.getValidationState()}
      >
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          type="text"
          value={value}
          placeholder={label}
          onChange={this.changeValueHandler}
        />
      </FormGroup>
    );
  }
}

export default Input;
