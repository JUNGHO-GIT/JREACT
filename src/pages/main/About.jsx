import React from "react";
import "../../core/App.css";
import Image from "../../assets/images/main/profile.jpg";

// ------------------------------------------------------------------------------------------------>
const About = () => {
  const items = {
    title : ["About"],
    roleTitle: ["UI/UX Designer & Web Developer."],
    roleDescription: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    section: [
      {
        sectionTitle: "birthday",
        sectionValue: "1 May 1995",
      },
      {
        sectionTitle: "Website",
        sectionValue: "www.example.com",
      },
      {
        sectionTitle: "Phone",
        sectionValue: "+123 456 7890",
      },
      {
        sectionTitle: "City",
        sectionValue: "New York, USA",
      },
      {
        sectionTitle: "Age",
        sectionValue: "30",
      },
      {
        sectionTitle: "Degree",
        sectionValue: "Master",
      },
    ],
    lastDescription: ["Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore."],
  };

  // ---------------------------------------------------------------------------------------------->
  return (
    <section id="about" className="about section-bg">
      <div className="container">
        <div className="section-title">
          <h2>{items.title}</h2>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={Image} className="img-fluid" alt="Profile" width="380px" height="450px" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>{items.roleTitle}</h3>
            <p className="fst-italic">{items.roleDescription}</p>
            <div className="row">
              {items.section.map((sectionItem, index) => (
                <div className="col-lg-6" key={index}>
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>{sectionItem.sectionTitle}</strong>
                      <span>{sectionItem.sectionValue}</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            <p>{items.lastDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
