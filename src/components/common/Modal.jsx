import React, { useState } from "react";

function Modal({ isOpen, closeModal }) {
  const [modal, setModal] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const MODAL_DELAY = 300;

  const openModal = () => {
    setDisplayModal(true);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setModal(true);
    }, MODAL_DELAY);
  };

  const closeModalHandler = () => {
    setModal(false);
    document.body.style.overflow = "visible";
    setTimeout(() => {
      setDisplayModal(false);
      closeModal();
    }, MODAL_DELAY);
  };

  const displayModalStyle = {
    opacity: displayModal ? 1 : 0,
    pointerEvents: displayModal ? "auto" : "none",
    transition: "opacity 0.3s ease",
  };

  const modalBackgroundStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: modal ? 1 : 0,
    pointerEvents: modal ? "auto" : "none",
    transition: "opacity 0.3s ease",
  };

  const modalStyle = {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 4,
    width: "80%",
    maxWidth: 400,
    transform: modal ? "translateY(0%)" : "translateY(-100%)",
    transition: "transform 0.3s ease",
  };

  const modalHeaderFooterStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const modalTitleStyle = {
    margin: 0,
  };

  const modalCloseStyle = {
    background: "none",
    border: "none",
    fontSize: 24,
    cursor: "pointer",
  };

  const modalBodyStyle = {
    marginTop: 20,
    marginBottom: 20,
  };

  const modalButtonStyle = {
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    padding: "6px 12px",
    fontSize: 14,
    borderRadius: 4,
    cursor: "pointer",
  };

  // ---------------------------------------------------------------------------------------------->
  return (
    <div style={displayModalStyle}>
      <div style={modalBackgroundStyle}>
        <div style={modalStyle}>
          <div style={modalHeaderFooterStyle}>
            <h3 style={modalTitleStyle}>Modal Title</h3>
            <button style={modalCloseStyle} onClick={closeModal}>
              &times;
            </button>
          </div>
          <div style={modalBodyStyle}>
            <p>Modal body text goes here.</p>
          </div>
          <div style={modalHeaderFooterStyle}>
            <button style={modalCloseStyle} onClick={closeModal}>
              Close
            </button>
            <button style={modalButtonStyle}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;