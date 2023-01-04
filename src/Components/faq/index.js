import React, { useState } from "react";
import { FaqWrapper } from "./style";
import { FaTimes, FaPlus } from "react-icons/fa";
import { faqData } from "./mock";

function FAQ() {
  const [active, setActive] = useState(false);
  const toggleIcon = () => {
    setActive(!active);
  };

  return (
    <FaqWrapper>
      <div className={active ? "containerActive" : "faqContainer"}>
        {faqData?.map((item, index) => (
          <div className="faqWrap" key={index}>
            <h1 className="faqHeader">FAQ</h1>
            <div className="QueSection">
              <div className="faqQue">
                <h2>{item?.Que}</h2>
                <p className="expandIcon" onClick={toggleIcon}>
                  {active ? <FaTimes size={15} /> : <FaPlus size={15} />}
                </p>
              </div>
            </div>
            {active && (
              <div className="faqAns">
                <p>{item?.Ans}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </FaqWrapper>
  );
}

export default FAQ;
