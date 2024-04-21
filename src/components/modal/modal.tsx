import { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";
import ModalOverlay from "./modal-overlay/modal-overlay";
import styles from "./modal.module.scss";
import Button from "../button/button";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

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
        <header className={styles.modal_header}>
          <h2 className="text text_type_main-large">{header}</h2>
          <Button onClick={onClose} className={styles.modal_btn}>
            <CloseIcon type="primary" />
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
