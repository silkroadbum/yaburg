import { FC } from "react";
import cn from "classnames";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./tab-panel.module.scss";

interface IProps {
  activeTab: string;
  onClick: (value: string) => void;
}

const TabPanel: FC<IProps> = ({ activeTab, onClick }) => {
  return (
    <div className={cn("mb-10", styles.tab_panel)}>
      <Tab value="bun" active={activeTab === "bun"} onClick={onClick}>
        Булки
      </Tab>
      <Tab value="sauce" active={activeTab === "sauce"} onClick={onClick}>
        Соусы
      </Tab>
      <Tab value="main" active={activeTab === "main"} onClick={onClick}>
        Начинки
      </Tab>
    </div>
  );
};

export default TabPanel;
