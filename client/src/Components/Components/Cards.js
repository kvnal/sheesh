import React from "react";

const cardStyles = {
//   background: "lightgray",
  borderRadius: 3,
  width: "100%",
  height: "80%",
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0
};

const Card = ({ zIndex = 0, children , imageURL}) => (
  // <div style={{ ...cardStyles, zIndex , backgroundImage : `url(${imageURL})` , backgroundPosition : "center"}}>{children}</div>
  <div style={{ ...cardStyles, zIndex , backgroundImage : `url(${imageURL})` , backgroundSize : "cover"}}>
    <span className="text-black">
    {children}
    </span>
    </div>
);

export default Card;
