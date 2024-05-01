import { FC } from "react";
import cn from "classnames";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./user-profile.module.scss";

const UserProfile: FC = () => {
  return (
    <div className={styles.user_profile}>
      <a className={cn("pt-2 pb-2 pl-5 pr-5", styles.link)}>
        <ProfileIcon type="secondary" />
        <span className="text text_type_main-default text_color_inactive ml-2">Личный кабинет</span>
      </a>
    </div>
  );
};

export default UserProfile;
