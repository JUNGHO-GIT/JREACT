// Contact.jsx

import { React } from "../../../import/ImportReacts.jsx";

// -------------------------------------------------------------------------------------------------
export const Contact = () => {

  const itemsArray = {
    title : ["Contact"],
  };

  // -----------------------------------------------------------------------------------------------
  return (
    <section id="contact" className="contact section-bg">
      <div className="container">
        <div className="section-title">
          <h2>{itemsArray.title}</h2>
        </div>
        <div className="row" data-aos="fade-in">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
            <iframe
              title={"Google Map"}
              src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.596643112739!2d127.03935341531129!3d37.57437848025158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2eae426a47b%3A0xd3a6386c3175a18!2z7YyM7J207I2sIOyVhOyCsO2VnCDsiJzsiqTshLE!5e0!3m2!1sko!2skr"}
              style={{border: 0, width: "100%", height: "500px"}}
              allowFullScreen={false}
              loading={"lazy"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};