import { FC } from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-logo.module.scss";

const AppLogo: FC = () => {
  return (
    <div className={styles.logo}>
      <Logo />
    </div>
  );
};

export default AppLogo;
