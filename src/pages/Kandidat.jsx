import React from "react";
import "../App.css";
// import bgHero from "../assets/images/content/bg1.png";
import SearchBar from "../components/SearchBar";
import ButtonPencarian from "../components/ButtonPencarian";
import imgContent from "../assets/images/content/komponen1.png";

const Kandidat = () => {
  return (
    <div
      className="container-2xl hero min-h-screen bg-fixed"
      // style={{
      //   backgroundImage: `url("${bgHero}")`,
      // }}
    >
      <div className="hero-content sm:pt-5 md:pt-5 lg:pt-2">
        <div className="d-flex justify-center mt-[100px]">
          <div className="flex flex-wrap mx-2">
            <div className="lg:w-1/2 px-2">
              <div className="pl-5">
                <h1 className="text-5xl font-bold">#ChooseYourFuture</h1>
                <p className="font-bold">Make your dream job come true.</p>
              </div>
              <div>
                <div className="py-3">
                  <SearchBar />
                  <div className="flex flex-row py-5 mt-10 ml-3">
                    <p>Pencarian populer :</p>
                    <div className="pl-5">
                      <ButtonPencarian text="IT" />
                      <ButtonPencarian text="Desain Grafis" />
                      <ButtonPencarian text="Akuntansi" />
                      <ButtonPencarian text="Marketing" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 px-2">
              <div>
                <img src={imgContent} className="img-hero" alt="content" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kandidat;
