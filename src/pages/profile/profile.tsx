import cn from "classnames";
import styles from "./profile.module.scss";
import { EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { logout } from "@/services/user/actions";
import { NavLink } from "react-router-dom";
import { RoutePath } from "@/constants/router";
import { selectUser } from "@/services/user/selectors";

export const Profile = () => {
  const user = useAppSelector(selectUser);
  const [formData, setFormData] = useState({ email: user?.email ?? "", password: "", name: user?.name ?? "" });
  const dispatch = useAppDispatch();

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onClickExit = () => {
    dispatch(logout());
  };

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
      <form className={styles.form}>
        <Input
          icon={"EditIcon"}
          extraClass="mb-6"
          placeholder="Имя"
          value={formData.name}
          onChange={onChange}
          name="name"
        />
        <EmailInput
          isIcon
          extraClass="mb-6"
          placeholder="Логин"
          value={formData.email}
          onChange={onChange}
          name="email"
        />
        <PasswordInput icon={"EditIcon"} value={formData.password} onChange={onChange} name="password" />
      </form>
    </div>
  );
};
