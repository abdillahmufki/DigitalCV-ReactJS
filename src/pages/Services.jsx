import React, { lazy, Suspense } from "react";
import Hero from "../components/Hero";

const ServiceLeading = lazy(() =>
  import("../Features/services/ServiceLeading")
);
const ServiceLifecycle = lazy(() =>
  import("../Features/services/ServiceLifecycle")
);
const ServiceCollaborate = lazy(() =>
  import("../Features/services/ServiceCollaborate")
);
const ServiceBenefit = lazy(() =>
  import("../Features/services/ServiceBenefit")
);
const AboutContact = lazy(() => import("../Features/about/AboutContact"));
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
        <Suspense fallback={<div>Loading...</div>}>
          <ServiceLeading />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <ServiceLifecycle />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <ServiceCollaborate />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <ServiceBenefit />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <AboutContact />
        </Suspense>
      </div>
    </div>
  );
};

export default Services;
