import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';

class Select extends Component {

  getOptions = () => {
    const { children } = this.props;
    return Object.keys(children).map((key) => {
      return (
        <option key={key} value={key}>
          {children[key]}
        </option>
      );
    })
  }

  onChangeHandler = (e) => {
    const { changeSelectValueHandler } = this.props;
    changeSelectValueHandler(e.target.value);
  }

  render() {
    const {
      id,
      label,
    } = this.props;
    return (
      <FormGroup
        controlId={id}
      >
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          componentClass="select"
          placeholder={label}
          onChange={this.onChangeHandler}
        >
          {this.getOptions()}
        </FormControl>
      </FormGroup>
    );
  }
}

export default Select;
