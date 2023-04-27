import React from "react";

const ItemWrap = ({ children }) => {
  return (
    <>
      <div className="bg-[#F2F4F7] rounded-md p-10">{children}</div>
    </>
  );
};

export default ItemWrap;
