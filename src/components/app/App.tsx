import { FC, useEffect, useState } from "react";
import cn from "classnames";
import AppHeader from "@/components/app-header/app-header";
import BurgerConstructor from "@/components/burger-constructor/burger-constructor";
import BurgerIngridients from "@/components/burger-ingridients/burger-ingridients";
import styles from "./app.module.scss";
import { INGRIDIENTS_API_URL } from "@/constants/url";
import { IBurgerIngridient } from "@/types/burger";
import Loader from "../loader/loader";
import Modal from "../modal/modal";

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
  const [isVisibleModal, setIsVisibleModal] = useState(true);

  const getData = () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    fetch(INGRIDIENTS_API_URL)
      .then((res) => res.json())
      .then((resData) => setState((prev) => ({ ...prev, isLoading: false, data: resData.data })))
      .catch(() => setState((prev) => ({ ...prev, isLoading: false, isError: true })));
  };

  useEffect(() => {
    getData();
  }, []);

  const closeModal = () => {
    setIsVisibleModal(false);
  };

  return (
    <>
      <AppHeader />
      {isVisibleModal && (
        <Modal header={"123"} onClose={closeModal}>
          <div>123</div>
        </Modal>
      )}
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
