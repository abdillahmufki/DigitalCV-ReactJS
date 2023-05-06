import React from "react";
import errorImg from "../assets/images/content/error.gif";
import Button from "../components/Button";
export default function ErrorPage() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="my-10">
        <img src={errorImg} alt="images" />
      </div>
    </div>
  );
}
