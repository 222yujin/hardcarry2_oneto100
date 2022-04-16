import React from "react";
import "./GameList.css";
function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}
function GameListItem({ review, onDelete }) {
  // const handleDeleteClick = () => onDelete(review.id);
  return (
    <div className="game_layout">
      <div className="gamelist">
        <div className="gamelist_item">
          <div>
            <div className="gamelist_namesection">
              <p className="gamelist_name">닉네임 {review.nickname}</p>
            </div>
            {/* <p className="gamelist_date">{formatDate(review.createdAt)}</p> */}
            <div className="gamelist_questionchoice">
              {" "}
              <p>나의 선택은?</p>
            </div>

            <p className="gamelist_content"> {review.content}</p>
          </div>
          {/* <button onClick={handleDeleteClick}>삭제</button> */}
        </div>
      </div>
    </div>
  );
}
function GameList({ reviews, onDelete }) {
  console.log(reviews);
  return (
    <div>
      <div>
        <ul className="gamelist_map">
          {" "}
          {reviews.map((review) => {
            return (
              <div className="gamelist_map">
                <ul className="gamelist_style">
                  <div>
                    <li key={review.id}>
                      <div className="gamelist_style_item">
                        <GameListItem
                          className="gamelist_style_item"
                          review={review}
                          onDelete={onDelete}
                        />
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            );
          })}{" "}
        </ul>
      </div>
    </div>
  );
}

export default GameList;
