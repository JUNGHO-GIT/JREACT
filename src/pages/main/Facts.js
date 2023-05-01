// import ----------------------------------------------------------------------------------------->
import React from "react";
import "../../core/App.css";

// state ------------------------------------------------------------------------------------------>
const Facts = ()  => {

  // variables ------------------------------------------------------------------------------------>

  // array ---------------------------------------------------------------------------------------->
  const Items = {

    sectionTitle : [
      "Facts"
    ],

    sectionDescription : [
      "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit."
    ],

    itemsTitle : [
      {
        id: 1,
        count: "123",
        text: "Happy Clients"
      },
      {
        id: 2,
        count: "234",
        text: "Projects"
      },
      {
        id: 3,
        count: "567",
        text: "Hours Of Support"
      },
      {
        id: 4,
        count: "890",
        text: "Hard Workers"
      }
    ]
  };

  // return --------------------------------------------------------------------------------------->
	return (
		<section id="facts" className="facts">
			<div className="container">
				<div className="section-title">
					<h2>{Items.sectionTitle}</h2>
					<p>{Items.sectionDescription}</p>
				</div>

				<div className="row no-gutters">
          {Items.itemsTitle.map((itemTitle) => (
            <div
              key={itemTitle.id}
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
            >
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <span
                  className="purecounter"
                  data-purecounter-duration="1"
                  data-purecounter-start="0"
                  data-purecounter-end={itemTitle.count}
                ></span>
                <p>
                  <strong>{itemTitle.text}</strong>
                  {itemTitle.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Facts;
