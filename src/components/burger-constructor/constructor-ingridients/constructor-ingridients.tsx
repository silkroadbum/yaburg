import { FC } from "react";
import cn from "classnames";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IBurgerIngridient } from "@/types/burger";
import styles from "./constructor-ingridients.module.scss";

interface IProps {
  ingridients: IBurgerIngridient[];
}

const ConstructorIngridients: FC<IProps> = ({ ingridients }) => {
  return (
    <ul className={cn("custom-scroll", styles.burger_filling)}>
      {ingridients.map((el) => (
        <li key={el._id} className={styles.burger_ingridient}>
          <DragIcon type="primary" />
          <ConstructorElement text={el.name} price={el.price} thumbnail={el.image} />
        </li>
      ))}
    </ul>
  );
};

export default ConstructorIngridients;
