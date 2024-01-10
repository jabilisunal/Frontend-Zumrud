import React from "react";
import "./index.scss";
function OurMembersSection() {
  return (
    <div className="ourMembersSection_container">
      <div className="ourMembersSection">
        <div className="ourMembersSection_header">
          <div className="outProfessionalMembers">
            <div className="line"></div>
            <p>OUR PROFESSIONAL MEMBERS</p>
          </div>
          <p className="ourTeamMembers">Our Team Members</p>
        </div>
        <div className="ourMembersSection_cards">
          <div className="ourMembersSection_card">
            <div className="ourMembersSection_card_img">
            <img
              src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png.webp"
              alt=""
            />
            </div>
            <p className="designer_name">Ethan Welch</p>
            <div className="uxDesigner">
              <div className="line"></div>
              <p>UX Designer</p>
            </div>
          </div>
          <div className="ourMembersSection_card">
            <div className="ourMembersSection_card_img">
            <img
              src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team3.png.webp"
              alt=""
            />
            </div>
            <p className="designer_name">Ethan Welch</p>
            <div className="uxDesigner">
              <div className="line"></div>
              <p>UX Designer</p>
            </div>
          </div>
          <div className="ourMembersSection_card">
            <div className="ourMembersSection_card_img">
            <img
              src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team1.png.webp"
              alt=""
            />
            </div>
            <p className="designer_name">Ethan Welch</p>
            <div className="uxDesigner">
              <div className="line"></div>
              <p>UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMembersSection;
