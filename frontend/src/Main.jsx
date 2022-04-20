import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component, useEffect, useState, useContext } from "react";
import TagManager from "react-gtm-module";

import NotFoundPage from "./NotFoundPage";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/Home/Home";
import Test from "./component/Test/Test";
import { OnTest } from "./component/OnTest/OnTest";
import Result from "./component/Result/Result";
import Wait from "./component/Wait/Wait";
import Story from "./component/Story/Story";
import Write from "./component/Write/Write";

// import Gamepage from "./page/GamePage";
// import GameResult from "./component/Game/GameResult";
// import ProductVoteResult from "./component/ProductVote/ProductVoteResult";
// import ProductVotePage from "./page/ProductVotePage";
// import ProductListSample from "./component/ProductVote/ProductListSample";
import EndingStory from "./component/EndStory/EndingStory";
const tagManagerArgs = {
  gtmId: "GTM-M2FPFM8",
};

TagManager.initialize(tagManagerArgs);
function Main() {
  return (
    <div className="main">
      {" "}
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/ontest" element={<OnTest />} />
          <Route path="/result" element={<Result />} />
          <Route path="/wait" element={<Wait />} />
          <Route path="/write" element={<Write />} />

          <Route path="/story" element={<Story />} />
          <Route path="/endstory" element={<EndingStory />} />
          {/* <Route path="/write" element={<Write />} />
          <Route path="/products" element={<ProductVotePage />} />
          <Route path="/productsample" element={<ProductListSample />} />
          <Route path="/voteresult" element={<ProductVoteResult />} />
          <Route path="/game" element={<Gamepage />} />
          <Route path="/gameresult" element={<GameResult />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
