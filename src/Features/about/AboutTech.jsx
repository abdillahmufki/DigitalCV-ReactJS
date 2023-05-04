import React, { useEffect, useState } from "react";
import { Row, Col } from "react-grid-system";
import "../../App.css";
import angular from "../../assets/images/logo-tech/angular.svg";
import c from "../../assets/images/logo-tech/c.svg";
import css from "../../assets/images/logo-tech/css.svg";
import html from "../../assets/images/logo-tech/html.svg";
import jquery from "../../assets/images/logo-tech/jquery.svg";
import laravel from "../../assets/images/logo-tech/laravel.svg";
import nodejs from "../../assets/images/logo-tech/node.svg";
import php from "../../assets/images/logo-tech/php.svg";
import react from "../../assets/images/logo-tech/react.svg";
import symfony from "../../assets/images/logo-tech/symfony.svg";
import vue from "../../assets/images/logo-tech/vue.svg";
import wordpress from "../../assets/images/logo-tech/wordpress.svg";
import sql from "../../assets/images/logo-tech/sql.svg";
import swift from "../../assets/images/logo-tech/swift.svg";
import sass from "../../assets/images/logo-tech/sass.svg";
import flutter from "../../assets/images/logo-tech/flutter.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const listItem = [
  {
    id: 1,
    alt: "PHP",
    image: php,
  },
  {
    id: 2,
    alt: "Symfony",
    image: symfony,
  },
  {
    id: 3,
    alt: "Laravel",
    image: laravel,
  },
  {
    id: 4,
    alt: "WordPress",
    image: wordpress,
  },
  {
    id: 5,
    alt: "AngularJS",
    image: angular,
  },
  {
    id: 6,
    alt: "NodeJS",
    image: nodejs,
  },
  {
    id: 7,
    alt: "React",
    image: react,
  },
  {
    id: 8,
    alt: "Vue",
    image: vue,
  },
  {
    id: 9,
    alt: "jQuery",
    image: jquery,
  },
  {
    id: 10,
    alt: "HTML",
    image: html,
  },
  {
    id: 11,
    alt: "CSS",
    image: css,
  },
  {
    id: 12,
    alt: "C",
    image: c,
  },
  {
    id: 13,
    alt: "SQL",
    image: sql,
  },
  {
    id: 14,
    alt: "Swift",
    image: swift,
  },
  {
    id: 15,
    alt: "Sass",
    image: sass,
  },
  {
    id: 16,
    alt: "Flutter",
    image: flutter,
  },
];

const AboutTech = () => {
  const [items, setItems] = useState(listItem);

  useEffect(() => {
    const interval = setInterval(() => {
      const index1 = Math.floor(Math.random() * items.length);
      let index2 = Math.floor(Math.random() * items.length);
      while (index2 === index1) {
        index2 = Math.floor(Math.random() * items.length);
      }
      const newItems = [...items];
      [newItems[index1], newItems[index2]] = [
        newItems[index2],
        newItems[index1],
      ];
      setItems(newItems);
    }, 3000);
    return () => clearInterval(interval);
  }, [items]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      easing: "ease-out", // Jenis easing yang digunakan
      delay: 200, // Delay animasi dalam milidetik
    });
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-blue-900 to-blue-400 px-10 py-24 overflow-hidden">
        <div className="header__about text-center text-white">
          <h2 className="text-4xl" data-aos="fade-down">
            Teknologi yang kami gunakan
          </h2>
          <p className="my-5 text-xl" data-aos="fade-left">
            Kami mengembangkan aplikasi web menggunakan teknologi terkini, yang
            meliputi: PHP, Symfony, Laravel, WordPress, AngularJS, Node.js,
            React, Vue, Slim, Silex dan alat-alat lainnya - kami terus belajar
            dan berkembang bersama-sama dengan industri , menambahkan alat baru
            ke kotak alat kami kapan pun kami bisa.
          </p>
        </div>

        <div>
          <Row className="flex justify-center">
            {items.map((item) => (
              <Col xs={6} sm={3} md={3} lg={3} key={item.id}>
                <div className="flex justify-center transition ease-in-out duration-500 transform hover:-translate-y-1">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-48 h-24"
                    data-aos="fade-right"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default AboutTech;
