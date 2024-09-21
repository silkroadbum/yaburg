import { FC } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerIngridients from "@/components/burger-ingridients/burger-ingridients";
import BurgerConstructor from "@/components/burger-constructor/burger-constructor";
import styles from "./home.module.scss";

export const Home: FC = () => {
  return (
    <main className={styles.container}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngridients />
        <BurgerConstructor />
      </DndProvider>
    </main>
  );
};
