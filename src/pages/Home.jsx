import React from "react";
import Main from "../components/section/Main";
import Recommended from "../components/contents/Recommended";
import Lessoner from "../components/contents/Lessoner";
import Address from "../components/contents/Address";
import Back from "../components/contents/Back";
import Down from "../components/contents/Down";
import Approach from "../components/contents/Approach";
import Putting from "../components/contents/Putting";

const Home = () => {
  return (
    <Main title="홈페이지" description="홈페이지입니다.">
      <Recommended />
      <Lessoner />
      <Address />
      <Back />
      <Down />
      <Approach />
      <Putting />
    </Main>
  );
};

export default Home;
