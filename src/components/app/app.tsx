import { FC, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import cn from "classnames";
import AppHeader from "@/components/app-header/app-header";
import Loader from "../loader/loader";
import Modal from "../modal/modal";
import IngridientDetails from "../ingridient-details/ingridient-details";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import { loadIngridients } from "@/services/burger-ingridients/actions";
import { checkUserAuth } from "@/services/user/actions";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { selectErrorStatusIngridients, selectLoadingStatusIngridients } from "@/services/burger-ingridients/selectors";
import NotFoundPage from "@/pages/not-found/not-found";
import IngredientsPage from "@/pages/ingredients/ingredients";
import HomePage from "@/pages/home/home";
import LoginPage from "@/pages/login/login";
import RegisterPage from "@/pages/register/register";
import ForgotPasswordPage from "@/pages/forgot-password/forgot-password";
import ResetPasswordPage from "@/pages/reset-password/reset-password";
import ProfilePage from "@/pages/profile/profile";
import FeedPage from "@/pages/feed/feed";
import { RoutePath } from "@/constants/router";

import styles from "./app.module.scss";

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
    dispatch(checkUserAuth());
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
            <Route path={RoutePath.home} element={<HomePage />} />
            <Route path={RoutePath.login} element={<OnlyUnAuth component={<LoginPage />} />} />
            <Route path={RoutePath.register} element={<OnlyUnAuth component={<RegisterPage />} />} />
            <Route path={RoutePath.forgot_password} element={<OnlyUnAuth component={<ForgotPasswordPage />} />} />
            <Route path={RoutePath.reset_password} element={<OnlyUnAuth component={<ResetPasswordPage />} />} />
            <Route path={RoutePath.profile} element={<OnlyAuth component={<ProfilePage />} />} />
            <Route path={`${RoutePath.ingredients}/:id`} element={<IngredientsPage />} />
            <Route path={RoutePath.feed} element={<FeedPage />} />
            <Route path={RoutePath.not_found} element={<NotFoundPage />} />
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
