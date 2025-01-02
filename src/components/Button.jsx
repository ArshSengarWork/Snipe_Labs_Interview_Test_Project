import React from "react";

const Button = ({ title }) => {
  return (
    <button className="border-2 border-white pr-2 pl-2 text-white">
      {title}
    </button>
  );
};

export default Button;
