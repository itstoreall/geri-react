import { useState } from 'react';
import { connect } from 'react-redux';
import {
  incrementAction,
  decrementAction,
} from '../../redux/counterGeri/actions';
import useStyles from './CounterGeriStyles';

const CounterGeri = ({ value, increment, decrement }) => {
  const [selectValue, setSelectValue] = useState(1);
  const s = useStyles();

  return (
    <div className={s.counter}>
      <select
        value={selectValue}
        onChange={(e) => setSelectValue(Number(e.target.value))}
      >
        <option value='1'>1</option>
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='50'>50</option>
      </select>
      <button className={s.counterBtn} onClick={() => decrement(selectValue)}>
        -
      </button>
      <span>{value}</span>
      <button className={s.counterBtn} onClick={() => increment(selectValue)}>
        +
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.counterGeri,
});

const mapDispatchToProps = {
  increment: incrementAction,
  decrement: decrementAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterGeri);
