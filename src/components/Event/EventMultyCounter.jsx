import { useState } from "react";

const EventMultyCounter = ({ initialValue, onDelete, s }) => {
  const [count, setCount] = useState(initialValue);
  const { multyCounter, multyCounterBtn } = s;

  const handleDecrement = () => {
    return setCount(count - 1);
  };

  const handlIncrement = () => {
    return setCount(count + 1);
  };

  return (
    <div className={multyCounter}>
      <button className={multyCounterBtn} onClick={handleDecrement}>
        -
      </button>
      <span>{count}</span>
      <button className={multyCounterBtn} onClick={handlIncrement}>
        +
      </button>
      <button className={multyCounterBtn} onClick={onDelete}>
        ×
      </button>
    </div>
  );
};

EventMultyCounter.defaultProps = {
  initialValue: 0,
};

export default EventMultyCounter;
