import { FC } from "react";
import cn from "classnames";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./user-profile.module.scss";
import { NavLink } from "react-router-dom";
import { RoutePath } from "@/constants/router";

const UserProfile: FC = () => {
  return (
    <div className={styles.user_profile}>
      <NavLink className={cn("pt-2 pb-2 pl-5 pr-5", styles.link)} to={RoutePath.profile}>
        {({ isActive }) => (
          <>
            <ProfileIcon type={isActive ? "primary" : "secondary"} />
            <span
              className={cn("text text_type_main-default text_color_primary ml-2", {
                ["text_color_inactive"]: !isActive
              })}
            >
              Личный кабинет
            </span>
          </>
        )}
      </NavLink>
    </div>
  );
};

export default UserProfile;
