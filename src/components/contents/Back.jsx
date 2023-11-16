import React from "react";
import { backText } from "../../data/back";
import { Link } from "react-router-dom";

const Back = () => {
  return (
    <section className="video">
      <h2>🏌🏻 백스윙</h2>
      <div className="container">
        {backText.map((video, key) => (
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
