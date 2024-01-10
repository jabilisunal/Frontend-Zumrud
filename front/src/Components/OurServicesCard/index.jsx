import React, { useEffect, useState } from "react";
import "./index.scss";

function OurServicesCard() {
  const [serviceCard, setServiceCard] = useState([]);

  function getServiceData() {
    fetch("http://localhost:3100/")
      .then((res) => res.json())
      .then((data) => setServiceCard(data));
  }
  function deleteServices(id) {
    fetch("http://localhost:3100/"+id, { method: "DELETE" }).then(() =>getServiceData())
    ;
  }
  useEffect(() => {
    getServiceData();
  }, []);

  return (
    <div className="serviceCards">
      {serviceCard.map((x) => (
        <div className="serviceCard">
          <i className={x.icon}></i>
          <p className="serviceCard_title">{x.title}</p>
          <p className="serviceCard_about">{x.about}</p>
          <button onClick={()=>deleteServices(x._id)}>x</button>
        </div>
      ))}
    </div>
  );
}

export default OurServicesCard;
