import React from "react";
import HeroServices from "../Features/hero/HeroService";
import ServiceLeading from "../Features/services/ServiceLeading";
import ServiceLifecycle from "../Features/services/ServiceLifecycle";
import ServiceCollaborate from "../Features/services/ServiceCollaborate";
import ServiceBenefit from "../Features/services/ServiceBenefit";
import AboutContact from "../Features/about/AboutContact";

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
      <div>
        <ServiceCollaborate />
      </div>
      <div>
        <ServiceBenefit />
      </div>
      <div>
        <AboutContact />
      </div>
    </>
  );
};

export default Services;
