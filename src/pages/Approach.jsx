import React from "react";
import Main from "../components/section/Main";
import VideoSlider from "../components/videos/VideoSlider";
import { approachText } from "../data/approach";

const Approach = () => {
  return (
    <Main title="어프로치" description="어프로치 영상 페이지입니다.">
      <VideoSlider videos={approachText} title="🏌🏻 어프로치" id="approach" />
    </Main>
  );
};

export default Approach;
