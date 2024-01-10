import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const [addIcon, setAddIcon] = useState("");
  const [addTitle, setAddTitle] = useState("");
  const [addAbout, setAddAbout] = useState("");
  const navigate = useNavigate();

  function addService() {
    fetch("http://localhost:3100/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        icon: addIcon,
        title: addTitle,
        about: addAbout,
      }),
    });
    navigate("/");
  }
  return (
    <div className="addPage_Container">
      <div className="addPage">
        <form onSubmit={()=>addService()}>
          <input type="text" placeholder="Add Icon" onChange={(e)=>setAddIcon(e.target.value)}/>
          <input type="text" placeholder="Add Title" onChange={(e)=>setAddTitle(e.target.value)} />
          <input type="text" placeholder="Add About" onChange={(e)=>setAddAbout(e.target.value)} />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddPage;
