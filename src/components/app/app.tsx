import { FC, useEffect } from "react";
import AppHeader from "@/components/app-header/app-header";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Home } from "@/pages/home/home";
import { RoutePath } from "@/constants/router";
import { NotFound } from "@/pages/not-found/not-found";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import Modal from "../modal/modal";
import IngridientDetails from "../ingridient-details/ingridient-details";
import { Ingredients } from "@/pages/ingredients/ingredients";
import { selectErrorStatusIngridients, selectLoadingStatusIngridients } from "@/services/burger-ingridients/selectors";
import { loadIngridients } from "@/services/burger-ingridients/actions";
import Loader from "../loader/loader";
import styles from "./app.module.scss";
import cn from "classnames";
import { Login } from "@/pages/login/login";
import { Register } from "@/pages/register/register";
import { ForgotPassword } from "@/pages/forgot-password/forgot-password";
import { ResetPassword } from "@/pages/reset-password/reset-password";
import { Profile } from "@/pages/profile/profile";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";

const App: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const state = location.state as { backgroundLocation?: Location };

  const onClickCloseModal = () => navigate(-1);

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
            <Route path={RoutePath.login} element={<OnlyUnAuth component={<Login />} />} />
            <Route path={RoutePath.register} element={<OnlyUnAuth component={<Register />} />} />
            <Route path={RoutePath.forgot_password} element={<OnlyUnAuth component={<ForgotPassword />} />} />
            <Route path={RoutePath.reset_password} element={<OnlyUnAuth component={<ResetPassword />} />} />
            <Route path={RoutePath.profile} element={<OnlyAuth component={<Profile />} />} />
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
