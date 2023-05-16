import React, {useState} from "react";
import "../assets/styles/Modal.css";

// ------------------------------------------------------------------------------------------------>
function Modal ()  {
  const [modal, setModal] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const MODAL_DELAY = 300;

  // ---------------------------------------------------------------------------------------------->
  const openModal = () => {
    setDisplayModal(true);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setModal(true);
    }, MODAL_DELAY);
  };

  // ---------------------------------------------------------------------------------------------->
  const closeModal = () => {
    setModal(false);
    document.body.style.overflow = "visible";
    setTimeout(() => {
      setDisplayModal(false);
    }, MODAL_DELAY);
  };

  // ---------------------------------------------------------------------------------------------->
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {displayModal && (
        <div className={`modal-background${modal ? " modal-background-active" : ""}`}>
          <div className={`modal${modal ? " modal-active" : ""}`}>
            <div className="modal-header">
              <h3 className="modal-title">Modal Title</h3>
              <button className="modal-close" onClick={closeModal}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button className="modal-button" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
