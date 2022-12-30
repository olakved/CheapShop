import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaPhone } from "react-icons/fa";
import {IoMail} from 'react-icons/io5'

function FaqCard({ person }) {
  const [active, setActive] = useState(false);
  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <div className={active ? "cardActive" : "card"}>
      <img src={person?.image} alt="img" className="img" />
      <div className="details">
        <div className="boxDetails">
          <div className="sideA">
            <div className="avatarcontainer">
              <img src={person?.image} alt="img" className="avatar" />
            </div>

            <div className="nameOccupation">
              <p className="names">{`${person?.firstName}  ${person?.lastName}`}</p>
              <p className="occupation">{person?.company?.title}</p>
            </div>
          </div>
          <div className="sideB" onClick={toggleAccordion}>
            {active ? <FaChevronDown /> : <FaChevronUp />}
          </div>
        </div>

        {active && (
          <div className="activeClass">
            <div>
                <p className="spanA">
                <span><FaPhone size={20} /></span>
              <span>{person?.phone}</span>
                </p>
              <p className="spanB">mobile</p>
            </div>
            <div>
                <p className="spanA">
                <span><IoMail size={20} /></span>
              <span>{person?.email}</span>
                </p>
              <p className="spanB">Email</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FaqCard;
