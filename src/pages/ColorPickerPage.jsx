import React, { Fragment } from "react";
import ColorPicker from "../components/ColorPicker";
import colors from "../components/ColorPicker/colors.json";

const ColorPickerPage = () => {
  return (
    <Fragment>
      <h1>Color Picker</h1>
      <ColorPicker options={colors} />
    </Fragment>
  );
};

export default ColorPickerPage;
