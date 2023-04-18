import React, { useState } from "react";
import Card from "./Card";
import Responsive from "react-responsive";
import { Container, Row, Col } from "react-grid-system";

const TabComponents = () => {
  const [activeTab, setActiveTab] = useState(2); // Set default active tab to 2

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="p-5">
        <div className="tabs min-w-full flex justify-center ease-out duration-300">
          <Responsive maxWidth={768}>
            {/* Render dropdown menu on screens with max width of 768px (mobile) */}
            <select
              value={activeTab}
              className="select select-bordered max-w-xs block appearance-none w-full bg-white border border-gray-300 px-4 py-2 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => handleTabClick(parseInt(e.target.value))}
            >
              <option value={1}>Semua</option>
              <option value={2}>Payroll</option>
              <option value={3}>Gestalt Calc</option>
              <option value={4}>Gestalt Accounting</option>
              <option value={5}>Gestalt Training Center</option>
            </select>
          </Responsive>
          <Responsive minWidth={768}>
            {/* Render tabs on screens with min width of 768px (desktop) */}
            <a
              className={`tab tab-lg tab-lifted ${
                activeTab === 1 ? "tab-active" : ""
              }`}
              onClick={() => handleTabClick(1)}
            >
              Semua
            </a>
            <a
              className={`tab tab-lg tab-lifted ${
                activeTab === 2 ? "tab-active" : ""
              }`}
              onClick={() => handleTabClick(2)}
            >
              Payroll
            </a>
            <a
              className={`tab tab-lg tab-lifted ${
                activeTab === 3 ? "tab-active" : ""
              }`}
              onClick={() => handleTabClick(3)}
            >
              Gestalt Calc
            </a>
            <a
              className={`tab tab-lg tab-lifted ${
                activeTab === 4 ? "tab-active" : ""
              }`}
              onClick={() => handleTabClick(4)}
            >
              Gestalt Accounting
            </a>
            <a
              className={`tab tab-lg tab-lifted ${
                activeTab === 5 ? "tab-active" : ""
              }`}
              onClick={() => handleTabClick(5)}
            >
              Gestalt Training Center
            </a>
          </Responsive>
        </div>
        <br />
        <div className="flex justify-center px-5">
          {activeTab === 1 && (
            <div>
              <h2>Tab 1 Content</h2>
              <p>
                Where does it come from? Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock,{" "}
                <strong className="text-red-500">
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more
                </strong>{" "}
                obscure Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from
                sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                This book is a treatise on the theory of ethics, very popular
                during the Renaissance. The first line of Lorem Ipsum, "Lorem
                ipsum dolor sit amet..", comes from a line in section 1.10.32.
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
            </div>
          )}
          {activeTab === 2 && (
            <div className="flex justify-between">
              <Container fluid>
                <Row>
                  <Col lg={4}>
                    <Card
                      img="https://images.unsplash.com/photo-1677169568237-b56a915d9074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                      alt="langit"
                      title="Langit"
                      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
                      btnText="Baca Selengkapnya"
                    />
                  </Col>
                  <Col lg={4}>
                    <Card
                      img="https://images.unsplash.com/photo-1677169568237-b56a915d9074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                      alt="langit"
                      title="Langit"
                      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
                      btnText="Baca Selengkapnya"
                    />
                  </Col>
                  <Col lg={4}>
                    <Card
                      img="https://images.unsplash.com/photo-1677169568237-b56a915d9074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                      alt="langit"
                      title="Langit"
                      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
                      btnText="Baca Selengkapnya"
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          )}
          {activeTab === 3 && (
            <div>
              <h2>Tab 3 Content</h2>
              <p>
                Where does it come from? Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32. The standard chunk of
                Lorem Ipsum used since the 1500s is reproduced below for those
                interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                Bonorum et Malorum" by Cicero are also reproduced in their exact
                original form, accompanied by English versions from the 1914
                translation by H. Rackham.
              </p>
            </div>
          )}
          {activeTab === 4 && (
            <div>
              <h2>Tab 4 Content</h2>
              <p>
                Where does it come from? Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32. The standard chunk of
                Lorem Ipsum used since the 1500s is reproduced below for those
                interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                Bonorum et Malorum" by Cicero are also reproduced in their exact
                original form, accompanied by English versions from the 1914
                translation by H. Rackham.
              </p>
            </div>
          )}
          {activeTab === 5 && (
            <div>
              <h2>Tab 5 Content</h2>
              <p>
                Where does it come from? Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32. The standard chunk of
                Lorem Ipsum used since the 1500s is reproduced below for those
                interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                Bonorum et Malorum" by Cicero are also reproduced in their exact
                original form, accompanied by English versions from the 1914
                translation by H. Rackham.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TabComponents;
