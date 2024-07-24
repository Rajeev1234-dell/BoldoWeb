import React from "react";
import "./Gallery.scss";
import gallery_img1 from "../../assets/Gallery_img.png";
import { IoIosArrowDown } from "react-icons/io";

function Gallery() {
  const eventPerform = () => {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  };
  return (
    <section>
      <div className="gallery">
        <div className="gallery_img">
          <img src={gallery_img1} alt="" />
        </div>
        <div className="gallery_detail">
          <div className="gallery_title">
            <h1>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h1>
          </div>
          <div className="gallery_accor">
            <button className="accordion" onClick={eventPerform}>
              We connect our customers with the best?
              <span className="arrow">
                <IoIosArrowDown />
              </span>
            </button>
            <div className="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <button className="accordion" onClick={eventPerform}>
              Android research & development rockstar?
              <span className="arrow">
                <IoIosArrowDown />
              </span>
            </button>
            <div className="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
