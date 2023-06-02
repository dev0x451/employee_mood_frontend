import "@/shared/styles.css";
import classes from "./refreshpasswordpage.module.css";
import { LogoImg } from "@/shared/ui/Logo/LogoImg";
import { useSearchParams } from "react-router-dom";
import { EmailFormRefresh } from "@/components/EmailFormRefresh/EmailFormRefresh";
import { PasswordFormRefresh } from "@/components/PasswordFormRefresh/PasswordFormRefresh";
import React, { useEffect, useState } from "react";
import { FormikValues } from "formik";

interface Props {
  handleSendResetCode: (email: string) => void;
  handleResetPassword: (values: FormikValues, resetCode: string) => void;
  success: string;
  error: string;
  closeErrorPopup: () => void;
  popupOpened: boolean;
}
export const RefreshPasswordPage: React.FC<Props> = ({
  handleSendResetCode,
  handleResetPassword,
  success,
  error,
  popupOpened,
  closeErrorPopup,
}) => {
  // получение reset-кода для восстановления пароля
  const [resetCode, setResetCode] = useState("");
  const [searchParams] = useSearchParams();
  const reset_code = searchParams.get("reset_code");
  const reset_code_decoded =
    (reset_code && reset_code.replace("%3D", "=").replace(/ /g, "+")) || "";

  useEffect(() => {
    setResetCode(reset_code_decoded);
  }, [reset_code]);

  return (
    <div className={classes.refreshPasswordPage}>
      <div className="logo-container">
        <LogoImg />
      </div>
      {!resetCode ? (
        <EmailFormRefresh
          handleSendResetCode={handleSendResetCode}
          success={success}
          error={error}
          closeErrorPopup={closeErrorPopup}
          popupOpened={popupOpened}
        />
      ) : (
        <PasswordFormRefresh
          resetCode={resetCode}
          handleResetPassword={handleResetPassword}
          error={error}
          closeErrorPopup={closeErrorPopup}
          popupOpened={popupOpened}
        />
      )}
    </div>
  );
};
