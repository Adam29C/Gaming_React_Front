import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Model = ({ show, setShow, centered,modal_size ,  children }) => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div
    // className="modal fade show"
    >
      <Modal show={show} onHide={() => setShow(false)} centered={centered} size={modal_size}>
        <div className="modal-content">{children}</div>
      </Modal>
    </div>
  );
};

export default Model;
