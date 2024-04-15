import { FC } from "react";
import AppHeader from "./components/app-header/app-header";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import BurgerIngridients from "./components/burger-ingridients/burger-ingridients";
import styles from "./app.module.scss";
import { data } from "./utils/data";

const App: FC = () => {
  return (
    <>
      <AppHeader />
      <main className={styles.container}>
        <BurgerIngridients ingridients={data} />
        <BurgerConstructor ingridients={data} />
      </main>
    </>
  );
};

export default App;
