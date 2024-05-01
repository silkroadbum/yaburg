import { FC } from "react";
import styles from "./modal-overlay.module.scss";

interface IProps {
  onCLose: () => void;
}

const ModalOverlay: FC<IProps> = ({ onCLose }) => {
  return <div className={styles.overlay} onClick={onCLose}></div>;
};

export default ModalOverlay;
