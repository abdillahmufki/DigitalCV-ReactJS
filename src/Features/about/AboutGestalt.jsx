import React, { useEffect } from "react";
import { ArrowLongDownIcon } from "@heroicons/react/24/solid";
import { Container } from "react-grid-system";
import bgImg from "../../assets/images/content/switches.svg";
import "../../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Stepper = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      easing: "ease-out", // Jenis easing yang digunakan
      delay: 200, // Delay animasi dalam milidetik
    });
  }, []);
  return (
    <>
      <div
        className="wrap__about lg:py-36 bg-[#313D3F]"
        style={{
          backgroundImage: `url("${bgImg}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <h2
            className="text-center text-3xl font-semibold text-blue-500 my-10"
            data-aos="fade-down"
          >
            About Gestalt Systech
          </h2>
        </div>
        <Container fluid>
          <div
            className="flex flex-col w-full border-opacity-50 px-10"
            data-aos="fade-right"
          >
            <div className="grid card bg-base-300 rounded-box place-items-center p-5">
              Gestalt Systech berasal dari departmen IT Gestalt Center yang
              berdiri 2007, yang merupakan perusahaan human capital consultant.
            </div>
            <div className="divider">
              <ArrowLongDownIcon width={50} />
            </div>
            <div className="grid card bg-base-300 rounded-box place-items-center p-5">
              Seiring dengan perkembangan perusahaan dan peningkatan kebutuhan
              akan bidang IT dari semua klien yang dimiliki maka departemen IT
              ini mulai dibangun dan dibentuk menjadi sebuah perusahaan yang
              terpisah dari gestalt center dari sejak tahun 2018 dan dikukuhkan
              menjadi sebuah perusahaan dengan nama PT.Gestalt Sistem Teknologi
              pada 18 Juni 2019.
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Stepper;
