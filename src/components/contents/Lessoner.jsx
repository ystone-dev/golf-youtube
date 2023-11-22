import React, { useEffect, useRef, useState } from "react";
import { lessonerText } from "../../data/lessoner";
import { Link } from "react-router-dom";
import left from "../../assets/img/left.svg";
import right from "../../assets/img/right.svg";

const Lessoner = () => {
  const [leftEnd, setLeftEnd] = useState(false);
  const [rightEnd, setRightEnd] = useState(true);
  const innerRef = useRef(null);

  useEffect(() => {
    const inner = innerRef.current;

    const handleScroll = () => {
      if (inner) {
        inner.scrollLeft === 0 ? setLeftEnd(false) : setLeftEnd(true);
        inner.scrollLeft === 472 ? setRightEnd(false) : setRightEnd(true);
      }
    };

    if (inner) {
      inner.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (inner) {
        inner.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleXMove = (direction) => {
    const inner = innerRef.current;
    if (inner) {
      inner.scrollBy({
        left: direction,
        behavior: "smooth",
      });
      console.log(inner.scrollLeft);
    }
  };
  return (
    <section className="lessoner">
      <h2>👍🏻 추천 레스너</h2>
      <div className="container">
        <ul className="inner overflow" ref={innerRef}>
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
        {leftEnd && (
          <button className="left" onClick={() => handleXMove(-300)}>
            <img src={left} alt="" />
          </button>
        )}
        {rightEnd && (
          <button className="right" onClick={() => handleXMove(300)}>
            <img src={right} alt="" />
          </button>
        )}
      </div>
    </section>
  );
};

export default Lessoner;
