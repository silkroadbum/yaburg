import { FC, useMemo, useState } from "react";
import cn from "classnames";
import TabPanel from "./tab-panel/tab-panel";
import IngridientsList from "./ingridients-list/ingridients-list";
import styles from "./burger-ingridients.module.scss";
import { IBurgerIngridient } from "@/types/burger";

interface IProps {
  ingridients: IBurgerIngridient[];
}

interface IIngridientsList {
  title: string;
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

  const ingridientsList: IIngridientsList[] = [
    {
      title: "Булки",
      ingridients: bunIngridients
    },
    {
      title: "Соусы",
      ingridients: sauseIngridients
    },
    {
      title: "Начинки",
      ingridients: mainIngridients
    }
  ];

  return (
    <section className={cn("mt-10", [styles.ingridients])}>
      <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
      <TabPanel activeTab={activeTab} onClick={setActiveTab} />
      <ul className={cn("custom-scroll", styles.ingridients_lists)}>
        {ingridientsList.map(({ title, ingridients }, index) => (
          <li key={index}>
            <IngridientsList title={title} ingridients={ingridients} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BurgerIngridients;
