import React from "react";
const CheckBoxComponent = ({ handleCheckboxChange, item }) => {
  return (
    <div className="d-flex align-items-center">
      <input
        className="c-pointer"
        type="checkbox"
        id={item.id}
        onChange={handleCheckboxChange}
      />
      <label
        className="c-pointer"
        style={{ marginLeft: "12px" }}
        htmlFor={item.id}
      >
        {item.title}
      </label>
    </div>
  );
};

export default CheckBoxComponent;
