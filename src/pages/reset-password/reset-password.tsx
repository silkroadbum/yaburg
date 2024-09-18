import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import styles from "./reset-password.module.scss";
import { RoutePath } from "@/constants/router";
import { Link } from "react-router-dom";

export const ResetPassword = () => {
  return (
    <div className={styles.container}>
      <h2 className={"text text_type_main-medium mb-6"}>Восстановление пароля</h2>
      <form className={cn("mb-20", styles.form)}>
        <PasswordInput
          placeholder="Введите новый пароль"
          extraClass={"mb-6"}
          value={""}
          onChange={() => console.log("вводим пароль")}
        />
        <Input
          extraClass={"mb-6"}
          placeholder="Введите код из письма"
          value={""}
          onChange={() => console.log("вводим код")}
        />
        <Button htmlType={"button"} type="primary">
          Сохранить
        </Button>
      </form>

      <p className="text text_type_main-default">
        Вспомнили пароль?{" "}
        <Link to={RoutePath.login} className={styles.link}>
          Войти
        </Link>
      </p>
    </div>
  );
};
