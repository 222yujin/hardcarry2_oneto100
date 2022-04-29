import React from "react";
import gamedino from "../../assets/gamemaindino.png";
import styles from "./Game.module.css";
import { Link, useNavigate } from "react-router-dom";
var select = [0, 0];
var noselect = 1;
var yesselect = 0;

const Game = () => {
  const navigate = useNavigate();
  const [step, setStep] = React.useState(0);

  const OnClickGame = (num) => {
    navigate("/gameresult", { state: { select: select } });

    select[step] = num;
  };

  console.log(step);

  return (
    <div className={styles.game_layout}>
      <div className={styles.game_title}>백런스게임</div>
      <div className={styles.game_subtitle}>
        백수라면 참을 수 없는 게임
        <br />단 한번의 최선의 선택, 차악의 선택 골라보자
      </div>
      <div>
        <img className={styles.game_image} src={gamedino} alt="디노캐릭터" />{" "}
      </div>
      <div className={styles.gamebutton_layout}>
        <div className={styles.game_butttonA}>
          <button
            className={styles.game_buttonitem}
            onClick={() => {
              OnClickGame(yesselect);
            }}
            id="game_buttonA"
          >
            나를 죽도록 싫어하는 원수와 <br />
            면접 스터디
          </button>
        </div>
        VS
        <div className={styles.game_butttonB} id="question_down">
          <button
            className={styles.game_buttonitem}
            onClick={() => {
              OnClickGame(noselect);
            }}
          >
            {" "}
            세상에서 제일 친한 친구와
            <br />
            함께 최종 면접
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
