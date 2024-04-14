import { FC, PropsWithChildren } from "react";
import AppHeader from "@/components/app-header/app-header";
import styles from "./main-layout.module.scss";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <main className={styles.container}>{children}</main>
    </>
  );
};

export default MainLayout;
