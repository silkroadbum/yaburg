import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import styles from "./register.module.scss";
import { RoutePath } from "@/constants/router";
import { Link } from "react-router-dom";
import { FormEvent } from "react";
import { IRegisterRequest } from "@/types/api-response";
import { useAppDispatch } from "@/services/hooks";
import { register } from "@/services/user/actions";
import { useForm } from "@/hooks/useForm";

export const Register = () => {
  const { formData, handleChange } = useForm<IRegisterRequest>({ email: "", password: "", name: "" });
  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(register(formData));
  };

  return (
    <div className={styles.container}>
      <h2 className={"text text_type_main-medium mb-6"}>Регистрация</h2>
      <form className={cn("mb-20", styles.form)} onSubmit={handleSubmit}>
        <Input
          type="text"
          extraClass="mb-6"
          value={formData.name}
          placeholder={"Имя"}
          name="name"
          onChange={handleChange}
          autoComplete="name"
        />
        <EmailInput
          extraClass={"mb-6"}
          value={formData.email}
          onChange={handleChange}
          name="email"
          autoComplete="email"
        />
        <PasswordInput
          extraClass={"mb-6"}
          value={formData.password}
          onChange={handleChange}
          name="password"
          autoComplete="new-password"
        />
        <Button htmlType={"submit"} type="primary">
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
