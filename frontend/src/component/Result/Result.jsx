import React, { useEffect, useState } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

import styles from "./Result.module.css";
import mate1 from "../../assets/mate1.png";
import mate2 from "../../assets/mate2.png";
import mate3 from "../../assets/mate3.png";
import mate4 from "../../assets/mate4.png";
import mate5 from "../../assets/mate5.png";
import mate6 from "../../assets/mate6.png";
import Slider1 from "../../elements/Slide/Slider1";
import shareevent from "../../assets/shareevent.png";

import clipboard from "../../assets/clipboard.png";
import kakao from "../../assets/kakaoshare.png";
import link from "../../assets/linkshare.png";
import { useLocation } from "react-router-dom";

var select = [0, 0, 0, 0, 0, 0];
const Result = (props) => {
  const [resultstep, setResultStep] = React.useState(0);
  const [resulttime, setResultTime] = React.useState(false);
  const { state } = useLocation();
  const result = state.result.testResult;
  const like = state.result.resultLike;
  const dislike = state.result.resultDislike;
  const url = state.result.type_space_link;
  const goodmate = [mate1, mate2, mate4, mate5, mate6, mate3];
  const badmate = [mate2, mate3, mate5, mate3, mate2, mate4];

  const kakaourl = state.result.type_id;
  useEffect(() => {
    initKakao(); //
  }, []);

  //자바스크립트키로 카카오 init
  const initKakao = (state) => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init("13ce2c4185e1fe0707553109dcf25bb2");
        // kakao.init("process.env.REACT_APP_KAKAO_TOKEN");
      }
    }
  };

  //버튼을 누르면 실행되는 함수
  const shareKakao = () => {
    //이부분이 매우 헷갈림 여러 사이트를 참고했는데 이 sendDefault부분을 잘 봐야한다.
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "일당백프로젝트",
        description:
          "#일당백프로젝트 #청년이룸 #구로청년이룸  #디노 #백수 #일기장 #게임 #스토리 ",
        imageUrl: "https://ifh.cc/g/KXnbbS.jpg",
        link: {
          mobileWebUrl: kakaourl,
          webUrl: kakaourl,
        },
      },

      buttons: [
        {
          title: "디노와함께 백수탈출",
          link: {
            mobileWebUrl: kakaourl,
            webUrl: kakaourl,
          },
        },
      ],
    });
  };

  const doCopy = (text) => {
    // 흐름 1.
    if (!document.queryCommandSupported("copy")) {
      return alert("복사하기가 지원되지 않는 브라우저입니다.");
    }
    // 흐름 2.
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.top = 0;
    textarea.style.left = 0;
    textarea.style.position = "fixed";
    // 흐름 3.
    document.body.appendChild(textarea);
    // focus() -> 사파리 브라우저 서포팅
    textarea.focus();
    // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
    textarea.select();
    // 흐름 4.
    document.execCommand("copy");
    // 흐름 5.
    document.body.removeChild(textarea);
    alert("클립보드에 복사되었습니다.");
  };

  const onDownloadBtn = () => {
    domtoimage.toBlob(document.querySelector(".test")).then((blob) => {
      saveAs(blob, "result.png");
    });
  };

  console.log(result);
  return (
    <div className={styles.testresult_layout}>
      <div className="test">
        <div className={styles.testreuslt_background}>
          <div className={styles.testresultheader}>
            <div className={styles.testresult_title}>
              {" "}
              <span> {result.type_from}</span>{" "}
            </div>
            <div className={styles.testresult_subtitle}>
              <span>{result.type_name}</span>
            </div>

            <div className={styles.testresult_scope}>
              <div className={styles.resultdino}>
                <img
                  src={result.type_img}
                  alt="testmainbox"
                  className={styles.result_testmainbox}
                />
              </div>
              <div className={styles.testresult_maincontent}>
                {result.type_desc}
              </div>
              <div className={styles.testresult_mate}>
                <div className={styles.testreult_goodmate}>
                  <h2 className={styles.goodmateline}> 최고 궁합</h2>
                  <div className={styles.goodmate_scope}>
                    <img
                      src={goodmate[resultstep]}
                      alt="matebox"
                      className="result_matebox"
                    />
                    <div className={styles.goodmate_scopetext}>
                      <p className={styles.goodmatetext}>
                        {result.type_like_sub}{" "}
                      </p>
                      <p className={styles.goodmatesubtitle}>
                        {like.type_name}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.testreult_badmate}>
                  <h2 className={styles.badmateline}> 최악 궁합</h2>
                  <div className={styles.badmate_scope}>
                    <img
                      src={badmate[resultstep]}
                      alt="matebox"
                      className="result_matebox"
                    />
                    <div className={styles.badmate_scopetext}>
                      <p className={styles.badmatetext}>
                        {result.type_dislike_sub}{" "}
                      </p>{" "}
                      <p className={styles.badmatesubtitle}>
                        {dislike.type_name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.testreult_share}>
                <div className={styles.testreult_share_scope}>
                  <h3 className={styles.testresult_share_maintitle}>
                    친구들에게 <br /> 결과 공유하기
                  </h3>
                  <div className={styles.snsbutton}>
                    <div className="sharesnscomponent">
                      <div className="kakaoandclipboard">
                        <div className="kakao">
                          <img
                            id="test_kakao"
                            className="shareIcon"
                            src={kakao}
                            alt="kakaotalk"
                            width="65px"
                            height="65px"
                            onClick={shareKakao}
                          />
                        </div>
                        <div className="clipboard">
                          <img
                            id="test_link"
                            src={link}
                            onClick={() =>
                              doCopy("http://www.oneto100.shop/test")
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <img
                      src={clipboard}
                      className={styles.downBtn}
                      onClick={onDownloadBtn}
                    />
                  </div>
                  <img
                    src={shareevent}
                    alt="sharebox"
                    className={styles.result_sharebox}
                  />{" "}
                  <div className={styles.testreult_share_title}>
                    <p>#청년이룸 #일당백프로젝트</p>
                    <p> 해시태그로 인스타에 공유하신 분들께 한하여</p>
                    <p>추첨을 통해서 선물을 드립니다.</p>
                  </div>
                </div>
                <div className={styles.yourprogram}>
                  <h3 className={styles.programtitle}>
                    나에게 딱 맞는 청년이룸 속 공간은?
                  </h3>
                  <div className={styles.programline}>
                    <div className={styles.resultinslider}></div>
                    <Slider1 />
                  </div>
                  <p className={styles.programsubtitle}></p>
                </div>{" "}
              </div>
              <div className={styles.submitline}>
                <a href={url} className={styles.activea} target="_blank">
                  <button alt="submitbutton" className={styles.ontestsubmit}>
                    {result.type_button}
                  </button>
                </a>{" "}
              </div>{" "}
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Result;
