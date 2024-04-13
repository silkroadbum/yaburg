import { FC } from "react";
import styles from "./app-header.module.scss";
import AppNavigation from "./app-navigation/app-navigation";
import AppLogo from "./app-logo/app-logo";
import UserProfile from "./user-profile/user-profile";

const AppHeader: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <AppNavigation />
        <AppLogo />
        <UserProfile />
      </div>
    </header>
  );
};

export default AppHeader;
