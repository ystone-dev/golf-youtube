import React from "react";
import Main from "../components/section/Main";
import VideoSlider from "../components/videos/VideoSlider";
import { puttingText } from "../data/putting";

const Putting = () => {
  return (
    <Main title="퍼팅" description="퍼팅 영상 페이지입니다.">
      <VideoSlider videos={puttingText} title="🏌🏻 퍼팅" id="putting" />
    </Main>
  );
};

export default Putting;
