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
import { resetStateOrder } from "@/services/order/reducer";
import { selectLoadingStatusOrder } from "@/services/order/selectors";
import Loader from "@/components/loader/loader";
import { selectUser } from "@/services/user/selectors";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutePath } from "@/constants/router";

const TotalPrice: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { ingredients, bun } = useAppSelector(selectBurgerConstructor);
  const loading = useAppSelector(selectLoadingStatusOrder);
  const user = useAppSelector(selectUser);
  const { isModalOpen, openModal, closeModal } = useModal();

  const ingredientsPrice = useMemo(() => ingredients.reduce((acc, item) => acc + item.price, 0), [ingredients]);
  const bunPrice = useMemo(() => (bun ? bun.price * 2 : 0), [bun]);
  const totalPrice = useMemo(() => ingredientsPrice + bunPrice, [ingredientsPrice, bunPrice]);

  const ids = useMemo(() => {
    const ingredientIds = ingredients.map((ingredients) => ingredients._id);
    if (bun) ingredientIds.push(bun._id);
    return ingredientIds;
  }, [bun, ingredients]);

  const onClickCreateOrder = () => {
    if (!bun) return;
    if (!user) {
      navigate(RoutePath.login, { state: { from: location.pathname } });
    } else {
      dispatch(createOrder(ids));
      openModal();
      dispatch(resetStateConstructor());
    }
  };

  const onClickCloseModal = () => {
    closeModal();
    dispatch(resetStateOrder());
  };

  return (
    <div className={styles.price_block}>
      <p className={styles.total_price}>
        <span className="text text_type_digits-medium">{totalPrice}</span>
        <CurrencyIcon type="primary" />
      </p>
      <Button htmlType="button" type="primary" size="large" onClick={onClickCreateOrder}>
        Оформить заказ
      </Button>

      {isModalOpen && (
        <Modal onClose={onClickCloseModal}>{loading ? <Loader className={styles.loader} /> : <OrderDetails />}</Modal>
      )}
    </div>
  );
};

export default TotalPrice;
