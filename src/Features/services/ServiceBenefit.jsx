import React from "react";
import { Row, Col } from "react-grid-system";

const ServiceBenefit = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-400 px-10 py-24 overflow-hidden">
      <div>
        <h2 className="text-4xl text-white text-center">
          Manfaat utama dari layanan pengembangan kami
        </h2>
      </div>
      <div>
        <Row className="my-10 gap-y-10">
          <Col lg={6} md={6} sm={12}>
            <div className="bg-[#f5f5f5] p-10 rounded-xl">
              <h3 className="text-xl  font-semibold">
                Kemitraan jangka panjang
              </h3>
              <p className="">
                Fokus pada pemberian nilai kepada pengguna akhir aplikasi, dan
                bukan pada tugas individual yang berdetak
              </p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="bg-[#f5f5f5] p-10 rounded-xl">
              <h3 className="text-xl  font-semibold">
                Kemitraan jangka panjang
              </h3>
              <p className="">
                Fokus pada pemberian nilai kepada pengguna akhir aplikasi, dan
                bukan pada tugas individual yang berdetak
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ServiceBenefit;
