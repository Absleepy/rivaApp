import React from "react";
import style from "./BlackCloseBtn.module.scss";
const BlackCloseBtn = ({ handleClose, drawerPosition }) => {
  return (
    <button
      onClick={handleClose}
      className={`${style.btn} ${drawerPosition === "top" && style.top}`}
    >
      <span class="material-icons">close</span>
    </button>
  );
};

export default BlackCloseBtn;
