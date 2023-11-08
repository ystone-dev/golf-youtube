import React from "react";
import Main from "../components/section/Main";

import { recommendedText } from "../data/recommended";
import { Link } from "react-router-dom";

const Recommended = () => {
  return (
    <Main>
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
                  <span className="info__date">{recommended.date}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Main>
  );
};

export default Recommended;
