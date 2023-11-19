import React from "react";
import { lessonerText } from "../../data/lessoner";
import { Link } from "react-router-dom";
import left from "../../assets/img/left.svg";
import right from "../../assets/img/right.svg";

const Lessoner = () => {
  return (
    <section className="lessoner">
      <h2>👍🏻 추천 레스너</h2>
      <ul className="container overflow">
        <button className="left">
          <img src={left} alt="" />
        </button>
        {lessonerText.map((lessoner, key) => (
          <li key={key}>
            <div className="img icon--play">
              <Link to={`/channel/${lessoner.channelId}`}>
                <img src={lessoner.img} alt={lessoner.name} />
              </Link>
            </div>
            <div className="info">
              <Link to={`/channel/${lessoner.channelId}`}>{lessoner.name}</Link>
            </div>
          </li>
        ))}
        <button className="right">
          <img src={right} alt="" />
        </button>
      </ul>
    </section>
  );
};

export default Lessoner;
