import classes from "./logo.module.scss";
import Logo from "@/assets/logo.svg";

export const LogoImg = () => {
  return <img src={Logo} alt="Logo" className={classes.logo} />;
};
