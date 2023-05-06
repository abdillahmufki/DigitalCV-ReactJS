import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className="btn bg-gradient-to-r from-blue-900 to-blue-400 border-none rounded-lg py-1 px-5 text-white font-medium hover:opacity-75 hover:-translate-y-1"
    >
      {props.children}
    </button>
  );
};

export default Button;
