import React from "react";

const AboutWrap = ({ children }) => {
  return (
    <>
      <div className="bg-[#fff] dark:bg-slate-400 rounded-xl p-10 lg:p-14 shadow-xl">
        {children}
      </div>
    </>
  );
};

export default AboutWrap;
