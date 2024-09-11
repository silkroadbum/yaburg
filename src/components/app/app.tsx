import { FC, useEffect } from "react";
import AppHeader from "@/components/app-header/app-header";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Home } from "@/pages/home/home";
import { RoutePath } from "@/constants/router";
import { NotFound } from "@/pages/not-found/not-found";
import { useModal } from "@/hooks/useModal";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { removeIngredientModal } from "@/services/ingridientModal/reducer";
import Modal from "../modal/modal";
import IngridientDetails from "../ingridient-details/ingridient-details";
import { Ingredients } from "@/pages/ingredients/ingredients";
import { selectErrorStatusIngridients, selectLoadingStatusIngridients } from "@/services/burger-ingridients/selectors";
import { loadIngridients } from "@/services/burger-ingridients/actions";
import Loader from "../loader/loader";
import styles from "./app.module.scss";
import cn from "classnames";

const App: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { closeModal } = useModal();
  const dispatch = useAppDispatch();

  const state = location.state as { backgroundLocation?: Location };

  const onClickCloseModal = () => {
    navigate(-1);
    closeModal();
    dispatch(removeIngredientModal());
  };

  const loading = useAppSelector(selectLoadingStatusIngridients);
  const error = useAppSelector(selectErrorStatusIngridients);

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
        <>
          <Routes location={state?.backgroundLocation || location}>
            <Route path={RoutePath.home} element={<Home />} />
            <Route path={RoutePath.login} element={<Home />} />
            <Route path={RoutePath.register} element={<Home />} />
            <Route path={RoutePath.forgot_password} element={<Home />} />
            <Route path={RoutePath.reset_password} element={<Home />} />
            <Route path={RoutePath.profile} element={<Home />} />
            <Route path={`${RoutePath.ingredients}/:id`} element={<Ingredients />} />
            <Route path={RoutePath.not_found} element={<NotFound />} />
          </Routes>

          {state?.backgroundLocation && (
            <Routes>
              <Route
                path={`${RoutePath.ingredients}/:id`}
                element={
                  <Modal header="Детали ингредиента" onClose={onClickCloseModal}>
                    <IngridientDetails />
                  </Modal>
                }
              />
            </Routes>
          )}
        </>
      )}
    </>
  );
};

export default App;
