import React from "react";
import "../../core/App.css";

// ------------------------------------------------------------------------------------------------>
const Resume = () => {
  const itemsArray = {
    title: ["Resume"],
    summary: [
      {
        title: "Summary",
        icon: "bi bi-person-badge-fill",
        data: [
          {
            name: "JUNGHO MUN",
            description: "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
            address: "Portland par 127,Orlando, FL",
            phone: "(123) 456-7891",
            email: "sksk@google.com",
          },
        ],
      },
    ],
    education: [
      {
        title: "Education",
        icon: "bi bi-award-fill",
        data: [
          {
            degree: "Master of Fine Arts & Graphic Design",
            year: "2015 - 2016",
            institution: "Rochester Institute of Technology, Rochester, NY",
            description: "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend",
          },
          {
            degree: "Bachelor of Fine Arts & Graphic Design",
            year: "2010 - 2014",
            institution: "Rochester Institute of Technology, Rochester, NY",
            description: "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila",
          },
        ],
      },
    ],
    experience: [
      {
        title: "Professional Experience",
        icon: "bi bi-briefcase-fill",
        data: [
          {
            position: "Junior graphic design specialist",
            year: "2015 - 2017",
            company: "Adventsure, New York, NY",
            responsibilities: ["Communicated with the art director to ensure all projects were completed", "Established trusting relationships with outside venders, designers and key clients.", "Worked with a wide range of media, including photography and computer-aided design", "Created design theme and graphics for marketing and sales presentations, training videos and corporate websites."],
          },
          {
            position: "Graphic design specialist",
            year: "2017 - 2018",
            company: "Stepping Stone Advertising, New York, NY",
            responsibilities: ["Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).", "Managed up to 5 projects or tasks at a given time while under pressure", "Recommended and consulted with clients on the most appropriate graphic design", "Created 4+ design presentations and proposals a month for clients and account managers"],
          },
        ],
      },
    ],
  };
  const {
    summary: [summary],
    education: [education],
    experience: [experience],
  } = itemsArray;

  // ---------------------------------------------------------------------------------------------->
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>{itemsArray.title}</h2>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">
              <i className="bi bi-person-badge-fill"></i>
              {summary.title}
            </h3>
            {summary.data.map((summary, index) => (
              <div key={index} className="resume-item pb-0">
                <h4>{summary.name}</h4>
                <p>
                  <em>{summary.description}</em>
                </p>
                <ul>
                  <li>{summary.address}</li>
                  <li>{summary.phone}</li>
                  <li>{summary.email}</li>
                </ul>
              </div>
            ))}
            <h3 className="resume-title">
              <i className="bi bi-award-fill"></i>
              {education.title}
            </h3>
            {education.data.map((edu, index) => (
              <div key={index} className="resume-item">
                <h4>{edu.degree}</h4>
                <h5>{edu.year}</h5>
                <p>
                  <em>{edu.institution}</em>
                </p>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">
              <i className="bi bi-briefcase-fill"></i>
              {experience.title}
            </h3>
            {experience.data.map((exp, index) => (
              <div key={index} className="resume-item">
                <h4>{exp.position}</h4>
                <h5>{exp.year}</h5>
                <p>
                  <em>{exp.company}</em>
                </p>
                <ul>
                  {exp.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
