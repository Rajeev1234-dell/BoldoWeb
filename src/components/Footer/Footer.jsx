import React from "react";
import logo from "../../../src/assets/Logo.png";
import "./footer.scss";
import items from "../../items";
import ItemList from "../ItemList/ItemList";
import Button from "../Button/Button";

function Footer() {
  return (
    <footer>
      <div className="footer-form">
        <h1>An enterprise template to ramp up your company website</h1>
        <form>
          <div>
            <input type="text" placeholder="Your Email Address" />
            <Button className={"secondary"} children={"Start now"} />
          </div>
        </form>
      </div>
      <div className="footer-data">
        <div className="footer-desc">
          <img src={logo} />
          <p className="desc">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p className="right">All rights reserved.</p>
        </div>
        <div className="footer-options">
          {items.map((items, index) => {
            return (
              <ItemList
                heading={items.heading}
                item1={items.item1}
                item2={items.item2}
                item3={items.item3}
              />
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
