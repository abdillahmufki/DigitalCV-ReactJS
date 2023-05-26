import React from "react";

const AboutWrap = ({ children }) => {
  return (
    <>
      <div className="bg-[#fff] dark:bg-slate-400 rounded-xl p-16 lg:p-24">
        {children}
      </div>
    </>
  );
};

export default AboutWrap;
