import React from "react";
import minidino1 from "../assets/minidino1.png";
import minidino2 from "../assets/minidino2.png";
import minidino3 from "../assets/minidino3.png";
import minidino4 from "../assets/minidino4.png";
import minidino5 from "../assets/minidino5.png";
import minidino6 from "../assets/minidino6.png";

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
                  <img src={minidino1} className="graybox" />
                </Link>
              </div>
              <div className="box">
                {" "}
                <Link to="/story">
                  <img src={minidino2} className="graybox" />
                </Link>
              </div>
              <div className="box">
                {" "}
                <Link to="/write">
                  <img src={minidino3} className="graybox" />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="box">
                {" "}
                <Link to="/test">
                  <img src={minidino4} className="graybox" />
                </Link>
              </div>
              <div className="box">
                {" "}
                <Link to="/products">
                  <img src={minidino5} className="graybox" />
                </Link>
              </div>
              <div className="box">
                {" "}
                <a href={"http://www.youtheroom.kr/"}>
                  <img src={minidino6} className="graybox" />
                </a>
              </div>
            </div>
          </div>{" "}
        </div>

        <div className="footer">
          <p className="footertext">디노를 눌러 백수 생활 엿보기</p>
          <div className="footermargin"></div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
