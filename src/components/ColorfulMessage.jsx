import React from "react";

export const ColorfulMessage = (props) => {
  //console.log("最初");
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

//export default ColorfulMessage;
