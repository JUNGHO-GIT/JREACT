import React, {useEffect, useRef} from "react";
import "../../core/App.css";

// ------------------------------------------------------------------------------------------------>
const Contact = () => {

  const itemsArray = {
    title : ["Contact"],
  };

  // ---------------------------------------------------------------------------------------------->
  return (

    <section id="contact" className="contact section-bg">
      <div className="container">
        <div className="section-title">
          <h2>{itemsArray.title}</h2>
        </div>
        <div className="row" data-aos="fade-in">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
            <iframe src="https://www.google.com/maps/d/embed?mid=1aZouwMhWCdnZgWWpA1vwNf-yE8Y&hl=en_US&ehbc=2E312F" width="100%" height="500"
            style={{border:0, alignContent:"center", marginBottom: -60}} allowfullscreen="" loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;