import cn from "classnames";
import OrdersList from "@/components/orders-list/orders-list";
import OrderCounter from "@/components/orders-counter/orders-counter";
import styles from "./feed.module.scss";

const FeedPage = () => {
  return (
    <main className={cn("pt-10", styles.container)}>
      <h2 className="text text_type_main-large mb-5">Лента заказов</h2>
      <div className={styles.main}>
        <OrdersList />
        <OrderCounter />
      </div>
    </main>
  );
};

export default FeedPage;
