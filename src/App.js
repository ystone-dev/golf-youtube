import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/section/Main";

const Channel = lazy(() => import("./pages/Channel"));
const Lessoner = lazy(() => import("./pages/Lessoner"));
const Back = lazy(() => import("./pages/Back"));
const Home = lazy(() => import("./pages/Home"));
const Not = lazy(() => import("./pages/Not"));
const Down = lazy(() => import("./pages/Down"));
const Search = lazy(() => import("./pages/Search"));
const Today = lazy(() => import("./pages/Today"));
const Video = lazy(() => import("./pages/Video"));
const Address = lazy(() => import("./pages/Address"));
const Approach = lazy(() => import("./pages/Approach"));
const Putting = lazy(() => import("./pages/Putting"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/lessoner" element={<Lessoner />} />
          <Route path="/address" element={<Address />} />
          <Route path="/back" element={<Back />} />
          <Route path="/down" element={<Down />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/putting" element={<Putting />} />
          <Route path="/channel/:channelId" element={<Channel />} />
          <Route path="/video/:videoId" element={<Video />} />
          <Route path="/search/:searchId" element={<Search />} />
          <Route path="*" element={<Not />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
