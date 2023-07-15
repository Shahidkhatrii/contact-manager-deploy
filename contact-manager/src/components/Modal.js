import React from "react";
import { useEffect } from "react";
import { useContactsCrud } from "../context/ContactsCrudContext";
const Modal = () => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  const { removeContactHandler, deleteId, setShowModal } = useContactsCrud();
  return (
    <div
      className="ui center-div container"
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(189,189,189,0.7)",
        zIndex: "1",
      }}
      onClick={() => {
        setShowModal(false);
      }}
    >
      <div
        className="ui center-div main"
        style={{
          backgroundColor: "white",
          padding: "4% 6%",
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          borderRadius: "5px",
        }}
      >
        <h2
          className="ui"
          style={{
            marginBottom: "1.5rem",
          }}
        >
          Are you sure ?
        </h2>
        <button
          className="ui button red"
          onClick={() => {
            removeContactHandler(deleteId);
          }}
        >
          Yes
        </button>
        <button
          className="ui button blue"
          onClick={() => {
            setShowModal(false);
          }}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Modal;
