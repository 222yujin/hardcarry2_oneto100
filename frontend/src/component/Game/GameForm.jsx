import React, { useState } from "react";
import "./GameForm.css";
import createReviews from "../Review/api";
import button from "../../assets/button3.png";
import Modalgame from "../../elements/Modal/Modalgame";

const INITIAL_VALIES = {
  nickname: "",
  rating: 0,
  content: "",
  imgUrl: null,
  choice: true,
  inform: true,
};
const GameForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const [values, setValues] = useState(INITIAL_VALIES);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  async function handleInputChange(e) {
    const { name, value } = e.target;
    handleChange(name, value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", values.content);
    formData.append("imgUrl", values.imgUrl);
    formData.append("nickname", values.nickname);
    formData.append("rating", values.rating);
    formData.append("choice", values.choice);
    formData.append("inform", values.inform);
    await createReviews(formData);
    setValues(INITIAL_VALIES);
  };

  return (
    <div className="write_layout">
      <div className="writeform">
        <form className="Form" onSubmit={handleSubmit}>
          <div className="nickname_scope">
            닉네임{" "}
            <input
              className="write_nameandphone"
              name="nickname"
              value={values.nickname}
              onChange={handleInputChange}
              placeholder="닉네임을 입력해 주세요. (최대 8글자)"
            />
          </div>
          <textarea
            className="write_textarea"
            name="content"
            value={values.content}
            onChange={handleInputChange}
            placeholder="&#13;&#10;댓글쓰기 &#13;&#10;신중하게 작성 부탁드립니다."
          />
          <div className="choise_scope"></div>

          <button
            className="btton_Modalgame"
            alt="submit_button"
            onClick={handleSubmit}
            type="submit"
            disabled={isSubmitting}
          >
            입 력
          </button>

          {submittingError?.message && <div>{submittingError.message}</div>}
        </form>
      </div>
    </div>
  );
};

export default GameForm;
