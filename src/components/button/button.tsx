import { ButtonHTMLAttributes, FC } from "react";
import cn from "classnames";
import styles from "./button.module.scss";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<IProps> = ({ children, className, ...otherProps }) => {
  return (
    <button type="button" {...otherProps} className={cn(className, styles.button)}>
      {children}
    </button>
  );
};

export default Button;
