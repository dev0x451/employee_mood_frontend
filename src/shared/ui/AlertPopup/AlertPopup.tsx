import classes from "./alertpopup.module.scss";
import Warning from "@/shared/ui/AlertPopup/ui/warning__28.svg";
import Success from "@/shared/ui/AlertPopup/ui/success.svg";
import { useRef } from "react";
import { useEscapeKey } from "@/shared/hooks/useEscapeKey";
import { useOutsideClick } from "@/shared/hooks/useOutsideClick";
import { CloseButton } from "@/shared/ui/CloseButton/CloseButton";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import * as alertErrorActions from "@/store/reducers/alertError/alertErrorReducer";
import * as alertSuccessActions from "@/store/reducers/alertSuccess/alertSuccessReducer";

export const AlertPopup = () => {
  const ref = useRef<null>(null);
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector(alertErrorActions.selectErrorMessage);
  const successMessage = useAppSelector(
    alertSuccessActions.selectSuccessMessage
  );

  const resetMessages = () => {
    dispatch(alertErrorActions.deleteErrorMessage());
    dispatch(alertSuccessActions.deleteSuccessMessage());
  };

  useEscapeKey(resetMessages);
  useOutsideClick(resetMessages, ref);

  return (
    <div
      className={
        errorMessage || successMessage
          ? `${classes.errorPopup} ${classes.errorPopupOpened}`
          : classes.errorPopup
      }
      ref={ref}
    >
      <CloseButton handleClick={resetMessages} />
      {errorMessage ? (
        <>
          <img src={Warning} className={classes.popupImg} alt="warning image" />
          <p className={classes.popupText}>{errorMessage}</p>
        </>
      ) : successMessage ? (
        <>
          <img src={Success} className={classes.popupImg} alt="success image" />
          <p className={classes.popupText}>{successMessage}</p>
        </>
      ) : null}
    </div>
  );
};
