import React from "react";
import { HomeQuestionWrapper } from "./style";
import {FaStar} from 'react-icons/fa'

function HomeQuestionSection() {
  return (
    <HomeQuestionWrapper>
      <div className="questionContainer">
        <div className="questionWrap">
          <h2 className="queSecTitle">Why Choose Us</h2>
          <div className="questionSection">
            <div className="queColumn">
                <div className="queLine1">
              <div className="queLine1A">
                <p><FaStar size={18}/></p>
              </div>
              <div className="queLineB">
                <h2>Fast Delivery</h2>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text.
                </p>
              </div>
              </div>
                <div className="queLine1">
              <div className="queLine1A">
                <p><FaStar size={18}/></p>
              </div>
              <div className="queLineB">
                <h2>Fast Delivery</h2>
                <p>
                  ontrary to popular belief, Lorem Ipsum is not simply random
                  text.
                </p>
              </div>
              </div>
            </div>      
            <div className="queColumn">
                <div className="queLine1">
              <div className="queLine1A">
                <p><FaStar size={18}/></p>
              </div>
              <div className="queLineB">
                <h2>Fast Delivery</h2>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. 
                </p>
              </div>
              </div>
                <div className="queLine1">
              <div className="queLine1A">
                <p><FaStar size={18}/></p>
              </div>
              <div className="queLineB">
                <h2>Fast Delivery</h2>
                <p>
                  ontrary to popular belief, Lorem Ipsum is not simply random
                  text. 
                </p>
              </div>
              </div>
            </div>      
            <div className="queColumn">
                <div className="queLine1">
              <div className="queLine1A">
                <p><FaStar size={18}/></p>
              </div>
              <div className="queLineB">
                <h2>Fast Delivery</h2>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. 
                </p>
              </div>
              </div>
                <div className="queLine1">
              <div className="queLine1A">
                <p><FaStar size={18}/></p>
              </div>
              <div className="queLineB">
                <h2>Fast Delivery</h2>
                <p>
                  ontrary to popular belief, Lorem Ipsum is not simply random
                  text. 
                </p>
              </div>
              </div>
            </div>      
          </div>
        </div>
      </div>
    </HomeQuestionWrapper>
  );
}

export default HomeQuestionSection;
