import { useState } from 'react';
import { connect } from 'react-redux';
// import Controls from './Controls';
// import { connect } from 'react-redux';
// import * as actions from '../../redux/counter/counter-actions';
import useStyles from './CounterGeriStyles';

const CounterGeri = () => {
  // const [selectValue, setselectValue] = useState(1);
  // const [count, setCount] = useState();
  const s = useStyles();

  // const handleDecrement = () => setCount(count - 1);
  // const handleIncrement = () => setCount(count + 1);

  return (
    <div className={s.counter}>
      {/* <select></select> */}
      <button className={s.counterBtn}>-</button>
      <span>0</span>
      <button className={s.counterBtn}>+</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state,
});

export default connect(mapStateToProps)(CounterGeri);
