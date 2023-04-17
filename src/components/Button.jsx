import React from "react";

const Button = (props) => {
  return (
    <button className="btn bg-gradient-to-r from-blue-900 to-blue-400 border-none rounded-full text-white font-medium hover:opacity-50">
      {props.text}
    </button>
  );
};

export default Button;
