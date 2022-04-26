import React, { useState, useEffect } from "react";
import styles from "./DiaryList.module.css";
import fulllove from "../../assets/fulllove.png";
import emptylove from "../../assets/emptylove.png";
import axios from "axios";
import more from "../../assets/more.png";
import SelectLike from "./SelectLike";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function DiaryList(data) {
  const [pageCount, setPageCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  const [pages, setPages] = useState([]);
  const [likes, setLikes] = useState(0);
  const onIncrease = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };
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
  console.log(data.diaryList);
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
            </div>{" "}
            {/* <SelectLike id={diary.diary_id} /> */}
          </div>
        ))}{" "}
        <div className={styles.morelayout}>
          {/* {data.diaryList.map((diary_id) => ({ diary_id }))} */}
          <button className={styles.diary_more} onClick={moreDiary}>
            <p>일기 내용 더보기</p>
            {/* <img src={more} className={styles.moreimg} /> */}
          </button>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default DiaryList;
