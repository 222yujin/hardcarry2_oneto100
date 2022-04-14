import React from "react";
import "./ResultForm.css";
import matebox from "../../assets/matebox.png";
import sharebox from "../../assets/sharebox.png";
import testmainbox from "../../assets/testmainbox.png";

const ResultForm = (props) => {
  return (
    <div className="testresult_layout">
      <div className="testreuslt_background">
        <div className="testresult_title">
          <h1>결과 나온 이름 보이는 곳</h1>
          <div className="testresult_subtitle">
            <h3>소제목</h3>
          </div>
        </div>
        <div className="testresult_scope">
          <div className="testresult_graybox">
            {" "}
            <img
              src={testmainbox}
              alt="testmainbox"
              className="result_testmainbox"
            />
          </div>
          <div className="testresult_maincontent">
            <h2>결과에 대한 내용 큰 주제 제목</h2>
            <p>본문 내용들어가는 곳</p>
            <p>본문 내용들어가는 곳</p>
            <p>본문 내용들어가는 곳</p>
            <p>본문 내용들어가는 곳</p>
            <p>본문 내용들어가는 곳</p>
            <p>본문 내용들어가는 곳</p>
          </div>
          <div className="testresult_mate">
            <div className="testreult_goodmate">
              <h2> 최고 궁합</h2>
              <div className="goodmate_scope">
                <img src={matebox} alt="matebox" className="result_matebox" />
                <div className="goodmate_scopetext">
                  <p>부연설명(~~하는)</p>
                  <h3>이름</h3>
                </div>
              </div>
            </div>
            <div className="testreult_badmate">
              <h2> 최악 궁합</h2>
              <div className="badmate_scope">
                <img src={matebox} alt="matebox" className="result_matebox" />
                <div className="badmate_scopetext">
                  <p>부연설명(~~하는)</p>
                  <h3>이름</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="testreult_share">
            <div className="testreult_share_scope">
              <h3 className="testresult_share_maintitle">공유하기 EVENT</h3>
              <img
                src={sharebox}
                alt="sharebox"
                className="result_sharebox"
              />{" "}
              <div className="testreult_share_title">
                <p>#청년이룸 #일당백프로젝트</p>
                <p> 해시태그로 인스타에 공유하신 분들께 한하여</p>
                <p>추첨을 통해서 선물을 드립니다.</p>
              </div>
            </div>
          </div>{" "}
          <div className="footermargin"></div>
        </div>
      </div>
    </div>
  );
};

export default ResultForm;
