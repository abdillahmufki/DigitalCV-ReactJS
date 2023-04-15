import React from "react";

const Button = (props) => {
  return (
    <div className="btn bg-[#0d3b72] outline outline-offset-0 outline-[#0d3b72] hover:outline-[#ff9800] hover:bg-[#ff9800] border-none px-[30px]">
      {props.text}
    </div>
  );
};

export default Button;
