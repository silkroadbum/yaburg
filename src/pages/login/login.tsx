import { RoutePath } from "@/constants/router";
import cn from "classnames";
import { Link } from "react-router-dom";
import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.scss";
import { FormEvent } from "react";
import { ILoginRequest } from "@/types/api-response";
import { useAppDispatch } from "@/services/hooks";
import { login } from "@/services/user/actions";
import { useForm } from "@/hooks/useForm";

const LoginPage = () => {
  const { formData, handleChange } = useForm<ILoginRequest>({ email: "", password: "" });
  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(formData));
  };

  return (
    <div className={styles.container}>
      <h2 className={"text text_type_main-medium mb-6"}>Вход</h2>
      <form className={cn("mb-20", styles.form)} onSubmit={handleSubmit}>
        <EmailInput
          extraClass={"mb-6"}
          value={formData.email}
          name={"email"}
          onChange={handleChange}
          autoComplete="email"
        />
        <PasswordInput
          extraClass={"mb-6"}
          value={formData.password}
          name={"password"}
          onChange={handleChange}
          autoComplete="current-password"
        />
        <Button htmlType={"submit"} type="primary">
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

export default LoginPage;
