import { FC, useMemo, useState } from "react";
import cn from "classnames";
import TabPanel from "./tab-panel/tab-panel";
import IngridientsList from "./ingridients-list/ingridients-list";
import styles from "./burger-ingridients.module.scss";
import { IBurgerIngridient } from "@/types/burger";

interface IProps {
  ingridients: IBurgerIngridient[];
}

const BurgerIngridients: FC<IProps> = ({ ingridients }) => {
  const [activeTab, setActiveTab] = useState<string>("bun");

  const bunIngridients = useMemo(() => {
    return ingridients.filter((item) => item.type === "bun");
  }, [ingridients]);
  const sauseIngridients = useMemo(() => {
    return ingridients.filter((item) => item.type === "sauce");
  }, [ingridients]);
  const mainIngridients = useMemo(() => {
    return ingridients.filter((item) => item.type === "main");
  }, [ingridients]);

  return (
    <div className={cn("mt-10", [styles.ingridients])}>
      <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
      <TabPanel activeTab={activeTab} onClick={setActiveTab} />
      <div className={cn("custom-scroll", styles.ingridients_lists)}>
        <IngridientsList title="Булки" ingridients={bunIngridients} />
        <IngridientsList title="Соусы" ingridients={sauseIngridients} />
        <IngridientsList title="Начинки" ingridients={mainIngridients} />
      </div>
    </div>
  );
};

export default BurgerIngridients;
