import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

interface ModalProps {}

const modalNode = document.getElementById("modal")!;

const Backdrop: React.FC = () => {
  return <div className={classes.backdrop} />;
};

const Modal: React.FC<ModalProps> = (props) => {
  return createPortal(
    <Fragment>
      <Backdrop />
      <div className={classes.modal}>{props.children}</div>
    </Fragment>,
    modalNode
  );
};

export default Modal;
