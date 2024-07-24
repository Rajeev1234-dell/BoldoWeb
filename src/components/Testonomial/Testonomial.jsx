import React, { Profiler } from "react";
import Cards from "../Cards/Cards";
import "./testonomial.scss";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Testonomial({ content }) {
  return (
    <section>
      <div className="full-width">
        <div className="main">
          <div className="testonomial">
            <div className="testonomial_header">
              <div className="testonomial_title">
                <h1 className="title">
                  An enterprise template to ramp up your company website
                </h1>
              </div>
              <div className="testonomial_arrows">
                <div className="arrow">
                  <FaArrowLeft />
                </div>
                <div className="arrow">
                  <FaArrowRight />
                </div>
              </div>
            </div>
            <div className="testonomial_cards">
              {content.testonomialContent?.map((card) => {
                return (
                  <Cards
                    desc={card.desc}
                    profileImg={card.profileImg}
                    profileName={card.profileName}
                    profileDesc={card.profileDesc}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testonomial;
