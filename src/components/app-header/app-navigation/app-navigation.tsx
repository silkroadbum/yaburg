import { FC } from "react";
import { BurgerIcon, ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import styles from "./app-navigation.module.scss";

const AppNavigation: FC = () => {
  return (
    <nav className={styles.navigation}>
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
    </nav>
  );
};

export default AppNavigation;
