import React from "react";
import Image from "../../assets/images/main/profile.jpg";

// ------------------------------------------------------------------------------------------------>
const About = () => {
  const itemsArray = {
    title : ["About"],
    roleTitle: ["Full Stack Developer"],
    section: [
      {
        sectionTitle: "이름  :  ",
        sectionValue: "문정호",
      },
      {
        sectionTitle: "주소  :  ",
        sectionValue: "서울시 동대문구",
      },
      {
        sectionTitle: "생년월일  :  ",
        sectionValue: "1996.09.14",
      },
      {
        sectionTitle: "이메일  :  ",
        sectionValue: "junghomun@naver.com",
      },
      {
        sectionTitle: "전화번호  :  ",
        sectionValue: "010-8252-4757",
      },
      {
        sectionTitle: "사이트  :  ",
        sectionValue: "www.junghomun.com",
        isLink : true,
      },
    ],
  };

  // ---------------------------------------------------------------------------------------------->
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>{itemsArray.title}</h2>
        </div>
        <div className="row">
          {/** image **/}
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12" data-aos="fade-right">
            <img src={Image}  alt="Profile" className="jungho-image" style={{maxHeight: "400px"}}/>
          </div>
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-xs-12 col-12"></div>
          {/** details **/}
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>{itemsArray.roleTitle}</h3>
            <div className="row">
              {itemsArray.section.map((sectionItem, index) => (
                <ul key={index}>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>{sectionItem.sectionTitle}</strong>
                    {sectionItem.isLink ? (
                      <a href={`http://${sectionItem.sectionValue}`} target="_blank" rel="noreferrer" className="text-hover">
                        {sectionItem.sectionValue}
                      </a>
                    ) : (sectionItem.sectionValue)
                    }
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
