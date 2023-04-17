import React, { useState } from "react";

const TabComponents = () => {
  const [activeTab, setActiveTab] = useState(2); // Set default active tab to 2

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div class="justify-between">
        <div className="tabs tabs-boxed">
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
            <div>
              <h2>Tab 2 Content</h2>
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
