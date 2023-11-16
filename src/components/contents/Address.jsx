import React from "react";
import { addressText } from "../../data/address";
import { Link } from "react-router-dom";

const Address = () => {
  return (
    <section className="video">
      <h2>🏌🏻 어드레스</h2>
      <div className="container">
        {addressText.map((video, key) => (
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

export default Address;
