import { FC, PropsWithChildren } from "react";
import AppHeader from "@/components/app-header/app-header";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};

export default MainLayout;
