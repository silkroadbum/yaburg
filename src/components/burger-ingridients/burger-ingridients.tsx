import { FC, useState } from "react";
import TabPanel from "./tab-panel/tab-panel";
import IngridientsList from "./ingridients-list/ingridients-list";
import { data } from "@/utils/data";

const BurgerIngridients: FC = () => {
  const [activeTab, setActiveTab] = useState<string>("bun");

  const bunIngridients = data.filter((item) => item.type === "bun");
  const sauseIngridients = data.filter((item) => item.type === "sauce");
  const mainIngridients = data.filter((item) => item.type === "main");

  return (
    <div className="mt-10">
      <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
      <TabPanel activeTab={activeTab} onClick={setActiveTab} />
      <IngridientsList title="Булки" ingridients={bunIngridients} />
      <IngridientsList title="Соусы" ingridients={sauseIngridients} />
      <IngridientsList title="Начинки" ingridients={mainIngridients} />
    </div>
  );
};

export default BurgerIngridients;
