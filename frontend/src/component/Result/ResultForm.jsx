import React from "react";
import "./ResultForm.css";
import matebox from "../../assets/matebox.png";
import sharebox from "../../assets/sharebox.png";
import testmainbox from "../../assets/testmainbox.png";
import { useNavigate } from "react-router-dom";

var select = [0, 0, 0, 0, 0, 0];
const ResultForm = (props) => {
  const navigate = useNavigate();

  const [resultstep, setResultStep] = React.useState(0);
  const [resulttime, setResultTime] = React.useState(false);

  const movieName = [
    " 은밀하게 위대하게",
    "오징어게임",
    "엑시트",
    "거침없이 하이킥",
    "지붕 뚫고 하이킥",
    "별에서 온 그대",
  ];
  const resultName = [
    "‘류환’",
    "‘기훈’",
    "‘용남’",
    "‘준하'",
    "‘광수’",
    "‘철수’",
  ];

  const result_main_imgurl = [" ", "", "", "", "", ""];
  const resultcontent = [
    "‘류환’은 북한 최고 엘리트 요원이지만, 정체를 숨기고 동네 바보이자 백수로 살아가고 있죠. 북한에서 전달되는 명령 없어도, 원대한 사명을 안고 임무를 충실히 수행하고 있는데요. 당신 또한 꿈을 이루기 위해 꾸준히 잠재력을 갈고닦고 있군요. 곧 당신의 잠재력을 세상이 알아봐줄거에요.",
    "‘기훈’은 실직 후 456억 원이 걸린 게임에서 우승하는 캐릭터죠. 말도 안 되는 게임에서 그가 우승할 수 있었던 이유는 사람에 대한 믿음이었는데요. 타인이 의심되는 상황에서도 믿음을 보여 프런트맨조차 “당신이 살아남을 줄 몰랐습니다.”라고 말하기도 하죠. 자신과 사람에 대한 믿음으로 똘똘 뭉친 당신! 이런 믿음과 함께라면 웃을 수 있는 날은 멀지 않았으니, 현재에 대해 너무 걱정하지 마세요.",
    "자신을 보며 창피해하는 조카, 산악 동아리가 취업에 무슨 소용이냐며 구박하는 누나. 영화 엑시트에서는 ‘용남’의 자존감을 끌어내리는 사람들이 등장합니다. 하지만 자신만이 할 수 있고, 해야 하는 행동을 취해 사람들에게 큰 신뢰를 얻게 되죠. 위험에 처한 상황에서 자신의 능력을 발휘하는 진정한 능력자. 사람들에게 능력을 보여줄 날이 얼마 남지 않아 보여요!",
    "둥글둥글 순한 성격으로 모두와 살갑게 지내는 거침없이 하이킥의 ‘준하’. 일찍 명예퇴직을 당해 의사인 아내에게 주눅이 들기는 커녕 아내를 자랑스럽게 여기죠. 시끄러운 집 안에서 최소한의 평화를 추구하는 인물인데요. 소소한 행복을 누릴 줄 알고, 매사를 긍정적으로 바라보는 당신과 닮은 것 같습니다. 이런 태도라면 원하는 걸 금방 손에 쥘 수 있을 거예요.",
    "가수를 꿈꾸지만, 오디션을 보거나 기획사 대표님을 찾아가는 적극적인 모습을 보이지 않는 지붕 뚫고 하이킥 ‘광수’. 하지만 오락가락하는 주식판에서 386% 수익률을 챙긴 존버충으로 3개월치 밀린 방세도 내기도 하죠. 당신도 어쩌면 모르고 있는 재능이 숨겨져 있을 것 같은 느낌이 드네요. 한 번 곰곰이 생각해 보세요!",

    "만화방에서 거의 살다시피하는 백수 ‘철수’. 만화책에 과몰입하는 모습들이 한심해 보일 수도 있지만, 사람들의 고민을 진지하게 듣고 조언을 해주는 따뜻한 캐릭터입니다. 어쩌면 당신도 현실을 도피하지만, 사실은 현실에 대한 문제를 가장 관심이 많은 사람일 수도 있습니다. 서로 문제를 같이 해결해 줄 든든한 조력자가 되어주실래요?.",
  ];
  const goodmate_imgurl = [" ", "", "", "", "", ""];
  const goodmate_text = [
    "남한 최고..는 아니지만 전사 ",
    "인간미 넘치는 사람을 좋아하는",
    "북한 최고의 전사",
    "누구든 믿어줄 준비가 되어 있는",

    "사람들의 고민을 해결해주는",
    "자신을 주목해줄 때 가장 행복한",
  ];
  const goodmate_subtitle = [
    "엑시트 ‘용남’",
    "거침없이 하이킥 ‘준하’",
    "은밀하게 위대하게 ‘류환’",
    "오징어게임 ‘기훈’",
    "별에서 온 그대 ‘철수’",
    "지붕 뚫고 하이킥 ‘광수’",
  ];
  const badmate_imgurl = ["", "", "", "", "", ""];
  const badmate_text = [
    "호락호락하지 않은 (진짜) 바보",
    "꿈에 대한 노력이 조금 더 필요한",
    "소리 치는 걸 좋아하는",
    "파이팅이 부담스러운",
    "호락호락하지 않은 (진짜) 바보",
    "자신만의 계획이 정해져 있는",
  ];
  const badmate_subtitle = [
    "거침없이 하이킥 ‘준하’",
    "지붕 뚫고 하이킥 ‘광수’",
    "오징어게임 ‘기훈’",
    "지붕 뚫고 하이킥 ‘광수’",
    "거침없이 하이킥 ‘준하’",
    "은밀하게 위대하게 ‘류환’",
  ];

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
            />{" "}
            {/* <img
              src={result_main_imgurl[resultstep]}
              alt="testmainbox"
              className="result_testmainbox"
            /> */}
          </div>
          <div className="testresult_maincontent">
            <h2>결과에 대한 내용 큰 주제 제목</h2>
            <h2>{movieName[resultstep]}</h2>
            <p>본문 내용들어가는 곳</p>
            <p>본문 내용들어가는 곳</p>
            <p>본문 내용들어가는 곳</p>
            <p>본문 내용들어가는 곳</p>
            <p>본문 내용들어가는 곳</p>
            <p>{resultName[resultstep]}</p>
          </div>
          <div className="testresult_mate">
            <div className="testreult_goodmate">
              <h2> 최고 궁합</h2>
              <div className="goodmate_scope">
                <img src={matebox} alt="matebox" className="result_matebox" />
                <img
                  src={goodmate_imgurl[resultstep]}
                  alt="matebox"
                  className="result_matebox"
                />
                <div className="goodmate_scopetext">
                  <p>부연설명(~~하는)</p>
                  <p>{goodmate_text[resultstep]}</p>
                  <h3>이름</h3>
                  <h3>{goodmate_subtitle[resultstep]}</h3>
                </div>
              </div>
            </div>
            <div className="testreult_badmate">
              <h2> 최악 궁합</h2>
              <div className="badmate_scope">
                <img src={matebox} alt="matebox" className="result_matebox" />
                <img
                  src={badmate_imgurl[resultstep]}
                  alt="matebox"
                  className="result_matebox"
                />
                <div className="badmate_scopetext">
                  <p>부연설명(~~하는)</p>
                  <p>{badmate_text[resultstep]}</p>
                  <h3>이름</h3>
                  <h3>{badmate_subtitle[resultstep]}</h3>
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
