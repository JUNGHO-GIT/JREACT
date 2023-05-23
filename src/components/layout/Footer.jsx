import React, {useState} from "react";
import Modal from "../common/Modal";

// ------------------------------------------------------------------------------------------------>
const Footer = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // ---------------------------------------------------------------------------------------------->
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright
            <strong>
              <span>JUNGHOMUN</span>
            </strong>
          </div>
          <div className="credits">
            <a href="" onClick={handleOpenModal}>
              <i className="bi bi-info-circle"></i>
              {isModalOpen && (
                <Modal isOpen={isModalOpen} closeModal={handleCloseModal} />
              )}
            </a>
          </div>
        </div>
      </footer>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>

    </>
  );
};
export default Footer;
