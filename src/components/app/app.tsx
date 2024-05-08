import { FC, useEffect } from "react";
import cn from "classnames";
import AppHeader from "@/components/app-header/app-header";
import BurgerConstructor from "@/components/burger-constructor/burger-constructor";
import BurgerIngridients from "@/components/burger-ingridients/burger-ingridients";
import styles from "./app.module.scss";
import Loader from "../loader/loader";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { selectErrorStatusIngridients, selectLoadingStatusIngridients } from "@/services/burger-ingridients/selectors";
import { loadIngridients } from "@/services/burger-ingridients/actions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App: FC = () => {
  const loading = useAppSelector(selectLoadingStatusIngridients);
  const error = useAppSelector(selectErrorStatusIngridients);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadIngridients());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      {loading ? (
        <div className={styles.wrapper}>
          <Loader />
        </div>
      ) : error ? (
        <div className={cn("text text_type_main-default", styles.wrapper)}>Ошибка получения данных!</div>
      ) : (
        <main className={styles.container}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngridients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      )}
    </>
  );
};

export default App;
