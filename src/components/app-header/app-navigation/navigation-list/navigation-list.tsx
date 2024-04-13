import { FC } from "react";
import cn from "classnames";
import styles from "./navigation-list.module.scss";
import { BurgerIcon, ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const NavigationList: FC = () => {
  return (
    <ul className={styles.nav_list}>
      <li className={styles.list_item}>
        <BurgerIcon type="primary" />
        <span className={cn(styles.item_title)}>Конструктор</span>
      </li>
      <li className={styles.list_item}>
        <ListIcon type="secondary" />
        <span
          className={cn(styles.item_title, {
            [styles.item_title_inactive]: true
          })}
        >
          Лента заказов
        </span>
      </li>
    </ul>
  );
};
