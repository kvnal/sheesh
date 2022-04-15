import React from "react";

const cardStyles = {
  //   background: "lightgray",
  borderRadius: 3,
  width: "100%",
  height: "100%",
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0
};

const Card = ({ zIndex = 0, children, imageURL }) => (
  // <div style={{ ...cardStyles, zIndex , backgroundImage : `url(${imageURL})` , backgroundPosition : "center"}}>{children}</div>
  <div style={{ ...cardStyles, zIndex, backgroundImage: `url(${imageURL})`, backgroundSize: "cover" }}>
    <div className="flex justify-start items-end w-full h-full">

      <div className=" font-roboto py-10 bg-gradient-to-t from-black to-transparent px-4 w-full flex flex-row items-center">
        <div className="w-8 h-8 rounded-full bg-white mr-2" style={{backgroundImage: `url(${imageURL})`, backgroundSize:'cover'}}>
        </div>

        <div>
        <span className="text-md text-white block">
          Name
        </span>
        <span className="text-sm text-white block">
          hi this is my bio!!
        </span>
        </div>
      </div>
    </div>
    <span className="text-black">
      {children}
    </span>
  </div>
);

export default Card;
