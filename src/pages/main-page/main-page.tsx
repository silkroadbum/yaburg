import { FC } from "react";
import BurgerIngridients from "@/components/burger-ingridients/burger-ingridients";
import BurgerConstructor from "@/components/burger-constructor/burger-constructor";
import MainLayout from "@/layouts/main-layout/main-layout";
import styles from "./main-page.module.scss";

const MainPage: FC = () => {
  return (
    <MainLayout>
      <main className={styles.container}>
        <BurgerIngridients />
        <BurgerConstructor />
      </main>
    </MainLayout>
  );
};

export default MainPage;
