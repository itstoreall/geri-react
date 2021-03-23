import React from 'react';
import Controls from './Controls';
import { connect } from 'react-redux';
import * as actions from '../../redux/counterRepeta/counter-actions';
import useStyles from './CounterStyles';

function CounterRepeta({ value, step, onIncrement, onDecrement }) {
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
  value: state.counterRepeta.value,
  step: state.counterRepeta.step,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (value) => dispatch(actions.increment(value)),
  onDecrement: (value) => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterRepeta);
