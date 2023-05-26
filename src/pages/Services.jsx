import React from "react";
import Hero from "../components/Hero";
import ServiceLeading from "../Features/services/ServiceLeading";
import ServiceLifecycle from "../Features/services/ServiceLifecycle";
import ServiceCollaborate from "../Features/services/ServiceCollaborate";
import ServiceBenefit from "../Features/services/ServiceBenefit";
import AboutContact from "../Features/about/AboutContact";
import img from "../assets/images/content/about.svg";

const Services = () => {
  const data = {
    id: 1,
    title: "SERVICES",
    subHeading:
      "  Kami membangun, menguji, meluncurkan, dan meningkatkan kualitas terbaik aplikasi web dan mobile yang kompleks.",
    img: img,
    button: "Contact",
  };
  return (
    <div className="my-10">
      <div>
        <Hero
          heading={data.title}
          subHeading={data.subHeading}
          img={data.img}
          button={data.button}
          className="text-center"
        />
      </div>
      <div className="mt-10">
        <ServiceLeading />
      </div>
      <div>
        <ServiceLifecycle />
      </div>
      <div>
        <ServiceCollaborate />
      </div>
      <div>
        <ServiceBenefit />
      </div>
      <div>
        <AboutContact />
      </div>
    </div>
  );
};

export default Services;
