import React, { FC } from "react";

import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    width: "max-content",
    maxWidth: "100vw",
    borderRadius: "4px",
    border: "none",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    background: "rgb(25 31 41 / 51%)",
    zIndex: 100,
  },
};

export type ModalProps = { onClose?: () => void } & ReactModal.Props;

export const Modal: FC<ModalProps> = ({ isOpen, onClose, ...rest }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onClose}
    style={customStyles}
    ariaHideApp={false}
    {...rest}
  />
);
