import React, { Component } from 'react';
import {Jumbotron, Container, Button} from 'reactstrap';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const addAction = {type: 'ADD'};
const removeAction = {type: 'REMOVE'};
const addAction10 = {type: 'ADD10'};
const removeAction10 = {type: 'REMOVE10'};
const resetAction = {type: 'RESET'};

class CounterComponent extends Component {
  render() {
    const { counter, dispatch } = this.props;
    return (
      <Jumbotron>
        <Container>
        <h1 class="display-4">Counter Redux</h1>
          <Button onClick={() => dispatch(addAction)}>add 1</Button>{' '}
          <Button onClick={() => dispatch(removeAction)}>remove 1</Button>{' '}
          <Button onClick={() => dispatch(addAction10)}>add 10</Button>{' '}
          <Button onClick={() => dispatch(removeAction10)}>remove 10</Button>{' '}
          <span class="btn">{counter}</span>
          <span class="float-right">
            <Button color="danger" onClick={() => dispatch(resetAction)}>Reset</Button>
          </span>
        </Container>
      </Jumbotron>
    );
  }
}

const mapStateToProps = state => ({
  counter: state
});

const CounterContainer = connect(mapStateToProps)(CounterComponent);

export default CounterContainer;
