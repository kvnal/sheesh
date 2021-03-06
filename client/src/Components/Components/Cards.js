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

const Card = ({ zIndex = 0, children, imageURL , name, bio,degreeText}) => (
  // <div style={{ ...cardStyles, zIndex , backgroundImage : `url(${imageURL})` , backgroundPosition : "center"}}>{children}</div>
  <div style={{ ...cardStyles, zIndex, backgroundImage: `url(${imageURL})`, backgroundSize: "cover" }}>
    {imageURL && <div className="flex justify-start items-end w-full h-full">
      <div className=" font-roboto py-10 bg-gradient-to-t from-black to-transparent px-4 w-full flex flex-row items-center">
        <div className="w-8 h-8 rounded-full bg-white mr-2" style={{backgroundImage: `url(${imageURL})`, backgroundSize:'cover'}}>
        </div>

        <div className="w-full">
        <span className="text-md text-white  w-full flex justify-between items-center">
          {name} 
          <span className="text-xs font-semibold">
            {degreeText} - 3rd Year
          </span>
        </span>
        <span className="text-sm text-white block">
          {bio}
        </span>
        </div>
      </div>
    </div>}
    <span className="text-black">
      {children}
    </span>
  </div>
);

export default Card;
