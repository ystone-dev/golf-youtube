import React from "react";
import Main from "../components/section/Main";
import VideoSlider from "../components/videos/VideoSlider";
import { downText } from "../data/down";

const Down = () => {
  return (
    <Main title="다운스윙" description="다운스윙 영상 페이지입니다.">
      <VideoSlider videos={downText} title="🏌🏻 다운스윙" id="down" />
    </Main>
  );
};

export default Down;
