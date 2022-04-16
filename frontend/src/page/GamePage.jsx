import React from "react";
import GameForm from "../component/Game/GameForm";
import GameList from "../component/Game/GameList";
import large_graybox from "../assets/LargeGrayRectangle.png";
import gamedino from "../assets/gamedino.png";
import "./GamePage.css";
import { useNavigate } from "react-router-dom";
const Gamepage = () => {
  const navigate = useNavigate();

  const handleGameClick = () => {
    console.log("성공!");
    navigate("/gameresult");
  };
  return (
    <div className="game_layout">
      <div className="game">
        <div className="game_title">
          <div className="game_maintitle">
            <h1 className="game_maintitle">백런스 게임</h1>
          </div>
          <div className="game_subtitle">
            <p>백수라면 참을 수 없는 게임 </p>
            <p>단 한번의 최선의 선책, 차악의 선택 골라보자</p>
          </div>{" "}
          <div className="game_img">
            <img src={gamedino} alt="gamedino" />
          </div>
          <button onClick={handleGameClick} className="Choice_A">
            A 선택안 내용
          </button>
          <button onClick={handleGameClick} className="Choice_B">
            B 선택안 내용
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gamepage;
