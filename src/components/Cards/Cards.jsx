import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Cards({
  title,
  desc,
  btn,
  img,
  date,
  profileImg,
  profileName,
  profileDesc,
}) {
  console.log(date);
  return (
    <div className="card">
      <div className="card_details">
        <img src={img} alt="" />
        <p className="card_title">
          {title} {date ? <span className="card_date"> {date} </span> : ""}
        </p>
        <p className="card_desc">{desc}</p>
        {btn ? (
          <button className="card_btn">
            {btn} <FaArrowRight />
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="card_profile">
        <div className="profile_img">
          <img src={profileImg} />
        </div>
        <div className="profile_details">
          <p className="profile_name">{profileName}</p>
          {profileDesc ? <p className="profile_desc">{profileDesc}</p> : ""}
        </div>
      </div>
    </div>
  );
}

export default Cards;
