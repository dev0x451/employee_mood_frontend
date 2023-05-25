import classes from "./errorpopup.module.css";
import Warning from "@/assets/warning__28.svg";

export const ErrorPopup = () => {
  return (
    <div className={classes.errorPopup}>
      <button className={classes.closeBtn} />
      <img src={Warning} className={classes.warningImg} alt="warning image" />
      <p className={classes.warningText}>Неверный логин или пароль</p>
    </div>
  );
};
