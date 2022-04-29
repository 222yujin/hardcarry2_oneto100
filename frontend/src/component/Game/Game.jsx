import React, { useEffect, useState } from "react";
import gamedino from "../../assets/gamemaindino.png";
import styles from "./Game.module.css";
import { Link, useNavigate } from "react-router-dom";
var select = [0, 0];
var noselect = 1;
var yesselect = 0;

const INITIAL_VALIES = {
  buttona: 0,
  buttonb: 0,
  total: 0,
};

const Game = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [values, setValues] = useState(INITIAL_VALIES);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [Abuttonnum, setAbuttonnum] = useState(0);
  const [Bbuttonnum, setBbuttonnum] = useState(0);
  const [total, setTotal] = useState([]);

  const toggleAbutton = async (a, type) => {
    const changeAbutton = total.find((v) => v.balance_type === type);
    changeAbutton.types = !changeAbutton.types;

    await fetch(
      "http://3.35.152.195/api/balance_type/balanceResult?balance_id=," + type,
      {
        method: "GET",
        headers: {
          "Conent-Type": "application/json",
        },
      }
    ).then((response) => response.json());
  };

  const OnClickGame = (response) => {
    navigate("/gameresult", {
      state: { state: { result: response.response } },
    });
  };

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
