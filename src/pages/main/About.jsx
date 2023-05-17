import React from "react";
import "../../core/App.css";
import Image from "../../assets/images/main/profile.jpg";

// ------------------------------------------------------------------------------------------------>
const About = () => {
  const itemsArray = {
    title : ["About"],
    roleTitle: ["UI/UX Designer & Web Developer."],
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
  };

  // ---------------------------------------------------------------------------------------------->
  return (
    <section id="about" className="about section-bg">
      <div className="container">
        <div className="section-title">
          <h2>{itemsArray.title}</h2>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={Image}  alt="Profile" width="350px" height="300px" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>{itemsArray.roleTitle}</h3>
            <div className="row">
              {itemsArray.section.map((sectionItem, index) => (
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
