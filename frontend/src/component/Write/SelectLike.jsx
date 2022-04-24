import React, { useState, useEffect } from "react";
import styles from "./DiaryList.module.css";
import fulllove from "../../assets/fulllove.png";
import emptylove from "../../assets/emptylove.png";
import axios from "axios";
import more from "../../assets/more.png";

const HeartButton = ({ onClick }) => {
  // const HeartButton = ({ like, onClick }) => {
  const fillHeart = () => {
    return <img src={fulllove} />;
  };
  const emptyHeart = () => {
    return <img src={emptylove} />;
  };
  let [likenum, setLikenum] = useState(0);

  const [like, setLike] = useState(false);
  const toggleHeart = ({ like }) => {
    setLike((like) => !like);
    fillHeart();
    setLikenum(likenum + 1);
  };

  const untoggleHeart = ({ like }) => {
    setLike((like) => like);
    emptyHeart();
    setLikenum(likenum - 1);
  };
  return (
    <div>
      <img
        src={like ? fulllove : emptylove}
        onClick={like ? toggleHeart : untoggleHeart}
      />
      {likenum}{" "}
      <img
        src={like ? fulllove : emptylove}
        like={like}
        onClick={() => {
          setLikenum(likenum + 1);
          setLike(!like);
        }}
      />{" "}
    </div>
  );
};
const SelectLike = () => {
  const [pages, setPages] = useState([]);

  const fillHeart = () => {
    return <img src={fulllove} />;
  };
  const emptyHeart = () => {
    return <img src={emptylove} />;
  };
  let [likenum, setLikenum] = useState(0);
  const [unlikenum, setUnLikenum] = useState(1);
  const [like, setLike] = useState(false);

  const toggleHeart = async (like, id) => {
    if (setLike((like) => !like)) setLikenum(likenum + 1);
    const dlike = await fetch(
      "http://3.35.152.195/api/diary/diaryLike?diary_id=" + id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  const untoggleHeart = ({ like }) => {
    setLike((like) => like);
    emptyHeart();
    setLikenum(likenum - 1);
  };
  return (
    <div className={styles.heart_layout}>
      {" "}
      {pages.map((diary, index) => (
        <div className={styles.writelist_item} key={diary.diary_id}>
          <div className={styles.heart}>
            <img
              src={like ? fulllove : emptylove}
              like={like}
              onClick={() => {
                toggleHeart(like, diary.diary_id);
              }}
            />
            +{like ? diary.diary_like + 1 : diary.diary_like}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectLike;
