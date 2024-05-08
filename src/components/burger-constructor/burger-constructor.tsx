import { FC, useMemo } from "react";
import cn from "classnames";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.scss";
import { BunPositionEnum, BurgerIngridientsTypeEnum, IBurgerIngridient } from "@/types/burger";
import TotalPrice from "./total-price/total-price";
import ConstructorIngridients from "./constructor-ingridients/constructor-ingridients";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { selectBunConstructor, selectConstructorIngridients } from "@/services/burger-constructor/selectors";
import { useDrop } from "react-dnd";
import { addIngredients } from "@/services/burger-constructor/reducer";

const BurgerConstructor: FC = () => {
  const ingridients = useAppSelector(selectConstructorIngridients);
  const bun = useAppSelector(selectBunConstructor);
  const dispatch = useAppDispatch();

  const filteredIngridients = useMemo(() => {
    return ingridients.filter((element) => element.type !== BurgerIngridientsTypeEnum.BUN);
  }, [ingridients]);

  const handleDrop = (ingridient: IBurgerIngridient) => {
    dispatch(addIngredients(ingridient));
  };

  const [, dropRef] = useDrop({
    accept: "ingridient",
    drop(data: { ingridient: IBurgerIngridient }) {
      handleDrop(data.ingridient);
    }
  });

  return (
    <section className={cn("pt-25 pl-4", styles.burger_constructor)}>
      <div className={cn("mb-10", styles.constructor_elements)} ref={dropRef}>
        <div className={styles.burger_bun}>
          {bun ? (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (${BunPositionEnum.TOP})`}
              price={bun.price}
              thumbnail={bun.image}
            />
          ) : (
            <div className={cn(styles.burger_bun__fake_top, "text text_type_main-default")}>Выберите булку</div>
          )}
        </div>
        {filteredIngridients.length > 0 ? (
          <ConstructorIngridients ingridients={filteredIngridients} />
        ) : (
          <div className={cn(styles.burger_ingredients, "text text_type_main-default")}>Выберите начинку</div>
        )}
        <div className={styles.burger_bun}>
          {bun ? (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (${BunPositionEnum.BOTTOM})`}
              price={bun.price}
              thumbnail={bun.image}
            />
          ) : (
            <div className={cn(styles.burger_bun__fake_bottom, "text text_type_main-default")}>Выберите булку</div>
          )}
        </div>
      </div>
      <TotalPrice />
    </section>
  );
};

export default BurgerConstructor;
