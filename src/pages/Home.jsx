import React from "react";
import Main from "../components/section/Main";
import Recommended from "../components/contents/Recommended";
import Lessoner from "../components/contents/Lessoner";
import VideoSlider from "../components/videos/VideoSlider";

import { addressText } from "../data/address";
import { backText } from "../data/back";
import { downText } from "../data/down";
import { approachText } from "../data/approach";
import { puttingText } from "../data/putting";

const Home = () => {
  return (
    <Main title="홈페이지" description="홈페이지입니다.">
      <Recommended />
      <Lessoner />
      <VideoSlider videos={addressText} title="🏌🏻 어드레스" id="address" />
      <VideoSlider videos={backText} title="🏌🏻 백스윙" id="back" />
      <VideoSlider videos={downText} title="🏌🏻 다운스윙" id="down" />
      <VideoSlider videos={approachText} title="🏌🏻 어프로치" id="approach" />
      <VideoSlider videos={puttingText} title="🏌🏻 퍼팅" id="putting" />
    </Main>
  );
};

export default Home;
