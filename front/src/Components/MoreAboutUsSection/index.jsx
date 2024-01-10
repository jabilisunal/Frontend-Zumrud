import React from "react";
import "./index.scss";

function MoreAboutUsSection() {
  return (
    <div className="moreAboutUsSection">
      <div className="moreAboutUs">
        <img
          src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/about.png.webp"
          alt=""
        />
        <div className="moreAboutUs_textbox">
          <div className="moreAboutUs_textbox_topServices">
            <div className="line"></div>
            <p>OUR TOP SERVICES</p>
          </div>
          <h3>Our Best Services</h3>
          <p className="moreAboutUs_textbox_desc1">
            Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess
            cillum dolore egru lofrre dsu quality mollit anim laborumuis au
            dolor in voluptate velit cillu.
          </p>
          <p className="moreAboutUs_textbox_desc2">
            Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re
            voluptate velit esscillumlore eu quife nrulla parihatur.
            Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg
            dhjinulpadeserunt moll.
          </p>
          <button>MORE ABOUT US</button>
        </div>
      </div>
    </div>
  );
}

export default MoreAboutUsSection;
