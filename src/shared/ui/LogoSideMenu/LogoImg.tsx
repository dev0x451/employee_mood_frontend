import classes from "./logo.module.css";
import Logo from "@/assets/logo-side-bar.svg";

export const LogoSideMenu = () => {
  return <img src={Logo} alt="Logo" className={classes.logo} />;
};
