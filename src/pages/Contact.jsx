import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import Button from "../components/Button";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(e.target.value);
  };

  return (
    <div className="mt-[150px]">
      <Container>
        <Row>
          <Col lg={12}>
            <div>
              <h2 className="text-3xl">
                Kami dapat membantu anda mewujudkan ide anda menjadi kenyataan,
                ambil project yang sudah ada, atau perpanjang pengembangan tim
                anda.
              </h2>
              <br />
              <p className="text-xl">
                Jadwalkan konsultasi gratis di{" "}
                <a href="#" className="text-blue-600">
                  support@gestaltsys.tech
                </a>{" "}
                , atau isi formulir dan kami akan menghubungi anda secepatnya.
              </p>
            </div>

            <hr className="my-10" />

            <div>
              <div>
                <h2 className="text-3xl">Ceritakan tentang dirimu</h2>
                <br />
                <p className="text-slate-500">
                  Dengan mengisi formulir, anda menyetujui kebijakan Privasi
                  kami, termasuk penggunaan Cookie kami.
                </p>
              </div>
              <Row className="flex justify-between m-5">
                <Col lg={6}>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text font-semibold">
                        NAMA LENGKAP
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Masukan nama lengkap anda"
                      className="input input-bordered w-full max-w-xs"
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">
                        ALAMAT EMAIL
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Masukan alamat email anda"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                </Col>
              </Row>
            </div>

            <hr className="my-10" />

            <div>
              <div>
                <h2 className="text-3xl">Bagaimana kami bisa membantu Anda?</h2>
                <br />
                <p className="text-slate-500">
                  Protip — touch base on: Ide Anda, timeline Anda, dan anggaran
                  Anda.
                </p>
              </div>
              <Row className="my-5">
                <Col lg={12}>
                  <div>
                    <label className="label">
                      <span className="label-text font-semibold">
                        DESKRIPSI PROJECT
                      </span>
                    </label>
                    <textarea
                      placeholder="Deskripsikan project anda"
                      className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                    ></textarea>
                  </div>

                  <div className="flex items-center mb-4">
                    <input
                      id="setuju-checkbox"
                      type="checkbox"
                      value=""
                      className="checkbox checkbox-sm checkbox-info"
                    />
                    <label
                      htmlFor="setuju-checkbox"
                      className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
                    >
                      Buat saya selalu mendapatkan informasi terbaru tentang
                      tren pengembangan web terbaru dan penawaran khusus TMS
                    </label>
                  </div>
                  <Button text="Kirim Permintaan" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
