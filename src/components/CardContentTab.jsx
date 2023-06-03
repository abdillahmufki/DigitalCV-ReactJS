import React from "react";
import ItemWrap from "./ItemWrap";

const CardContentTab = (props) => {
  return (
    <>
      <ItemWrap>
        <div className="logo__image flex justify-center">
          <img src={props.imgLogo} style={{ height: 70 }} alt={props.altLogo} />
        </div>
        <div className="flex justify-center">
          <div className="my-5">
            <img
              src={props.imgContent}
              className="pointer-events-none select-none"
              draggable="false"
              width={250}
              alt={props.altContent}
            />
            <h4 className="text-2xl max-[480px]:text-xxl text-black dark:text-white font-semibold text-center mt-3">
              {props.content}
            </h4>
          </div>
        </div>
        <div>
          <p className="text-center max-[480px]:text-base">
            {props.description}
          </p>
        </div>
      </ItemWrap>
    </>
  );
};

export default CardContentTab;
