import React from "react";

// -------------------------------------------------------------------------------------------------
const Footer = () => {

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
            DESIGNED BY <a href="/"><span>JUNGHO</span></a>
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
