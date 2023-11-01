import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Channel from "./pages/Channel";
import Lessoner from "./pages/Lessoner";
import Back from "./pages/Back";
import Home from "./pages/Home";
import Not from "./pages/Not";
import Down from "./pages/Down";
import Search from "./pages/Search";
import Today from "./pages/Today";
import Video from "./pages/Video";
import Address from "./pages/Address";
import Driver from "./pages/Driver";
import Wood from "./pages/Wood";
import Iron from "./pages/Iron";
import Approach from "./pages/Approach";
import Putting from "./pages/Putting";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/lessoner" element={<Lessoner />} />
          <Route path="/address" element={<Address />} />
          <Route path="/back" element={<Back />} />
          <Route path="/down" element={<Down />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/wood" element={<Wood />} />
          <Route path="/iron" element={<Iron />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/putting" element={<Putting />} />
          <Route path="/channel/:channelId" element={<Channel />} />
          <Route path="/video/:videoId" element={<Video />} />
          <Route path="/search/:searchId" element={<Search />} />
          <Route path="*" element={<Not />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
