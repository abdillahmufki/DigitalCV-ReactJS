import React from "react";

const ItemWrap = ({ children }) => {
  return (
    <>
      <div className="bg-[#F2F4F7] dark:bg-slate-500 dark:text-white rounded-md p-10">
        {children}
      </div>
    </>
  );
};

export default ItemWrap;
