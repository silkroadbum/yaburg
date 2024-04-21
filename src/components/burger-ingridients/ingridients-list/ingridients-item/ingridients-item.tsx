import { FC, useState } from "react";
import cn from "classnames";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IBurgerIngridient } from "@/types/burger";
import styles from "./ingridients-item.module.scss";
import Modal from "@/components/modal/modal";
import IngridientDetails from "@/components/ingridient-details/ingridient-details";

interface Iprops {
  ingridient: IBurgerIngridient;
}

export const IngridientsItem: FC<Iprops> = ({ ingridient }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <li className={cn("mb-8", styles.card)} onClick={openModal}>
        <div className={cn("pr-4 pl-4", styles.top_card)}>
          <img className="mb-1" src={ingridient.image} alt={ingridient.name} />
          {ingridient.__v > 0 && <Counter count={ingridient.__v} size="default" />}
          <p className={cn("text text_type_digits-default mb-1", styles.card_price)}>
            <span className="mr-2">{ingridient.price}</span>
            <CurrencyIcon type="primary" />
          </p>
        </div>
        <p className={cn("text text_type_main-default", styles.card_title)}>{ingridient.name}</p>
      </li>
      {isOpenModal && (
        <Modal header="Детали ингредиента" onClose={closeModal}>
          <IngridientDetails ingridient={ingridient} />
        </Modal>
      )}
    </>
  );
};

export default IngridientsItem;
