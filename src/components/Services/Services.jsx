import React from "react";
import "./services.scss";
import Cards from "../Cards/Cards";
import service_img1 from "../../assets/service1.png";
import service_img2 from "../../assets/service2.png";
import service_img3 from "../../assets/service3.png";

function Services() {
  const cardDetails = [
    {
      img: service_img1,
      title: "Cool feature title",
      desc: "Learning curve network effects return on investment.",
      btn: "Explore page",
    },
    {
      img: service_img2,
      title: "Even cooler feature",
      desc: "Learning curve network effects return on investment.",
      btn: "Explore page",
    },
    {
      img: service_img3,
      title: "Cool feature title",
      desc: "Learning curve network effects return on investment.",
      btn: "Explore page",
    },
  ];

  return (
    <section>
      <div className="service">
        <div className="service_information">
          <p className="service_title">Our Services</p>
          <h1 className="service_desc">
            Handshake infographic mass market crowdfunding iteration.
          </h1>
        </div>
        <div className="service_cards">
          {cardDetails?.map((card) => {
            return (
              <Cards
                title={card.title}
                desc={card.desc}
                btn={card.btn}
                img={card.img}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
