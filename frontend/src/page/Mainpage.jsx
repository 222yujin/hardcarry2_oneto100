import React from "react";

import graybox from "../assets/GrayRectangle.png";

import "./Mainpage.css";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="Main_layout">
      <div className="Main_background">
        <div className="Main_grayboxarray">
          <div className="Main_content">
            <div className="col">
              <div className="box">
                {" "}
                <Link to="/mains">
                  <img src={graybox} className="graybox" />
                </Link>
              </div>
              <div className="box">
                {" "}
                <Link to="/story">
                  <img src={graybox} className="graybox" />
                </Link>
              </div>
              <div className="box">
                {" "}
                <Link to="/write">
                  <img src={graybox} className="graybox" />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="box">
                {" "}
                <Link to="/test">
                  <img src={graybox} className="graybox" />
                </Link>
              </div>
              <div className="box">
                {" "}
                <Link to="/products">
                  <img src={graybox} className="graybox" />
                </Link>
              </div>
              <div className="box">
                {" "}
                <a href={"http://www.youtheroom.kr/"}>
                  <img src={graybox} className="graybox" />
                </a>
              </div>
            </div>
          </div>{" "}
        </div>

        <div className="footer">
          <p className="footertext">디노 캐릭터를 클릭 해보세요.</p>
          <div className="footermargin"></div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
