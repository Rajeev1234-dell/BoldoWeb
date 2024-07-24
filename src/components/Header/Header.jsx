import React from "react";
import logo from "../../../public/Logo1.png";
import "./header.scss";
import hero from "../../assets/hero graphics.svg";
import Slider from "../Slider/Slider";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";

function Header({ content }) {
  return (
    <header>
      <div className="full-width">
        <div className="main">
          <div className="main-header">
            <div className="header">
              <div className="header_logo">
                <img src={logo} className="header_img" />
              </div>
              <Navbar content={content} />
            </div>
            <div className="header_banner-part">
              <div className="header_description">
                <h1 className="header_description_title">
                  Save time by building fast with Boldo Template
                </h1>
                <p className="header_description_para">
                  Funding handshake buyer business-to-business metrics iPad
                  partnership. First mover advantage innovator success
                  deployment non-disclosure.
                </p>
                <div className="header-buttons">
                  <Button className={"primary"} children={"Buy template"} />
                  <Button className={"secondary"} children={"Explore"} />
                </div>
              </div>
              <div className="header_graph">
                <img src={hero} />
              </div>
            </div>
            <Slider />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
