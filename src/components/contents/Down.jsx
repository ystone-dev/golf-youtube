import React from "react";
import { downText } from "../../data/down";
import { Link } from "react-router-dom";

const Back = () => {
  return (
    <section className="video">
      <h2>🏌🏻 다운스윙</h2>
      <div className="container">
        {downText.map((video, key) => (
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
