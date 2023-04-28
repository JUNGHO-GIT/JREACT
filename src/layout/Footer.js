import React from "react";
import "../App.css";

function Footer() {
  return (
 
    <>
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          &copy; Copyright
          <strong><span>JUNGHOMUN</span></strong>
        </div>
        <div className="credits">
          Designed by
          <a href="/">JUNGHO</a>
        </div>
      </div>
    </footer>
    
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    
    </>

  );
}

export default Footer;
