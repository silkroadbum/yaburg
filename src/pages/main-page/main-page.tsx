import { FC } from "react";
import BurgerIngridients from "@/components/burger-ingridients/burger-ingridients";
import BurgerConstructor from "@/components/burger-constructor/burger-constructor";
import MainLayout from "@/layouts/main-layout/main-layout";

const MainPage: FC = () => {
  return (
    <MainLayout>
      <BurgerIngridients />
      <BurgerConstructor />
    </MainLayout>
  );
};

export default MainPage;
