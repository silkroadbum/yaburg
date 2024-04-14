import { FC } from "react";
import cn from "classnames";
import styles from "./app-header.module.scss";
import AppNavigation from "./app-navigation/app-navigation";
import AppLogo from "./app-logo/app-logo";
import UserProfile from "./user-profile/user-profile";

const AppHeader: FC = () => {
  return (
    <header className={styles.header}>
      <div className={cn("pt-4 pb-4 pl-2 pr-2", styles.container)}>
        <AppNavigation />
        <AppLogo />
        <UserProfile />
      </div>
    </header>
  );
};

export default AppHeader;
