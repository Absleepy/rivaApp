import React from "react";
import style from "./Buttons.module.scss";
const ShopNowBtn = ({ type, btnClass, onclick, text }) => {
  return (
    <button
      className={`${btnClass}  ${style.btn}`}
      type={type}
      onClick={onclick}
    >
      <span>{text}</span>
      <div className={style.before}>
        <span className="material-icons-outlined">navigate_before</span>
      </div>
      <div className={style.next}>
        <span className="material-icons-outlined">navigate_next</span>
      </div>
    </button>
  );
};

export default ShopNowBtn;
