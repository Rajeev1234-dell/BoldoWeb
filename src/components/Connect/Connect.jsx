import React from "react";
import "./Connect.scss";
import { TiTick } from "react-icons/ti";
import connect_img1 from "../../assets/connect1.png";
import connect_img2 from "../../assets/connect2.png";
import Button from "../Button/Button";

function Connect({ content }) {
  return (
    <section>
      <div className="connect">
        <div className="connect_img">
          <img src={connect_img1} />
          <div className="abs_img">
            <img src={connect_img2} />
          </div>
        </div>
        <div className="connect_data">
          <h1>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>
          <ul>
            {content.connectContent?.map((item) => {
              return (
                <li>
                  <TiTick className="tick_icon" /> {item.data}
                </li>
              );
            })}
          </ul>
          <Button className={"primary-dark"} children={"Start now"} />
        </div>
      </div>
    </section>
  );
}

export default Connect;
