import cn from "classnames";
import styles from "./profile.module.scss";
import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { logout, updateUser } from "@/services/user/actions";
import { NavLink } from "react-router-dom";
import { RoutePath } from "@/constants/router";
import { selectUser } from "@/services/user/selectors";
import { useForm } from "@/hooks/useForm";
import { FormEvent } from "react";

export const Profile = () => {
  const user = useAppSelector(selectUser);
  const { formData, handleChange, resetForm } = useForm({
    email: user?.email ?? "",
    password: "",
    name: user?.name ?? ""
  });
  const dispatch = useAppDispatch();

  const onClickExit = () => {
    dispatch(logout());
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateUser(formData));
  };

  const isChanged = formData.email !== user?.email || formData.name !== user?.name || formData.password !== "";

  return (
    <div className={styles.container}>
      <nav>
        <ul className="text text_type_main-medium mb-20">
          <li className={styles.list_item}>
            <NavLink to={RoutePath.profile}>
              {({ isActive }) => (
                <span className={isActive ? "text_color_primary" : "text_color_inactive"}>Профиль</span>
              )}
            </NavLink>
          </li>
          <li className={cn("text_color_inactive", styles.list_item)}>История заказов</li>
          <li className={cn("text_color_inactive", styles.list_item)} onClick={onClickExit}>
            Выход
          </li>
        </ul>
        <p className="text text_type_main-default text_color_inactive">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          icon={"EditIcon"}
          extraClass="mb-6"
          placeholder="Имя"
          value={formData.name}
          onChange={handleChange}
          name="name"
          autoComplete="name"
        />
        <EmailInput
          isIcon
          extraClass="mb-6"
          placeholder="Логин"
          value={formData.email}
          onChange={handleChange}
          name="email"
          autoComplete="email"
        />
        <PasswordInput
          extraClass="mb-6"
          icon="EditIcon"
          value={formData.password}
          name="password"
          onChange={handleChange}
          autoComplete="current-password"
        />
        {isChanged && (
          <div className={styles.buttons_group}>
            <Button extraClass="mr6" htmlType="button" type="secondary" onClick={resetForm}>
              Отменить
            </Button>
            <Button htmlType="submit">Сохранить</Button>
          </div>
        )}
      </form>
    </div>
  );
};
