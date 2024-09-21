import cn from "classnames";
import styles from "./not-found.module.scss";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@/constants/router";

export const NotFound = () => {
  const navigate = useNavigate();
  const onClickGoToMainPage = () => {
    navigate(RoutePath.home, { replace: true });
  };

  return (
    <div className={cn("text text_type_main-large", styles.container)}>
      <div className={styles.title}>УПС... Страница не найдена.</div>
      <Button htmlType="button" type="primary" size="medium" onClick={onClickGoToMainPage}>
        На главную
      </Button>
    </div>
  );
};
