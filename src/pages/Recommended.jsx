import React from "react";
import { recommendedText } from "../data/recommended";
import { Link } from "react-router-dom";

const Recommended = () => {
  return (
    <section className="recommended">
      <h2>👍🏻 추천 영상</h2>
      <ul>
        {recommendedText.map((recommended, key) => (
          <li key={key} className="container">
            <div className="thumbnail icon--play">
              <Link to={recommended.video}>
                <img src={recommended.img} alt={recommended.title} />
              </Link>
            </div>
            <div className="text">
              <span className="text--highlighted">recommended!</span>
              <h3 className="text--title">
                <Link to={`/video/${recommended.video}`}>
                  {recommended.title}
                </Link>
              </h3>
              <div className="info">
                <span className="info__author">
                  <Link to={`/channel/${recommended.channelId}`}>
                    {recommended.author}
                  </Link>
                </span>
                <span className="info_date">{recommended.date}</span>
              </div>
            </div>
          </li>
        ))}
        {/* 
        <li>
          <div className="recommended__thumb play__icon">
            <Link to={recommendedText[0].page}>
              <img
                src={recommendedText[0].img}
                alt={recommendedText[0].title}
              />
            </Link>
          </div>
          <div className="recommended__text">
            <span className="recommended">recommended!</span>
            <h3 className="title">
              <Link to={recommendedText[0].page}>
                {recommendedText[0].title}
              </Link>
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
        </li> */}
      </ul>
    </section>
  );
};

export default Recommended;
