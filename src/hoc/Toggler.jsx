import { useState } from 'react';

const Toggler = ({ children }) => {
  const [show, setShow] = useState();

  const toggle = () => setShow((prev) => !prev);

  return children({
    show,
    toggle,
  });
};

export default Toggler;
