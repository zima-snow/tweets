import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  ButtonToolbar,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';

import { COUNT_TWEETS } from '../../constants';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsername: '',
      isGetTweetsButtonDisable: true,
      isListShow: false,
      isStatShow: false,
    }
  }

  getValidationState = () => {
    const length = this.state.currentUsername.length;
    return length > 0 ? 'success' : 'error';
  }

  changeUsernameHandler = (e) => {
    this.setState({
      currentUsername: e.target.value,
      isGetTweetsButtonDisable: e.target.value.length === 0,
    });
  }

  getTweetsClickHandler = () => {
    const { getTweets } = this.props;
    const { currentUsername } = this.state;
    getTweets(currentUsername, COUNT_TWEETS);
  }

  render() {
    const {
      currentUsername,
      isGetTweetsButtonDisable,
    } = this.state;
    return (
      <div>
        <Grid>
          <Row>
            <Col lg={8} md={8} sm={10} xs={12} lgOffset={2} mdOffset={2} smOffset={1}>
              <FormGroup
                controlId="formUsername"
                validationState={this.getValidationState()}
              >
                <ControlLabel>Please, enter Twitter's username without '@'</ControlLabel>
                <FormControl
                  type="text"
                  value={currentUsername}
                  placeholder="Enter username"
                  onChange={this.changeUsernameHandler}
                />
              </FormGroup>
            </Col>
            <Col lg={8} md={8} sm={10} xs={12} lgOffset={2} mdOffset={2} smOffset={1}>
              <ButtonToolbar>
                <Button
                  bsStyle="primary"
                  onClick={this.getTweetsClickHandler}
                  disabled={isGetTweetsButtonDisable}
                >
                  Get tweets
                </Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Main;
