import React from "react";
import { approachText } from "../../data/approach";
import { Link } from "react-router-dom";

const Back = () => {
  return (
    <section className="video">
      <h2>🏌🏻 어프로치</h2>
      <div className="container">
        {approachText.map((video, key) => (
          <div key={key}>
            <div className="thumbnail icon--play">
              <Link to={`/video/${video.videoId}`}>
                <img src={video.img} alt={video.title} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Back;
