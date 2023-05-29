import React, { useEffect, lazy, Suspense } from "react";
import Hero1 from "../components/Hero.jsx";
import img from "../assets/images/content/home.svg";

const TabComponent = lazy(() =>
  import("../Features/TabsFeature/TabComponent.jsx")
);
const Partner = lazy(() => import("../Features/PartnerFeature/Partner.jsx"));
const About = lazy(() => import("../Features/about/About"));

const Home = () => {
  useEffect(() => {
    // AOS initialization code here
  }, []);

  const data = {
    id: 1,
    title: "Selamat Datang Di Gestalt Systech",
    subHeading:
      "Rampingkan operasional bisnis Anda dengan Platform yang terintegrasi untuk produktivitas tanpa batas!",
    description:
      "Gestalt Systech, solusi teknologi modern untuk mengoptimalkan kinerja bisnis Anda. Kami telah merancang sistem dengan cermat agar sesuai dengan kebutuhan perusahaan Anda. Dapatkan keuntungan dari kemajuan teknologi bersama kami!",
    img: img,
    button: "Contact",
  };

  return (
    <>
      <div>
        <Hero1
          data-aos="fade-up"
          heading={data.title}
          subHeading={data.subHeading}
          text={data.description}
          img={data.img}
          button={data.button}
          className="text-center"
        />
      </div>
      <div className="my-[80px]" data-aos="fade-up">
        <Suspense fallback={<div>Loading...</div>}>
          <TabComponent />
        </Suspense>
      </div>
      <div className="my-5">
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      </div>
      <div className="my-5 px-5">
        <Suspense fallback={<div>Loading...</div>}>
          <Partner />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
