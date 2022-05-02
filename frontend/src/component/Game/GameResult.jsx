import React, { useState, useEffect, useRef } from "react";
import styles from "./GameResult.module.css";
import SharegameSNS from "../Share/SharegameSNS";
import clipboard from "../../assets/clipboard.png";
import { saveAs } from "file-saver";
import domtoimage from "dom-to-image";
import GameCommentList from "./GameList";

import { useNavigate, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const INITIAL_VALIES = {
  nickname: null,
  content: null,
};

const GameResult = (back_balance, props) => {
  const [counter, setCounter] = React.useState(props.balance_type);
  const { state } = useLocation();

  const [values, setValues] = useState(INITIAL_VALIES);

  const cntA = state.select === 0;
  const cntB = state.select === 1;
  const total = cntA + cntB;
  const result = state.result;

  const TOTAL = state.total;
  console.log(state.select);

  console.log(state.balance_type);
  console.log(result);
  // console.log(total);
  // console.log(rateA);
  // console.log(rateB);
  // console.log(state.balance_type);

  const ChoiceContainer = styled.div`
    width: 100%;
    display: flex;
    width: 314px;
    height: 32px;
    border: 1px solid #868e96;
    box-sizing: border-box;
    border-radius: 24px;
    margin-bottom: 8px;
  `;

  const ChoiceA = styled.div`
    all: unset;
    background: #868e96;
    border-radius: 24px;
    width: 75%;
    height: 100%;
    width: {rateA}%
    margin-bottom: 8px;
    box-sizing: border-box;
    :hover {
      transition: all 0.3s ease-in-out;
      background: linear-gradient(135deg, #ff5aa4 0%, #ffc958 100%);
      border-radius: 24px;
    }
 
  `;

  const ChoiceB = styled.div`
    all: unset;
    background: #868e96;
    border-radius: 24px;
    width: 80%;
    width: {rateB}%;
    height: 100%;
    margin-bottom: 8px;
    box-sizing: border-box;
    :hover {
      transition: all 0.3s ease-in-out;
      background: linear-gradient(135deg, #ff5aa4 0%, #ffc958 100%);
      border-radius: 24px;
    }
 
  `;

  const fetchItems = async () => {
    const response = await fetch("3.35.152.195/api/balance/createReply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        game_writter: values.nickname,
        game_content: values.content,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  };

  const handleChange = (nickname, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [nickname]: value,
    }));
  };
  async function handleInputChange(e) {
    const { nickname, value } = e.target;
    handleChange(nickname, value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", values.content);
    formData.append("nickname", values.nickname);
  };
  const onDownloadBtn = () => {
    domtoimage.toBlob(document.querySelector(".card")).then((blob) => {
      saveAs(blob, "diary.png");
    });
  };

  return (
    <div className={styles.gameresult_layout}>
      <div className="card">
        {/* {result.total} */}
        <h1>
          {((cntA === 0 + cntB) == 1) === total ? null : (
            <div>total : {cntA + cntB}</div>
          )}
        </h1>{" "}
        <h1> {counter}</h1>
        {/* <h1> {cntA === 0 ? <div>결과 a:{cntA}</div> : null}</h1>
        <h1> {cntB == 1 ? <div>결과b: {cntB}</div> : null}</h1> */}
        <h1>
          {" "}
          {state.select === 0 ? <div>결과a2: {state.select}</div> : null}
        </h1>
        <h1> {state.select == 1 ? <div>결과b2: {state.select}</div> : null}</h1>{" "}
        {props.counter}
        <div className={styles.game_title}>백런스게임</div>
        <div className={styles.game_subtitle}>
          백수라면 참을 수 없는 게임
          <br />단 한번의 최선의 선택, 차악의 선택 골라보자
        </div>
        <div className={styles.gameresult_line}>
          <div className={styles.bar_layout}>
            <ChoiceContainer>
              <ChoiceA>
                <span className={styles.barA}></span>{" "}
              </ChoiceA>
              A
            </ChoiceContainer>
            A
            <ChoiceContainer>
              <ChoiceB>
                <span className={styles.barB}>
                  {/* <span>{rateB}</span> */}
                </span>
              </ChoiceB>
              B
            </ChoiceContainer>{" "}
            B
          </div>
        </div>{" "}
        <div className={styles.shareSNS}>
          <span className={styles.SNS_header}>친구에게 공유하기</span>
          <div className={styles.snsbutton}>
            <SharegameSNS />{" "}
            {/* <button className="downBtn" onClick={onDownloadBtn}> </button> */}
            <img
              src={clipboard}
              className={styles.game_save}
              onClick={onDownloadBtn}
            />
          </div>
        </div>
      </div>
      <div className={styles.gameresult_gamecommentlayout}>
        <form className="Form" onSubmit={handleSubmit}>
          <div className={styles.submitgamescope}>
            <div className={styles.gamecommentnickname}>
              닉네임
              <input
                className={styles.gamecomment_nickname}
                name="nickname"
                value={values.nickname}
                onChange={handleInputChange}
                placeholder="닉네임을 입력해 주세요. (최대 8글자)"
              />{" "}
            </div>
            <div className={styles.gamecomment_text}>
              <textarea
                className={styles.gamecomment_textarea}
                name="content"
                value={values.content}
                onChange={handleInputChange}
                placeholder="&#13;&#10; 덧글 쓰기"
              />
            </div>
            <button
              className={styles.gamecommentsubmitbutton}
              onClick={handleSubmit}
            >
              입력
            </button>
          </div>{" "}
        </form>
      </div>
      <GameCommentList />
    </div>
  );
};

export default GameResult;
