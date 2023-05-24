import React from "react";

const Collapse = (props) => {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow border-b border-base-300 bg-[#fff] shadow-md dark:bg-slate-400 rounded-md"
    >
      <div className="collapse-title text-xl font-medium">{props.title}</div>
      <div className="collapse-content">
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Collapse;
