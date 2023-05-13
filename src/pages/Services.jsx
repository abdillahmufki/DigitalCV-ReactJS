import React from "react";
import HeroServices from "../Features/hero/HeroService";
import ServiceLeading from "../Features/services/ServiceLeading";
import ServiceLifecycle from "../Features/services/ServiceLifecycle";

const Services = () => {
  return (
    <>
      <div className="lg:p-10 sm:p-8">
        <HeroServices />
      </div>
      <div>
        <ServiceLeading />
      </div>
      <div>
        <ServiceLifecycle />
      </div>
    </>
  );
};

export default Services;
