import React from "react";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <a href="#">
        <img src={facebook} alt="Facebook" />
      </a>
      <a href="#">
        <img src={instagram} alt="Instagram" />
      </a>
      <a href="#">
        <img src={twitter} alt="Twitter" />
      </a>
    </div>
  );
};

export default Footer;
