import React from 'react';

const EventMessageBtn = ({ changeMessage, label, s }) => {
  const { button } = s;
  
  return (
    <button
      className={button}
      type="button"
      onClick={changeMessage}>
        {label}
    </button>
  );
};

export default EventMessageBtn;