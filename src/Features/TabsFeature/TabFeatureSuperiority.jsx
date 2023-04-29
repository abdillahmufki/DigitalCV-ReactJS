import React, { useState } from "react";
import Responsive from "react-responsive";
import { Container, Row, Col } from "react-grid-system";

const TabComponents = () => {
  const [activeTab, setActiveTab] = useState(1); // Set default active tab to 1

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    {
      index: 1,
      label: "hello",
    },
    {
      index: 2,
      label: "hello 1",
    },
    {
      index: 3,
      label: "hello 2",
    },
  ];

  const tabsContent = [
    {
      index: 1,
      component: "hello",
    },
    {
      index: 2,
      component: "hello 2",
    },
    {
      index: 3,
      component: "hello 3",
    },
  ];

  return (
    <>
      <div className="p-5">
        <div className="tabs min-w-full flex justify-center ease-out duration-300">
          <Responsive maxWidth={768}>
            <select
              value={activeTab}
              className="select select-bordered max-w-xs block appearance-none w-full bg-white border border-gray-300 px-4 py-2 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => handleTabClick(parseInt(e.target.value))}
            >
              <option value={1}>Hello 1</option>
              <option value={2}>Hello 2</option>
              <option value={3}>Hello 3</option>
            </select>
          </Responsive>
          <Responsive minWidth={768}>
            {/* Render tabs on screens with min width of 768px (desktop) */}
            <Container>
              {tabs.map(({ index, label }) => (
                <a
                  key={index}
                  className={`tab tab-lg tab-bordered ${
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
        <div className="flex justify-center mt-10">
          {tabsContent.map(({ index, component }) => {
            return activeTab === index && component;
          })}
        </div>
      </div>
    </>
  );
};

export default TabComponents;
