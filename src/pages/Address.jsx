import React from "react";
import Main from "../components/section/Main";
import VideoSlider from "../components/videos/VideoSlider";
import { addressText } from "../data/address";

const Address = () => {
  return (
    <Main title="어드레스" description="어드레스 영상 페이지입니다.">
      <VideoSlider videos={addressText} title="🏌🏻 어드레스" id="address" />
    </Main>
  );
};

export default Address;
