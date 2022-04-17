import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";
import img1 from "../../assets/minidino1.png";
import img2 from "../../assets/minidino2.png";
import img3 from "../../assets/minidino3.png";
import img4 from "../../assets/minidino4.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Slider.css";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
        <Button onClick={prevSlide}>
          <IoIosArrowBack />
        </Button>
        <SliderContainer ref={slideRef}>
          <Slide img={img1} />
          <Slide img={img2} />
          <Slide img={img3} />
          <Slide img={img4} />
        </SliderContainer>
        <Button onClick={nextSlide}>
          <IoIosArrowForward />
        </Button>
      </Container>
    </div>
  );
};

export default Slider;
