import { FC, useMemo } from "react";
import cn from "classnames";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.scss";
import { BunPositionEnum, BurgerIngridientsTypeEnum } from "@/types/burger";
import TotalPrice from "./total-price/total-price";
import ConstructorIngridients from "./constructor-ingridients/constructor-ingridients";
import { BUN_INGRIDIENT_DEFAULT } from "@/constants/burger";
import { useAppSelector } from "@/services/hooks";
import { selectConstructorIngridients } from "@/services/burger-constructor/selectors";

const BurgerConstructor: FC = () => {
  const ingridients = useAppSelector(selectConstructorIngridients);
  const totalPrice = useMemo(() => ingridients.reduce((acc, currentItem) => acc + currentItem.price, 0), [ingridients]);

  const filteredIngridients = useMemo(() => {
    return ingridients.filter((element) => element.type !== BurgerIngridientsTypeEnum.BUN);
  }, [ingridients]);

  const bunIngridient = useMemo(() => {
    return ingridients.find((element) => element.type === BurgerIngridientsTypeEnum.BUN);
  }, [ingridients]);

  return (
    <section className={cn("pt-25 pl-4", styles.burger_constructor)}>
      <div className={cn("mb-10", styles.constructor_elements)}>
        <div className={styles.burger_bun}>
          {bunIngridient ? (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bunIngridient.name} (${BunPositionEnum.TOP})`}
              price={bunIngridient.price}
              thumbnail={bunIngridient.image}
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
          {bunIngridient ? (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bunIngridient.name} (${BunPositionEnum.BOTTOM})`}
              price={bunIngridient.price}
              thumbnail={bunIngridient.image}
            />
          ) : (
            <div className={cn(styles.burger_bun__fake_bottom, "text text_type_main-default")}>Выберите булку</div>
          )}
        </div>
      </div>
      <TotalPrice price={totalPrice + (bunIngridient?.price || BUN_INGRIDIENT_DEFAULT.price) * 2} />
    </section>
  );
};

export default BurgerConstructor;
