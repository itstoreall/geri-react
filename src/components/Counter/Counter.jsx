import React from 'react';
import Controls from './Controls';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import useStyles from './CounterStyles';

function Counter({ value, step, onIncrement, onDecrement }) {
  const s = useStyles();

  return (
    <div className={s.counter}>
      <span>{value}</span>
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (value) => dispatch(actions.increment(value)),
  onDecrement: (value) => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
