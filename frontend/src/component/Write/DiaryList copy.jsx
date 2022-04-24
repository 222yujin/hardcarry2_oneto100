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
  const toggleHeart = ({ like, id }) => {
    setLike((like) => !like);
    fillHeart();
  };

  const untoggleHeart = ({ like, id }) => {
    setLike((like) => like);
    emptyHeart();
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

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function DiaryList(data) {
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
                  <img
                    id={diary.diary_id}
                    src={like ? fulllove : emptylove}
                    like={like}
                    onClick={() => {
                      toggleHeart(like, diary.diary_id);
                    }}
                  />
                  +{like ? diary.diary_like + 1 : diary.diary_like}
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
