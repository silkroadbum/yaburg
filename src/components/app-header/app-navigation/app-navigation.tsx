import { FC } from "react";
import { NavigationList } from "./navigation-list/navigation-list";
import styles from "./app-navigation.module.scss";

const AppNavigation: FC = () => {
  return (
    <nav className={styles.navigation}>
      <NavigationList />
    </nav>
  );
};

export default AppNavigation;
