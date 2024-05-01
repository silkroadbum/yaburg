import { FC } from "react";
import cn from "classnames";
import { BurgerIcon, ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./navigation-list.module.scss";

export const NavigationList: FC = () => {
  return (
    <ul className={styles.nav_list}>
      <li className={cn("pt-4 pb-4 pl-5 pr-5", styles.list_item)}>
        <BurgerIcon type="primary" />
        <span className="text text_type_main-default ml-2">Конструктор</span>
      </li>
      <li className={cn("pt-4 pb-4 pl-5 pr-5", styles.list_item)}>
        <ListIcon type="secondary" />
        <span className="text text_type_main-default text_color_inactive ml-2">Лента заказов</span>
      </li>
    </ul>
  );
};
