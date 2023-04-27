import React from "react";
import ItemWrap from "./ItemWrap";

const CardContentTab = (props) => {
  return (
    <>
      <ItemWrap>
        <div className="logo__image flex justify-center">
          <img src={props.imgLogo} width={100} alt={props.altLogo} />
        </div>
        <div className="flex justify-center">
          <div className="my-5">
            <img src={props.imgContent} width={400} alt={props.altContent} />
            <h4 className="text-2xl font-semibold text-center mt-3">
              {props.content}
            </h4>
          </div>
        </div>
        <div>
          <p className="text-center">{props.description}</p>
        </div>
      </ItemWrap>
    </>
  );
};

export default CardContentTab;
