import React from "react";
import Button from "./Button";

const Card = (props) => {
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-full h-48 object-cover transform hover:scale-110 transition duration-300"
          src={props.img}
          alt={props.alt}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Card;
