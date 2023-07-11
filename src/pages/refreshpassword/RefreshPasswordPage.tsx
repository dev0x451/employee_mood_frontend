import "@/shared/styles/styles.css";
import classes from "./refreshpasswordpage.module.scss";
import { LogoImg } from "@/shared/ui/Logo/LogoImg";
import { useSearchParams } from "react-router-dom";
import { EmailFormRefresh } from "@/components/EmailFormRefresh/EmailFormRefresh";
import { PasswordFormRefresh } from "@/components/PasswordFormRefresh/PasswordFormRefresh";
import React, { useEffect, useState } from "react";
import { FormikValues } from "formik";

interface Props {
  handleSendResetCode: (email: string) => void;
  handleResetPassword: (values: FormikValues, resetCode: string) => void;
}
export const RefreshPasswordPage: React.FC<Props> = ({
  handleSendResetCode,
  handleResetPassword,
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
      <div className={classes.logoContainer}>
        <LogoImg />
      </div>
      {!resetCode ? (
        <EmailFormRefresh handleSendResetCode={handleSendResetCode} />
      ) : (
        <PasswordFormRefresh
          resetCode={resetCode}
          handleResetPassword={handleResetPassword}
        />
      )}
    </div>
  );
};
