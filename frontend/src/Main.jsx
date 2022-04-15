import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component, useEffect, useState, useContext } from "react";
import HomePage from "./page/HomePage";
import NotFoundPage from "./page/NotFoundPage";
import Mainpage from "./page/Mainpage";

import TestPage from "./page/TestPage";
import OnTestPage from "./page/OnTestPage";
import WaitPage from "./page/WaitPage";
import ProductVotePage from "./page/ProductVotePage";

import ProductListSample from "./component/ProductVote/ProductListSample";
import Write from "./component/Review/Write";
import Result from "./component/Share/Result";
import "./App.css";
import ResultForm from "./component/Result/ResultForm";
import Navmain from "./component/Nav/Navmain";
import Slider from "./elements/Slide/Slider";
import ClipboardCopy from "./elements/Clipboard/ClipboardCopy";
import KakaoShare from "./elements/Kakaoshare/Kakaoshare";
import ShareSNS from "./component/Share/ShareSNS";
import titlelogo from "./assets/titlelogo.png";
function Main() {
  return (
    <div className="Main_center_app">
      <BrowserRouter>
        <div className="App_header">
          <div className="App_text">
            <img src={titlelogo} alt="titlelogo" className="App_titletext" />
          </div>
        </div>
        <div className="App_Main_Component">
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/mains" element={<Mainpage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/ontest" element={<OnTestPage />} />
            <Route path="/result" element={<ResultForm />} />
            <Route path="/story" element={<HomePage />} />
            <Route path="/write" element={<Write />} />
            <Route path="/wait" element={<WaitPage />} />
            <Route path="/products" element={<ProductVotePage />} />
            <Route path="/productsample" element={<ProductListSample />} />
            <Route path="/share" element={<ShareSNS />} />
            <Route path="/result" element={<Result />} />
            <Route path="/slide" element={<Slider />} />
            <Route path="/clip" element={<ClipboardCopy />} />
            <Route path="/kakao" element={<KakaoShare />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <aside className="App_Main_Nav">
          {" "}
          <Navmain className="App_Main_Nav" />
        </aside>
      </BrowserRouter>
    </div>
  );
}

export default Main;
