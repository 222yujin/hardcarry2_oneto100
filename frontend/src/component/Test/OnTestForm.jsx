import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./OnTest.css";
import euiroomlogo from "../../assets/guroeuiroom.png";
import gurologo from "../../assets/smartguro.png";
import ProgressBar from "../Progress/Progress";

var select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const OnTestForm = (props) => {
  const navigate = useNavigate();

  //   const history = useHistory();
  const [step, setStep] = React.useState(0);
  const [time, setTime] = React.useState(false);

  const questionmum = [
    "Q1",
    "Q2",
    "Q3",
    "Q4",
    "Q5",
    "Q6",
    "Q7",
    "Q8",
    "Q9",
    "Q10",
  ];

  const questionlist = [
    "당신은 자기 자신에 대해 얼마나 아시나요?",
    "아침에 일어나면 무엇을 하나요?",
    "같이 취업 준비를 하던 친구가 취업했다고 인스타그램에 자랑 글을 올렸다. 나의 반응은?",
    " 계획대로 공부를 해야 하는 날이지만, 날씨가 너무 좋다. 당신은 어떻게 할 것인가?",
    "2곳의 회사에서 합격 연락을 받았다. 당신은 어떠한 회사에 갈 것인가?",
    "만약 100만원이 주어진다면, 당신이 할 행동은?",
    "당신은 리더형인가요, 팔로우형인가요?",
    "어떤 유형의 동료와 더 일하기 싫은가요?",
    "당신이 더 자신있는 알바는?",
    "코로나 시대를 살아가면서 더 많이 느낀 감정은?",
  ];

  const answerYes = [
    "내가 나를 모르면 누가 알아? 무엇을 좋아하고, 잘하는지 알고 있다. ",
    "천천히! 침대에 누워서 핸드폰을 하거나 음악을 들으며 서서히 잠에서 깬다.",
    "친구가 얼마나 고생했는지 알기에 기쁜 맘에 좋아요를 누르고 축하해준다. ",
    "공부는 내일 해도 되지만, 이렇게 좋은 날씨는 오늘 뿐. 놀러가자!",
    "좋아하고 재밌게 할 수 있는 일이지만, 돈을 적게 주어서 고민이 되는 회사 ",
    "사고 싶었던 것들을 장바구니에 한가득 담고, 흐뭇하게 미소 짓는다. ",
    "알뜰살뜰하게 모든 팀원들을 살펴주는 든든한 리더형",
    "성격이 좋아 같이 있으면 즐겁지만, 업무를 잘 못해서  답답한 동료",
    "한번 해보면 무슨 알바든 끄떡없을 음식점 서빙 알바 ",
    "친구들이랑 코인 노래방도 못 가고 맛있는 것도 자주 먹지 못해 슬프다. ",
  ];
  const answerNo = [
    "무엇을 좋아하고, 잘하는지 모르겠고.. ‘나’라는 사람을 공부해가는 중이다. ",
    "빨리빨리! 알람에 눈을 뜨자마자 씻거나 밥을 먹으며 잠에서 깬다.",
    "축하해주고 싶지만 내 상황을 생각하면 마냥 기쁘진 않아, 못 본 척 피드를 내린다.",
    "그래도 할 것을 끝내고 놀아야 마음이 편하지. 일단 공부 먼저! ",
    "싫어하고 재미없는 일이지만 돈을 많이 주어서 마음이 흔들리는 회사",
    "더 풍족한 미래를 위해 저축을 하고, 나 자신을 칭찬한다. ",
    "주어진 역할을 충실히 해내며 팀의 성장을 돕는 팔로우형 ",
    "성격이 좋지도 않고, 친하지도 않지만 업무 실력은 끝장인 동료",
    "듣기만 해도 마음이 차분해지는 독서실 총무 알바",
    "집에 있을 시간이 늘고, 약속 취소할 수 있는 핑계가 생겨 기쁘다.",
  ];
  React.useEffect(() => {
    setTime(true);
  }, [time]);
  const onClick = (num) => {
    setTime(false);
    if (step < 9) setStep(step + 1);
    else if (step === 9) {
      navigate("/wait", { state: { select: select } });
    }
    select[step] = num;
  };

  const previewOnClick = (num) => {
    setTime(false);
    if (step < 9) {
      setStep(step - 1);
    }
    select[step] = num;
  };

  return (
    <div className="onTest_layout">
      <div className="OnTest">
        <div className="progressbar">
          {/* <ProgressBar width={300} percent={step / 11} /> */}
        </div>
        {time && (
          <div className="test">
            <div className="Questionnum[step]">
              <h1>{questionmum[step]}</h1>
            </div>
            <div className="testQuestionContainer">
              <h3 className="testQuestionlist">{questionlist[step]}</h3>
            </div>

            <div className="testformaanswer">
              <button
                className="testAnswer"
                onClick={() => {
                  onClick(1);
                }}
              >
                {answerYes[step]}
              </button>
            </div>
            <button
              className="testAnswer"
              onClick={() => {
                onClick(0);
              }}
            >
              {answerNo[step]}
            </button>
            <div className="previewbutton">
              <button className="preview" onClick={() => previewOnClick()}>
                ⇠ 이전 질문으로{" "}
              </button>
            </div>
            <div className="logo_scope">
              <a href="http://www.youtheroom.kr/">
                {" "}
                <img
                  src={euiroomlogo}
                  alt="euiroomlogo"
                  className="euiroomlogo"
                />
              </a>
              <a href="https://www.guro.go.kr/www/index.do">
                {" "}
                <img src={gurologo} alt="gurologo" className="gurologo" />
              </a>
            </div>
          </div>
        )}
        <div className="footermargin"></div>
      </div>{" "}
    </div>
  );
};
export default OnTestForm;
