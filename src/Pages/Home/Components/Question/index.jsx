import React from "react";
import { HomeQuestionWrapper } from "./style";
import { questionData } from "./mock";

function HomeQuestionSection() {
  return (
    <HomeQuestionWrapper>
      <div className="questionContainer">
        <div className="questionWrap">
          <h2 className="queSecTitle">{questionData.Column.Sectitle}</h2>
          <div className="questionSection">
          {questionData.Column.data.map((item, index) => (
            <div className="queColumn" key={index}>
            <div className="queLine1">
          <div className="queLine1A">
            <p>{item.icon}</p>
          </div>
          <div className="queLineB">
            <h2>{item.title}</h2>
            <p>{item.comment}</p>
          </div>
          </div>
            <div className="queLine1">
          <div className="queLine1A">
            <p>{item.iconB}</p>
          </div>
          <div className="queLineB">
            <h2>{item.titleB}</h2>
            <p>{item.commentB}</p>
          </div>
          </div>
        </div>
          ))}
          </div>
        </div>
      </div>
    </HomeQuestionWrapper>
  );
}

export default HomeQuestionSection;
