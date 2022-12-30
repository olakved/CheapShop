import React, { useState } from "react";
import "./style.css";
import logo from "../../Assets/Logo/logo2.png";

function NewsPage({ availableNews }) {
    const [active, setActive] = useState(false);
    const toggleAccordion = () => {
        setActive(!active);
    };

    return (
        <div className={active ? "NewsActive" : "News"}>
            <img
                src={availableNews?.urlToImage || logo}
                alt="img"
                className="newsImg"
            />
            <div className="detailsBox">
                <p className="newsTitle">{availableNews?.title}</p>
                <div className="NewsDetails">
                    <div className="partA">
                        <p className="sourceName">Source: {availableNews?.source.name}</p>
                        <p className="timePost">{availableNews?.publishedAt}</p>
                    </div>
                    <div className="partB" onClick={toggleAccordion}>
                        {active ? <p>close</p> : <p>read more...</p>}
                    </div>
                </div>
            </div>


            {active && (
                <div className="newsContent">
                    {availableNews?.content || 'Content is yet to be available🤨'}
                </div>
            )}
        </div>
  )}
export default NewsPage;