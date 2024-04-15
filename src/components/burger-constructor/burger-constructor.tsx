import { FC, useMemo } from "react";
import cn from "classnames";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import bun from "@/images/burger-icons/bun.png";
import styles from "./burger-constructor.module.scss";
import { IBurgerIngridient } from "@/types/burger";
import TotalPrice from "./total-price/total-price";
import ConstructorIngridients from "./constructor-ingridients/constructor-ingridients";

interface IProps {
  ingridients: IBurgerIngridient[];
}

const BurgerConstructor: FC<IProps> = ({ ingridients }) => {
  const totalPrice = useMemo(() => ingridients.reduce((acc, currentItem) => acc + currentItem.price, 0), [ingridients]);

  return (
    <div className={cn("pt-25 pl-4", styles.burger_constructor)}>
      <div className={cn("mb-10", styles.constructor_elements)}>
        <div className={styles.burger_bun}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={20}
            thumbnail={bun}
          />
        </div>
        <ConstructorIngridients ingridients={ingridients} />
        <div className={styles.burger_bun}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={20}
            thumbnail={bun}
          />
        </div>
      </div>
      <TotalPrice price={totalPrice} />
    </div>
  );
};

export default BurgerConstructor;
