import React from "react";
import "./index.scss";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer">
        <div className="footer_contact">
          <img
            src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo2_footer.png.webp"
            alt=""
          />
          <p className="footer_desc">Receive updates and latest news direct from Simply enter.</p>
          <p className="footer_phone">+564 <span>7885 3222</span></p>
          <p>youremail@gmail.com</p>
        </div>
        <div className="footer_location">
          <h3>LOCATION</h3>
          <p>Advanced</p>
          <p>Management</p>
          <p>Corporate</p>
          <p>Customer</p>
          <p>Information</p>
        </div>
        <div className="footer_explore">
          <h3>EXPLORE</h3>
          <p>Cookies</p>
          <p>About</p>
          <p>Privacy Policy</p>
          <p>Proparties</p>
          <p>Licenses</p>
        </div>
        <div className="footer_location">
          <h3>LOCATION</h3>
          <p>Subscribe now to get daily updates</p>
            <input type="text" placeholder="Enter Your email" />
            <button>SIGN UP</button>
        </div>
      </div>
      <div className="footer_underside">
        <p>Copyright ©2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by <span>Colorlib</span></p>
        <div className="footer_icons">
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-solid fa-globe"></i>
        <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>  
  );
}

export default Footer;
