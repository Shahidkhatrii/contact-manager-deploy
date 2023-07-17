import React, { useEffect } from "react";
import { useContactsCrud } from "../context/ContactsCrudContext";

const Modal = () => {
  const { removeContactHandler, deleteId, setShowModal } = useContactsCrud();
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  const closeModal = () => {
    setShowModal(false);
  };
  const confirmDeletion = () => {
    removeContactHandler(deleteId);
  };
  return (
    <div
      className="ui center-div container "
      id="modal-overlay"
      onClick={closeModal}
    >
      <div className="ui center-div main" id="modal-main">
        <h2
          className="ui"
          style={{
            marginBottom: "1.5rem",
          }}
        >
          Are you sure ?
        </h2>
        <button className="ui button red" onClick={confirmDeletion}>
          Delete
        </button>
        <button className="ui button blue" onClick={closeModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
