import React from "react";
import "../core/Private.css";
import {createGlobalStyle} from "styled-components";

// ------------------------------------------------------------------------------------------------>
const Footer = () => {

  const FooterStyle = createGlobalStyle`
    .footer {
      position: sticky;
      bottom: 0;
      width: 100%;
      background-color: #343a40;
      color: white;
      text-align: center;
      font-weight: bolder;
    }
  `;

  // ---------------------------------------------------------------------------------------------->
  return (
    <div><FooterStyle />
      <footer className="footer">
        <div className="row pb-6 pt-6">
          <div className="col-8 custom-flex-left ps-10">
            <span className="">&copy; JUNGHO's Domain</span>
          </div>
          <div className="col-4 custom-flex-center pe-10">
            <a href="/"><i className="bi bi-facebook me-5"></i></a>
            <a href="/"><i className="bi bi-twitter me-5"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
