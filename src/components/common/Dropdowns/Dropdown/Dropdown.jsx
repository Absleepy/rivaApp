import React, { useState } from "react";
import style from "./Dropdown.module.scss";
const SimpleDropdown = ({ children, item }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <div className={style.dropdown}>
      <div onClick={handleClose} className={style.header}>
        {item?.isParent ? <h4>{item.title}</h4> : <h5>{item.title}</h5>}
        {item?.isParent ? (
          <span class="material-icons">{`keyboard_arrow_${
            open ? "up" : "down"
          }`}</span>
        ) : (
          <span class="material-icons">{open ? "remove" : "add"}</span>
        )}
      </div>
      <div className={style.dropDownBody}>{open && children}</div>
    </div>
  );
};

export default SimpleDropdown;
