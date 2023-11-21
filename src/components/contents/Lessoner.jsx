import React, { useRef } from "react";
import { lessonerText } from "../../data/lessoner";
import { Link } from "react-router-dom";
import left from "../../assets/img/left.svg";
import right from "../../assets/img/right.svg";

const Lessoner = () => {
  const containerRef = useRef(null);

  const handleXMove = (direction) => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: direction,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="lessoner">
      <h2>👍🏻 추천 레스너</h2>
      <div className="container">
        <ul className="inner overflow" ref={containerRef}>
          {lessonerText.map((lessoner, key) => (
            <li key={key} className="item">
              <div className="img icon--play">
                <Link to={`/channel/${lessoner.channelId}`}>
                  <img src={lessoner.img} alt={lessoner.name} />
                </Link>
              </div>
              <div className="info">
                <Link to={`/channel/${lessoner.channelId}`}>
                  {lessoner.name}
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <button className="left" onClick={() => handleXMove(-300)}>
          <img src={left} alt="" />
        </button>
        <button className="right" onClick={() => handleXMove(300)}>
          <img src={right} alt="" />
        </button>
      </div>
    </section>
  );
};

export default Lessoner;
