import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import styles from "./reset-password.module.scss";
import { RoutePath } from "@/constants/router";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch } from "@/services/hooks";
import { resetPassword } from "@/services/user/actions";

export const ResetPassword = () => {
  const [formData, setFormData] = useState({ password: "", token: "" });
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetPassword(formData)).then(() => {
      localStorage.removeItem("resetPassword");
      navigate(RoutePath.login, { replace: true });
    });
  };

  useEffect(() => {
    if (!localStorage.getItem("resetPassword")) {
      navigate(RoutePath.forgot_password, { replace: true });
    }
  }, [navigate, location]);

  return (
    <div className={styles.container}>
      <h2 className={"text text_type_main-medium mb-6"}>Восстановление пароля</h2>
      <form className={cn("mb-20", styles.form)} onSubmit={handleSubmit}>
        <PasswordInput
          placeholder="Введите новый пароль"
          extraClass={"mb-6"}
          value={formData.password}
          name="password"
          onChange={onChange}
        />
        <Input
          extraClass={"mb-6"}
          placeholder="Введите код из письма"
          value={formData.token}
          name="token"
          onChange={onChange}
        />
        <Button htmlType={"submit"} type="primary">
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
