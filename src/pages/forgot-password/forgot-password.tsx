import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import styles from "./forgot-password.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { RoutePath } from "@/constants/router";
import { FormEvent } from "react";
import { useAppDispatch } from "@/services/hooks";
import { forgotPassword } from "@/services/user/actions";
import { IForgotPasswordRequest } from "@/types/api-response";
import { useForm } from "@/hooks/useForm";

export const ForgotPassword = () => {
  const { formData, handleChange } = useForm<IForgotPasswordRequest>({ email: "" });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(forgotPassword(formData)).then(() => {
      localStorage.setItem("resetPassword", "true");
      navigate(RoutePath.reset_password);
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={"text text_type_main-medium mb-6"}>Восстановление пароля</h2>
      <form className={cn("mb-20", styles.form)} onSubmit={handleSubmit}>
        <EmailInput
          placeholder="Укажите e-mail"
          extraClass={"mb-6"}
          value={formData.email}
          name="email"
          onChange={handleChange}
          autoComplete="email"
        />
        <Button htmlType={"submit"} type="primary">
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
