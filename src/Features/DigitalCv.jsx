import React from "react";
import ItemWrap from "../components/ItemWrap";
import { Container, Row, Col } from "react-grid-system";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import contentImage from "../assets/images/content/job.png";

const listItems = [
  "Memudahkan melamar dari manapun",
  "Mencari pekerjaan sesuai keahlian dengan mudah",
  "Menyimpan riwayat pencarian dan lamaran",
  "Mendapatkan notifikasi pekerjaan terbaru",
];
const DigitalCv = () => {
  return (
    <div>
      <div className="flex items-center">
        <ItemWrap>
          <Container>
            <Row>
              <Col lg={6}>
                {" "}
                <div>
                  <h2 className="text-2xl font-semibold">
                    Kami menyajikan berbagai peluang karir dari berbagai
                    industri dan kategori
                  </h2>
                  <p className="my-10 text-[#626b79]">
                    Kami percaya bahwa mencari pekerjaan seharusnya tidak lagi
                    menjadi pengalaman yang melelahkan, tetapi bisa menjadi
                    proses yang menyenangkan dan bermanfaat bagi masa depan
                    karir Anda.
                  </p>
                  <ul>
                    {listItems.map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-start gap-x-5 my-2 text-[#626b79]"
                      >
                        <CheckCircleIcon className="h-6 w-6 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col lg={6}>
                {" "}
                <div>
                  <img src={contentImage} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </ItemWrap>
      </div>
    </div>
  );
};

export default DigitalCv;
