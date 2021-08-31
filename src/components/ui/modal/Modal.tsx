import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

interface ModalProps {
  onHideCheckout: (showCheckout: boolean) => void;
}

interface BackdropProps {
  onClick: (showCheckout: boolean) => void;
}

const modalNode = document.getElementById("modal")!;

const Backdrop: React.FC<BackdropProps> = (props) => {
  return (
    <div className={classes.backdrop} onClick={() => props.onClick(false)} />
  );
};

const Modal: React.FC<ModalProps> = (props) => {
  return createPortal(
    <Fragment>
      <Backdrop onClick={props.onHideCheckout} />
      <div className={classes.modal}>{props.children}</div>
    </Fragment>,
    modalNode
  );
};

export default Modal;
