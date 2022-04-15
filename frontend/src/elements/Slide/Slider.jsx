import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";
import img1 from "../../assets/GrayRectangle.png";
import img2 from "../../assets/GrayRectangle.png";
import img3 from "../../assets/GrayRectangle.png";
import img4 from "../../assets/GrayRectangle.png";
import "./Slider.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Container = styled.div`
  width: 60%;
  overflow: hidden;
`;
const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  color: pink;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;

const TOTAL_SLIDES = 3;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <div className="Slider_layout">
      {" "}
      <Container>
        {currentSlide}{" "}
        <div className="Slider_container">
          <div>
            <Button onClick={prevSlide}>
              <IoIosArrowBack />
            </Button>
          </div>
          <div>
            <SliderContainer ref={slideRef}>
              <Slide img={img1} />
              <Slide img={img2} />
              <Slide img={img3} />
              <Slide img={img4} />
            </SliderContainer>
          </div>
          <div>
            <Button onClick={nextSlide}>
              <IoIosArrowForward />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Slider;
