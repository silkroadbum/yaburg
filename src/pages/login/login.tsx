import { RoutePath } from "@/constants/router";
import cn from "classnames";
import { Link } from "react-router-dom";
import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import { ILoginRequest } from "@/types/api-response";
import { useAppDispatch } from "@/services/hooks";
import { login } from "@/services/user/actions";

export const Login = () => {
  const [formData, setFormData] = useState<ILoginRequest>({ email: "", password: "" });
  const dispatch = useAppDispatch();

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(formData));
  };

  return (
    <div className={styles.container}>
      <h2 className={"text text_type_main-medium mb-6"}>Вход</h2>
      <form className={cn("mb-20", styles.form)} onSubmit={sendForm}>
        <EmailInput extraClass={"mb-6"} value={formData.email} name={"email"} onChange={onChange} />
        <PasswordInput extraClass={"mb-6"} value={formData.password} name={"password"} onChange={onChange} />
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
