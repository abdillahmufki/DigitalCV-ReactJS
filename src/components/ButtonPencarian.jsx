import React from "react";

const ButtonPencarian = (props) => {
  return (
    <button className="btn btn-xs btn-outline btn-[#0d3b72] text-[12px] hover:bg-[#0d3b72] rounded-full mx-1">
      {props.text}
    </button>
  );
};

export default ButtonPencarian;
