import classes from "./errorpopup.module.css";
import Warning from "@/assets/warning__28.svg";
import { useState } from "react";

export const ErrorPopup = () => {
  const [popupOpened, setPopupOpened] = useState(true);

  const closePopup = () => {
    setPopupOpened(false);
  };

  return (
    <div
      className={
        !popupOpened
          ? classes.errorPopup
          : `${classes.errorPopup} ${classes.errorPopupOpened}`
      }
    >
      <button onClick={() => closePopup()} className={classes.closeBtn} />
      <img src={Warning} className={classes.warningImg} alt="warning image" />
      <p className={classes.warningText}>Неверный логин или пароль</p>
    </div>
  );
};
