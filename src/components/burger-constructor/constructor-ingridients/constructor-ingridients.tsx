import { FC } from "react";
import cn from "classnames";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IBurgerIngridientWithUniqKey } from "@/types/burger";
import styles from "./constructor-ingridients.module.scss";
import { useAppDispatch } from "@/services/hooks";
import { removeIngredients } from "@/services/burger-constructor/reducer";

interface IProps {
  ingridients: IBurgerIngridientWithUniqKey[];
}

const ConstructorIngridients: FC<IProps> = ({ ingridients }) => {
  const dispatch = useAppDispatch();
  const removeIngredient = (uniqKey: string) => {
    dispatch(removeIngredients(uniqKey));
  };

  return (
    <ul className={cn("custom-scroll", styles.burger_filling)}>
      {ingridients.map((el) => (
        <li key={el.uniqKey} className={styles.burger_ingridient}>
          <DragIcon type="primary" />
          <ConstructorElement
            text={el.name}
            price={el.price}
            thumbnail={el.image}
            handleClose={() => removeIngredient(el.uniqKey)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ConstructorIngridients;
