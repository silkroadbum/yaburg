import { FC, useRef } from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IBurgerIngridientWithUniqKey } from "@/types/burger";
import styles from "./constructor-ingridient.module.scss";
import { useAppDispatch } from "@/services/hooks";
import { removeIngredients, reorderIngredients } from "@/services/burger-constructor/reducer";
import { useDrag, useDrop } from "react-dnd";
import { Identifier, XYCoord } from "dnd-core";

interface IProps {
  ingridient: IBurgerIngridientWithUniqKey;
  index: number;
}

interface DragItem {
  index: number;
  ingridient: IBurgerIngridientWithUniqKey;
}

const ConstructorIngridient: FC<IProps> = ({ ingridient, index }) => {
  const ref = useRef<HTMLLIElement>(null);
  const dispatch = useAppDispatch();
  const removeIngredient = () => {
    dispatch(removeIngredients(ingridient.uniqKey));
  };

  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
    accept: "constructorIngredient",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(reorderIngredients({ indexFrom: dragIndex, indexTo: hoverIndex }));

      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    type: "constructorIngredient",
    item: () => {
      return { id: ingridient.uniqKey, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <li className={styles.burger_ingridient} ref={ref} style={{ opacity }} data-handler-id={handlerId}>
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
