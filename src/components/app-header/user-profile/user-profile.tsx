import { FC } from "react";
import cn from "classnames";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./user-profile.module.scss";

const UserProfile: FC = () => {
  return (
    <div className={styles.user_profile}>
      <a className={styles.link}>
        <ProfileIcon type="secondary" />
        <span
          className={cn(styles.title, {
            [styles.title_inactive]: true
          })}
        >
          Личный кабинет
        </span>
      </a>
    </div>
  );
};

export default UserProfile;
