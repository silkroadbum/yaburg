import { FC } from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-logo.module.scss";
import { RoutePath } from "@/constants/router";
import { Link } from "react-router-dom";

const AppLogo: FC = () => {
  return (
    <div className={styles.logo}>
      <Link to={RoutePath.home}>
        <Logo />
      </Link>
    </div>
  );
};

export default AppLogo;
