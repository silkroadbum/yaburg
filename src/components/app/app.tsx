import { FC } from "react";
import AppHeader from "@/components/app-header/app-header";
import { Route, Routes } from "react-router-dom";
import { Home } from "@/pages/home/home";
import { RoutePath } from "@/constants/router";
import { NotFound } from "@/pages/not-found/not-found";

const App: FC = () => {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path={RoutePath.home} element={<Home />} />
        <Route path={RoutePath.login} element={<Home />} />
        <Route path={RoutePath.register} element={<Home />} />
        <Route path={RoutePath.forgot_password} element={<Home />} />
        <Route path={RoutePath.reset_password} element={<Home />} />
        <Route path={RoutePath.profile} element={<Home />} />
        <Route path={`${RoutePath.ingredients}:id`} element={<Home />} />
        <Route path={RoutePath.not_found} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
