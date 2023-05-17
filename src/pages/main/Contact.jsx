import React, {useEffect, useRef} from "react";
import "../../core/App.css";

// ------------------------------------------------------------------------------------------------>
const Contact = () => {

  const itemsArray = {
    title : ["Contact"],
  };

  // ---------------------------------------------------------------------------------------------->
  return (

    <section id="contact" class="contact section-bg">
      <div class="container">
        <div class="section-title">
          <h2>{itemsArray.title}</h2>
        </div>
        <div class="row" data-aos="fade-in">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
            <iframe src="https://www.google.com/maps/d/embed?mid=1aZouwMhWCdnZgWWpA1vwNf-yE8Y&hl=en_US&ehbc=2E312F" width="100%" height="500"
            style={{border:0, alignContent:"center", caretColor:"#f5f8fd", marginBottom: -60}} allowfullscreen="" loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;