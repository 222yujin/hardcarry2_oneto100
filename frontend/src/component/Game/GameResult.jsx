import React, { useState } from "react";
import GameList from "./GameList";
import mockReviews from "../Review/mockReview.json";

import gamedino from "../../assets/gamedino.png";
import ShareSNS from "../Share/ShareSNS";
import WriteForm from "../Review/WriteForm";
// import WriteList from "../Review/WriteList";
import GameForm from "./GameForm";
import "./GameResult.css";

const GameResult = () => {
  const [reviews, setReviews] = useState(mockReviews);

  const handledelete = (id) => {
    const nextReviews = reviews.filter((review) => review.id !== id);
    setReviews(nextReviews);
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
          <div></div>
        </div>
        <div className="Game_SNS">
          <ShareSNS className="Game_snscomponent" />
        </div>
        <GameForm />
      </div>{" "}
      <div className="game_list">
        <GameList reviews={reviews} onDelete={handledelete} />
      </div>{" "}
    </div>
  );
};

export default GameResult;
