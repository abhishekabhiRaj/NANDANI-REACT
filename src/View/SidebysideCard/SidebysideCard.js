import React from "react";

import "./SidebysideCard.scss";

import a1 from "../../Assets/Image/AboutImage/a1.jpeg";

const SidebysideCard = ({name, detail}) => {
  return (
    <div>
        <div className="About-card col-11 mx-auto"  >
      <div className="image" >
        <img src={a1} alt="..." />
      </div>
      <div className="text" style={{padding:'1rem 1rem'}} >
        <h1> About : {name} </h1>
        <p> {detail} </p>
      </div>
    </div>
    </div>
  );
};

export default SidebysideCard;
