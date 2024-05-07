import { FC, useMemo } from "react";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./total-price.module.scss";
import Modal from "@/components/modal/modal";
import OrderDetails from "@/components/order-details/order-details";
import { useModal } from "@/hooks/useModal";
import { useAppSelector } from "@/services/hooks";
import { selectBurgerConstructor } from "@/services/burger-constructor/selectors";

const TotalPrice: FC = () => {
  const { ingredients, bun } = useAppSelector(selectBurgerConstructor);
  const { isModalOpen, openModal, closeModal } = useModal();

  const ingredientsPrice = useMemo(() => ingredients.reduce((acc, item) => acc + item.price, 0), [ingredients]);
  const bunPrice = useMemo(() => (bun ? bun.price * 2 : 0), [bun]);

  return (
    <div className={styles.price_block}>
      <p className={styles.total_price}>
        <span className="text text_type_digits-medium">{ingredientsPrice + bunPrice}</span>
        <CurrencyIcon type="primary" />
      </p>
      <Button htmlType="button" type="primary" size="large" onClick={openModal}>
        Оформить заказ
      </Button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};

export default TotalPrice;
