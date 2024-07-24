import React from "react";
import "./Customer.scss";
import customer_img1 from "../../assets/customer1.png";
import customer_img2 from "../../assets/customer2.png";
import { IoSunnyOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { PiShootingStar } from "react-icons/pi";

function Customer({content}) {

  const iconMapping = (icon) => {
    switch (icon) {
      case "shootIcon":
        return <PiShootingStar />;
        break;
      case "eyeIcon":
        return <IoEyeOutline />;
        break;
      case "sunnyIcon":
        return <IoSunnyOutline />;
        break;
      default : return ""
      break;
    }
  };

  return (
    <section>
      <div className="customer">
        <div className="customer_data">
          <h1>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>
          {content.customerContent?.map((item) => {
            return (
              <div className="customer_information">
                <p>
                  <span className="icon">{iconMapping(item.icon)}</span>{" "}
                  {item.data}
                </p>
              </div>
            );
          })}
        </div>
        <div className="customer_img">
          <img src={customer_img1} alt="" />
          <div className="abs_img">
            <img src={customer_img2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customer;