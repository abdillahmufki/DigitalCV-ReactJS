import React, { useState } from "react";
import Responsive from "react-responsive";
import { Container, Row, Col } from "react-grid-system";
import AllFeature from "../Features/AllFeature";
import DigitalCv from "../Features/DigitalCv";
import Pinmyloc from "../Features/Pinmyloc";
import CountList from "../Features/CountList";
import Gds from "../Features/Gds";
import CalcSales from "../Features/CalcSales";
import CalcStaff from "../Features/CalcStaff";
import CalcNote from "../Features/CalcNote";

const TabComponents = () => {
  const [activeTab, setActiveTab] = useState(1); // Set default active tab to 2

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    {
      index: 1,
      label: "Semua",
    },
    {
      index: 2,
      label: "DigitalCV",
    },
    {
      index: 3,
      label: "Pinmyloc",
    },
    {
      index: 4,
      label: "Countlist",
    },
    {
      index: 5,
      label: "GDS",
    },
    {
      index: 6,
      label: "CalcSales",
    },
    {
      index: 7,
      label: "CalcStaff",
    },
    {
      index: 8,
      label: "CalcNote",
    },
  ];

  const tabsContent = [
    {
      index: 1,
      component: <AllFeature />,
    },
    {
      index: 2,
      component: <DigitalCv />,
    },
    {
      index: 3,
      component: <Pinmyloc />,
    },
    {
      index: 4,
      component: <CountList />,
    },
    {
      index: 5,
      component: <Gds />,
    },
    {
      index: 6,
      component: <CalcSales />,
    },
    {
      index: 7,
      component: <CalcStaff />,
    },
    {
      index: 8,
      component: <CalcNote />,
    },
  ];

  return (
    <>
      <div className="p-5">
        <div className="my-10">
          <h1 className="text-4xl font-semibold text-center">
            Jawaban untuk segala kebutuhan bisnis Anda
          </h1>
        </div>
        <div className="tabs min-w-full flex justify-center ease-out duration-300">
          <Responsive maxWidth={768}>
            {/* Render dropdown menu on screens with max width of 768px (mobile) */}
            <select
              value={activeTab}
              className="select select-bordered max-w-xs block appearance-none w-full bg-white border border-gray-300 px-4 py-2 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => handleTabClick(parseInt(e.target.value))}
            >
              <option value={1}>Semua</option>
              <option value={2}>DigitalCV</option>
              <option value={3}>Pinmyloc</option>
              <option value={4}>Countlist</option>
              <option value={5}>GDS</option>
              <option value={6}>CalcSales</option>
              <option value={7}>CalcStaff</option>
              <option value={8}>CalcNote</option>
            </select>
          </Responsive>
          <Responsive minWidth={768}>
            {/* Render tabs on screens with min width of 768px (desktop) */}
            <Container>
              {tabs.map(({ index, label }) => (
                <a
                  key={index}
                  className={`tab tab-lg tab-lifted ${
                    activeTab === index ? "tab-active" : ""
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {label}
                </a>
              ))}
            </Container>
          </Responsive>
        </div>
        {/* <br /> */}
        <div className="flex justify-center px-5 mt-10">
          <Container>
            {tabsContent.map(
              ({ index, component }) => activeTab === index && component
            )}
          </Container>
        </div>
      </div>
    </>
  );
};

export default TabComponents;
