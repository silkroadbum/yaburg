import { FC } from "react";
import styles from "./loader.module.scss";

interface IProps {
  className?: string;
}

const Loader: FC<IProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
