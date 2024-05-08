import { FC } from "react";
import cn from "classnames";
import { IBurgerIngridientWithUniqKey } from "@/types/burger";
import styles from "./constructor-ingridients.module.scss";
import ConstructorIngridient from "./constructor-ingredient/constructor-ingredient";

interface IProps {
  ingridients: IBurgerIngridientWithUniqKey[];
}

const ConstructorIngridients: FC<IProps> = ({ ingridients }) => {
  return (
    <ul className={cn("custom-scroll", styles.burger_filling)}>
      {ingridients.map((el, index) => (
        <ConstructorIngridient key={el.uniqKey} ingridient={el} index={index} />
      ))}
    </ul>
  );
};

export default ConstructorIngridients;
