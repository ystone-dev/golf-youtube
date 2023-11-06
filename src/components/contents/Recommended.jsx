import React from "react";
import { recommendedText } from "../../data/recommended";
import { Link } from "react-router-dom";

const Recommended = () => {
  return (
    <section className="recommended">
      <div className="recommended__container">
        <div className="recommended__thumb play__icon">
          <Link to={recommendedText[0].page}>
            <img src={recommendedText[0].img} alt={recommendedText[0].title} />
          </Link>
        </div>
        <div className="recommended__text">
          <span className="recommended">recommended!</span>
          <h3 className="title">
            <Link to={recommendedText[0].page}>{recommendedText[0].title}</Link>
          </h3>
          <div className="info">
            <span className="author">
              <Link to={`/channel/${recommendedText[0].channelId}`}>
                {recommendedText[0].author}
              </Link>
            </span>
            <span className="date">{recommendedText[0].date}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommended;
