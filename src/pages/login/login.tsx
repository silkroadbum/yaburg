import { RoutePath } from "@/constants/router";
import cn from "classnames";
import { Link } from "react-router-dom";
import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.scss";

export const Login = () => {
  return (
    <div className={styles.container}>
      <h2 className={"text text_type_main-medium mb-6"}>Вход</h2>
      <form className={cn("mb-20", styles.form)}>
        <EmailInput extraClass={"mb-6"} value={""} onChange={() => console.log("вводим почту")} />
        <PasswordInput extraClass={"mb-6"} value={""} onChange={() => console.log("вводим пароль")} />
        <Button htmlType={"button"} type="primary">
          Войти
        </Button>
      </form>

      <p className="text text_type_main-default mb-4">
        Вы - новый пользователь?{" "}
        <Link to={RoutePath.register} className={styles.link}>
          Зарегистрироваться
        </Link>
      </p>
      <p className="text text_type_main-default">
        Забыли пароль?{" "}
        <Link to={RoutePath.forgot_password} className={styles.link}>
          Восстановить пароль
        </Link>
      </p>
    </div>
  );
};
