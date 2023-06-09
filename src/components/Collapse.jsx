import React from "react";

const Collapse = (props) => {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow border-b border-base-300 dark:border-[#111827] bg-[#fff] shadow-md dark:bg-gradient-to-r from-blue-900 to-blue-400 dark:text-white rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title text-black dark:text-white text-xl font-medium">
        {props.title}
      </div>
      <div className="collapse-content">
        <p className="text-base">{props.content}</p>
      </div>
    </div>
  );
};

export default Collapse;
