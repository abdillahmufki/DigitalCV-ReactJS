import React from "react";

const ButtonOutline = (props) => {
  return (
    <button className="btn  btn-sm btn-outline outline outline-offset-0 outline-[#0d3b72] border-none bg-white hover:bg-[#0d3b72] px-[25px]">
      {props.text}
    </button>
  );
};

export default ButtonOutline;
