import React, { useState } from "react";
import useStyles from "./DropdownStyle";

const Dropdown = () => {
  const [visible, setVisible] = useState(false);
  const { dropdown, dropdownButton, dropdownMenu } = useStyles();

  const toggleVisible = () => setVisible((prevVisible) => !prevVisible);

  return (
    <div className={dropdown}>
      <button className={dropdownButton} type="button" onClick={toggleVisible}>
        {visible ? "Hide menu" : "Show menu"}
      </button>

      {visible && <div className={dropdownMenu}>Выпадающее меню</div>}
    </div>
  );
};

export default Dropdown;
