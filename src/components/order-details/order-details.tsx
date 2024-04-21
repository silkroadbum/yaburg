import { FC } from "react";
import cn from "classnames";
import styles from "./order-details.module.scss";
import orderAccepted from "@/images/modal/order-accepted.svg";

const OrderDetails: FC = () => {
  return (
    <>
      <h2 className={cn("text text_type_digits-large mb-8", styles.header)}>034536</h2>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <span className={cn("mb-15", styles.accepted_icon)}>
        <img src={orderAccepted} alt="Галочка" width={107} height={102} />
      </span>
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mb-20">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
};

export default OrderDetails;
