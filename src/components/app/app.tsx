import { FC, useEffect, useState } from "react";
import cn from "classnames";
import AppHeader from "@/components/app-header/app-header";
import BurgerConstructor from "@/components/burger-constructor/burger-constructor";
import BurgerIngridients from "@/components/burger-ingridients/burger-ingridients";
import styles from "./app.module.scss";
import { INGRIDIENTS_API_URL } from "@/constants/url";
import { IBurgerIngridient } from "@/types/burger";
import Loader from "../loader/loader";

interface IAppState {
  data: IBurgerIngridient[];
  isLoading: boolean;
  isError: boolean;
}

const App: FC = () => {
  const [state, setState] = useState<IAppState>({
    data: [],
    isLoading: false,
    isError: false
  });

  const getData = () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    fetch(INGRIDIENTS_API_URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then((resData) => setState((prev) => ({ ...prev, isLoading: false, data: resData.data })))
      .catch(() => setState((prev) => ({ ...prev, isLoading: false, isError: true })));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AppHeader />
      {state.isLoading ? (
        <div className={styles.wrapper}>
          <Loader />
        </div>
      ) : state.isError ? (
        <div className={cn("text text_type_main-default", styles.wrapper)}>Ошибка получения данных!</div>
      ) : (
        <main className={styles.container}>
          <BurgerIngridients ingridients={state.data} />
          <BurgerConstructor ingridients={state.data} />
        </main>
      )}
    </>
  );
};

export default App;
