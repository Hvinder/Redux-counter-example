import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionCreators from "../../store/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.cntr} />
        <CounterControl
          label="Increment"
          clicked={this.props.incrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.decrementCounter}
        />
        <CounterControl label="Add 5 async" clicked={this.props.addCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.subtractCounter}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cntr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch(actionCreators.increment()),
    decrementCounter: () => dispatch(actionCreators.decrement()),
    addCounter: () => dispatch(actionCreators.addAsync({ value: 5 })),
    subtractCounter: () => dispatch(actionCreators.subtract({ value: 5 })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
