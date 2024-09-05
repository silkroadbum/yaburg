import cn from "classnames";
import styles from "./not-found.module.scss";

export const NotFound = () => {
  return <div className={cn("text text_type_main-large", styles.container)}>УПС... Страница не найдена.</div>;
};
