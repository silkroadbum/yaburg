import { FC } from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IBurgerIngridientWithUniqKey } from "@/types/burger";
import styles from "./constructor-ingridient.module.scss";
import { useAppDispatch } from "@/services/hooks";
import { removeIngredients } from "@/services/burger-constructor/reducer";

interface IProps {
  ingridient: IBurgerIngridientWithUniqKey;
}

const ConstructorIngridient: FC<IProps> = ({ ingridient }) => {
  const dispatch = useAppDispatch();
  const removeIngredient = () => {
    dispatch(removeIngredients(ingridient.uniqKey));
  };

  return (
    <li className={styles.burger_ingridient}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingridient.name}
        price={ingridient.price}
        thumbnail={ingridient.image}
        handleClose={removeIngredient}
      />
    </li>
  );
};

export default ConstructorIngridient;
