import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import styles from "./register.module.scss";
import { RoutePath } from "@/constants/router";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className={styles.container}>
      <h2 className={"text text_type_main-medium mb-6"}>Регистрация</h2>
      <form className={cn("mb-20", styles.form)}>
        <Input
          type="text"
          extraClass="mb-6"
          value={""}
          placeholder={"Имя"}
          onChange={() => console.log("ввел данные")}
        />
        <EmailInput extraClass={"mb-6"} value={""} onChange={() => console.log("вводим почту")} />
        <PasswordInput extraClass={"mb-6"} value={""} onChange={() => console.log("вводим пароль")} />
        <Button htmlType={"button"} type="primary">
          Зарегистрироваться
        </Button>
      </form>

      <p className="text text_type_main-default">
        Уже зарегистрированы?{" "}
        <Link to={RoutePath.login} className={styles.link}>
          Войти
        </Link>
      </p>
    </div>
  );
};
