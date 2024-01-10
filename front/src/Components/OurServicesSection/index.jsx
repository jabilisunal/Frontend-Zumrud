import React from "react";
import "./index.scss";
import OurServicesCard from "../OurServicesCard";

function OurServicesSection() {
  return (
    <div className="ourServices">
      <div className="ourServices_header">
        <div className="ourTopServices">
          <div className="line"></div>
          <p>OUR TOP SERVICES</p>
        </div>
        <p className="ourBestServices">Our Best Services</p>
      </div>
      <OurServicesCard/>
    </div>
  );
}

export default OurServicesSection;
