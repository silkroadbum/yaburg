import { FC, useState } from "react";
import cn from "classnames";
import TabPanel from "./tab-panel/tab-panel";
import IngridientsList from "./ingridients-list/ingridients-list";
import { data } from "@/utils/data";
import styles from "./burger-ingridients.module.scss";

const BurgerIngridients: FC = () => {
  const [activeTab, setActiveTab] = useState<string>("bun");

  const bunIngridients = data.filter((item) => item.type === "bun");
  const sauseIngridients = data.filter((item) => item.type === "sauce");
  const mainIngridients = data.filter((item) => item.type === "main");

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
