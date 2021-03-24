import { connect } from 'react-redux';
import {
  incrementAction,
  decrementAction,
  setStepAction,
} from '../../redux/counterGeri/actions';
import useStyles from './CounterGeriStyles';

const CounterGeri = ({ value, step, increment, decrement, setStep }) => {
  const s = useStyles();

  return (
    <div className={s.counter}>
      <select
        className={s.select}
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      >
        <option value='1'>1</option>
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='50'>50</option>
      </select>
      <button className={s.counterBtn} onClick={() => decrement(step)}>
        -
      </button>
      <span>{value}</span>
      <button className={s.counterBtn} onClick={() => increment(step)}>
        +
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.counterGeri.value,
  step: state.counterGeri.step,
});

const mapDispatchToProps = {
  increment: incrementAction,
  decrement: decrementAction,
  setStep: setStepAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterGeri);
