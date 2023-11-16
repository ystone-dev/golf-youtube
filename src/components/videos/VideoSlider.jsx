import React from "react";
import { Link } from "react-router-dom";

const VideoSlider = ({ videos, title, id }) => {
  return (
    <section id={id} className="video">
      <h2>{title}</h2>
      <div className="container">
        {videos.map((video, key) => (
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

export default VideoSlider;
