import { ReactNode } from "react";

import styles from "./Modal.module.css";

type Props = {
  children: ReactNode;
};

const Modal = ({ children }: Props) => {
  const closeModal = (): void => {
    const modal = document.querySelector("#modal");
    modal!.classList.add("hide");
  };

  return (
    <div id="modal" className="hide">
      <div onClick={closeModal} className={styles.fade}></div>
      <div className={styles.modal}>
        <div className={styles.modal_top}>
          <span onClick={closeModal}>X</span>
          <h2>Editar tarefa</h2>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
