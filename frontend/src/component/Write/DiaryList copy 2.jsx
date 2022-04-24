import React, { useState, useEffect } from "react";
import styles from "./DiaryList.module.css";
import fulllove from "../../assets/fulllove.png";
import emptylove from "../../assets/emptylove.png";
import axios from "axios";
import more from "../../assets/more.png";
import $ from "jquery";
import Like from "./Like";
import { Router, useRoutes } from "react-router-dom";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function DiaryList(data) {
  var express = require("express");
  const router = express.Router();
  const fillHeart = () => {
    return <img src={fulllove} />;
  };
  const emptyHeart = () => {
    return <img src={emptylove} />;
  };
  let [likenum, setLikenum] = useState(0);
  const [unlikenum, setUnLikenum] = useState(1);
  const [like, setLike] = useState(false);

  // if (reqs.method === "POST") {
  // }
  // router.post("/like", async (req, res) => {
  //   console.log(req.body);
  //   const postId = req.body.post_id;
  //   const memberId = req.body.user_id;
  //   try {
  //     const increment = await Post.increment(
  //       { like: 1 },
  //       { where: { id: req.body.post_id } }
  //     );
  //   } catch (err) {
  //     console.log(err);
  //     res.json({ message: false });
  //   }
  // });

  // router.post("/dislike", async (req, res) => {
  //   console.log(req.body);

  //   try {
  //     const increment = await Post.decrement(
  //       { like: 1 },
  //       { where: { id: req.body.post_id } }
  //     );
  //   } catch (err) {
  //     console.log(err);
  //     res.json({ message: false });
  //   }
  // });

  const [pageCount, setPageCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  const [pages, setPages] = useState([]);

  const getData = async (pageCnt) => {
    const res = await fetch(
      "http://3.35.152.195/api/diary/getLatestDiary?page=" +
        pageCnt +
        "&size=4",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setPages([...pages, ...data.diaryList]);
        //setPages(pages=>[...pages,data.diaryList]);
        setMaxCount(data.totalPages);
      });
  };

  useEffect(() => {
    getData(0);
  }, []);

  function moreDiary() {
    if (pageCount == maxCount - 1) {
      alert("더 이상 훔쳐볼 일기가 없어요");
    } else {
      setPageCount(pageCount + 1);
      getData(pageCount + 1);
    }
  }

  return (
    <div>
      <div className={styles.diarylayout}>
        {pages.map((diary, index) => (
          <div className={styles.writelist_item} key={diary.diary_id}>
            <div>
              {" "}
              <div className={styles.writenickname}>
                <span className={styles.writenickname}>
                  닉네임 : {diary.diary_writter}
                </span>
              </div>{" "}
              <br />
              <span className={styles.diarycontent}>{diary.diary_content}</span>
              <div className={styles.heart_layout}>
                <div className={styles.heart}>
                  {" "}
                  <Like />
                  {/* <img
                    id={diary.diary_id}
                    src={like ? fulllove : emptylove}
                    like={like}
                    onClick={() => {
                      toggleHeart(like, diary.diary_id);
                    }}
                  />
                  +{like ? diary.diary_like + 1 : diary.diary_like} */}
                </div>
              </div>
            </div>{" "}
          </div>
        ))}
        <div className={styles.morelayout}>
          {" "}
          <button className={styles.diary_more} onClick={moreDiary}>
            <p>일기 내용 더보기</p>
            <img src={more} className={styles.moreimg} />
          </button>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default DiaryList;
