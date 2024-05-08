import { FC, useMemo } from "react";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./total-price.module.scss";
import Modal from "@/components/modal/modal";
import OrderDetails from "@/components/order-details/order-details";
import { useModal } from "@/hooks/useModal";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { selectBurgerConstructor } from "@/services/burger-constructor/selectors";
import { createOrder } from "@/services/order/actions";
import { resetStateConstructor } from "@/services/burger-constructor/reducer";

const TotalPrice: FC = () => {
  const dispatch = useAppDispatch();
  const { ingredients, bun } = useAppSelector(selectBurgerConstructor);
  const { isModalOpen, openModal, closeModal } = useModal();

  const ingredientsPrice = useMemo(() => ingredients.reduce((acc, item) => acc + item.price, 0), [ingredients]);
  const bunPrice = useMemo(() => (bun ? bun.price * 2 : 0), [bun]);

  const ids = useMemo(() => {
    const arrayIds = ingredients.map((ingredients) => ingredients._id);
    if (bun) arrayIds.push(bun._id);
    return arrayIds;
  }, [bun, ingredients]);

  const onClickCreateOrder = () => {
    dispatch(createOrder(ids));
    openModal();
    dispatch(resetStateConstructor());
  };

  return (
    <div className={styles.price_block}>
      <p className={styles.total_price}>
        <span className="text text_type_digits-medium">{ingredientsPrice + bunPrice}</span>
        <CurrencyIcon type="primary" />
      </p>
      <Button htmlType="button" type="primary" size="large" onClick={onClickCreateOrder}>
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
