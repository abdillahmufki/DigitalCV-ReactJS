import React from "react";
import Button from "./Button";

const Card = (props) => {
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl my-10">
      <figure>
        <img
          className="w-full h-48 object-cover transform hover:scale-110 transition duration-300"
          src={props.img}
          alt={props.alt}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black">{props.title}</h2>
        <p className="text-slate-600">{props.desc}</p>
      </div>
    </div>
  );
};

export default Card;
