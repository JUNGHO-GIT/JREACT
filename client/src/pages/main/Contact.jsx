import React, {useEffect, useRef} from "react";

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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12650.019124063203!2d126.96497476224326!3d37.56672970000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2f332cb082b%3A0xe92b70ac420cf0a8!2z7ISc7Jq47Yq567OE7Iuc7LKt!5e0!3m2!1sko!2skr!4v1684723235393!5m2!1sko!2skr" style={{border:0, width: "100%", height: "500px"}} allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;