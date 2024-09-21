import { FC } from "react";
import cn from "classnames";
import { BurgerIcon, ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./navigation-list.module.scss";
import { NavLink } from "react-router-dom";
import { RoutePath } from "@/constants/router";

export const NavigationList: FC = () => {
  return (
    <ul className={styles.nav_list}>
      <li>
        <NavLink to={RoutePath.home} className={cn("pt-4 pb-4 pl-5 pr-5", styles.list_item)}>
          {({ isActive }) => (
            <>
              <BurgerIcon type={isActive ? "primary" : "secondary"} />
              <span
                className={cn("text text_type_main-default text_color_primary ml-2", {
                  ["text_color_inactive"]: !isActive
                })}
              >
                Конструктор
              </span>
            </>
          )}
        </NavLink>
      </li>
      <li className={cn("pt-4 pb-4 pl-5 pr-5", styles.list_item)}>
        <ListIcon type="secondary" />
        <span className="text text_type_main-default text_color_inactive ml-2">Лента заказов</span>
      </li>
    </ul>
  );
};
