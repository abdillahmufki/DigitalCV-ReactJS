import React, { useState, useMemo } from "react";
import Responsive from "react-responsive";
import { Container } from "react-grid-system";
import {
  AllFeature,
  DigitalCv,
  Pinmyloc,
  CountList,
  CalcNote,
  CalcSales,
  CalcStaff,
  Gds,
} from "./import";

const TabComponents = () => {
  const [activeTab, setActiveTab] = useState(2); // Set default active tab to 2

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    { index: 1, label: "Semua" },
    { index: 2, label: "DigitalCV" },
    { index: 3, label: "Pinmyloc" },
    { index: 4, label: "Countlist" },
    { index: 5, label: "GDS" },
    { index: 6, label: "CalcSales" },
    { index: 7, label: "CalcStaff" },
    { index: 8, label: "CalcNote" },
  ];

  const tabsContent = useMemo(() => {
    return [
      { index: 1, component: <AllFeature key={1} /> },
      { index: 2, component: <DigitalCv key={2} /> },
      { index: 3, component: <Pinmyloc key={3} /> },
      { index: 4, component: <CountList key={4} /> },
      { index: 5, component: <Gds key={5} /> },
      { index: 6, component: <CalcSales key={6} /> },
      { index: 7, component: <CalcStaff key={7} /> },
      { index: 8, component: <CalcNote key={8} /> },
    ];
  }, []);

  return (
    <>
      <div className="p-5">
        <div className="my-10 max-[600px]:my-5">
          <h1 className="text-4xl max-[600px]:text-2xl font-semibold text-center text-black dark:text-white">
            Jawaban untuk segala kebutuhan bisnis Anda
          </h1>
        </div>
        <div className="tabs min-w-full flex justify-center ease-out duration-300">
          <Responsive maxWidth={768}>
            {/* Render dropdown menu on screens with max width of 768px (mobile) */}
            <select
              value={activeTab}
              className="select select-bordered max-w-xs block text appearance-none w-full bg-white border border-gray-300 px-4 py-2 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => handleTabClick(parseInt(e.target.value))}>
              {tabs.map(({ index, label }) => (
                <option key={index} value={index}>
                  {label}
                </option>
              ))}
            </select>
          </Responsive>
          <Responsive minWidth={768}>
            {/* Render tabs on screens with min width of 768px (desktop) */}
            <Container>
              {tabs.map(({ index, label }) => (
                <a
                  key={index}
                  className={`tab tab-lg tab-lifted bg-white dark:bg-slate-500 text-black dark:border-none font-semibold  ${
                    activeTab === index ? "tab-active" : ""
                  }`}
                  onClick={() => handleTabClick(index)}>
                  {label}
                </a>
              ))}
            </Container>
          </Responsive>
        </div>
        <div className="flex justify-center mt-10 pt-10 pb-24">
          {tabsContent.map(({ index, component }) =>
            activeTab === index ? component : null
          )}
        </div>
      </div>
    </>
  );
};

export default TabComponents;
