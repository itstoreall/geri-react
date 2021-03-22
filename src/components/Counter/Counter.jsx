import React from 'react';
import Controls from './Controls';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

function Counter({ value, onIncrement, onDecrement }) {
  return (
    <div>
      <span>{value}</span>
      <Controls onIncrement={onIncrement} onDecrement={onDecrement} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.counterValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(actions.increment(5)),
    onDecrement: () => dispatch(actions.decrement(5)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
