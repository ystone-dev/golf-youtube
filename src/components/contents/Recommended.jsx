import React from "react";
import { recommendedText } from "../../data/recommended";
import { Link } from "react-router-dom";

const Recommended = () => {
  return (
    <section className="recommended">
      <h2>👍🏻 추천 영상</h2>
      <div className="container">
        <div className="thumbnail icon--play">
          <Link to={recommendedText[0].video}>
            <img src={recommendedText[0].img} alt={recommendedText[0].title} />
          </Link>
        </div>
        <div className="text">
          <span className="text--highlighted">recommended!</span>
          <h3 className="text--title">
            <Link to={recommendedText[0].page}>{recommendedText[0].title}</Link>
          </h3>
          <div className="info">
            <span className="info__author">
              <Link to={`/channel/${recommendedText[0].channelId}`}>
                {recommendedText[0].author}
              </Link>
            </span>
            <span className="info__date">{recommendedText[0].date}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommended;
