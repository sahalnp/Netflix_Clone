import React from "react";

export const Button = ({ size , color , children }) => {
  const style = {
    fontSize: size,
    backgroundColor: color,
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
  };

  return <button style={style}>{children}</button>;
};
