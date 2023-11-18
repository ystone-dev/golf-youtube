import React from "react";
import Main from "../components/section/Main";
import VideoSlider from "../components/videos/VideoSlider";
import { backText } from "../data/back";

const Back = () => {
  return (
    <Main title="백스윙" description="백스윙 영상 페이지입니다.">
      <VideoSlider videos={backText} title="🏌🏻 백스윙" id="back" />
    </Main>
  );
};

export default Back;
