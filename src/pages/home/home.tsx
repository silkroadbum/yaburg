import { FC, useEffect } from "react";
import cn from "classnames";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Loader from "@/components/loader/loader";
import { loadIngridients } from "@/services/burger-ingridients/actions";
import { selectErrorStatusIngridients, selectLoadingStatusIngridients } from "@/services/burger-ingridients/selectors";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import BurgerIngridients from "@/components/burger-ingridients/burger-ingridients";
import BurgerConstructor from "@/components/burger-constructor/burger-constructor";
import styles from "./home.module.scss";

export const Home: FC = () => {
  const loading = useAppSelector(selectLoadingStatusIngridients);
  const error = useAppSelector(selectErrorStatusIngridients);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadIngridients());
  }, [dispatch]);

  return (
    <>
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
