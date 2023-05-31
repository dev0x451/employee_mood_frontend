import "@/shared/styles.css";
import classes from "./refreshpasswordpage.module.css";
import { LogoImg } from "@/shared/ui/Logo/LogoImg";
import { useSearchParams } from "react-router-dom";
import { EmailFormRefresh } from "@/components/EmailFormRefresh/EmailFormRefresh";
import { PasswordFormRefresh } from "@/components/PasswordFormRefresh/PasswordFormRefresh";

export const RefreshPasswordPage = () => {
  // получение reset-кода для восстановления пароля
  const [searchParams] = useSearchParams();
  const reset_code = searchParams.get("invite_code");
  const reset_code_decoded =
    (reset_code && reset_code.replace("%3D", "=").replace(/ /g, "+")) || "";
  return (
    <div className={classes.refreshPasswordPage}>
      <div className="logo-container">
        <LogoImg />
      </div>
      {!reset_code_decoded ? <EmailFormRefresh /> : <PasswordFormRefresh />}
    </div>
  );
};
