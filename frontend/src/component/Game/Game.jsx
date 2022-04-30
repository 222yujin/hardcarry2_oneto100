import React, { useEffect, useState } from "react";
import gamedino from "../../assets/gamemaindino.png";
import styles from "./Game.module.css";
import { useLocation, Link, useNavigate } from "react-router-dom";
var select = [0, 0];
var noselect = 1;
var yesselect = 0;

const Game = (props, balance_type) => {
  const navigate = useNavigate();
  const { state } = useLocation(props);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        "3.35.152.195/api/balance/selectBalance?balance_type=," + balance_type,
        {
          method: "GET",
          headers: {
            "Conent-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setTimeout(() => {
            navigate("/gameresult", { state: { result: data.data } });
          }, 4000).then((data) => {
            console.log(data.data);
          });
        });
      const responseData = await response.json();
      const loadedItems = [];
      for (const key in responseData) {
        loadedItems.push({
          id: key,
        });
      }
      setItems(loadedItems);
      setIsLoading(false);
    };
    fetchItems().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);
  const onClick = () => {
    setTimeout(4000);
    navigate("/gameresult", { state: { select: select } });
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
              onClick(yesselect);
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
              onClick(noselect);
            }}
          >
            {" "}
            세상에서 제일 친한 친구와
            <br />
            함께 최종 면접
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default Game;
