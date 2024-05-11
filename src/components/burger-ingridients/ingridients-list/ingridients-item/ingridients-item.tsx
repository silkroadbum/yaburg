import { FC, useMemo } from "react";
import cn from "classnames";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IBurgerIngridient } from "@/types/burger";
import styles from "./ingridients-item.module.scss";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { setIngredientModal } from "@/services/ingridientModal/reducer";
import { useDrag } from "react-dnd";
import { selectIngredientsCounter } from "@/services/burger-constructor/selectors";

interface Iprops {
  ingridient: IBurgerIngridient;
  openModal: () => void;
}

export const IngridientsItem: FC<Iprops> = ({ ingridient, openModal }) => {
  const ingredientsCounter = useAppSelector(selectIngredientsCounter);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setIngredientModal(ingridient));
    openModal();
  };

  const [{ isDrag }, dragRef] = useDrag({
    type: "ingridient",
    item: { ingridient },
    collect: (monitor) => ({
      isDrag: monitor.isDragging()
    })
  });

  const count = useMemo(() => {
    return ingredientsCounter[ingridient._id];
  }, [ingredientsCounter, ingridient]);

  return (
    <>
      <li
        className={cn("mb-8", styles.card, {
          [styles.card__dragged]: isDrag
        })}
        onClick={handleClick}
      >
        <div className={cn("pr-4 pl-4", styles.top_card)}>
          <img className="mb-1" src={ingridient.image} alt={ingridient.name} ref={dragRef} />
          {count && <Counter count={count} size="default" />}
          <p className={cn("text text_type_digits-default mb-1", styles.card_price)}>
            <span className="mr-2">{ingridient.price}</span>
            <CurrencyIcon type="primary" />
          </p>
        </div>
        <p className={cn("text text_type_main-default", styles.card_title)}>{ingridient.name}</p>
      </li>
    </>
  );
};

export default IngridientsItem;
