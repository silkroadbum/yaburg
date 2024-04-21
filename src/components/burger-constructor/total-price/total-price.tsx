import { FC, useState } from "react";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./total-price.module.scss";
import Modal from "@/components/modal/modal";
import OrderDetails from "@/components/order-details/order-details";

interface IProps {
  price: number;
}

const TotalPrice: FC<IProps> = ({ price }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  return (
    <div className={styles.price_block}>
      <p className={styles.total_price}>
        <span className="text text_type_digits-medium">{price}</span>
        <CurrencyIcon type="primary" />
      </p>
      <Button htmlType="button" type="primary" size="large" onClick={openModal}>
        Оформить заказ
      </Button>
      {isOpenModal && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};

export default TotalPrice;
