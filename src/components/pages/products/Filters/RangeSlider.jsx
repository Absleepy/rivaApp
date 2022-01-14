import React from "react";
import Slider from "@material-ui/core/Slider";
import style from "./filters.module.scss";

const RangeSlider = () => {
  //   (HANDLECHANGE, VALUE, PRICE) will pass from parent (later)
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <div classsName={style.sliderParent}>
      <Slider
        value={value}
        color="red"
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      <div className="d-flex align-items-cetner justify-content-between">
        <button classsName={style.rangePriceBtn}>$5.93-453</button>
        <button classsName={style.rangeFilterBtn}>Filter</button>
      </div>
    </div>
  );
};

export default RangeSlider;
