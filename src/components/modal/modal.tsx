import { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";
import ModalOverlay from "./modal-overlay/modal-overlay";
import styles from "./modal.module.scss";
import closeButton from "@/images/modal/close-icon.svg";
import Button from "../button/button";

const modalRoot = document.getElementById("react-modals");

interface IProps {
  header?: string;
  children: JSX.Element;
  onClose: () => void;
}

const Modal: FC<IProps> = ({ header, onClose, children }) => {
  useEffect(() => {
    const handleEscClick = (event: KeyboardEvent) => {
      if (event.target && event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscClick);

    return () => {
      document.removeEventListener("keydown", handleEscClick);
    };
  }, [onClose]);

  return createPortal(
    <>
      <div className={cn("p-10", styles.modal)}>
        <header className={cn("text text_type_main-large", styles.modal_header)}>
          <h2>{header}</h2>
          <Button onClick={onClose} className={styles.modal_btn}>
            <img src={closeButton} alt="Кнопка закрытия модального окна" />
          </Button>
        </header>
        <section className={styles.content}>{children}</section>
      </div>
      <ModalOverlay onCLose={onClose} />
    </>,
    modalRoot!
  );
};

export default Modal;
