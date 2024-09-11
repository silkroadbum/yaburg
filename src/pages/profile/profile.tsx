import cn from "classnames";
import styles from "./profile.module.scss";
import { EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { ChangeEvent, useState } from "react";

export const Profile = () => {
  const [email, setEmail] = useState("123");

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value);
  };
  return (
    <div className={styles.container}>
      <nav>
        <ul className="text text_type_main-medium mb-20">
          <li className={styles.list_item}>Профиль</li>
          <li className={cn("text_color_inactive", styles.list_item)}>История заказов</li>
          <li className={cn("text_color_inactive", styles.list_item)}>Выход</li>
        </ul>
        <p className="text text_type_main-default text_color_inactive">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <div>
        <Input icon={"EditIcon"} extraClass="mb-6" placeholder="Имя" value={""} onChange={() => console.log("имя")} />
        <EmailInput isIcon extraClass="mb-6" placeholder="Логин" value={email} onChange={onChange} />
        <PasswordInput icon={"EditIcon"} value={""} onChange={() => console.log("password")} />
      </div>
    </div>
  );
};
