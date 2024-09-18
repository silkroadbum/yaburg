import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import styles from "./forgot-password.module.scss";
import { Link } from "react-router-dom";
import { RoutePath } from "@/constants/router";

export const ForgotPassword = () => {
  return (
    <div className={styles.container}>
      <h2 className={"text text_type_main-medium mb-6"}>Восстановление пароля</h2>
      <form className={cn("mb-20", styles.form)}>
        <EmailInput
          placeholder="Укажите e-mail"
          extraClass={"mb-6"}
          value={""}
          onChange={() => console.log("вводим почту")}
        />
        <Button htmlType={"button"} type="primary">
          Восстановить
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