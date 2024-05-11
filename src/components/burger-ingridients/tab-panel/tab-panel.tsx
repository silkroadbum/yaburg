import { forwardRef } from "react";
import cn from "classnames";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./tab-panel.module.scss";
import { BurgerIngridientsTypeEnum } from "@/types/burger";

interface IProps {
  activeTab: string;
  onClick: (value: string) => void;
}

const TabPanel = forwardRef<HTMLDivElement, IProps>(({ activeTab, onClick }, ref) => {
  return (
    <div className={cn("mb-10", styles.tab_panel)} ref={ref}>
      <Tab value={BurgerIngridientsTypeEnum.BUN} active={activeTab === BurgerIngridientsTypeEnum.BUN} onClick={onClick}>
        Булки
      </Tab>
      <Tab
        value={BurgerIngridientsTypeEnum.SAUCE}
        active={activeTab === BurgerIngridientsTypeEnum.SAUCE}
        onClick={onClick}
      >
        Соусы
      </Tab>
      <Tab
        value={BurgerIngridientsTypeEnum.MAIN}
        active={activeTab === BurgerIngridientsTypeEnum.MAIN}
        onClick={onClick}
      >
        Начинки
      </Tab>
    </div>
  );
});

export default TabPanel;
