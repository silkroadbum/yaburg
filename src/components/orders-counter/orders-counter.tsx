import { FC } from "react";
import cn from "classnames";
import styles from "./orders-counter.module.scss";

const OrderCounter: FC = () => {
  return (
    <div>
      <div className={cn("mb-15", styles.orders_numbers)}>
        <div className={styles.status}>
          <h3 className="mb-6 text text_type_main-medium">Готовы:</h3>
          <ul className={styles.list}>
            <li className={`${styles.done} text text_type_digits-default`}>032123</li>
          </ul>
        </div>
        <div className={styles.status}>
          <h3 className="mb-6 text text_type_main-medium">В работе:</h3>
          <ul className={styles.list}>
            <li className="text text_type_digits-default">032123</li>
          </ul>
        </div>
      </div>

      <div className="mb-15">
        <h3 className="mb-6 text text_type_main-medium">Выполнено за все время</h3>
        <p className={cn("text text_type_digits-large", styles.count)}>28752</p>
      </div>

      <div className="mb-15">
        <h3 className="mb-6 text text_type_main-medium">Выполнено за сегодня</h3>
        <p className={cn("text text_type_digits-large", styles.count)}>138</p>
      </div>
    </div>
  );
};

export default OrderCounter;
