import { FC, useMemo } from "react";
import cn from "classnames";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import bun from "@/images/burger-icons/bun.png";
import styles from "./burger-constructor.module.scss";
import { BunPositionEnum, BurgerIngridientsTypeEnum, IBurgerIngridient } from "@/types/burger";
import TotalPrice from "./total-price/total-price";
import ConstructorIngridients from "./constructor-ingridients/constructor-ingridients";
import { BUN_INGRIDIENT_DEFAULT } from "@/constants/burger";

interface IProps {
  ingridients: IBurgerIngridient[];
}

const BurgerConstructor: FC<IProps> = ({ ingridients }) => {
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
          <ConstructorElement
            type="top"
            isLocked={true}
            text={
              bunIngridient
                ? `${bunIngridient.name} (${BunPositionEnum.TOP})`
                : `${BUN_INGRIDIENT_DEFAULT.name} (${BunPositionEnum.TOP})`
            }
            price={bunIngridient?.price || BUN_INGRIDIENT_DEFAULT.price}
            thumbnail={bunIngridient?.image || bun}
          />
        </div>
        <ConstructorIngridients ingridients={filteredIngridients} />
        <div className={styles.burger_bun}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={
              bunIngridient
                ? `${bunIngridient.name} (${BunPositionEnum.BOTTOM})`
                : `${BUN_INGRIDIENT_DEFAULT.name} (${BunPositionEnum.BOTTOM})`
            }
            price={bunIngridient?.price || BUN_INGRIDIENT_DEFAULT.price}
            thumbnail={bunIngridient?.image || bun}
          />
        </div>
      </div>
      <TotalPrice price={totalPrice + (bunIngridient?.price || BUN_INGRIDIENT_DEFAULT.price) * 2} />
    </section>
  );
};

export default BurgerConstructor;
